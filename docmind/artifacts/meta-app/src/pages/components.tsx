import { Navbar } from "@/components/layout/Navbar";
import { MetaRenderer } from "@/lib/meta-renderer/MetaRenderer";
import { examples } from "@/lib/examples";

export default function ComponentsGallery() {
  const componentExamples = [
    {
      id: "form",
      title: "Form",
      description: "Generates input forms with various field types.",
      config: examples.profile.components[0]
    },
    {
      id: "dashboard",
      title: "Dashboard",
      description: "Grid layout for stats, progress bars, and charts.",
      config: examples.sales.components[0]
    },
    {
      id: "table",
      title: "Data Table",
      description: "Sortable, paginated data tables with typed columns.",
      config: examples.table.components[0]
    },
    {
      id: "workflow",
      title: "Workflow",
      description: "Visual stepper for processes and multi-step actions.",
      config: examples.workflow.components[0]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Component Gallery</h1>
          <p className="text-lg text-muted-foreground">
            Explore the available component types and their corresponding configurations.
          </p>
        </div>

        <div className="space-y-16">
          {componentExamples.map((item) => (
            <section key={item.id} className="scroll-m-20" id={item.id}>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">{item.title}</h2>
                <p className="text-muted-foreground mt-1">{item.description}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 border rounded-xl overflow-hidden shadow-sm bg-card">
                <div className="p-6 bg-zinc-950 overflow-auto max-h-[500px]">
                  <pre>
                    <code className="text-xs font-mono text-zinc-300 leading-relaxed" dangerouslySetInnerHTML={{__html: JSON.stringify(item.config, null, 2)
                      .replace(/"(.*?)":/g, '<span class="text-blue-300">"$1"</span>:')
                      .replace(/: "(.*?)"/g, ': <span class="text-green-300">"$1"</span>')
                      .replace(/: (true|false)/g, ': <span class="text-orange-300">$1</span>')
                    }} />
                  </pre>
                </div>
                <div className="p-6 md:p-8 flex items-center justify-center bg-muted/10 overflow-auto max-h-[500px]">
                  <div className="w-full">
                    <MetaRenderer config={item.config} />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
