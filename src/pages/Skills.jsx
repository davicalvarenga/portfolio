import { certifications, education, experience, languages, skillGroups } from "../data/profile";

const tools = [
  { icon: "account_tree", label: "n8n" },
  { icon: "terminal", label: "Git / CLI" },
  { icon: "cloud_sync", label: "Docker" },
  { icon: "rocket_launch", label: "Vercel" },
  { icon: "monitor_heart", label: "Zabbix" },
  { icon: "support_agent", label: "GLPI" },
];

const SkillGroup = ({ title, items, desc, index }) => (
  <div
    className={`bg-surface-container-low p-6 md:p-8 offset-frame flex flex-col gap-6 z-10 ${
      index % 2 === 0 ? "md:rotate-1" : "md:-rotate-1"
    }`}
  >
    <div className="flex items-center justify-between border-b-2 border-outline-variant pb-4">
      <h2 className="font-accent text-accent-italic text-primary uppercase">{title}</h2>
      <span className="font-accent text-label-caps text-outline-variant">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="bg-surface border border-outline-variant px-3 py-1 font-accent text-label-caps text-on-surface"
        >
          {item}
        </li>
      ))}
    </ul>
    <p className="text-sm text-on-surface-variant">{desc}</p>
  </div>
);

const Skills = () => {
  return (
    <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full relative">
      <header className="mb-16 md:col-span-12 grid grid-cols-4 md:grid-cols-12 gap-gutter">
        <div className="col-span-4 md:col-span-8 relative">
          <h1 className="font-sans text-display-mobile md:text-display-lg text-primary uppercase relative z-10 leading-none">
            Tactical <br /> <span className="text-secondary-container">Dossier</span>
          </h1>
          <div className="absolute -left-4 -top-4 text-outline opacity-20 font-sans text-[120px] leading-none pointer-events-none z-0 hidden md:block">
            03
          </div>
        </div>
        <div className="col-span-4 md:col-span-4 flex items-end">
          <p className="text-body-lg text-on-surface-variant border-l-4 border-secondary-container pl-4">
            Competências, experiência e formação: automação e integrações de APIs no dia a dia
            do estágio, desenvolvimento web nos projetos pessoais.
          </p>
        </div>
      </header>

      {/* Competências */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mb-24">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.title} {...group} index={i} />
        ))}
      </section>

      <section className="bg-surface-container-low p-6 md:p-8 offset-frame mb-24 flex flex-col md:flex-row gap-8 items-center border-l-8 border-secondary-container">
        <div className="md:w-1/3">
          <h2 className="font-accent text-accent-italic text-primary uppercase mb-2">Tactical_Gear</h2>
          <p className="text-on-surface-variant text-body-lg">
            Ferramentas usadas no trabalho e nos projetos.
          </p>
        </div>
        <div className="md:w-2/3 flex flex-wrap gap-4">
          {tools.map((tool) => (
            <div
              key={tool.label}
              className="bg-surface border border-outline-variant p-4 flex items-center gap-3 w-[140px]"
            >
              <span className="material-symbols-outlined text-secondary-container">{tool.icon}</span>
              <span className="font-accent text-label-caps">{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experiência */}
      <section className="mb-24">
        <h2 className="font-sans text-headline text-primary uppercase flex items-center gap-4 border-b-2 border-outline-variant pb-6 mb-12">
          <span className="text-outline-variant font-accent text-label-caps">Sec. 02</span>
          Experiência
        </h2>
        <ol className="flex flex-col gap-12">
          {experience.map((job) => (
            <li key={job.company} className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div className="md:col-span-3 font-accent text-label-caps text-secondary-fixed-dim uppercase">
                {job.period}
              </div>
              <div className="md:col-span-9 border-l-4 border-primary-container pl-6">
                <h3 className="text-body-lg font-bold text-on-surface">{job.title}</h3>
                <p className="font-accent text-label-caps text-on-surface-variant uppercase mb-4">
                  {job.company}
                </p>
                <ul className="flex flex-col gap-2 list-disc pl-5 text-on-surface-variant">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Formação, idiomas e certificações */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-surface-container p-6 md:p-8 border-l-4 border-secondary-fixed-dim">
          <h2 className="font-accent text-label-caps text-on-surface-variant uppercase tracking-widest mb-6">
            Formação
          </h2>
          <p className="font-accent text-label-caps text-secondary-fixed-dim uppercase mb-2">
            {education.period}
          </p>
          <h3 className="text-body-lg font-bold text-on-surface">{education.title}</h3>
          <p className="text-on-surface-variant mb-4">{education.institution}</p>
          <p className="text-sm text-on-surface-variant">{education.desc}</p>
          <h2 className="font-accent text-label-caps text-on-surface-variant uppercase tracking-widest mt-8 mb-2">
            Idiomas
          </h2>
          <p className="text-on-surface">{languages}</p>
        </div>

        <div className="bg-surface-container p-6 md:p-8 border-l-4 border-secondary-fixed-dim">
          <h2 className="font-accent text-label-caps text-on-surface-variant uppercase tracking-widest mb-6">
            Certificações
          </h2>
          <ul className="flex flex-col gap-4">
            {certifications.map((c, i) => (
              <li
                key={c}
                className={`flex items-start gap-3 ${
                  i < certifications.length - 1 ? "border-b border-outline-variant/50 pb-4" : ""
                }`}
              >
                <span className="material-symbols-outlined text-secondary-fixed-dim">verified</span>
                <span className="text-on-surface">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Skills;
