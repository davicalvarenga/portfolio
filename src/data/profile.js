// Dados pessoais e profissionais exibidos no portfólio (Navbar, Footer, Home,
// Habilidades e Contato). Fonte: currículo de desenvolvimento (cv/main_dev_junior.tex).
// Telefone e e-mail ficam de fora de propósito: este repositório é público.

export const profile = {
  name: "Davi Coelho de Alvarenga",
  role: "Estudante de Ciência da Computação · Estagiário de Redes e Infraestrutura",
  location: "Goiânia-GO // Presencial ou remoto",
  bio:
    "Estudante de Ciência da Computação na PUC-GO e estagiário na Net Supre, onde desenvolvo as automações do suporte: 8 workflows n8n em produção integrando APIs REST (GLPI, Zabbix, Nextcloud Talk) com JavaScript e PostgreSQL. Construo projetos full stack em TypeScript, React e Next.js com testes e CI.",
  goal: "Busco estágio ou vaga júnior em desenvolvimento.",
};

export const socials = [
  { label: "GitHub", icon: "code", href: "https://github.com/davicalvarenga" },
  { label: "LinkedIn", icon: "work", href: "https://www.linkedin.com/in/davicalvarenga" },
];

export const skillGroups = [
  {
    title: "Backend_Automação",
    items: ["JavaScript", "Node.js", "Express", "n8n", "APIs REST", "Webhooks"],
    desc: "Integrações com GLPI, Zabbix, Nextcloud Talk e Google Gemini API.",
  },
  {
    title: "Frontend_FullStack",
    items: ["TypeScript", "React", "Next.js", "Vite", "PWA", "Tailwind CSS"],
    desc: "Interfaces web com componentes, rotas e deploy contínuo.",
  },
  {
    title: "Dados",
    items: ["PostgreSQL", "MySQL", "SQLite", "SQL"],
    desc: "Persistência de eventos, relatórios e modelagem relacional.",
  },
  {
    title: "Qualidade_Entrega",
    items: ["Git/GitHub", "Pull requests", "CI", "Jest", "React Testing Library", "Docker", "Vercel", "Linux"],
    desc: "Versionamento, testes automatizados e pipelines de validação.",
  },
  {
    title: "Fundamentos",
    items: ["C", "Python (básico)", "Java (básico)", "C++ (básico)", "Redes de computadores", "Zabbix", "GLPI"],
    desc: "Base acadêmica e de infraestrutura.",
  },
];

export const experience = [
  {
    period: "Jan/2026 - Presente",
    title: "Estagiário de Redes e Infraestrutura",
    company: "Net Supre Tecnologia da Informação",
    highlights: [
      "Criou, por iniciativa própria, um workflow n8n que consulta a API REST do GLPI, calcula SLA e dias em aberto em JavaScript e entrega a fila de cada um dos 11 colaboradores no Nextcloud Talk em cerca de 5 minutos, antes do turno.",
      "Automatizou a OS Digital (Nextcloud, GLPI, SMTP): o registro das Ordens de Serviço caiu de até 2 dias para até 15 minutos após o upload.",
      "Integrou webhook do Zabbix, PostgreSQL e Nextcloud Talk para consolidar alertas, com resumos agendados e um bot de comandos que gera relatórios sob demanda.",
      "Mantém os 8 workflows em produção versionados no GitHub, com documentação por workflow, segredos sanitizados e validação em CI.",
    ],
  },
  {
    period: "Ago/2025 - Jan/2026",
    title: "Estagiário de Suporte de TI",
    company: "Tribunal de Contas do Estado de Goiás",
    highlights: [
      "Resolveu cerca de 5 chamados N1 e N2 por dia para servidores de todo o tribunal.",
      "Prestou suporte técnico presencial às sessões da Câmara e do Plenário, que ocorreram sem interrupção por falha técnica.",
    ],
  },
  {
    period: "Jul/2024 - Jul/2025",
    title: "Assistente Administrativo e TI",
    company: "Instituto De Saúde Assistida",
    highlights: [
      "Assumiu a TI de uma clínica sem equipe dedicada, mantendo de 12 a 15 estações e as contas do Microsoft 365 da equipe.",
    ],
  },
];

export const education = {
  period: "Fev/2024 - Fev/2029",
  title: "Bacharelado em Ciência da Computação",
  institution: "Pontifícia Universidade Católica de Goiás (PUC-GO)",
  desc: "Em andamento. Disciplinas: Estruturas de Dados, Sistemas Operacionais, Sistemas Distribuídos, Paradigmas de Programação, Criptografia Aplicada.",
};

export const certifications = [
  "Conscientização em Segurança Cibernética (SICOOB, 2026)",
  "SQLite online: instruções SQL (Alura, 2025)",
  "Redes: dos conceitos à intranet (Alura, 2025)",
  "Introdução a AZ-204 com a Microsoft (DIO, 2024)",
  "Git e GitHub (Alura, 2023)",
  "Linguagem C, 3 cursos (Alura, 2023)",
];

export const languages = "Português (nativo) · Inglês (avançado)";
