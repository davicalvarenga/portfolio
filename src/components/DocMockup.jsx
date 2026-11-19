// Miniatura ilustrativa do framework de candidaturas: um CV e as checagens que ele faz.
const checks = [
  "vaga avaliada contra o perfil",
  "CV e carta em LaTeX",
  "checagem do ATS da Gupy",
  "agente revisor",
  "nenhuma experiência inventada",
];

const lines = ["60%", "100%", "85%", "40%"];

const DocMockup = () => (
  <div className="flex items-center gap-6 sm:gap-8">
    <div
      aria-hidden="true"
      className="h-36 w-28 flex-none bg-fg px-3 py-3.5 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)] sm:h-48 sm:w-36 sm:px-3.5 sm:py-4"
    >
      <div className="mb-2.5 h-2 w-1/2 bg-bg" />
      {lines.map((w, i) => (
        <div key={i} className="mb-1.5 h-1 bg-muted/50" style={{ width: w }} />
      ))}
      <div className="mt-4 mb-2.5 h-2 w-1/2 bg-bg" />
      {lines.slice(1).map((w, i) => (
        <div key={i} className="mb-1.5 h-1 bg-muted/50" style={{ width: w }} />
      ))}
    </div>
    <ul className="flex-1 text-sm">
      {checks.map((c) => (
        <li key={c} className="border-b border-line py-1.5 text-fg/90 last:border-b-0">
          <span aria-hidden="true" className="mr-2 font-semibold text-accent">
            ✓
          </span>
          {c}
        </li>
      ))}
    </ul>
  </div>
);

export default DocMockup;
