import React from "react";
import { FormConfig, FieldConfig } from "../../lib/meta-renderer/types";
import { GracefulField } from "./GracefulField";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export function MetaForm({ config }: { config: FormConfig }) {
  const fields = Array.isArray(config.fields) ? config.fields : [];

  return (
    <Card className="w-full">
      {config.title && (
        <CardHeader>
          <CardTitle>{config.title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {fields.map((field: any, idx) => (
            <GracefulField key={field?.name || `field-${idx}`} fieldConfig={field}>
              <FormFieldRenderer field={field} />
            </GracefulField>
          ))}
          {fields.length === 0 && (
            <div className="text-sm text-muted-foreground italic p-4 border border-dashed rounded text-center">
              No fields configured for this form.
            </div>
          )}
          <Button type="submit" className="mt-4">
            {config.submitLabel || "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function FormFieldRenderer({ field }: { field: FieldConfig }) {
  if (!field.name) {
    return null; // Silently skip fields without names as per requirements
  }

  const id = `field-${field.name}`;

  return (
    <div className="space-y-1.5">
      {field.type !== "checkbox" && field.label && (
        <Label htmlFor={id} className="text-sm font-medium">
          {field.label} {field.required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <FieldInput field={field} id={id} />
    </div>
  );
}

function FieldInput({ field, id }: { field: FieldConfig; id: string }) {
  switch (field.type) {
    case "text":
    case "email":
    case "number":
    case "date":
      return (
        <Input 
          type={field.type} 
          id={id} 
          name={field.name} 
          placeholder={field.placeholder} 
          required={field.required}
          defaultValue={field.defaultValue as string | number}
        />
      );
    case "textarea":
      return (
        <Textarea 
          id={id} 
          name={field.name} 
          placeholder={field.placeholder} 
          required={field.required}
          defaultValue={field.defaultValue as string}
        />
      );
    case "checkbox":
      return (
        <div className="flex items-center space-x-2">
          <Checkbox id={id} name={field.name} defaultChecked={!!field.defaultValue} />
          {field.label && (
            <Label htmlFor={id} className="text-sm font-medium cursor-pointer">
              {field.label} {field.required && <span className="text-destructive">*</span>}
            </Label>
          )}
        </div>
      );
    case "select":
      if (!field.options || !Array.isArray(field.options) || field.options.length === 0) {
        return (
          <div className="flex items-center gap-2 text-sm text-yellow-600 bg-yellow-500/10 border border-yellow-500/20 p-2 rounded">
            <AlertCircle className="w-4 h-4" />
            Select field missing options
          </div>
        );
      }
      return (
        <Select name={field.name} defaultValue={field.defaultValue as string}>
          <SelectTrigger id={id}>
            <SelectValue placeholder={field.placeholder || "Select an option..."} />
          </SelectTrigger>
          <SelectContent>
            {field.options.map((opt, i) => (
              <SelectItem key={i} value={opt.value || `opt-${i}`}>
                {opt.label || opt.value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    default:
      return (
        <div className="text-sm border border-dashed border-muted bg-muted/30 p-2 rounded text-muted-foreground flex items-center gap-2">
          <span className="font-mono text-xs bg-muted px-1 rounded">{field.type}</span>
          Unsupported field type
        </div>
      );
  }
}
