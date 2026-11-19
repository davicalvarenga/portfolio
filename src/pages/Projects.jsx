import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Prompt from "../components/Prompt";
import { categories, projects } from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="py-16 md:py-20">
      <header>
        <Prompt cmd="ls -l projetos/" />
        <h1 className="mt-6 font-mono text-3xl font-semibold tracking-tight md:text-4xl">
          Projetos
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
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
              className={`border px-3 py-1 font-mono text-sm transition-colors ${
                active
                  ? "border-accent text-accent"
                  : "border-line text-muted hover:border-faint hover:text-fg"
              }`}
            >
              {cat.label.toLowerCase()}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <p className="border-t border-line py-10 font-mono text-sm text-muted">
            nenhum projeto nesta categoria ainda.
          </p>
        ) : (
          <div className="border-b border-line">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
