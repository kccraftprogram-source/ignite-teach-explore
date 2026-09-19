import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Boxes, GraduationCap, Home, Menu, Radio, Search, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/" as const, label: "Dashboard", icon: Home },
  { to: "/herramientas" as const, label: "Herramientas STEM", icon: Boxes },
  { to: "/scratch" as const, label: "Cursos y Scratch", icon: BookOpen },
  { to: "/aulas" as const, label: "Salas de clase", icon: Radio },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-border bg-sidebar p-5 lg:flex lg:flex-col">
        <Brand />
        <nav className="mt-10 space-y-1.5" aria-label="Navegación principal">
          {navItems.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link key={item.to} to={item.to} className={cn("flex h-11 items-center gap-3 rounded-md px-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground", active && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground")}>
                <item.icon className="size-5" />{item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto rounded-md border border-border bg-background p-3">
          <p className="text-xs font-bold uppercase text-muted-foreground">Tu progreso semanal</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[72%] rounded-full bg-success" /></div>
          <p className="mt-2 text-xs text-muted-foreground"><strong className="text-foreground">4 de 6</strong> actividades completadas</p>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur md:px-8">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir navegación">{mobileOpen ? <X /> : <Menu />}</Button>
          <div className="lg:hidden"><Brand compact /></div>
          <div className="ml-auto hidden max-w-xs flex-1 items-center gap-2 rounded-md border border-border bg-muted px-3 md:flex">
            <Search className="size-4 text-muted-foreground" /><span className="text-sm text-muted-foreground">Busca una actividad...</span>
          </div>
          <button className="ml-auto flex items-center gap-2 rounded-md p-1.5 text-left hover:bg-accent md:ml-3" aria-label="Abrir perfil">
            <span className="grid size-9 place-items-center rounded-md bg-secondary font-bold text-secondary-foreground">MP</span>
            <span className="hidden sm:block"><span className="block text-sm font-bold">María Profe</span><span className="block text-xs text-muted-foreground">Docente</span></span>
          </button>
        </header>
        {mobileOpen && <nav className="fixed inset-x-3 top-19 z-40 rounded-md border border-border bg-background p-2 shadow-xl lg:hidden">{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold hover:bg-accent"><item.icon className="size-5" />{item.label}</Link>)}</nav>}
        <main>{children}</main>
      </div>
    </div>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return <Link to="/" className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground"><GraduationCap className="size-5" /></span>{!compact && <span><span className="block font-display text-lg font-extrabold leading-none">Nexo STEM</span><span className="mt-1 block text-[10px] font-bold uppercase text-muted-foreground">Aprender · Crear · Conectar</span></span>}</Link>;
}