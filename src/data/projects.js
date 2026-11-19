// Dados dos projetos exibidos em /projetos e /projetos/:slug.
// links.demo: URL da versão no ar (ou null). links.repos: repositórios públicos (pode ser vazio).
export const projects = [
  {
    slug: "automacoes-glpi-n8n",
    number: "01",
    title: "Automações GLPI + n8n",
    category: "automacao",
    status: "Em produção",
    icon: "hub",
    tags: ["n8n", "JavaScript", "API REST"],
    summary:
      "Workflows n8n que consultam a API REST do GLPI, calculam SLA em JavaScript e entregam a fila de chamados de cada técnico no chat.",
    tagline: "Automação / Suporte de TI",
    description:
      "Versões públicas e sanitizadas das automações que desenvolvo no estágio: integram o GLPI ao Nextcloud Talk e ao Rocket.Chat para que cada técnico receba seus chamados pendentes antes do turno.",
    challenge:
      "Os técnicos gastavam o intervalo entre atendimentos procurando chamados pendentes no GLPI. A informação existia, mas não chegava a ninguém de forma proativa.",
    solution:
      "Criei, por iniciativa própria, um workflow n8n que consulta a API REST do GLPI, calcula SLA e dias em aberto em JavaScript, trata chamados compartilhados entre técnicos e envia a fila de cada um por mensagem direta, com controle de rate-limit. Em produção, a fila chega a 11 colaboradores em cerca de 5 minutos, antes do turno.",
    techStack: [
      { icon: "account_tree", name: "n8n", desc: "Orquestração dos workflows e agendamento por cron." },
      { icon: "api", name: "API REST do GLPI", desc: "Sessão autenticada e busca de chamados pendentes." },
      { icon: "javascript", name: "JavaScript", desc: "Cálculo de SLA, dias em aberto e agrupamento por técnico." },
      { icon: "forum", name: "Nextcloud Talk / Rocket.Chat", desc: "Entrega da fila por mensagem direta." },
    ],
    links: {
      demo: null,
      repos: [
        { label: "GLPI + Nextcloud Talk", href: "https://github.com/davicalvarenga/Automacao-glpi-nextcloud-n8n" },
        { label: "GLPI + Rocket.Chat", href: "https://github.com/davicalvarenga/GLPI-Rocket.Chat-via-n8n" },
      ],
    },
  },
  {
    slug: "graphs-code",
    number: "02",
    title: "Graphs-Code",
    category: "web",
    status: "No ar",
    icon: "share",
    tags: ["TypeScript", "Next.js", "Jest"],
    summary:
      "Visualizador web que executa linha a linha um programa C de teoria dos grafos, sincronizando código, grafo animado e estruturas de dados.",
    tagline: "Educação / Visualização",
    description:
      "Projeto pessoal de apoio a uma disciplina da faculdade: mostra no navegador, passo a passo, o que um programa C de grafos faz a cada linha.",
    challenge:
      "Acompanhar um algoritmo de grafos só pela saída do terminal esconde o que acontece com as estruturas de dados a cada passo. E um visualizador que divergisse do programa real ensinaria errado.",
    solution:
      "Construí o visualizador em TypeScript estrito com React e Next.js, sincronizando a linha atual do código, o grafo animado e o estado das estruturas. A saída é validada contra o binário compilado com gcc em 72 casos de teste, o CI exige cobertura mínima de 80% e cada pull request gera um preview na Vercel.",
    techStack: [
      { icon: "code", name: "TypeScript (estrito)", desc: "Tipagem estrita em todo o projeto." },
      { icon: "web", name: "React + Next.js", desc: "Interface sincronizada entre código, grafo e estruturas." },
      { icon: "verified", name: "Jest", desc: "72 casos validados contra o gcc; cobertura mínima de 80% no CI." },
      { icon: "rocket_launch", name: "Vercel", desc: "Deploy contínuo e preview a cada pull request." },
    ],
    links: {
      demo: "https://graphs-code.vercel.app",
      repos: [{ label: "Código-fonte", href: "https://github.com/davicalvarenga/Graphs-Code" }],
    },
  },
  {
    slug: "framework-candidaturas",
    number: "03",
    title: "Framework de Candidaturas",
    category: "ferramentas",
    status: "Open source",
    icon: "work_history",
    tags: ["Python", "LaTeX", "IA"],
    summary:
      "Fork open source aprimorado para o mercado brasileiro com o auxílio de IA: avalia vagas, gera CV e carta em LaTeX e busca vagas na Gupy e no Vagas.com.",
    tagline: "Carreira / Automação",
    description:
      "Fork do framework de Mads Lorentzen aprimorado para o mercado brasileiro com o auxílio de IA, para organizar e acelerar candidaturas sem inventar experiência.",
    challenge:
      "Cada candidatura exigia adaptar currículo e carta de apresentação à vaga. Uma única carta chegava a levar uma tarde inteira.",
    solution:
      "Adaptei o framework ao mercado brasileiro: avaliação da vaga contra o perfil, geração de CV e carta em LaTeX, checagem do que o ATS da Gupy lê, busca de vagas na Gupy e no Vagas.com, um segundo agente revisor e uma regra que impede inventar experiência. Uma carta que levava uma tarde passou a sair em minutos. O repositório tem 29 stars e 20 forks no GitHub (nov/2026).",
    techStack: [
      { icon: "terminal", name: "Python", desc: "Ferramentas de apoio e verificação dos PDFs gerados." },
      { icon: "description", name: "LaTeX", desc: "Templates de CV (moderncv) e carta de apresentação." },
      { icon: "travel_explore", name: "Busca de vagas", desc: "Integração com Gupy e Vagas.com." },
      { icon: "fact_check", name: "Revisão automática", desc: "Checagem de ATS e agente revisor contra invenção de fatos." },
    ],
    links: {
      demo: null,
      repos: [{ label: "Código-fonte", href: "https://github.com/davicalvarenga/ai-job-search" }],
    },
  },
  {
    slug: "the-crow",
    number: "04",
    title: "The Crow",
    category: "web",
    status: "Projeto pessoal",
    icon: "savings",
    tags: ["React", "Express", "PostgreSQL"],
    summary:
      "Aplicação full stack de finanças pessoais integrada ao Open Finance via Pluggy e à Google Gemini API, instalável como PWA.",
    tagline: "Finanças pessoais / Full stack",
    description:
      "Painel de finanças pessoais full stack, do banco de dados ao app instalável, com dados bancários vindos do Open Finance.",
    challenge:
      "Reunir as finanças pessoais em um painel único, usando os dados das contas bancárias via Open Finance em vez de lançamentos manuais.",
    solution:
      "Frontend em React 19 com Vite, API em Express e banco PostgreSQL rodando em Docker. A integração com o Open Finance é feita via Pluggy, a Google Gemini API gera insights a partir dos dados, e a aplicação pode ser instalada como PWA.",
    techStack: [
      { icon: "web", name: "React 19 + Vite", desc: "Frontend do painel, instalável como PWA." },
      { icon: "dns", name: "Express", desc: "API do backend." },
      { icon: "database", name: "PostgreSQL + Docker", desc: "Persistência em container." },
      { icon: "auto_awesome", name: "Pluggy + Gemini API", desc: "Open Finance e geração de insights." },
    ],
    links: { demo: null, repos: [] },
  },
];

export const categories = [
  { value: "all", label: "Todos" },
  { value: "web", label: "Web" },
  { value: "automacao", label: "Automação" },
  { value: "ferramentas", label: "Ferramentas" },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
