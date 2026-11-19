import { Link } from "react-router-dom";
import ProjectVisual from "./ProjectVisual";
import StatusBadge from "./StatusBadge";

// Bloco de projeto (Home e /projetos): visual + texto, alternando o lado a cada item.
const ProjectCard = ({ project, index = 0 }) => {
  const reversed = index % 2 === 1;

  return (
    <article className="group relative grid items-center gap-8 border-t border-line py-12 md:grid-cols-[1.25fr_1fr] md:gap-14">
      <ProjectVisual project={project} className={reversed ? "md:order-2" : ""} />
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="font-serif text-xl text-accent italic">{project.number}</span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="mt-2 font-serif text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
          <Link
            to={`/projetos/${project.slug}`}
            className="transition-colors group-hover:text-accent before:absolute before:inset-0"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="text-fg/80">{project.tags.join(" · ")}</span>
          <span className="font-semibold text-accent">Ver projeto →</span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
