import { Navbar } from "@/components/layout/Navbar";

export default function Docs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h1>Documentation</h1>
          <p className="lead">
            Learn how to use MetaForge's JSON schema to build declarative interfaces.
          </p>

          <h2>Root Schema</h2>
          <p>Every MetaForge schema must start with a <code>page</code> type component as the root.</p>
          <pre><code>{`{
  "type": "page",
  "title": "My Application",
  "components": [ ... ]
}`}</code></pre>

          <h2>Component Types</h2>
          
          <h3>Form</h3>
          <p>Forms support various field types: <code>text, email, number, textarea, checkbox, select, date</code>.</p>
          <ul>
            <li>Missing a <code>name</code> drops the field gracefully.</li>
            <li>Unknown types render an "Unsupported field type" block instead of crashing.</li>
          </ul>

          <h3>Table</h3>
          <p>Tables require <code>columns</code> and <code>rows</code>.</p>
          <ul>
            <li>Columns can be typed: <code>text, number, badge, boolean</code>.</li>
            <li>If columns are omitted, the table gracefully degrades to rendering rows as raw JSON blocks.</li>
          </ul>

          <h3>Dashboard</h3>
          <p>Dashboards wrap widgets in a responsive grid.</p>
          <ul>
            <li>Widget types: <code>stat, chart, progress, list</code>.</li>
            <li>Unknown widget types render a safe placeholder box.</li>
          </ul>

          <h3>Workflow</h3>
          <p>Workflows visualize multi-step processes.</p>
          <ul>
            <li>Step statuses: <code>pending, active, complete, error</code>.</li>
            <li>Active steps can include action buttons.</li>
          </ul>

          <hr />

          <h2>Graceful Degradation</h2>
          <p>
            MetaForge is designed to <strong>never white-screen</strong>. It uses deep error boundaries and schema validation to handle malformed configs.
          </p>
          <ul>
            <li><strong>Unknown Component:</strong> Renders a diagnostic block showing the unknown name.</li>
            <li><strong>Runtime Error:</strong> The component is wrapped in an Error Boundary showing the error message and a retry button.</li>
            <li><strong>Missing data:</strong> Defaults to safe fallbacks (e.g., <code>--</code> for missing numbers).</li>
          </ul>

        </div>
      </main>
    </div>
  );
}
