// Dados dos projetos exibidos em /projetos e /projetos/:slug.
// Troque os campos abaixo pelos seus projetos reais quando quiser.
export const projects = [
  {
    slug: "neuromancer-ui",
    number: "01",
    title: "Neuromancer UI",
    category: "web",
    status: "Classified",
    icon: "hub",
    tags: ["React", "WebGL", "Tailwind"],
    summary:
      "Um dashboard pesado em WebGL explorando estruturalismo cibernético e visualização de dados.",
    tagline: "Fintech / Data Viz",
    description:
      "Uma plataforma de visualização de dados de alta tensão, desenhada para processar milhões de transações com latência zero. Construída para o arquiteto moderno das finanças digitais.",
    challenge:
      "Ledgers financeiros tradicionais falham em comunicar urgência. O cliente precisava de um sistema que processasse datasets massivos em tempo real, mas com uma estética que refletisse o ambiente de alto risco do trading algorítmico.",
    solution:
      "Implementamos um layout 'Fractured Swiss Grid'. Usando offsets tonais rígidos em vez de sombras suaves, criamos uma hierarquia pseudo-3D que parece física e concreta. Os streams de dados são visualizados com animações escalonadas e 'glitch', abandonando interpolações suaves em favor de uma estética crua que aumenta a percepção durante movimentos críticos de mercado.",
    techStack: [
      { icon: "memory", name: "React + WebGL", desc: "Motor de renderização para visualização de dados em alto FPS." },
      { icon: "database", name: "GraphQL Subscriptions", desc: "Streaming de dados em tempo real com latência sub-50ms." },
      { icon: "design_services", name: "Tailwind CSS (Custom)", desc: "Aderência estrita aos tokens do design system Tactile Dark." },
      { icon: "animation", name: "Framer Motion", desc: "Animações cinéticas e escalonadas para transições de UI." },
    ],
  },
  {
    slug: "basel-frame",
    number: "02",
    title: "Basel Frame",
    category: "web",
    status: "Active",
    icon: "grid_view",
    tags: ["Next.js", "Framer Motion"],
    summary: "Tipografia rígida em grid encontra transições fluidas de página para uma agência boutique.",
    tagline: "Agência / Branding",
    description:
      "Site institucional para uma agência criativa boutique, unindo a precisão de um grid suíço dos anos 60 com transições de página cinéticas e uma tipografia editorial agressiva.",
    challenge:
      "A agência queria transmitir rigor técnico sem soar fria ou corporativa demais, mantendo a personalidade rebelde da marca em cada interação.",
    solution:
      "Um sistema de grid de 12 colunas estritamente respeitado no desktop, quebrado propositalmente em elementos de destaque via rotação e sobreposição de colunas, com transições de página orquestradas pelo Framer Motion.",
    techStack: [
      { icon: "web", name: "Next.js", desc: "Renderização híbrida e rotas de página com transições persistentes." },
      { icon: "animation", name: "Framer Motion", desc: "Transições de página e microinterações." },
      { icon: "design_services", name: "Tailwind CSS", desc: "Sistema de grid fraturado e tokens tipográficos." },
    ],
  },
  {
    slug: "kinetix-mobile",
    number: "03",
    title: "Kinetix Mobile",
    category: "mobile",
    status: "Active",
    icon: "sprint",
    tags: ["React Native", "Zustand"],
    summary: "Uma experiência mobile agressiva e orientada a gestos para rastreamento de fitness urbano.",
    tagline: "Fitness / Mobile App",
    description:
      "Aplicativo mobile para atletas urbanos, com navegação por gestos, feedback tátil e uma interface que reage à intensidade do treino em tempo real.",
    challenge:
      "Usuários em movimento precisam de decisões visuais instantâneas — texto denso e navegação tradicional não funcionavam durante o treino.",
    solution:
      "Interface baseada em gestos com grandes alvos de toque, feedback tátil (haptics) e uma paleta de alto contraste que se adapta ao esforço do usuário, com estado global leve via Zustand.",
    techStack: [
      { icon: "phone_iphone", name: "React Native", desc: "App nativo multiplataforma com performance de 60fps." },
      { icon: "bolt", name: "Zustand", desc: "Gerenciamento de estado leve e reativo." },
      { icon: "vibration", name: "Haptics API", desc: "Feedback tátil sincronizado com métricas de treino." },
    ],
  },
  {
    slug: "system-error",
    number: "04",
    title: "System_Error",
    category: "creative",
    status: "Archived",
    icon: "broken_image",
    tags: ["Vue 3", "GSAP", "Tailwind"],
    summary: "Uma peça editorial interativa explorando a estética da falha tecnológica e da arte glitch.",
    tagline: "Editorial Interativo",
    description:
      "Experiência editorial experimental que transforma erros de sistema e artefatos de compressão em linguagem visual, guiando o leitor por um ensaio sobre falhas tecnológicas.",
    challenge:
      "Traduzir um ensaio sobre falhas de sistemas complexos em uma experiência de scroll que fosse esteticamente coerente sem sacrificar legibilidade.",
    solution:
      "Animações de scroll orientadas por GSAP ScrollTrigger, com distorções controladas de tipografia e imagem que se intensificam conforme o usuário avança pelo texto.",
    techStack: [
      { icon: "auto_awesome", name: "Vue 3 + GSAP", desc: "Animações de scroll e transições orientadas por timeline." },
      { icon: "design_services", name: "Tailwind CSS", desc: "Base de grid e tipografia editorial." },
    ],
  },
  {
    slug: "quantum-ledger-interface",
    number: "05",
    title: "Quantum Ledger Interface",
    category: "web",
    status: "Active",
    icon: "insights",
    tags: ["React", "GraphQL", "Node"],
    summary: "Plataforma de visualização de dados para redes de finanças descentralizadas de alta frequência.",
    tagline: "Fintech / Web3",
    description:
      "Uma plataforma de visualização de dados de alta tensão desenhada para processar milhões de transações com latência zero, construída para o arquiteto moderno das finanças digitais.",
    challenge:
      "Ledgers financeiros tradicionais falham em comunicar urgência. O cliente exigia um sistema que processasse datasets massivos em tempo real com uma estética que refletisse o ambiente de alto risco do trading algorítmico.",
    solution:
      "Layout 'Fractured Swiss Grid' com offsets tonais rígidos em vez de sombras suaves, criando hierarquia pseudo-3D física. Dados são visualizados com animações escalonadas e 'glitch' para aumentar a tensão durante movimentos críticos de mercado.",
    techStack: [
      { icon: "memory", name: "React + WebGL", desc: "Motor de renderização para visualização de dados em alto FPS." },
      { icon: "database", name: "GraphQL Subscriptions", desc: "Streaming de dados em tempo real com latência sub-50ms." },
      { icon: "design_services", name: "Tailwind CSS (Custom)", desc: "Aderência estrita aos tokens do design system Tactile Dark." },
      { icon: "animation", name: "Framer Motion", desc: "Animações cinéticas e escalonadas para transições de UI." },
    ],
  },
];

export const categories = [
  { value: "all", label: "Todos" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "creative", label: "Creative" },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
