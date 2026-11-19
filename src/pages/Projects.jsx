import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { categories, projects } from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-[100px] px-margin-mobile md:px-margin-desktop pb-24 max-w-[1920px] mx-auto">
      <header className="mb-16 md:grid md:grid-cols-12 gap-gutter items-end mt-12">
        <div className="md:col-span-7">
          <h1 className="font-sans text-display-mobile md:text-display-lg text-on-surface mb-4 uppercase">
            Selected <br />
            <span className="text-secondary-fixed-dim italic">Works_</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Automações em produção, ferramentas open source e projetos full stack: das
            integrações de APIs REST com n8n às interfaces em React e Next.js.
          </p>
        </div>
        <div className="md:col-span-5 mt-8 md:mt-0 flex flex-wrap gap-4 md:justify-end">
          {categories.map((cat) => {
            const active = filter === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 font-accent text-label-caps uppercase border-2 -skew-x-12 transition-colors ${
                  active
                    ? "bg-secondary-fixed-dim text-on-secondary-fixed border-secondary-fixed-dim shadow-[0_0_25px_rgba(119,1,208,0.6)]"
                    : "bg-transparent text-on-surface border-outline-variant hover:border-secondary-fixed-dim hover:text-secondary-fixed-dim"
                }`}
              >
                <span className="inline-block skew-x-12">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {filtered.length === 0 ? (
        <p className="text-body-lg text-on-surface-variant text-center py-24">
          Nenhum projeto encontrado nessa categoria ainda.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
