// Status do projeto. Verde para o que está rodando de verdade (produção/no ar).
const LIVE = new Set(["Em produção", "No ar"]);

const StatusBadge = ({ status }) => {
  const live = LIVE.has(status);
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs whitespace-nowrap ${
        live ? "text-ok" : "text-muted"
      }`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${live ? "bg-ok" : "bg-faint"}`}
      />
      {status.toLowerCase()}
    </span>
  );
};

export default StatusBadge;
