"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Code2,
  ExternalLink,
  Eye,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { categories, type Project, type ProjectCategory, projects } from "@/data/projects";

const contactLinks = [
  { label: "+92 309 4450465", href: "tel:+923094450465", icon: Phone },
  { label: "ahmarbaig1@gmail.com", href: "mailto:ahmarbaig1@gmail.com", icon: Mail },
  { label: "linkedin.com/in/ahmar2", href: "https://linkedin.com/in/ahmar2", icon: Linkedin },
];

function CategoryIcon({ category }: { category: ProjectCategory }) {
  if (category === "Restaurant") return <Sparkles className="h-3.5 w-3.5" />;
  if (category === "Commerce") return <Layers3 className="h-3.5 w-3.5" />;
  if (category === "Apps") return <MonitorSmartphone className="h-3.5 w-3.5" />;
  return <Code2 className="h-3.5 w-3.5" />;
}

function ContactPill({ href, label, icon: Icon }: (typeof contactLinks)[number]) {
  return (
    <a
      className="group inline-flex min-w-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs text-white/80 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white sm:text-sm"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon className="h-3.5 w-3.5 shrink-0 text-violet transition-colors group-hover:text-cyan" />
      <span className="truncate">{label}</span>
    </a>
  );
}

function ProjectCard({ project, index, onOpenGallery }: { project: Project; index: number; onOpenGallery: (project: Project) => void }) {
  const [expanded, setExpanded] = useState(false);
  const isGallery = Boolean(project.gallery?.length);

  return (
    <article
      className="project-card animate-fade-up group flex h-full flex-col overflow-hidden rounded-[1.25rem]"
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
    >
      <div className="relative aspect-[1.7/1] overflow-hidden bg-[#05060a]">
        <Image
          src={project.image}
          alt={`${project.name} project screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1120px) 50vw, 33vw"
          className="project-image object-cover object-top"
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b11] via-transparent to-transparent opacity-90" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#090b11]/55 px-3 py-1.5 text-[11px] text-cyan backdrop-blur-md">
          <CategoryIcon category={project.category} />
          <span className="mono-font tracking-[0.04em]">{project.tag}</span>
        </div>
        {isGallery && (
          <button
            type="button"
            onClick={() => onOpenGallery(project)}
            className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#090b11]/70 px-3 py-1.5 text-xs text-white backdrop-blur-md transition hover:border-cyan/50 hover:text-cyan"
          >
            <Eye className="h-3.5 w-3.5" />
            Gallery
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="display-font text-xl font-semibold tracking-[-0.02em] text-white">{project.name}</h3>
            <p className="mono-font mt-1 text-[11px] uppercase tracking-[0.12em] text-white/35">{project.category}</p>
          </div>
          {project.url ? <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-white/30 transition group-hover:text-cyan" /> : null}
        </div>

        <p className={`text-sm leading-7 text-white/55 transition-[max-height] duration-500 ${expanded ? "max-h-80" : "line-clamp-3 max-h-[5.25rem]"}`}>
          {project.description}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="inline-flex w-fit items-center gap-1 text-xs font-medium text-violet transition hover:text-cyan"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>

        <div className="mt-auto pt-1">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="button-gradient group/button relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold transition"
            >
              <span className="absolute inset-y-0 -left-1/2 w-2/5 -skew-x-12 bg-white/45 transition-all duration-700 group-hover/button:left-[130%]" />
              Preview project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onOpenGallery(project)}
              className="button-gradient group/button relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold transition"
            >
              View project gallery
              <Eye className="h-4 w-4 transition-transform group-hover/button:scale-110" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function GalleryModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const gallery = project?.gallery ?? [];

  useEffect(() => {
    setCurrent(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") setCurrent((value) => (value - 1 + gallery.length) % gallery.length);
      if (event.key === "ArrowRight") setCurrent((value) => (value + 1) % gallery.length);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [gallery.length, onClose, project]);

  if (!project || gallery.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05060a]/90 p-5 backdrop-blur-md sm:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} image gallery`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative flex h-[min(78vh,680px)] w-full max-w-5xl items-center justify-center">
        <Image
          src={gallery[current]}
          alt={`${project.name} screenshot ${current + 1}`}
          fill
          sizes="92vw"
          className="rounded-2xl border border-white/15 object-contain shadow-2xl"
          priority
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute right-0 top-0 z-10 inline-flex h-10 w-10 translate-y-[-3.5rem] items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white transition hover:rotate-90 hover:bg-white/15 sm:right-2"
        >
          <X className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => setCurrent((value) => (value - 1 + gallery.length) % gallery.length)}
          aria-label="Previous image"
          className="absolute left-0 z-10 inline-flex h-11 w-11 -translate-x-2 items-center justify-center rounded-full border border-white/15 bg-[#090b11]/75 text-white transition hover:border-cyan/50 hover:text-cyan sm:-translate-x-5"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => setCurrent((value) => (value + 1) % gallery.length)}
          aria-label="Next image"
          className="absolute right-0 z-10 inline-flex h-11 w-11 translate-x-2 items-center justify-center rounded-full border border-white/15 bg-[#090b11]/75 text-white transition hover:border-cyan/50 hover:text-cyan sm:translate-x-5"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-0 left-1/2 z-10 translate-x-[-50%] translate-y-10 rounded-full border border-white/10 bg-[#090b11]/65 px-3 py-1 text-xs text-white/60 backdrop-blur-md">
          {current + 1} / {gallery.length}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [search, setSearch] = useState("");
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch = !query || `${project.name} ${project.tag} ${project.description}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const closeGallery = useCallback(() => setGalleryProject(null), []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="grid-background absolute inset-0 opacity-90" />
        <div className="absolute -left-40 -top-48 h-[34rem] w-[34rem] animate-[float-a_22s_ease-in-out_infinite] rounded-full bg-violet/30 blur-[110px]" />
        <div className="absolute -right-48 top-24 h-[30rem] w-[30rem] animate-[float-b_26s_ease-in-out_infinite] rounded-full bg-cyan/20 blur-[110px]" />
        <div className="absolute bottom-[-16rem] left-[35%] h-[28rem] w-[28rem] animate-[float-c_30s_ease-in-out_infinite] rounded-full bg-amber/15 blur-[110px]" />
        <div className="noise-background absolute inset-0 opacity-[0.035] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 pb-20 pt-5 sm:px-8 sm:pt-7 lg:px-10 lg:pb-28">
        <nav className="flex items-center justify-between" aria-label="Primary navigation">
          <a href="#top" className="group inline-flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="display-font flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-sm font-semibold text-white shadow-glow transition group-hover:border-cyan/40">
              AB
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-white/80 sm:block">Mirza Ahmar Baig</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/55 md:flex">
            <a className="transition hover:text-white" href="#work">Work</a>
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
            <a href="mailto:ahmarbaig1@gmail.com" className="button-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition">
              Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="glass-panel mt-4 grid gap-1 rounded-2xl p-2 md:hidden">
            {["work", "about", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm capitalize text-white/70 transition hover:bg-white/[0.06] hover:text-white">
                {item}
              </a>
            ))}
          </div>
        )}

        <section id="top" className="grid gap-12 pb-24 pt-20 sm:pb-32 sm:pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20 lg:pt-36">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.06] px-3 py-1.5 text-xs text-cyan">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" /></span>
              Available for freelance work
            </div>
            <p className="mono-font animate-fade-up animation-delay-100 mt-7 text-xs uppercase tracking-[0.18em] text-white/40">MERN developer · Lahore, Pakistan</p>
            <h1 className="display-font animate-fade-up animation-delay-200 mt-5 max-w-4xl text-[clamp(3.3rem,8.2vw,7rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-white">
              Digital work with <span className="text-gradient">real momentum.</span>
            </h1>
            <p className="animate-fade-up animation-delay-300 mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
              I build polished, responsive websites, commerce experiences, dashboards, and web apps that make complex products feel simple.
            </p>
            <div className="animate-fade-up animation-delay-300 mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="button-gradient inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition">
                Explore selected work <ArrowDown className="h-4 w-4" />
              </a>
              <a href="mailto:ahmarbaig1@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white">
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="animate-fade-up animation-delay-200 lg:pb-2">
            <div className="glass-panel relative overflow-hidden rounded-[1.6rem] p-5 sm:p-7">
              <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-violet/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="mono-font text-[11px] uppercase tracking-[0.15em] text-white/40">profile / 001</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-amber"><Sparkles className="h-3.5 w-3.5" /> open to good work</span>
                </div>
                <div className="py-7">
                  <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Mirza Ahmar Baig</div>
                  <p className="mt-2 text-sm text-white/50">Frontend &amp; MERN Developer</p>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4"><div className="mono-font text-2xl text-cyan">{projects.length}</div><div className="mt-1 text-xs text-white/40">projects shipped</div></div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4"><div className="mono-font text-2xl text-violet">4</div><div className="mt-1 text-xs text-white/40">focus areas</div></div>
                  </div>
                </div>
                <div className="grid gap-3 border-t border-white/10 pt-5 text-sm text-white/65 sm:grid-cols-2">
                  <div className="flex items-center gap-2"><Code2 className="h-4 w-4 text-violet" /> React · Next.js · Node</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan" /> Lahore, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid scroll-mt-8 gap-5 border-y border-white/10 py-7 sm:grid-cols-3 sm:gap-0">
          <div className="flex items-start gap-3 border-white/10 sm:border-r sm:px-7 sm:first:pl-0"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /><div><div className="text-sm font-medium text-white">Frontend craft</div><div className="mt-1 text-xs leading-5 text-white/40">Interfaces that feel fast, clear, and intentional.</div></div></div>
          <div className="flex items-start gap-3 border-white/10 sm:border-r sm:px-7"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /><div><div className="text-sm font-medium text-white">Business-minded builds</div><div className="mt-1 text-xs leading-5 text-white/40">Commerce, food, operations, and content workflows.</div></div></div>
          <div className="flex items-start gap-3 sm:pl-7"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /><div><div className="text-sm font-medium text-white">Responsive by default</div><div className="mt-1 text-xs leading-5 text-white/40">A polished experience from phone to desktop.</div></div></div>
        </section>

        <section id="work" className="scroll-mt-8 pb-24 pt-24 sm:pb-32 sm:pt-32">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mono-font mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/35"><span className="h-px w-7 bg-gradient-to-r from-violet to-cyan" /> selected work</div>
              <h2 className="display-font text-5xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-7xl">A few things I&apos;ve <span className="text-gradient">built.</span></h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/50">A selection of websites, platforms, dashboards, and applications from my frontend and MERN development journey.</p>
            </div>
            <div className="relative w-full lg:max-w-xs">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects..." aria-label="Search projects" className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan/40 focus:ring-2 focus:ring-cyan/10" />
            </div>
          </div>

          <div className="mt-9 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const active = category === activeCategory;
              return <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition ${active ? "border-cyan/45 bg-cyan/[0.1] text-cyan" : "border-white/10 bg-white/[0.025] text-white/45 hover:border-white/25 hover:text-white"}`}>{category}<span className="mono-font text-[10px] opacity-60">{category === "All" ? projects.length : projects.filter((project) => project.category === category).length}</span></button>;
            })}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpenGallery={setGalleryProject} />)}
            </div>
          ) : (
            <div className="glass-panel mt-8 rounded-2xl p-10 text-center"><p className="text-white/70">No projects match that search.</p><button type="button" onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-4 text-sm text-cyan hover:underline">Clear filters</button></div>
          )}
        </section>

        <section id="contact" className="scroll-mt-8 border-t border-white/10 py-20 sm:py-28">
          <div className="glass-panel relative overflow-hidden rounded-[1.6rem] p-7 sm:p-12 lg:p-16">
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan/15 blur-[90px]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="mono-font mb-4 text-xs uppercase tracking-[0.16em] text-cyan">have a project in mind?</div>
                <h2 className="display-font max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl">Let&apos;s make something <span className="text-gradient">worth using.</span></h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/50">Tell me what you&apos;re building, what feels stuck, or where the next version needs to go. I&apos;d love to hear about it.</p>
              </div>
              <a href="mailto:ahmarbaig1@gmail.com" className="button-gradient inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition">Email me <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap gap-2.5">{contactLinks.map((link) => <ContactPill key={link.href} {...link} />)}</div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mirza Ahmar Baig. Built with Next.js.</span>
          <div className="flex items-center gap-4"><a href="https://linkedin.com/in/ahmar2" target="_blank" rel="noreferrer" className="transition hover:text-cyan"><Linkedin className="h-4 w-4" /></a><a href="mailto:ahmarbaig1@gmail.com" className="transition hover:text-cyan"><Mail className="h-4 w-4" /></a><a href="#top" className="inline-flex items-center gap-1 transition hover:text-white">Back to top <ArrowDown className="h-3.5 w-3.5 rotate-180" /></a></div>
        </footer>
      </div>

      <GalleryModal project={galleryProject} onClose={closeGallery} />
    </main>
  );
}
