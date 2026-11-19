import { Link, useParams } from "react-router-dom";
import Prompt from "../components/Prompt";
import StatusBadge from "../components/StatusBadge";
import { primaryButton, secondaryButton } from "../components/buttonStyles";
import { getProjectBySlug } from "../data/projects";
import NotFound from "./NotFound";

const Section = ({ title, children }) => (
  <section className="border-t border-line py-8">
    <h2 className="font-mono text-sm text-accent">
      <span className="text-faint">## </span>
      {title}
    </h2>
    <div className="mt-4">{children}</div>
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFound />;

  const { demo, repos } = project.links;

  return (
    <article className="py-16 md:py-20">
      <Link to="/projetos" className="font-mono text-sm text-muted hover:text-accent">
        ← projetos
      </Link>

      <header className="mt-8">
        <Prompt cmd={`cat projetos/${project.slug}/README.md`} />
        <h1 className="mt-6 font-mono text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-mono text-sm text-muted">{project.tagline}</span>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg/90">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className={primaryButton}>
              abrir demo ↗
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
              {repo.label.toLowerCase()} ↗
            </a>
          ))}
          {!demo && repos.length === 0 && (
            <p className="font-mono text-sm text-muted">
              código privado · demonstração sob solicitação
            </p>
          )}
        </div>
      </header>

      <div className="mt-12">
        <Section title="o problema">
          <p className="max-w-2xl leading-relaxed text-fg/90">{project.challenge}</p>
        </Section>
        <Section title="a solução">
          <p className="max-w-2xl leading-relaxed text-fg/90">{project.solution}</p>
        </Section>
        <Section title="stack">
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-[12rem_1fr]">
            {project.techStack.map((tech) => (
              <div key={tech.name} className="contents">
                <dt className="font-mono text-sm text-fg">{tech.name}</dt>
                <dd className="text-sm leading-relaxed text-muted">{tech.desc}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>
    </article>
  );
};

export default ProjectDetail;
