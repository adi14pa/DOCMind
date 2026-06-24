import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useQueryClient } from "@tanstack/react-query";
import { UploadCloud, FileText, Trash2, Clock, Layers, Loader2, Plus, TerminalSquare, Inbox } from "lucide-react";
import { useListDocuments, useDeleteDocument, getListDocumentsQueryKey } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ status: 'idle' | 'uploading' | 'processing' | 'ready'; progress: number }>({ status: 'idle', progress: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  
 const { data, isLoading } = useListDocuments({
   query: {
     queryKey: getListDocumentsQueryKey(),
     refetchInterval: (query) => {
       const docs = query.state.data;

       if (
         Array.isArray(docs) &&
         docs.some((doc) => doc.status === "processing")
       ) {
         return 3000;
       }

       return false;
     },
   },
 });

 const documents = Array.isArray(data) ? data : [];

  const deleteMutation = useDeleteDocument({
    mutation: {
      onSuccess: () => {
        toast({ title: "Document deleted successfully" });
        queryClient.invalidateQueries({ queryKey: getListDocumentsQueryKey() });
      },
      onError: (error) => {
        toast({ title: "Failed to delete document", description: error.message, variant: "destructive" });
      }
    }
  });

  const handleUpload = async (file: File) => {
    if (file.type !== "application/pdf") {
      toast({ title: "Invalid file type", description: "Please upload a PDF document.", variant: "destructive" });
      return;
    }

    setUploadProgress({ status: 'uploading', progress: 10 });
    
    try {
      const formData = new FormData();
      formData.append("file", file);
      
      const baseUrl = import.meta.env.BASE_URL;
      const response = await fetch(`${baseUrl}api/rag/documents`, {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      
      setUploadProgress({ status: 'processing', progress: 100 });
      toast({ title: "Document uploaded", description: "Processing your document..." });
      queryClient.invalidateQueries({ queryKey: getListDocumentsQueryKey() });
      
      setTimeout(() => {
        setUploadProgress({ status: 'idle', progress: 0 });
      }, 2000);
    } catch (error: any) {
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
      setUploadProgress({ status: 'idle', progress: 0 });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDelete = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    deleteMutation.mutate({ id });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ready':
        return <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20">Ready</Badge>;
      case 'processing':
        return <Badge className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20"><Loader2 className="w-3 h-3 mr-1 animate-spin" /> Processing</Badge>;
      case 'error':
        return <Badge variant="destructive">Error</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <TerminalSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">DocMind</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground hidden sm:block">
              AI-powered research & analysis
            </p>

            <Button
              variant="outline"
              onClick={async () => {
                await fetch("http://localhost:8000/api/auth/logout", {
                  method: "POST",
                  credentials: "include",
                });

                window.location.href = "/login";
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-8 max-w-6xl">
        <section className="mb-12">
          <div
            className={`relative rounded-xl border-2 border-dashed transition-all duration-200 ease-in-out flex flex-col items-center justify-center p-12 text-center
              ${isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/30"}
              ${uploadProgress.status !== "idle" ? "pointer-events-none opacity-80" : "cursor-pointer"}
            `}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() =>
              uploadProgress.status === "idle" && fileInputRef.current?.click()
            }
            data-testid="upload-dropzone"
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="application/pdf"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleUpload(e.target.files[0]);
                }
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
            />

            {uploadProgress.status === "idle" ? (
              <>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <UploadCloud className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Upload a new document
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Drag and drop a PDF file here, or click to browse. DocMind
                  will analyze the contents to let you search and ask questions.
                </p>
                <Button variant="outline" data-testid="button-browse-files">
                  Browse Files
                </Button>
              </>
            ) : (
              <div className="w-full max-w-md flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {uploadProgress.status === "uploading"
                    ? "Uploading document..."
                    : "Processing document..."}
                </h3>
                <Progress
                  value={uploadProgress.progress}
                  className="h-2 w-full"
                />
                <p className="text-sm text-muted-foreground mt-4">
                  {uploadProgress.status === "processing"
                    ? "Extracting text and generating embeddings"
                    : "Transferring file to server"}
                </p>
              </div>
            )}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Document Library</h2>
            <Badge
              variant="secondary"
              className="px-3 py-1 rounded-full text-sm font-normal"
            >
              {documents?.length || 0} files
            </Badge>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-border/50">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : !documents || documents.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center border rounded-xl bg-card border-border/50">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Inbox className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No documents yet</h3>
              <p className="text-muted-foreground max-w-sm">
                Upload your first PDF document to start chatting with your data.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <Link key={doc.id} href={`/chat/${doc.id}`}>
                  <Card
                    className="h-full border-border/50 hover:border-primary/50 transition-colors cursor-pointer group flex flex-col"
                    data-testid={`card-document-${doc.id}`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2 mb-2 w-full pr-8">
                          <FileText className="w-5 h-5 text-primary shrink-0" />
                          <CardTitle
                            className="text-base truncate"
                            title={doc.originalName}
                          >
                            {doc.originalName}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="flex items-center gap-2">
                        {getStatusBadge(doc.status)}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pb-4 flex-1">
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 shrink-0" />
                          <span>
                            {doc.pageCount
                              ? `${doc.pageCount} pages`
                              : "Unknown pages"}{" "}
                            • {doc.chunkCount} chunks
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 shrink-0" />
                          <span>
                            {new Date(doc.createdAt).toLocaleDateString()} at{" "}
                            {new Date(doc.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            onClick={(e) => e.stopPropagation()}
                            data-testid={`button-delete-doc-${doc.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent
                          onClick={(e) => e.stopPropagation()}
                        >
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Delete document?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently delete "{doc.originalName}"
                              and all associated chat history. This action
                              cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={(e) => handleDelete(doc.id, e as any)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              data-testid="button-confirm-delete"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
