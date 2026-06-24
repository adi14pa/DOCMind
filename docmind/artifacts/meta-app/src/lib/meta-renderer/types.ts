export type BaseComponentConfig = {
  id?: string;
  title?: string;
};

export type FieldConfig = {
  type: "text" | "email" | "number" | "select" | "checkbox" | "textarea" | "date";
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  defaultValue?: unknown;
};

export interface FormConfig extends BaseComponentConfig {
  type: "form";
  fields: FieldConfig[];
  submitLabel?: string;
}

export type ColumnConfig = {
  key: string;
  label?: string;
  sortable?: boolean;
  type?: "text" | "number" | "date" | "badge" | "boolean";
};

export interface TableConfig extends BaseComponentConfig {
  type: "table";
  columns: ColumnConfig[];
  rows: Record<string, unknown>[];
  pagination?: boolean;
}

export type WidgetConfig = {
  type: "stat" | "chart" | "list" | "progress";
  title: string;
  value?: number | string;
  label?: string;
  data?: { label: string; value: number }[];
  color?: string;
  trend?: "up" | "down" | "neutral";
};

export interface DashboardConfig extends BaseComponentConfig {
  type: "dashboard";
  widgets: WidgetConfig[];
}

export type StepConfig = {
  id: string;
  label: string;
  description?: string;
  status?: "complete" | "active" | "pending" | "error";
  actions?: { label: string; type?: "primary" | "secondary" }[];
};

export interface WorkflowConfig extends BaseComponentConfig {
  type: "workflow";
  steps: StepConfig[];
  currentStep?: number;
}

export interface LayoutConfig extends BaseComponentConfig {
  type: "layout";
  direction?: "row" | "column" | "grid";
  columns?: number;
  gap?: "sm" | "md" | "lg";
  components: ComponentConfig[];
}

export type ComponentConfig =
  | FormConfig
  | TableConfig
  | DashboardConfig
  | WorkflowConfig
  | LayoutConfig
  | { type: string; [key: string]: any }; // Catch-all for unknown components

export interface PageConfig {
  type: "page";
  title?: string;
  components: ComponentConfig[];
}
