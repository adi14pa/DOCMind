import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Zap, ShieldAlert, Code2 } from "lucide-react";
import { MetaRenderer } from "@/lib/meta-renderer/MetaRenderer";
import { examples } from "@/lib/examples";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center max-w-5xl">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
            MetaForge v1.0
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-balance">
            Build UIs without <br className="hidden sm:block" /> writing components.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl text-balance">
            The metadata-driven UI platform for developers. Pass a JSON configuration file, and instantly get fully rendered, interactive interfaces with graceful degradation built in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/playground" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
              Open Playground <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/docs" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
              Documentation
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard 
              icon={Box} 
              title="Rich Component Library" 
              desc="Forms, data tables, dashboards, and workflows available out of the box."
            />
            <FeatureCard 
              icon={Zap} 
              title="Instant Rendering" 
              desc="Type your schema and watch the UI update in real-time. No build step required."
            />
            <FeatureCard 
              icon={ShieldAlert} 
              title="Graceful Degradation" 
              desc="Invalid configs won't crash your app. The engine isolates errors safely."
            />
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">See it in action</h2>
            <p className="text-muted-foreground mt-4">A complete user profile form rendered purely from JSON.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start border rounded-xl overflow-hidden bg-card/50 shadow-xl">
            <div className="p-6 bg-zinc-950 text-zinc-50 h-full font-mono text-sm overflow-auto">
              <div className="flex items-center gap-2 mb-4 text-zinc-400">
                <Code2 className="w-4 h-4" />
                <span>schema.json</span>
              </div>
              <pre>
                <code className="text-xs leading-relaxed text-zinc-300" dangerouslySetInnerHTML={{__html: JSON.stringify(examples.profile, null, 2)
                  .replace(/"(.*?)":/g, '<span class="text-blue-300">"$1"</span>:')
                  .replace(/: "(.*?)"/g, ': <span class="text-green-300">"$1"</span>')
                  .replace(/: (true|false)/g, ': <span class="text-orange-300">$1</span>')
                }} />
              </pre>
            </div>
            <div className="p-8 h-full flex items-center justify-center bg-muted/20">
              <div className="w-full">
                <MetaRenderer config={examples.profile} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Built with precision. MetaForge.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
