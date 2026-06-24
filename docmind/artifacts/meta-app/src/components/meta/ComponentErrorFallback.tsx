import React, { useState } from "react";
import { AlertCircle, RefreshCcw, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComponentErrorFallbackProps {
  componentName?: string;
  error: Error | null;
  config?: any;
  onReset: () => void;
}

export function ComponentErrorFallback({ componentName, error, config, onReset }: ComponentErrorFallbackProps) {
  const [showConfig, setShowConfig] = useState(false);
  const name = componentName || "Unknown Component";

  return (
    <div className="border border-orange-500/30 bg-orange-500/10 rounded-md p-4 flex flex-col gap-3 my-2 text-sm text-orange-900 dark:text-orange-200">
      <div className="flex items-start gap-2">
        <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-semibold">Error rendering {name}</h4>
          <p className="mt-1 opacity-90 font-mono text-xs">{error?.message || "An unknown error occurred"}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-2">
        <Button variant="outline" size="sm" onClick={onReset} className="h-8 border-orange-500/30 hover:bg-orange-500/20 text-orange-700 dark:text-orange-300">
          <RefreshCcw className="w-3.5 h-3.5 mr-2" />
          Retry
        </Button>
        {config && (
          <Button variant="ghost" size="sm" onClick={() => setShowConfig(!showConfig)} className="h-8 text-orange-700 dark:text-orange-300 hover:bg-orange-500/20">
            <Code className="w-3.5 h-3.5 mr-2" />
            {showConfig ? "Hide Config" : "View Config"}
          </Button>
        )}
      </div>

      {showConfig && config && (
        <pre className="mt-2 bg-black/50 p-3 rounded text-xs overflow-auto max-h-48 text-orange-100 font-mono">
          {JSON.stringify(config, null, 2)}
        </pre>
      )}
    </div>
  );
}
