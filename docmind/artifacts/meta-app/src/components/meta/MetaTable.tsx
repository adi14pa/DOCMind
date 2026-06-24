import React, { useState } from "react";
import { TableConfig, ColumnConfig } from "../../lib/meta-renderer/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MetaTable({ config }: { config: TableConfig }) {
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDesc, setSortDesc] = useState(false);
  const [page, setPage] = useState(0);
  
  const columns = Array.isArray(config.columns) ? config.columns : [];
  const rows = Array.isArray(config.rows) ? config.rows : [];

  const handleSort = (key: string) => {
    if (sortCol === key) {
      if (sortDesc) {
        setSortCol(null);
        setSortDesc(false);
      } else {
        setSortDesc(true);
      }
    } else {
      setSortCol(key);
      setSortDesc(false);
    }
  };

  const sortedRows = React.useMemo(() => {
    if (!sortCol) return rows;
    return [...rows].sort((a, b) => {
      const valA = a[sortCol];
      const valB = b[sortCol];
      if (valA === valB) return 0;
      const result = valA > valB ? 1 : -1;
      return sortDesc ? -result : result;
    });
  }, [rows, sortCol, sortDesc]);

  const pageSize = 5;
  const paginatedRows = config.pagination ? sortedRows.slice(page * pageSize, (page + 1) * pageSize) : sortedRows;

  // Graceful degradation for missing columns
  if (columns.length === 0 && rows.length > 0) {
    return (
      <Card>
        {config.title && <CardHeader><CardTitle>{config.title}</CardTitle></CardHeader>}
        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-yellow-600 bg-yellow-500/10 border border-yellow-500/20 p-2 rounded mb-4">
              Warning: Table is missing column definitions. Displaying raw data.
            </div>
            {rows.map((row, i) => (
              <div key={i} className="p-3 border rounded font-mono text-xs bg-muted/20 overflow-x-auto">
                {JSON.stringify(row)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full overflow-hidden">
      {config.title && (
        <CardHeader>
          <CardTitle>{config.title}</CardTitle>
        </CardHeader>
      )}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col, i) => (
                <TableHead key={i} className={col.type === "number" ? "text-right" : ""}>
                  {col.sortable ? (
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort(col.key)}
                      className="h-8 px-2 -ml-2 text-xs font-semibold hover:bg-muted"
                    >
                      {col.label || col.key}
                      {sortCol === col.key ? (
                        sortDesc ? <ChevronDown className="ml-1 w-3 h-3" /> : <ChevronUp className="ml-1 w-3 h-3" />
                      ) : (
                        <ChevronsUpDown className="ml-1 w-3 h-3 opacity-30" />
                      )}
                    </Button>
                  ) : (
                    col.label || col.key
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-8 text-muted-foreground">
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              paginatedRows.map((row, i) => (
                <TableRow key={i}>
                  {columns.map((col, j) => (
                    <TableCell key={j} className={col.type === "number" ? "text-right" : ""}>
                      <CellRenderer value={row[col.key]} type={col.type} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {config.pagination && rows.length > pageSize && (
        <div className="flex items-center justify-between p-4 border-t">
          <div className="text-xs text-muted-foreground">
            Showing {page * pageSize + 1} to {Math.min((page + 1) * pageSize, rows.length)} of {rows.length}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={() => setPage(p => p + 1)} disabled={(page + 1) * pageSize >= rows.length}>
              Next
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}

function CellRenderer({ value, type }: { value: any; type?: string }) {
  if (value === undefined || value === null) return <span className="text-muted-foreground">--</span>;

  switch (type) {
    case "badge":
      return <Badge variant={getBadgeVariant(value)}>{String(value)}</Badge>;
    case "boolean":
      return value ? <Badge variant="default">Yes</Badge> : <Badge variant="secondary">No</Badge>;
    case "number":
      return <span className="font-mono">{typeof value === 'number' ? value.toLocaleString() : String(value)}</span>;
    default:
      return <span>{String(value)}</span>;
  }
}

function getBadgeVariant(val: any) {
  const s = String(val).toLowerCase();
  if (["active", "success", "completed"].includes(s)) return "default";
  if (["error", "failed", "churned"].includes(s)) return "destructive";
  if (["trial", "pending"].includes(s)) return "secondary";
  return "outline";
}
