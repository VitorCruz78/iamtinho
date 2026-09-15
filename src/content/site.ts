export const profile = {
  name: "Vitor Luiz da Cruz",
  brand: "Tinho",
  role: "Full Stack Developer",
  tagline:
    "Desenvolvedor Full Stack focado na construção de aplicações web modernas, APIs e produtos escaláveis.",
  availability: "Based in Brazil · Disponível para oportunidades remotas",
  email: "vitorcruzcontato78@gmail.com",
  github: "https://github.com/VitorCruz78",
  githubHandle: "VitorCruz78",
  siteUrl: "https://iamtinho.dev",
} as const;

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;

export const about = [
  "Trabalho há 4 anos construindo aplicações web full stack e colocando produtos em produção — do frontend à camada de dados.",
  "Atuo tanto na interface quanto no backend, mas o que orienta meu trabalho é entender o sistema inteiro: como o dado é modelado, onde as regras de negócio ficam e o que acontece com a aplicação depois que ela vai ao ar.",
  "Meu foco hoje está em TypeScript, React, Next.js, Node.js e PostgreSQL, com atenção crescente a arquitetura e boas práticas de engenharia.",
] as const;

export const stackGroups = [
  {
    title: "Linguagens",
    items: ["JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Interfaces responsivas",
      "Componentização",
      "Integração com APIs",
      "SEO técnico",
      "Performance e Web Vitals",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "APIs REST",
      "Autenticação e autorização",
      "Regras de negócio",
      "Validação",
      "Tratamento de erros",
      "Integração entre serviços",
    ],
  },
  {
    title: "Banco de dados",
    items: [
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Modelagem de dados",
      "Relacionamentos",
      "Consultas SQL",
    ],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Docker", "Vercel", "WordPress"],
  },
] as const;

export const engineeringTopics = [
  "Clean Code",
  "SOLID",
  "Design Patterns",
  "Arquitetura de software",
  "Modelagem de dados",
  "Testes",
  "Segurança de APIs",
  "Tratamento de erros",
  "Debugging",
  "Observabilidade",
  "Escalabilidade",
] as const;

export type Project = {
  name: string;
  status: string;
  summary: string;
  problem: string;
  build: string;
  tech: readonly string[];
  modules?: readonly { label: string; done: boolean }[];
  links: readonly { href: string; label: string; kind: "site" | "github" }[];
  images?: readonly {
    src: string;
    alt: string;
    width: number;
    height: number;
    variant: "desktop" | "mobile";
  }[];
};

export const projects: readonly Project[] = [
  {
    name: "KompreAki",
    status: "Em produção",
    summary: "Plataforma de ofertas e conteúdo para marketplaces.",
    problem:
      "Encontrar uma boa oferta exige garimpar marketplaces, grupos e sites o dia inteiro. O KompreAki reúne ofertas, guias de compra e análises de produto em um só lugar, com curadoria e distribuição própria de conteúdo.",
    build:
      "Construí a plataforma completa: catálogo de ofertas, blog, páginas de nicho, área administrativa e uma camada de automação que roda em segundo plano — workers em Node para coleta e cópia de promoções, rotinas agendadas e integração com marketplace. Inclui geração de conteúdo com OpenAI, autenticação, SEO técnico e testes automatizados.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "OpenAI",
      "Puppeteer",
      "Vitest",
      "Vercel",
    ],
    links: [
      {
        href: "https://kompreaki.com.br",
        label: "kompreaki.com.br",
        kind: "site",
      },
      {
        href: "https://github.com/VitorCruz78/kompreaki",
        label: "Código",
        kind: "github",
      },
    ],
    images: [
      {
        src: "/projects/kompreaki-desktop.webp",
        alt: "Página inicial do KompreAki em desktop, com destaque de artigo, categorias e coluna lateral de ofertas em alta",
        width: 1440,
        height: 810,
        variant: "desktop",
      },
      {
        src: "/projects/kompreaki-mobile.webp",
        alt: "Página inicial do KompreAki em tela de celular",
        width: 600,
        height: 1299,
        variant: "mobile",
      },
    ],
  },
  {
    name: "IDE APP",
    status: "Em desenvolvimento",
    summary: "Sistema de gestão e operação para igrejas.",
    problem:
      "A operação de uma igreja costuma viver espalhada: membros em planilhas, escalas em grupos de mensagem e financeiro em outro lugar. O IDE APP trata membro, função, culto, escala e contribuição como conceitos de domínio com regras próprias, em uma estrutura multi-tenant.",
    build:
      "É o projeto onde aprofundo backend, modelagem e arquitetura. A base está definida — isolamento por igreja, políticas de acesso no próprio banco e uma camada de dados tipada. O domínio inteiro já está modelado; a implementação avança módulo a módulo.",
    modules: [
      { label: "Autenticação", done: true },
      { label: "Usuários", done: true },
      { label: "Funções", done: true },
      { label: "Cultos", done: false },
      { label: "Escalas", done: false },
      { label: "Financeiro", done: false },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Zod",
      "Vitest",
    ],
    links: [
      {
        href: "https://github.com/VitorCruz78/IDE-APP",
        label: "Código",
        kind: "github",
      },
    ],
  },
];

export const education = {
  title: "Análise e Desenvolvimento de Sistemas",
  detail: "EAD · em andamento",
  note: "Minha base técnica não vem só da faculdade: ela se apoia em estudo contínuo, prática profissional e na construção de produtos reais que precisam funcionar em produção.",
} as const;

export const english = {
  title: "English — A2/B1",
  detail: "Em desenvolvimento",
  note: "Estudo com foco em comunicação técnica e no objetivo de atuar com empresas internacionais.",
} as const;
