import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { examples } from "@/lib/examples";
import { MetaRenderer } from "@/lib/meta-renderer/MetaRenderer";
import { validateConfig } from "@/lib/meta-renderer/ConfigValidator";
import { Button } from "@/components/ui/button";
import { Copy, RotateCcw, CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function Playground() {
  const [configText, setConfigText] = useState(() => JSON.stringify(examples.profile, null, 2));
  const [parsedConfig, setParsedConfig] = useState<any>(examples.profile);
  const [validation, setValidation] = useState(() => validateConfig(examples.profile));
  const { toast } = useToast();

  useEffect(() => {
    try {
      const parsed = JSON.parse(configText);
      setParsedConfig(parsed);
      setValidation(validateConfig(parsed));
    } catch (e: any) {
      setValidation({
        valid: false,
        errors: [{ path: "JSON Parse Error", message: e.message }],
        warnings: []
      });
      // We don't update parsedConfig on parse error, preserving the last good state partially, 
      // but to reflect reality we could set it to a bad state. 
      // To trigger ErrorBoundary, we might want to just let it pass or leave it. 
      // Actually, if it's invalid JSON, we just show the error in the panel and keep rendering the old one.
    }
  }, [configText]);

  const loadExample = (key: keyof typeof examples) => {
    setConfigText(JSON.stringify(examples[key], null, 2));
  };

  const copyConfig = () => {
    navigator.clipboard.writeText(configText);
    toast({ title: "Copied to clipboard", duration: 2000 });
  };

  const resetConfig = () => {
    setConfigText(JSON.stringify({ type: "page", title: "New Page", components: [] }, null, 2));
  };

  const lines = configText.split("\n").length;
  const chars = configText.length;

  return (
    <div className="h-[100dvh] flex flex-col bg-background">
      <Navbar />
      
      <div className="border-b p-2 flex items-center justify-between bg-muted/20 overflow-x-auto">
        <div className="flex gap-2 min-w-max px-4">
          <span className="text-sm font-medium text-muted-foreground mr-2 flex items-center">Examples:</span>
          <Button variant="outline" size="sm" onClick={() => loadExample("profile")} className="h-8">Profile Form</Button>
          <Button variant="outline" size="sm" onClick={() => loadExample("sales")} className="h-8">Sales Dashboard</Button>
          <Button variant="outline" size="sm" onClick={() => loadExample("table")} className="h-8">Data Table</Button>
          <Button variant="outline" size="sm" onClick={() => loadExample("workflow")} className="h-8">Workflow</Button>
          <Button variant="outline" size="sm" onClick={() => loadExample("invalid")} className="h-8 text-orange-600 border-orange-200 hover:bg-orange-50 dark:border-orange-900/50 dark:hover:bg-orange-900/20">Resilience Demo</Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Editor Pane */}
        <div className="w-full md:w-1/2 flex flex-col border-r h-1/2 md:h-full">
          <div className="flex items-center justify-between p-2 border-b bg-muted/10">
            <span className="text-sm font-semibold ml-2">Schema Editor</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={resetConfig} className="h-7 px-2" title="Reset">
                <RotateCcw className="w-3.5 h-3.5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={copyConfig} className="h-7 px-2" title="Copy">
                <Copy className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <textarea
              className="w-full h-full p-4 font-mono text-sm bg-zinc-950 text-zinc-100 resize-none outline-none editor-textarea focus:ring-1 focus:ring-inset focus:ring-primary/50"
              value={configText}
              onChange={(e) => setConfigText(e.target.value)}
              spellCheck={false}
            />
            <div className="absolute bottom-2 right-4 text-xs text-zinc-500 font-mono pointer-events-none">
              {lines} lines, {chars} chars
            </div>
          </div>

          {/* Validation Panel */}
          <div className="h-48 border-t bg-card flex flex-col">
            <div className="p-2 border-b bg-muted/30 text-xs font-semibold flex items-center gap-2">
              Validation
              {validation.valid ? (
                validation.warnings.length > 0 ? (
                  <Badge variant="warning">{validation.warnings.length} warnings</Badge>
                ) : (
                  <Badge variant="success">Valid</Badge>
                )
              ) : (
                <Badge variant="error">{validation.errors.length} errors</Badge>
              )}
            </div>
            <div className="flex-1 overflow-auto p-2 space-y-2">
              <AnimatePresence>
                {validation.valid && validation.warnings.length === 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 p-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Configuration is valid and ready to render.</span>
                  </motion.div>
                )}

                {validation.errors.map((err, i) => (
                  <motion.div key={`err-${i}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 p-2 rounded">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono font-semibold">{err.path}:</span> {err.message}
                    </div>
                  </motion.div>
                ))}

                {validation.warnings.map((warn, i) => (
                  <motion.div key={`warn-${i}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-2 text-sm text-orange-600 dark:text-orange-400 bg-orange-500/10 p-2 rounded">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono font-semibold">{warn.path}:</span> {warn.message}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Preview Pane */}
        <div className="w-full md:w-1/2 flex flex-col h-1/2 md:h-full bg-muted/10">
          <div className="flex items-center justify-between p-2 border-b bg-card">
            <span className="text-sm font-semibold ml-2">Live Preview</span>
          </div>
          <div className="flex-1 overflow-auto p-4 md:p-8">
            <motion.div
              key={configText} // force re-animation on valid parse
              initial={{ opacity: 0.95, filter: "blur(2px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.2 }}
            >
              {parsedConfig ? <MetaRenderer config={parsedConfig} /> : (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  Invalid JSON schema
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ variant, children }: { variant: "success" | "warning" | "error", children: React.ReactNode }) {
  const vclass = {
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    warning: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    error: "bg-destructive/10 text-destructive border-destructive/20"
  }[variant];
  return (
    <span className={`text-[10px] px-1.5 py-0.5 rounded border ${vclass}`}>
      {children}
    </span>
  );
}
