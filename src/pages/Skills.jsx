const frontendSkills = [
  { name: "React.js", level: 95, desc: "Arquitetura de componentes, Hooks, gerenciamento de estado." },
  { name: "JavaScript / TypeScript", level: 88, desc: "Tipagem estática, interfaces, generics." },
  { name: "Tailwind CSS", level: 92, desc: "Estilização utility-first, design systems customizados." },
];

const backendSkills = [
  { name: "Node.js", level: 85, desc: "Arquitetura orientada a eventos, APIs RESTful." },
  { name: "PostgreSQL", level: 78, desc: "Modelagem relacional, queries complexas." },
];

const tools = [
  { icon: "terminal", label: "Git / CLI" },
  { icon: "cloud_sync", label: "Docker" },
  { icon: "rocket_launch", label: "Vercel" },
  { icon: "design_services", label: "Figma" },
];

const SkillBar = ({ name, level, desc, color = "secondary" }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-body-lg font-bold">{name}</span>
      <span className={`font-accent text-label-caps ${color === "secondary" ? "text-secondary-container" : "text-primary"}`}>
        {level}%
      </span>
    </div>
    <div className="h-1 w-full bg-surface-container-high relative glitch-bar">
      <div
        className={`absolute top-0 left-0 h-full border-r-2 border-white ${
          color === "secondary" ? "bg-secondary-container" : "bg-primary"
        }`}
        style={{ width: `${level}%` }}
      />
    </div>
    <p className="text-sm text-on-surface-variant mt-1">{desc}</p>
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
            ARQUIVOS CLASSIFICADOS: alta proficiência em arquitetura web moderna, com
            prontidão operacional em múltiplas stacks.
          </p>
        </div>
      </header>

      <section className="grid grid-cols-4 md:grid-cols-12 gap-gutter mb-24">
        <div className="col-span-4 md:col-span-5 bg-surface-container-low p-6 md:p-8 offset-frame flex flex-col gap-6 md:rotate-1 z-10">
          <div className="flex items-center justify-between border-b-2 border-outline-variant pb-4">
            <h2 className="font-accent text-accent-italic text-primary uppercase">Frontend_Ops</h2>
            <span className="bg-secondary-container text-on-secondary-container font-accent text-label-caps px-2 py-1">
              ACTIVE
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {frontendSkills.map((s) => (
              <SkillBar key={s.name} {...s} color="secondary" />
            ))}
          </div>
        </div>

        <div className="col-span-4 md:col-span-6 md:col-start-7 bg-surface-container-highest p-6 md:p-8 offset-frame flex flex-col gap-6 mt-8 md:mt-16 md:-rotate-1">
          <div className="flex items-center justify-between border-b-2 border-outline-variant pb-4">
            <h2 className="font-accent text-accent-italic text-primary uppercase">Backend_Core</h2>
            <span className="border border-outline text-outline font-accent text-label-caps px-2 py-1">
              STABLE
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {backendSkills.map((s) => (
              <SkillBar key={s.name} {...s} color="primary" />
            ))}
          </div>
        </div>

        <div className="col-span-4 md:col-span-12 bg-surface-container-low p-6 md:p-8 offset-frame mt-8 flex flex-col md:flex-row gap-8 items-center border-l-8 border-secondary-container">
          <div className="md:w-1/3">
            <h2 className="font-accent text-accent-italic text-primary uppercase mb-2">Tactical_Gear</h2>
            <p className="text-on-surface-variant text-body-lg">
              Ambiente de desenvolvimento e protocolos de deploy usados em missões ativas.
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
        </div>
      </section>
    </main>
  );
};

export default Skills;
