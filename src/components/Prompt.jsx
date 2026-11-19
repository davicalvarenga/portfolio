// Linha de comando usada como rótulo de seção (ex.: "~/davi-alvarenga $ ls projetos/").
// É decorativa: o título real da seção vem logo abaixo, em um <h1>/<h2>.
const Prompt = ({ cmd, caret = false, className = "" }) => (
  <p className={`font-mono text-sm text-muted ${className}`} aria-hidden="true">
    <span className="text-accent">~/davi-alvarenga</span>
    <span className="text-faint"> $ </span>
    {cmd}
    {caret && <span className="caret" />}
  </p>
);

export default Prompt;
