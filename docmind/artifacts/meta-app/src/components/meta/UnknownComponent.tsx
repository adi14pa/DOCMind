import React from "react";
import { HelpCircle } from "lucide-react";

interface UnknownComponentProps {
  config: any;
}

export function UnknownComponent({ config }: UnknownComponentProps) {
  const typeName = config?.type || "undefined";
  
  return (
    <div className="border border-muted bg-muted/30 rounded-lg p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-muted-foreground">
        <HelpCircle className="w-5 h-5 text-yellow-500" />
        <h4 className="font-medium text-foreground">Unknown Component Type: <code className="text-sm bg-muted px-1.5 py-0.5 rounded text-yellow-600 dark:text-yellow-400">{typeName}</code></h4>
      </div>
      <p className="text-sm text-muted-foreground">
        The renderer encountered a component type it doesn't know how to render.
      </p>
      <pre className="mt-2 bg-black/40 p-3 rounded-md text-xs overflow-auto max-h-48 text-muted-foreground font-mono">
        {JSON.stringify(config, null, 2)}
      </pre>
    </div>
  );
}
