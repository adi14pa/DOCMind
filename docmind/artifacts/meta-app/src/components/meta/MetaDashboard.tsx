import React from "react";
import { DashboardConfig, WidgetConfig } from "../../lib/meta-renderer/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Minus, HelpCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function MetaDashboard({ config }: { config: DashboardConfig }) {
  const widgets = Array.isArray(config.widgets) ? config.widgets : [];

  return (
    <div className="space-y-4">
      {config.title && (
        <h3 className="text-lg font-semibold tracking-tight">{config.title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {widgets.map((widget, i) => (
          <div key={i} className={widget.type === "chart" ? "col-span-1 md:col-span-2 lg:col-span-4" : ""}>
            <WidgetRenderer widget={widget} />
          </div>
        ))}
        {widgets.length === 0 && (
          <div className="col-span-full p-8 border border-dashed rounded flex flex-col items-center justify-center text-muted-foreground bg-muted/20">
            <p>No widgets configured</p>
          </div>
        )}
      </div>
    </div>
  );
}

function WidgetRenderer({ widget }: { widget: any }) {
  if (!widget || typeof widget !== 'object') return null;

  switch (widget.type) {
    case "stat":
      return <StatWidget widget={widget as WidgetConfig} />;
    case "progress":
      return <ProgressWidget widget={widget as WidgetConfig} />;
    case "chart":
      return <ChartWidget widget={widget as WidgetConfig} />;
    default:
      return (
        <Card className="h-full border-dashed border-muted-foreground/30 bg-muted/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
              <HelpCircle className="w-4 h-4" />
              {widget.title || "Unknown Widget"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground font-mono bg-muted p-2 rounded">
              type: "{widget.type}"
            </div>
          </CardContent>
        </Card>
      );
  }
}

function StatWidget({ widget }: { widget: WidgetConfig }) {
  const value = widget.value !== undefined ? widget.value : "--";
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{widget.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(widget.label || widget.trend) && (
          <div className="flex items-center gap-2 mt-1 text-xs">
            {widget.trend === "up" && <span className="text-emerald-500 flex items-center"><ArrowUpRight className="w-3 h-3 mr-0.5" /></span>}
            {widget.trend === "down" && <span className="text-destructive flex items-center"><ArrowDownRight className="w-3 h-3 mr-0.5" /></span>}
            {widget.trend === "neutral" && <span className="text-muted-foreground flex items-center"><Minus className="w-3 h-3 mr-0.5" /></span>}
            <span className="text-muted-foreground">{widget.label}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ProgressWidget({ widget }: { widget: WidgetConfig }) {
  const val = typeof widget.value === 'number' ? widget.value : 0;
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{widget.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={val} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">{widget.label || `${val}%`}</p>
      </CardContent>
    </Card>
  );
}

function ChartWidget({ widget }: { widget: WidgetConfig }) {
  const data = Array.isArray(widget.data) ? widget.data : [];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{widget.title}</CardTitle>
        {widget.label && <CardDescription>{widget.label}</CardDescription>}
      </CardHeader>
      <CardContent>
        {data.length > 0 ? (
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="label" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.1)' }} 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-[200px] border border-dashed rounded flex items-center justify-center text-muted-foreground">
            No chart data provided
          </div>
        )}
      </CardContent>
    </Card>
  );
}
