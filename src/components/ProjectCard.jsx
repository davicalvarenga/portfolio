import { Link } from "react-router-dom";
import ProjectVisual from "./ProjectVisual";

const ProjectCard = ({ project }) => {
  return (
    <article className="relative group h-full">
      <div className="absolute inset-0 border-2 border-primary-container translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300 pointer-events-none z-0" />
      <div className="relative bg-surface p-8 border border-outline-variant z-10 h-full flex flex-col group-hover:border-secondary-container transition-colors duration-300">
        <div className="flex justify-between items-start mb-6">
          <span className="font-accent text-label-caps text-secondary-container bg-surface-container-highest px-3 py-1 border border-outline-variant uppercase">
            {project.status}
          </span>
          <span className="font-sans text-headline text-outline-variant">{project.number}</span>
        </div>
        <ProjectVisual icon={project.icon} className="w-full h-48 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" />
        <h3 className="font-sans text-headline text-primary mb-3">{project.title}</h3>
        <p className="text-body-lg text-on-surface-variant flex-grow mb-6">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary-container text-on-primary-container font-accent text-label-caps px-4 py-1 border-2 border-primary -skew-x-12 font-black italic uppercase"
            >
              <span className="inline-block skew-x-12">{tag}</span>
            </span>
          ))}
        </div>
        <Link
          to={`/projetos/${project.slug}`}
          className="self-start px-6 py-2 bg-primary-container text-on-primary-container font-accent text-label-caps -skew-x-12 border-2 border-secondary-fixed-dim shadow-[0_0_10px_rgba(119,1,208,0.3)] hover:shadow-[0_0_20px_rgba(119,1,208,0.6)] transition-all duration-300 uppercase tracking-widest"
        >
          <span className="inline-block skew-x-12">Ver Projeto</span>
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
