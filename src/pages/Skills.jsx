import {
  certifications,
  education,
  experience,
  languages,
  profile,
  skillGroups,
} from "../data/profile";

const Section = ({ id, title, children }) => (
  <section
    aria-labelledby={id}
    className="grid gap-6 border-t border-line py-12 md:grid-cols-[14rem_1fr] md:gap-10"
  >
    <h2 id={id} className="font-serif text-3xl font-medium tracking-tight">
      {title}
    </h2>
    <div>{children}</div>
  </section>
);

const Bullet = ({ children }) => (
  <li className="flex gap-3 leading-relaxed text-fg/90">
    <span aria-hidden="true" className="text-accent">
      —
    </span>
    <span>{children}</span>
  </li>
);

const Skills = () => {
  return (
    <div className="py-16 md:py-24">
      <header className="max-w-3xl">
        <h1 className="font-serif text-5xl leading-[1.02] font-medium tracking-[-0.03em] md:text-7xl">
          Habilidades e experiência<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 font-serif text-xl leading-snug text-fg/90 md:text-2xl">
          {profile.bio}
        </p>
      </header>

      <div className="mt-14">
        <Section id="competencias" title="Competências">
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-[12rem_1fr]">
            {skillGroups.map((group) => (
              <div key={group.title} className="contents">
                <dt className="font-semibold text-fg">{group.title}</dt>
                <dd>
                  <p className="text-fg/90">{group.items.join(" · ")}</p>
                  <p className="mt-1 text-sm text-muted">{group.desc}</p>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experiencia" title="Experiência">
          <ol className="flex flex-col gap-12">
            {experience.map((job) => (
              <li key={job.company}>
                <p className="text-sm text-muted">{job.period}</p>
                <h3 className="mt-1 font-serif text-2xl font-medium">{job.title}</h3>
                <p className="text-accent">{job.company}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {job.highlights.map((h) => (
                    <Bullet key={h}>{h}</Bullet>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="formacao" title="Formação">
          <p className="text-sm text-muted">{education.period}</p>
          <h3 className="mt-1 font-serif text-2xl font-medium">{education.title}</h3>
          <p className="text-accent">{education.institution}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-fg/90">{education.desc}</p>
          <p className="mt-6 text-sm text-muted">Idiomas</p>
          <p className="mt-1 text-fg/90">{languages}</p>
        </Section>

        <Section id="certificacoes" title="Certificações">
          <ul className="flex flex-col gap-2">
            {certifications.map((c) => (
              <Bullet key={c}>{c}</Bullet>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default Skills;
