import Prompt from "../components/Prompt";
import { certifications, education, experience, languages, skillGroups } from "../data/profile";

const SectionTitle = ({ id, children }) => (
  <h2 id={id} className="font-mono text-sm text-accent">
    <span className="text-faint">## </span>
    {children}
  </h2>
);

const Skills = () => {
  return (
    <div className="py-16 md:py-20">
      <header>
        <Prompt cmd="cat habilidades.md" />
        <h1 className="mt-6 font-mono text-3xl font-semibold tracking-tight md:text-4xl">
          Habilidades e experiência
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Automação e integração de APIs no dia a dia do estágio; desenvolvimento web nos
          projetos pessoais e acadêmicos.
        </p>
      </header>

      {/* Competências */}
      <section className="mt-12 border-t border-line py-8" aria-labelledby="competencias">
        <SectionTitle id="competencias">competências</SectionTitle>
        <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-[12rem_1fr]">
          {skillGroups.map((group) => (
            <div key={group.title} className="contents">
              <dt className="font-mono text-sm text-fg">{group.title}</dt>
              <dd>
                <p className="font-mono text-sm text-fg/90">{group.items.join(" · ")}</p>
                <p className="mt-1 text-sm text-muted">{group.desc}</p>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Experiência */}
      <section className="border-t border-line py-8" aria-labelledby="experiencia">
        <SectionTitle id="experiencia">experiência</SectionTitle>
        <ol className="mt-6 flex flex-col gap-10">
          {experience.map((job) => (
            <li key={job.company} className="grid gap-x-8 gap-y-2 sm:grid-cols-[12rem_1fr]">
              <p className="font-mono text-sm text-muted">{job.period}</p>
              <div>
                <h3 className="font-medium text-fg">{job.title}</h3>
                <p className="font-mono text-sm text-muted">{job.company}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-fg/90">
                      <span aria-hidden="true" className="font-mono text-faint">
                        -
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Formação */}
      <section className="border-t border-line py-8" aria-labelledby="formacao">
        <SectionTitle id="formacao">formação</SectionTitle>
        <div className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-[12rem_1fr]">
          <p className="font-mono text-sm text-muted">{education.period}</p>
          <div>
            <h3 className="font-medium text-fg">{education.title}</h3>
            <p className="font-mono text-sm text-muted">{education.institution}</p>
            <p className="mt-4 text-sm leading-relaxed text-fg/90">{education.desc}</p>
          </div>
        </div>
      </section>

      {/* Idiomas e certificações */}
      <section className="border-t border-line py-8" aria-labelledby="certificacoes">
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-[12rem_1fr]">
          <div>
            <SectionTitle id="idiomas">idiomas</SectionTitle>
            <p className="mt-4 text-sm text-fg/90">{languages}</p>
          </div>
          <div>
            <SectionTitle id="certificacoes">certificações</SectionTitle>
            <ul className="mt-4 flex flex-col gap-2">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-fg/90">
                  <span aria-hidden="true" className="font-mono text-faint">
                    -
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
