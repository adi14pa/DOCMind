import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { UnknownComponent } from "../../components/meta/UnknownComponent";
import { MetaForm } from "../../components/meta/MetaForm";
import { MetaTable } from "../../components/meta/MetaTable";
import { MetaDashboard } from "../../components/meta/MetaDashboard";
import { MetaWorkflow } from "../../components/meta/MetaWorkflow";
import { MetaLayout } from "../../components/meta/MetaLayout";

interface MetaRendererProps {
  config: any;
}

export function MetaRenderer({ config }: MetaRendererProps) {
  if (!config || typeof config !== "object") {
    return null;
  }

  // Handle top-level Page config
  if (config.type === "page") {
    const components = Array.isArray(config.components) ? config.components : [];
    return (
      <div className="w-full max-w-7xl mx-auto space-y-6">
        {config.title && (
          <h1 className="text-3xl font-bold tracking-tight mb-8">{config.title}</h1>
        )}
        <div className="flex flex-col gap-6">
          {components.map((comp, idx) => (
            <MetaRenderer key={comp.id || `comp-${idx}`} config={comp} />
          ))}
        </div>
      </div>
    );
  }

  // Handle individual components
  const renderComponent = () => {
    switch (config.type) {
      case "form":
        return <MetaForm config={config} />;
      case "table":
        return <MetaTable config={config} />;
      case "dashboard":
        return <MetaDashboard config={config} />;
      case "workflow":
        return <MetaWorkflow config={config} />;
      case "layout":
        return <MetaLayout config={config} />;
      default:
        return <UnknownComponent config={config} />;
    }
  };

  return (
    <ErrorBoundary componentName={config.type} config={config}>
      {renderComponent()}
    </ErrorBoundary>
  );
}
