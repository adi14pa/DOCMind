import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Send, FileText, Layers, Loader2, ChevronDown, ChevronUp, Bot, User } from "lucide-react";
import { useGetDocument, useGetConversationHistory } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

interface LocalMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: string[];
  isStreaming?: boolean;
}

export default function Chat() {
  const params = useParams();
  const documentId = parseInt(params.id || "0", 10);
  
  const { data: document, isLoading: isLoadingDoc } = useGetDocument(documentId);
  const { data: history, isLoading: isLoadingHistory } = useGetConversationHistory(documentId);
  
  const [messages, setMessages] = useState<LocalMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Sync server history to local state on load
  useEffect(() => {
    if (history) {
      setMessages(
        history.map((msg) => ({
          id: msg.id.toString(),
          role: msg.role,
          content: msg.content,
          sources: msg.sources ? JSON.parse(msg.sources) : undefined,
        }))
      );
    }
  }, [history]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isSubmitting) return;

    const userMessage = input.trim();
    setInput("");
    setIsSubmitting(true);

    const tempUserId = Date.now().toString();
    const tempAssistantId = (Date.now() + 1).toString();

    setMessages((prev) => [
      ...prev,
      { id: tempUserId, role: "user", content: userMessage },
      { id: tempAssistantId, role: "assistant", content: "", isStreaming: true },
    ]);

    try {
      const baseUrl = import.meta.env.BASE_URL;
      const response = await fetch(`${baseUrl}api/rag/documents/${documentId}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Failed to connect to streaming endpoint");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() ?? "";
        
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          
          try {
            const data = JSON.parse(line.slice(6));
            
            setMessages((prev) => 
              prev.map((msg) => {
                if (msg.id === tempAssistantId) {
                  const updatedContent = data.content ? msg.content + data.content : msg.content;
                  const updatedSources = data.sources ? data.sources : msg.sources;
                  
                  return {
                    ...msg,
                    content: updatedContent,
                    sources: updatedSources,
                    isStreaming: !data.done,
                  };
                }
                return msg;
              })
            );
          } catch (e) {
            console.error("Error parsing SSE JSON:", e);
          }
        }
      }
    } catch (error) {
      console.error("Query error:", error);
      setMessages((prev) => 
        prev.map((msg) => 
          msg.id === tempAssistantId 
            ? { ...msg, content: "Sorry, I encountered an error while analyzing the document.", isStreaming: false } 
            : msg
        )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden flex-col md:flex-row">
      {/* Left Sidebar */}
      <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-border bg-card flex flex-col shrink-0">
        <div className="p-4 border-b border-border">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 -ml-2 text-muted-foreground mb-4" data-testid="link-back">
              <ArrowLeft className="w-4 h-4" /> Back to Library
            </Button>
          </Link>
          
          {isLoadingDoc ? (
            <div className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ) : document ? (
            <div>
              <h2 className="font-bold text-lg leading-tight mb-2 break-words" title={document.originalName}>
                {document.originalName}
              </h2>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" className="gap-1 font-normal bg-background">
                  <FileText className="w-3 h-3" />
                  {document.pageCount ? `${document.pageCount} pages` : 'Unknown length'}
                </Badge>
                <Badge variant="outline" className="gap-1 font-normal bg-background">
                  <Layers className="w-3 h-3" />
                  {document.chunkCount} chunks
                </Badge>
              </div>
            </div>
          ) : (
            <div className="text-destructive">Document not found</div>
          )}
        </div>
        
        <div className="p-4 flex-1 flex flex-col justify-end">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2 text-primary flex items-center gap-2">
              <Bot className="w-4 h-4" /> DocMind AI
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ask questions about your document. I will analyze the content and provide answers based specifically on the text.
            </p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-background relative">
        <ScrollArea className="flex-1 p-4 md:p-8">
          <div className="max-w-3xl mx-auto space-y-8 pb-20">
            {isLoadingHistory ? (
              <div className="space-y-6">
                <div className="flex justify-end"><Skeleton className="h-16 w-2/3 rounded-2xl rounded-tr-sm" /></div>
                <div className="flex justify-start"><Skeleton className="h-32 w-3/4 rounded-2xl rounded-tl-sm" /></div>
              </div>
            ) : messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[50vh] text-center opacity-50">
                <Bot className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">How can I help?</h3>
                <p className="text-sm max-w-md">
                  Send a message to start analyzing the document. You can ask for summaries, specific details, or explanations of complex topics.
                </p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div 
                  key={msg.id || index} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] md:max-w-[75%] rounded-2xl p-4 shadow-sm
                      ${msg.role === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                        : 'bg-card border border-border text-card-foreground rounded-tl-sm'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2 mb-2 opacity-70">
                      {msg.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                      <span className="text-xs uppercase tracking-wider font-semibold">
                        {msg.role === 'user' ? 'You' : 'DocMind'}
                      </span>
                    </div>
                    
                    <div className="prose prose-sm dark:prose-invert max-w-none break-words whitespace-pre-wrap">
                      {msg.content || (msg.isStreaming ? <span className="animate-pulse">...</span> : "")}
                    </div>

                    {msg.role === 'assistant' && msg.sources && msg.sources.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <Sources sources={msg.sources} />
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 bg-background/80 backdrop-blur border-t border-border">
          <div className="max-w-3xl mx-auto relative flex items-end bg-card border border-border rounded-xl shadow-sm focus-within:ring-1 focus-within:ring-primary/50 focus-within:border-primary/50 transition-all">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question about this document... (Shift+Enter for newline)"
              className="min-h-[60px] max-h-[200px] border-0 focus-visible:ring-0 resize-none bg-transparent py-4 pl-4 pr-16 text-base"
              disabled={isSubmitting || document?.status !== "ready"}
              data-testid="input-chat"
            />
            <div className="absolute right-2 bottom-3">
              <Button 
                onClick={handleSubmit} 
                disabled={!input.trim() || isSubmitting || document?.status !== "ready"}
                size="icon"
                className="h-10 w-10 rounded-lg shrink-0"
                data-testid="button-send"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </Button>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-2 text-center">
            {document?.status === "processing" ? (
              <p className="text-xs text-amber-500 font-medium flex items-center justify-center gap-1">
                <Loader2 className="w-3 h-3 animate-spin" /> Document is processing. Chat will be available soon.
              </p>
            ) : document?.status === "error" ? (
              <p className="text-xs text-destructive font-medium">Document failed to process.</p>
            ) : (
              <p className="text-xs text-muted-foreground opacity-70">
                DocMind answers based strictly on the uploaded document's content.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Sources({ sources }: { sources: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!sources || sources.length === 0) return null;

  return (
    <div className="text-xs">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium select-none"
      >
        {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        {sources.length} {sources.length === 1 ? 'Source' : 'Sources'} used
      </button>
      
      {isOpen && (
        <div className="mt-3 space-y-2">
          {sources.map((source, idx) => (
            <div key={idx} className="bg-amber-500/10 text-amber-600/90 dark:text-amber-200/80 p-3 rounded-md font-mono text-[11px] leading-relaxed border border-amber-500/20 break-words">
              {source}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
