import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { categories, projects } from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="py-16 md:py-24">
      <header className="max-w-3xl">
        <h1 className="font-serif text-5xl font-medium tracking-[-0.03em] md:text-7xl">
          Projetos<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 font-serif text-xl leading-snug text-fg/90 md:text-2xl">
          Automações em produção, ferramentas open source e projetos full stack: das
          integrações de APIs REST com n8n às interfaces em React e Next.js.
        </p>
      </header>

      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
        {categories.map((cat) => {
          const active = filter === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(cat.value)}
              className={`border-[1.5px] px-4 py-1.5 text-sm font-semibold transition-colors ${
                active
                  ? "border-fg bg-fg text-bg"
                  : "border-line text-muted hover:border-fg hover:text-fg"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        {filtered.length === 0 ? (
          <p className="border-t border-line py-12 text-muted">
            Nenhum projeto nesta categoria ainda.
          </p>
        ) : (
          filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
