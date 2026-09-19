import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Gamepad2, Play, Plus, Search, Tag, Upload } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import spaceRobot from "@/assets/scratch-space-robot.jpg";
import magicGarden from "@/assets/scratch-magic-garden.jpg";
import racingCircuit from "@/assets/scratch-racing-circuit.jpg";

export const Route = createFileRoute("/scratch")({
  head: () => ({ meta: [{ title: "Biblioteca Scratch — Nexo STEM" }, { name: "description", content: "Explora, prueba y comparte proyectos Scratch para aprender programación creativa." }, { property: "og:title", content: "Biblioteca Scratch — Nexo STEM" }, { property: "og:description", content: "Proyectos interactivos de programación para niños y jóvenes." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ScratchPage,
});

const starterProjects = [
  { id: "10128407", title: "Misión espacial", description: "Ayuda a Robi a recoger muestras y volver a su nave.", tags: ["Videojuego", "Movimiento"], level: "Kids", author: "Grupo Órbita", image: spaceRobot },
  { id: "60917032", title: "El jardín mágico", description: "Una aventura animada con decisiones y mensajes secretos.", tags: ["Historia", "Animación"], level: "Prekids", author: "Sofía M.", image: magicGarden },
  { id: "60917032", title: "Carrera de circuitos", description: "Compite, cuenta vueltas y programa obstáculos electrónicos.", tags: ["Juego", "Variables"], level: "Juniors", author: "Club Maker", image: racingCircuit },
];

function ScratchPage() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("Todos");
  const [viewer, setViewer] = useState<(typeof starterProjects)[number] | null>(null);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [assigned, setAssigned] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const filtered = useMemo(() => starterProjects.filter((project) => (tag === "Todos" || project.tags.includes(tag)) && `${project.title} ${project.description} ${project.tags.join(" ")}`.toLowerCase().includes(search.toLowerCase())), [search, tag]);

  return <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-10">
    <section className="flex flex-col gap-5 border-b border-border pb-7 lg:flex-row lg:items-end lg:justify-between"><div><p className="flex items-center gap-2 text-sm font-bold text-primary"><Gamepad2 className="size-4" />Laboratorio creativo</p><h1 className="mt-2 text-3xl font-extrabold md:text-5xl">Biblioteca Scratch</h1><p className="mt-3 max-w-2xl text-muted-foreground">Explora proyectos, pruébalos sin salir de clase y comparte tus propias creaciones.</p></div><Button onClick={() => setUploadOpen(true)}><Plus />Subir o asignar</Button></section>
    <section className="flex flex-col gap-3 py-6 md:flex-row md:items-center"><div className="relative max-w-lg flex-1"><Search className="absolute left-3 top-3 size-5 text-muted-foreground" /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar proyectos, etiquetas o autores" className="h-11 bg-card pl-10" /></div><div className="flex gap-2 overflow-x-auto">{["Todos", "Videojuego", "Historia", "Animación", "Variables"].map((item) => <button key={item} onClick={() => setTag(item)} className={`shrink-0 rounded-md px-3 py-2 text-sm font-bold ${tag === item ? "bg-foreground text-background" : "bg-card text-muted-foreground hover:bg-accent"}`}>{item}</button>)}</div></section>
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map((project) => <article key={`${project.title}-${project.level}`} className="overflow-hidden rounded-md border border-border bg-card"><button className="group relative block aspect-[16/10] w-full overflow-hidden text-left" onClick={() => setViewer(project)} aria-label={`Reproducir ${project.title}`}><img src={project.image} alt={project.title} width={800} height={520} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute inset-0 grid place-items-center bg-foreground/10 opacity-0 transition-opacity group-hover:opacity-100"><span className="grid size-14 place-items-center rounded-full bg-background text-primary shadow-lg"><Play className="ml-1 size-6 fill-current" /></span></span></button><div className="p-5"><div className="flex items-center justify-between"><span className="text-xs font-extrabold uppercase text-primary">{project.level}</span><span className="text-xs text-muted-foreground">por {project.author}</span></div><h2 className="mt-2 text-xl font-extrabold">{project.title}</h2><p className="mt-2 text-sm text-muted-foreground">{project.description}</p><div className="mt-4 flex items-center gap-2">{project.tags.map((item) => <span key={item} className="flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-[11px] font-bold"><Tag className="size-3" />{item}</span>)}</div><Button className="mt-5 w-full" variant="outline" onClick={() => setViewer(project)}><Play />Probar proyecto</Button></div></article>)}</section>

    <Dialog open={Boolean(viewer)} onOpenChange={(open) => !open && setViewer(null)}><DialogContent className="h-[85vh] max-w-5xl p-0"><DialogHeader className="border-b border-border px-6 py-4"><DialogTitle>{viewer?.title}</DialogTitle><DialogDescription>{viewer?.description}</DialogDescription></DialogHeader>{viewer && <iframe title={`Visor de ${viewer.title}`} src={`https://scratch.mit.edu/projects/${viewer.id}/embed`} allowFullScreen className="h-full min-h-0 w-full" />}</DialogContent></Dialog>
    <Dialog open={uploadOpen} onOpenChange={setUploadOpen}><DialogContent><DialogHeader><DialogTitle>Subir o asignar un proyecto</DialogTitle><DialogDescription>Comparte un archivo Scratch con un curso o deja una actividad lista para tus estudiantes.</DialogDescription></DialogHeader><div className="space-y-4"><Input placeholder="Título del proyecto" /><textarea className="min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring" placeholder="Instrucciones para el grupo" /><select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"><option>8° B · Programación creativa</option><option>6° A · Primeros pasos</option><option>Sin curso asignado</option></select><input ref={fileRef} type="file" accept=".sb3" className="hidden" /><Button variant="outline" className="w-full" onClick={() => fileRef.current?.click()}><Upload />Elegir archivo .sb3</Button>{assigned ? <div className="rounded-md bg-cyan-soft p-3 text-center text-sm font-bold">Proyecto preparado para el curso.</div> : <Button className="w-full" onClick={() => setAssigned(true)}><BookOpen />Guardar y asignar</Button>}</div></DialogContent></Dialog>
  </div>;
}