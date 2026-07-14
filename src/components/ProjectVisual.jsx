// Placeholder visual estilizado (blueprint/tech-noir) usado no lugar de screenshots reais.
// Troque por uma <img> real (ex: `/projects/${slug}.png` em /public) quando tiver capturas de tela.
const ProjectVisual = ({ icon = "hub", className = "" }) => {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-outline-variant bg-surface-container-lowest ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(220,184,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(220,184,255,0.08) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-secondary-container/10" />
      <span className="material-symbols-outlined relative z-10 text-6xl text-outline-variant">
        {icon}
      </span>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none" />
    </div>
  );
};

export default ProjectVisual;
