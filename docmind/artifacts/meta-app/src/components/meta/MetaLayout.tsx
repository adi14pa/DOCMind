import React from "react";
import { LayoutConfig } from "../../lib/meta-renderer/types";
import { MetaRenderer } from "../../lib/meta-renderer/MetaRenderer";

export function MetaLayout({ config }: { config: LayoutConfig }) {
  const components = Array.isArray(config.components) ? config.components : [];
  
  const direction = config.direction || "column";
  const gapClass = config.gap === "sm" ? "gap-2" : config.gap === "lg" ? "gap-8" : "gap-4";
  
  let layoutClass = "";
  
  if (direction === "row") {
    layoutClass = `flex flex-row flex-wrap ${gapClass}`;
  } else if (direction === "grid") {
    const cols = config.columns || 2;
    // Map number of columns to tailwind grid classes
    const gridCols = cols === 1 ? "grid-cols-1" : 
                     cols === 2 ? "grid-cols-1 md:grid-cols-2" : 
                     cols === 3 ? "grid-cols-1 md:grid-cols-3" :
                     "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    layoutClass = `grid ${gridCols} ${gapClass}`;
  } else {
    layoutClass = `flex flex-col ${gapClass}`;
  }
  
  return (
    <div className={layoutClass}>
      {components.map((comp, i) => (
        <div key={comp.id || i} className={direction === "row" ? "flex-1 min-w-[300px]" : ""}>
          <MetaRenderer config={comp} />
        </div>
      ))}
      {components.length === 0 && (
        <div className="w-full p-8 border border-dashed rounded flex items-center justify-center text-muted-foreground">
          Empty Layout Container
        </div>
      )}
    </div>
  );
}
