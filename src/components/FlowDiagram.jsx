// Diagrama do fluxo das automações GLPI + n8n (dados reais do CV).
const nodes = [
  { x: 10, title: "GLPI", sub: "API REST" },
  { x: 170, title: "n8n", sub: "cron · 7:50", highlight: true },
  { x: 330, title: "JavaScript", sub: "SLA · dias em aberto" },
  { x: 490, title: "Nextcloud Talk", sub: "fila por técnico", w: 140 },
];

// Em telas pequenas o SVG ficaria ilegível; lá o fluxo vira uma lista vertical.
const FlowSteps = () => (
  <ol className="w-full sm:hidden" aria-label="Fluxo da automação">
    {nodes.map((n, i) => (
      <li key={n.title}>
        <div
          className={`border bg-panel-2 px-4 py-2.5 ${n.highlight ? "border-accent" : "border-line"}`}
        >
          <p className="text-sm font-semibold text-fg">{n.title}</p>
          <p className="text-xs text-muted">{n.sub}</p>
        </div>
        {i < nodes.length - 1 && (
          <p aria-hidden="true" className="py-1 pl-4 text-accent">
            ↓
          </p>
        )}
      </li>
    ))}
    <li className="mt-3 text-xs text-muted">8 workflows em produção · 11 técnicos · ~5 min</li>
  </ol>
);

const FlowDiagram = () => (
  <>
  <FlowSteps />
  <svg
    viewBox="0 0 640 200"
    className="hidden h-auto w-full sm:block"
    role="img"
    aria-label="Fluxo: a API REST do GLPI alimenta o n8n, que calcula o SLA em JavaScript e entrega a fila de cada técnico no Nextcloud Talk."
  >
    <defs>
      <marker id="flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0L10 5L0 10z" fill="var(--color-accent)" />
      </marker>
    </defs>
    <g fontFamily="var(--font-sans)" fontSize="13">
      {nodes.map((n) => {
        const w = n.w ?? 130;
        return (
          <g key={n.title}>
            <rect
              x={n.x}
              y="30"
              width={w}
              height="64"
              rx="4"
              fill="var(--color-panel-2)"
              stroke={n.highlight ? "var(--color-accent)" : "var(--color-line)"}
              strokeWidth={n.highlight ? 1.5 : 1}
            />
            <text x={n.x + w / 2} y="58" textAnchor="middle" fill="var(--color-fg)" fontWeight="600">
              {n.title}
            </text>
            <text x={n.x + w / 2} y="78" textAnchor="middle" fill="var(--color-muted)" fontSize="11">
              {n.sub}
            </text>
          </g>
        );
      })}
      {[140, 300, 460].map((x) => (
        <line
          key={x}
          x1={x}
          y1="62"
          x2={x + 28}
          y2="62"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          markerEnd="url(#flow-arrow)"
        />
      ))}
      <line x1="560" y1="94" x2="560" y2="118" stroke="var(--color-line)" strokeDasharray="3 3" />
      {[510, 535, 560, 585, 610].map((cx) => (
        <circle key={cx} cx={cx} cy="130" r="9" fill="var(--color-panel-2)" stroke="var(--color-faint)" />
      ))}
      <g fill="var(--color-muted)" fontSize="11">
        <text x="560" y="164" textAnchor="middle">11 técnicos · ~5 min</text>
        <text x="10" y="150">8 workflows em produção</text>
        <text x="10" y="170">versionados no GitHub · CI</text>
      </g>
    </g>
  </svg>
  </>
);

export default FlowDiagram;
