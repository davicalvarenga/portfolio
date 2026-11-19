import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { primaryButton, secondaryButton } from "../components/buttonStyles";
import { projects } from "../data/projects";
import { profile, socials, stats } from "../data/profile";

const Home = () => {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Apresentação */}
      <section className="grid items-end gap-12 border-b border-line pt-16 pb-14 md:grid-cols-[1.6fr_1fr] md:gap-16 md:pt-24 md:pb-16">
        <div>
          <h1 className="font-serif text-[clamp(3.75rem,11vw,6.75rem)] leading-[0.95] font-medium tracking-[-0.03em]">
            Davi
            <br />
            Alvarenga<span className="text-accent">.</span>
          </h1>
          <p className="mt-7 max-w-2xl font-serif text-2xl leading-snug md:text-[1.75rem]">
            Automatizo o suporte de TI com{" "}
            <em className="text-accent">n8n e APIs REST</em> e construo aplicações web em
            React e TypeScript.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projetos" className={primaryButton}>
              Ver projetos →
            </Link>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-[15px] text-muted">
          <p className="flex items-start gap-2 font-semibold text-ok">
            <span aria-hidden="true" className="mt-2 size-1.5 flex-none rounded-full bg-ok" />
            {profile.goal}
          </p>
          <p>
            {profile.role.split(" · ").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p>{profile.location}</p>
        </div>
      </section>

      {/* Números */}
      <section aria-label="Números" className="grid grid-cols-2 border-b border-line md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-8 ${i % 2 === 1 ? "border-l border-line pl-6" : "pr-6"} ${
              i > 1 ? "border-t border-line md:border-t-0" : ""
            } ${i > 0 ? "md:border-l md:pl-6" : ""}`}
          >
            <p className="font-serif text-5xl leading-none font-medium md:text-6xl">{s.value}</p>
            <p className="mt-3 text-sm leading-snug text-muted">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Projetos em destaque */}
      <section aria-labelledby="destaques" className="pt-20 md:pt-24">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 id="destaques" className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Projetos selecionados
          </h2>
          <Link to="/projetos" className="text-sm font-semibold whitespace-nowrap text-accent hover:underline">
            Todos →
          </Link>
        </div>
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </section>

      {/* Contato */}
      <section
        aria-labelledby="contato-cta"
        className="mt-12 flex flex-col gap-8 border-t border-line py-20 md:flex-row md:items-end md:justify-between"
      >
        <h2
          id="contato-cta"
          className="font-serif text-6xl leading-none font-medium tracking-[-0.03em] md:text-7xl"
        >
          Vamos
          <br />
          conversar<span className="text-accent">?</span>
        </h2>
        <Link to="/contato" className={`${primaryButton} self-start md:self-auto`}>
          Entrar em contato →
        </Link>
      </section>
    </>
  );
};

export default Home;
