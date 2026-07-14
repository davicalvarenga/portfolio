import { Link, useParams } from "react-router-dom";
import ProjectVisual from "../components/ProjectVisual";
import { getProjectBySlug } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="pt-[140px] px-margin-mobile md:px-margin-desktop pb-24 text-center">
        <h1 className="font-sans text-headline text-primary mb-4 uppercase">
          Arquivo não encontrado
        </h1>
        <p className="text-body-lg text-on-surface-variant mb-8">
          O projeto "{slug}" não existe no arquivo tático.
        </p>
        <Link
          to="/projetos"
          className="inline-block px-8 py-3 bg-primary-container text-on-primary-container font-accent text-label-caps uppercase -skew-x-12 border-2 border-primary"
        >
          <span className="inline-block skew-x-12">Voltar aos Projetos</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[104px]">
      {/* Hero */}
      <header className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-gutter items-end border-b-2 border-outline-variant relative">
        <div className="md:col-span-8 z-10">
          <div className="bg-secondary-container text-on-secondary-container inline-block px-2 py-1 mb-6 font-accent text-label-caps uppercase">
            {project.tagline}
          </div>
          <h1 className="font-sans text-display-mobile md:text-display-lg text-on-surface mb-6 uppercase tracking-tighter leading-none">
            {project.title}
          </h1>
          <p className="font-sans text-headline text-on-surface-variant max-w-3xl">
            {project.description}
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col md:items-end gap-4 z-10 mt-8 md:mt-0">
          <button
            type="button"
            className="w-full md:w-auto bg-primary-container text-white px-12 py-4 font-accent text-label-caps uppercase tracking-widest hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 flex items-center justify-center gap-2 group -skew-x-12 shadow-[0_0_20px_rgba(119,1,208,0.5)]"
          >
            <span className="skew-x-12 font-bold italic flex items-center gap-2">
              Live Demo
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </span>
          </button>
          <button
            type="button"
            className="w-full md:w-auto border-4 border-primary-container text-on-surface px-8 py-4 font-accent text-label-caps uppercase tracking-widest hover:border-secondary hover:text-secondary transition-colors duration-300 flex items-center justify-center gap-2 skew-x-12"
          >
            <span className="-skew-x-12 font-bold italic flex items-center gap-2">
              <span className="material-symbols-outlined">code</span>
              Source Code
            </span>
          </button>
        </div>
      </header>

      {/* Media hero */}
      <section className="px-margin-mobile md:px-margin-desktop py-12">
        <div className="relative bg-surface-container-highest border border-outline-variant p-2 md:p-4 shadow-[4px_4px_0_0_#dcb8ff]">
          <ProjectVisual icon={project.icon} className="w-full aspect-video" />
          <div className="absolute bottom-4 right-4 bg-surface text-secondary-fixed-dim px-3 py-1 font-accent text-accent-italic border border-secondary-fixed-dim">
            SYS.ACTIVE
          </div>
        </div>
      </section>

      {/* Content grid */}
      <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-7 flex flex-col gap-16">
          <div>
            <h2 className="font-sans text-headline text-primary mb-6 flex items-center gap-4">
              <span className="text-secondary-container font-sans text-display-mobile leading-none">01</span>
              O Desafio
            </h2>
            <div className="bg-surface-container-low border-t-2 border-primary-container p-6 md:p-8">
              <p>{project.challenge}</p>
            </div>
          </div>
          <div>
            <h2 className="font-sans text-headline text-primary mb-6 flex items-center gap-4">
              <span className="text-secondary-container font-sans text-display-mobile leading-none">02</span>
              A Solução
            </h2>
            <div className="bg-surface-container-low border-t-2 border-secondary-container p-6 md:p-8">
              <p>{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9 flex flex-col gap-12 mt-12 md:mt-0">
          <div className="bg-surface-container p-6 border-l-4 border-secondary-fixed-dim">
            <h3 className="font-accent text-label-caps text-on-surface-variant uppercase tracking-widest mb-6">
              Implementação Técnica
            </h3>
            <ul className="flex flex-col gap-4">
              {project.techStack.map((tech, i) => (
                <li
                  key={tech.name}
                  className={`flex items-start gap-3 ${
                    i < project.techStack.length - 1 ? "border-b border-outline-variant/50 pb-4" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-secondary-fixed-dim mt-1">
                    {tech.icon}
                  </span>
                  <div>
                    <div className="font-bold text-on-surface">{tech.name}</div>
                    <div className="text-sm text-on-surface-variant">{tech.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
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
            to="/projetos"
            className="font-accent text-label-caps text-secondary-container hover:text-primary transition-colors flex items-center gap-2 uppercase"
          >
            <span className="material-symbols-outlined text-sm rotate-180">arrow_forward</span>
            Voltar ao arquivo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
