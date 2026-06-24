import React from "react";
import { WorkflowConfig } from "../../lib/meta-renderer/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function MetaWorkflow({ config }: { config: WorkflowConfig }) {
  const steps = Array.isArray(config.steps) ? config.steps : [];
  const currentStep = config.currentStep || 0;

  return (
    <Card className="w-full">
      {config.title && (
        <CardHeader>
          <CardTitle>{config.title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            const status = step.status || "pending";
            
            return (
              <div key={step.id || idx} className="relative flex gap-4">
                {!isLast && (
                  <div className="absolute left-[11px] top-7 bottom-[-24px] w-px bg-border" />
                )}
                <div className="relative z-10 shrink-0 mt-1 bg-card">
                  {status === "complete" && <CheckCircle2 className="w-6 h-6 text-primary" />}
                  {status === "active" && (
                    <motion.div 
                      initial={{ scale: 0.8 }} 
                      animate={{ scale: 1 }} 
                      className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center bg-primary/10"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </motion.div>
                  )}
                  {status === "pending" && <Circle className="w-6 h-6 text-muted-foreground" />}
                  {status === "error" && <AlertCircle className="w-6 h-6 text-destructive" />}
                </div>
                
                <div className="flex-1 pb-4">
                  <h4 className={cn(
                    "text-sm font-semibold",
                    status === "pending" ? "text-muted-foreground" : "text-foreground",
                    status === "error" ? "text-destructive" : ""
                  )}>
                    {step.label || `Step ${idx + 1}`}
                  </h4>
                  
                  {step.description && (
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  )}
                  
                  {step.actions && Array.isArray(step.actions) && step.actions.length > 0 && status === "active" && (
                    <div className="flex gap-3 mt-4">
                      {step.actions.map((action: any, aIdx) => (
                        <Button 
                          key={aIdx} 
                          variant={action.type === "primary" ? "default" : "outline"}
                          size="sm"
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
          {steps.length === 0 && (
            <div className="text-center p-6 border border-dashed rounded text-muted-foreground">
              No steps defined in workflow.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
