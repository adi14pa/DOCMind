import { Link, useLocation } from "wouter";
import { Hammer, Play, Component as ComponentIcon, BookText } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home", icon: Hammer },
    { href: "/playground", label: "Playground", icon: Play },
    { href: "/components", label: "Components", icon: ComponentIcon },
    { href: "/docs", label: "Docs", icon: BookText },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto px-4 md:px-8">
        <div className="mr-8 flex items-center gap-2 font-bold tracking-tight text-primary">
          <Hammer className="h-5 w-5" />
          <span>MetaForge</span>
        </div>
        <div className="flex flex-1 items-center space-x-6 text-sm font-medium">
          {links.map((link) => {
            const isActive = location === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href} className={cn(
                "flex items-center gap-2 transition-colors hover:text-foreground/80",
                isActive ? "text-foreground" : "text-foreground/60"
              )}>
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline-block">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
