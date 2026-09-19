import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Box, CalendarDays, CheckCircle2, Clock3, Radio, Sparkles, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dashboard — Nexo STEM" },
    { name: "description", content: "Tu centro de aprendizaje de programación, robótica y creatividad digital." },
    { property: "og:title", content: "Dashboard — Nexo STEM" },
    { property: "og:description", content: "Continúa tus cursos, retos y clases STEM." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-10">
      <section className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
        <div><p className="mb-2 flex items-center gap-2 text-sm font-bold text-primary"><Sparkles className="size-4" />Sábado de descubrimientos</p><h1 className="max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">Hola, María. ¿Qué vamos a crear hoy?</h1><p className="mt-3 max-w-xl text-muted-foreground">Tu aula digital está lista: explora herramientas, continúa un proyecto o empieza tu próxima clase.</p></div>
        <Button asChild size="lg"><Link to="/herramientas">Explorar herramientas <ArrowRight /></Link></Button>
      </section>

      <section className="grid gap-3 py-6 sm:grid-cols-2 xl:grid-cols-4">
        {[{ icon: Trophy, value: "12", label: "Retos completados", tone: "bg-orange-soft" }, { icon: Clock3, value: "8.5 h", label: "Tiempo aprendiendo", tone: "bg-cyan-soft" }, { icon: Box, value: "6", label: "Proyectos creados", tone: "bg-violet-soft" }, { icon: Users, value: "24", label: "Estudiantes activos", tone: "bg-accent" }].map((stat) => <div key={stat.label} className="flex items-center gap-4 rounded-md border border-border bg-card p-4"><span className={`grid size-11 place-items-center rounded-md ${stat.tone}`}><stat.icon className="size-5" /></span><span><strong className="block text-2xl font-extrabold">{stat.value}</strong><span className="text-xs text-muted-foreground">{stat.label}</span></span></div>)}
      </section>

      <div className="grid gap-8 xl:grid-cols-[1.4fr_.8fr]">
        <section><div className="mb-4 flex items-end justify-between"><div><p className="text-xs font-bold uppercase text-primary">Sigue avanzando</p><h2 className="mt-1 text-2xl font-extrabold">Mis cursos</h2></div><Link to="/scratch" className="text-sm font-bold text-primary">Ver biblioteca →</Link></div>
          <div className="space-y-3">
            {[{ title: "Crea tu primer videojuego", meta: "Scratch · Kids", progress: 68, icon: BookOpen, tone: "bg-orange-soft" }, { title: "Robótica con Arduino", meta: "Electrónica · Juniors", progress: 42, icon: Box, tone: "bg-cyan-soft" }, { title: "Diseño 3D para inventores", meta: "Tinkercad · Teens", progress: 25, icon: Sparkles, tone: "bg-violet-soft" }].map((course) => <article key={course.title} className="flex items-center gap-4 rounded-md border border-border bg-card p-4"><span className={`grid size-14 shrink-0 place-items-center rounded-md ${course.tone}`}><course.icon /></span><div className="min-w-0 flex-1"><h3 className="truncate font-extrabold">{course.title}</h3><p className="text-xs text-muted-foreground">{course.meta}</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${course.progress}%` }} /></div></div><span className="text-sm font-extrabold">{course.progress}%</span></article>)}
          </div>
        </section>
        <aside><p className="text-xs font-bold uppercase text-primary">Agenda</p><h2 className="mt-1 text-2xl font-extrabold">Próxima clase</h2><div className="mt-4 overflow-hidden rounded-md bg-primary p-5 text-primary-foreground"><div className="flex items-center justify-between"><span className="rounded-md bg-background/15 px-2 py-1 text-xs font-bold">EN 25 MIN</span><Radio className="size-5" /></div><h3 className="mt-8 text-xl font-extrabold">Laboratorio de sensores</h3><p className="mt-1 text-sm opacity-80">Arduino · Grupo Juniors</p><div className="mt-5 flex gap-4 text-xs"><span className="flex items-center gap-1"><CalendarDays className="size-4" /> 10:30</span><span className="flex items-center gap-1"><Users className="size-4" /> 18 alumnos</span></div><Button asChild variant="secondary" className="mt-5 w-full"><Link to="/aulas">Entrar a la sala</Link></Button></div><div className="mt-3 flex items-center gap-2 rounded-md border border-border bg-card p-3 text-sm"><CheckCircle2 className="size-5 text-success" /><span>Material de la clase preparado</span></div></aside>
      </div>
    </div>
  );
}
