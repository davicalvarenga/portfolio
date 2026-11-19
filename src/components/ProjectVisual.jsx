import DocMockup from "./DocMockup";
import FlowDiagram from "./FlowDiagram";

// Escolhe o visual do projeto a partir de project.visual (ver src/data/projects.js).
// Sem visual, mostra a stack em tipografia, para o bloco não ficar vazio.
const ProjectVisual = ({ project, className = "" }) => {
  const { visual } = project;

  if (visual?.type === "image") {
    return (
      <div className={`border border-line bg-panel p-2 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.9)] ${className}`}>
        <img
          src={visual.src}
          alt={visual.alt}
          loading="lazy"
          width="2160"
          height="1283"
          className="block h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center border border-line bg-panel p-6 sm:p-8 ${className}`}>
      {visual?.type === "flow" && <FlowDiagram />}
      {visual?.type === "doc" && <DocMockup />}
      {!visual && (
        <ul aria-label="Stack do projeto" className="font-serif text-2xl leading-snug text-fg/90 sm:text-3xl">
          {project.techStack.map((t) => (
            <li key={t.name}>{t.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectVisual;
