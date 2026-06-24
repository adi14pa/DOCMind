import { ComponentConfig, PageConfig } from "./types";

export interface ValidationResult {
  valid: boolean;
  errors: { path: string; message: string }[];
  warnings: { path: string; message: string }[];
}

export function validateConfig(config: any): ValidationResult {
  const result: ValidationResult = { valid: true, errors: [], warnings: [] };

  if (!config || typeof config !== "object") {
    result.valid = false;
    result.errors.push({ path: "root", message: "Config must be a JSON object" });
    return result;
  }

  if (config.type !== "page") {
    result.valid = false;
    result.errors.push({ path: "type", message: "Root element must have type 'page'" });
    return result;
  }

  if (!config.components || !Array.isArray(config.components)) {
    result.valid = false;
    result.errors.push({ path: "components", message: "'components' array is required on page" });
    return result;
  }

  config.components.forEach((comp: any, index: number) => {
    validateComponent(comp, `components[${index}]`, result);
  });

  return result;
}

function validateComponent(comp: any, path: string, result: ValidationResult) {
  if (!comp || typeof comp !== "object") {
    result.valid = false;
    result.errors.push({ path, message: "Component must be an object" });
    return;
  }

  if (!comp.type) {
    result.valid = false;
    result.errors.push({ path: `${path}.type`, message: "Component must have a 'type'" });
    return;
  }

  switch (comp.type) {
    case "form":
      if (!comp.fields || !Array.isArray(comp.fields)) {
        result.valid = false;
        result.errors.push({ path: `${path}.fields`, message: "Form must have a 'fields' array" });
      } else {
        comp.fields.forEach((field: any, i: number) => {
          if (!field.type) {
            result.warnings.push({ path: `${path}.fields[${i}].type`, message: "Field is missing a 'type'" });
          }
          if (!field.name) {
            result.errors.push({ path: `${path}.fields[${i}].name`, message: "Field must have a 'name'" });
            result.valid = false;
          }
        });
      }
      break;
    case "table":
      if (!comp.columns || !Array.isArray(comp.columns)) {
        result.warnings.push({ path: `${path}.columns`, message: "Table should ideally have a 'columns' array" });
      }
      if (!comp.rows || !Array.isArray(comp.rows)) {
        result.valid = false;
        result.errors.push({ path: `${path}.rows`, message: "Table must have a 'rows' array" });
      }
      break;
    case "dashboard":
      if (!comp.widgets || !Array.isArray(comp.widgets)) {
        result.valid = false;
        result.errors.push({ path: `${path}.widgets`, message: "Dashboard must have a 'widgets' array" });
      } else {
        comp.widgets.forEach((widget: any, i: number) => {
          if (!widget.type) {
            result.warnings.push({ path: `${path}.widgets[${i}].type`, message: "Widget is missing a 'type'" });
          }
          if (!widget.title) {
            result.warnings.push({ path: `${path}.widgets[${i}].title`, message: "Widget is missing a 'title'" });
          }
        });
      }
      break;
    case "workflow":
      if (!comp.steps || !Array.isArray(comp.steps)) {
        result.valid = false;
        result.errors.push({ path: `${path}.steps`, message: "Workflow must have a 'steps' array" });
      }
      break;
    case "layout":
      if (!comp.components || !Array.isArray(comp.components)) {
        result.valid = false;
        result.errors.push({ path: `${path}.components`, message: "Layout must have a 'components' array" });
      } else {
        comp.components.forEach((childComp: any, i: number) => {
          validateComponent(childComp, `${path}.components[${i}]`, result);
        });
      }
      break;
    default:
      result.warnings.push({ path: `${path}.type`, message: `Unknown component type '${comp.type}'` });
      break;
  }
}
