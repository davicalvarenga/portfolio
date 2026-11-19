import { Link, useParams } from "react-router-dom";
import ProjectVisual from "../components/ProjectVisual";
import StatusBadge from "../components/StatusBadge";
import { primaryButton, secondaryButton } from "../components/buttonStyles";
import { getProjectBySlug } from "../data/projects";
import NotFound from "./NotFound";

const Section = ({ number, title, children }) => (
  <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[14rem_1fr] md:gap-10">
    <h2 className="font-serif text-2xl font-medium">
      <span className="mr-3 text-lg text-accent italic">{number}</span>
      {title}
    </h2>
    <div>{children}</div>
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFound />;

  const { demo, repos } = project.links;

  return (
    <article className="py-14 md:py-20">
      <Link to="/projetos" className="text-sm text-muted hover:text-fg">
        ← Projetos
      </Link>

      <header className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-end md:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="text-muted">{project.tagline}</span>
            <StatusBadge status={project.status} />
          </div>
          <h1 className="mt-4 font-serif text-5xl leading-[1.02] font-medium tracking-[-0.03em] md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl leading-snug text-fg/90 md:text-2xl">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className={primaryButton}>
              Abrir demo ↗
            </a>
          )}
          {repos.map((repo) => (
            <a
              key={repo.href}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButton}
            >
              {repo.label} ↗
            </a>
          ))}
          {!demo && repos.length === 0 && (
            <p className="text-sm text-muted">Código privado · demonstração sob solicitação</p>
          )}
        </div>
      </header>

      <ProjectVisual project={project} className="mt-14" />

      <div className="mt-14">
        <Section number="01" title="O problema">
          <p className="max-w-2xl text-lg leading-relaxed text-fg/90">{project.challenge}</p>
        </Section>
        <Section number="02" title="A solução">
          <p className="max-w-2xl text-lg leading-relaxed text-fg/90">{project.solution}</p>
        </Section>
        <Section number="03" title="Stack">
          <dl className="grid max-w-2xl gap-x-8 gap-y-4 sm:grid-cols-[11rem_1fr]">
            {project.techStack.map((tech) => (
              <div key={tech.name} className="contents">
                <dt className="font-semibold text-fg">{tech.name}</dt>
                <dd className="leading-relaxed text-muted">{tech.desc}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>
    </article>
  );
};

export default ProjectDetail;
