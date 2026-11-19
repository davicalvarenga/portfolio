import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Prompt from "../components/Prompt";
import { primaryButton, secondaryButton } from "../components/buttonStyles";
import { projects } from "../data/projects";
import { profile, socials } from "../data/profile";

const Home = () => {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Apresentação */}
      <section className="py-16 md:py-24">
        <Prompt cmd="cat sobre.md" caret />
        <h1 className="mt-8 font-mono text-4xl font-semibold tracking-tight text-fg md:text-5xl">
          {profile.shortName}
        </h1>
        <p className="mt-3 font-mono text-sm text-muted">{profile.role}</p>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg/90">{profile.bio}</p>

        <p className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-ok">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-ok" />
          {profile.goal}
        </p>
        <p className="mt-1 font-mono text-sm text-muted">{profile.location}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/projetos" className={primaryButton}>
            ver projetos →
          </Link>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButton}
            >
              {s.label.toLowerCase()} ↗
            </a>
          ))}
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="pb-16 md:pb-24" aria-labelledby="destaques">
        <Prompt cmd="ls projetos/" />
        <div className="mt-4 mb-2 flex items-baseline justify-between gap-4">
          <h2 id="destaques" className="font-mono text-xl font-medium">
            Projetos em destaque
          </h2>
          <Link to="/projetos" className="font-mono text-sm text-accent hover:underline">
            todos →
          </Link>
        </div>
        <div className="border-b border-line">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="pb-24" aria-labelledby="contato-cta">
        <Prompt cmd="./contato.sh" />
        <h2 id="contato-cta" className="mt-4 font-mono text-xl font-medium">
          Vamos conversar?
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          Estou buscando estágio ou vaga júnior em desenvolvimento. Se o meu perfil fizer
          sentido para o seu time, fale comigo.
        </p>
        <Link to="/contato" className={`${secondaryButton} mt-6`}>
          entrar em contato →
        </Link>
      </section>
    </>
  );
};

export default Home;
