import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

// Item de lista de projeto (Home e /projetos). A linha inteira é clicável.
const ProjectCard = ({ project }) => {
  return (
    <article className="group relative grid gap-x-6 gap-y-2 border-t border-line py-6 sm:grid-cols-[2.5rem_1fr_auto]">
      <span className="hidden font-mono text-sm text-faint sm:block">{project.number}</span>
      <div className="min-w-0">
        <h3 className="font-mono text-lg font-medium text-fg">
          <Link
            to={`/projetos/${project.slug}`}
            className="group-hover:text-accent transition-colors before:absolute before:inset-0"
          >
            {project.slug}/
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted">{project.title}</p>
        <p className="mt-3 max-w-2xl leading-relaxed text-fg/90">{project.summary}</p>
        <p className="mt-3 font-mono text-xs text-muted">{project.tags.join(" · ")}</p>
      </div>
      <div className="sm:pt-1.5">
        <StatusBadge status={project.status} />
      </div>
    </article>
  );
};

export default ProjectCard;
