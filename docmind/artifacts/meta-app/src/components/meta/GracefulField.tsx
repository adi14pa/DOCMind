import React from "react";
import { AlertCircle } from "lucide-react";
import { FieldConfig } from "../../lib/meta-renderer/types";

interface GracefulFieldProps {
  fieldConfig: any; // intentionally any to catch bad configs
  children: React.ReactNode;
}

export function GracefulField({ fieldConfig, children }: GracefulFieldProps) {
  if (!fieldConfig || typeof fieldConfig !== "object") {
    return (
      <div className="text-xs text-orange-500 flex items-center gap-1.5 p-2 bg-orange-500/10 rounded border border-orange-500/20">
        <AlertCircle className="w-3.5 h-3.5" />
        <span>Invalid field configuration</span>
      </div>
    );
  }

  return <>{children}</>;
}
