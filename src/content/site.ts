export const profile = {
  name: "Vitor Luiz da Cruz",
  brand: "Tinho",
  role: "Full Stack Developer",
  tagline:
    "Desenvolvedor Full Stack focado na construção de aplicações web modernas, APIs e produtos escaláveis.",
  email: "vitorcruzcontato78@gmail.com",
  github: "https://github.com/VitorCruz78",
  githubHandle: "VitorCruz78",
  siteUrl: "https://iamtinho.dev",
} as const;

const careerStart = new Date(2022, 1);

export function experienceLabel(now = new Date()) {
  const months =
    (now.getFullYear() - careerStart.getFullYear()) * 12 +
    (now.getMonth() - careerStart.getMonth());

  return `mais de ${Math.floor(months / 12)} anos`;
}

export function heroIntro() {
  return [
    `Desenvolvedor Full Stack. Trabalho com isso há ${experienceLabel()}, a maior parte deles em produtos que estão em produção.`,
    "Cuido do sistema inteiro, da tela ao banco. TypeScript, React, Next.js, Node.js e PostgreSQL no dia a dia.",
  ];
}

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;

export function about() {
  return [
    `Comecei em ${careerStart.getFullYear()}. Desde então trabalho em aplicações web full stack, quase sempre acompanhando o produto depois que ele vai ao ar.`,
    "Faço interface e backend, mas trabalho olhando o sistema como um todo: modelagem de dados, onde ficam as regras de negócio e como a aplicação se comporta em uso real.",
    "Hoje o foco é TypeScript, React, Next.js, Node.js e PostgreSQL. Arquitetura e boas práticas de engenharia vêm ganhando espaço no que estudo.",
  ];
}

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

export type ProjectImage = {
  src: string;
  // Versão para o tema escuro, trocada via prefers-color-scheme.
  darkSrc?: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  name: string;
  status: string;
  summary: string;
  problem: string;
  build: string;
  tech: readonly string[];
  modules?: readonly string[];
  links: readonly { href: string; label: string; kind: "site" | "whatsapp" }[];
  media: {
    main:
      | { kind: "video"; src: string; poster: string }
      | ({ kind: "image" } & ProjectImage);
    phone: ProjectImage;
    gallery?: readonly ProjectImage[];
  };
};

export const projects: readonly Project[] = [
  {
    name: "IDE APP",
    status: "Em comercialização",
    summary:
      "Sistema de gestão para igrejas: cultos, escalas, secretaria e financeiro.",
    problem:
      "Em muita igreja a escala fica no grupo de mensagem, o cadastro de membros numa planilha e o caixa num caderno. O IDE APP junta tudo isso num sistema só. A liderança monta a escala de cada culto e o voluntário confirma ou recusa pelo celular.",
    build:
      "Construí o produto inteiro, da modelagem à cobrança. Cada igreja fica isolada por políticas de acesso no próprio banco, com camada de dados tipada e permissões por módulo. O MVP está completo e o sistema já está em comercialização, com assinatura e 14 dias de teste grátis.",
    modules: [
      "Cultos e escalas",
      "Confirmação pelo celular",
      "Secretaria",
      "Cadastro por link",
      "Financeiro",
      "Permissões por módulo",
      "Assinatura",
      "Instalável no celular",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Stripe",
      "Zod",
      "Vitest",
    ],
    links: [
      {
        href: "https://ide-app.org",
        label: "ide-app.org",
        kind: "site",
      },
    ],
    media: {
      main: {
        kind: "video",
        src: "/projects/ide-app/ide-app.mp4",
        poster: "/projects/ide-app/ide-app-poster.webp",
      },
      phone: {
        src: "/projects/ide-app/minhas-escalas-claro.webp",
        darkSrc: "/projects/ide-app/minhas-escalas-escuro.webp",
        alt: "Tela Minhas escalas do IDE APP no celular, com escalas pendentes e os botões Confirmar e Recusar",
        width: 780,
        height: 1688,
      },
      gallery: [
        {
          src: "/projects/ide-app/cultos-claro.webp",
          darkSrc: "/projects/ide-app/cultos-escuro.webp",
          alt: "Lista de cultos do IDE APP com data, sede, observações e quantidade de escalados",
          width: 2880,
          height: 1200,
        },
        {
          src: "/projects/ide-app/financeiro-claro.webp",
          darkSrc: "/projects/ide-app/financeiro-escuro.webp",
          alt: "Painel financeiro do IDE APP com entradas, saídas, saldo do período e gráficos por categoria",
          width: 2880,
          height: 1200,
        },
      ],
    },
  },
  {
    name: "KompreAki",
    status: "Em produção",
    summary: "Plataforma de ofertas e conteúdo para marketplaces.",
    problem:
      "Encontrar uma boa oferta exige garimpar marketplaces, grupos e sites o dia inteiro. O KompreAki reúne ofertas, guias de compra e análises de produto em um só lugar, com curadoria e distribuição própria de conteúdo.",
    build:
      "Construí a plataforma completa: catálogo de ofertas, blog, páginas de nicho, área administrativa e uma camada de automação que roda em segundo plano — workers em Node para coleta e cópia de promoções, rotinas agendadas e integração com marketplace. As promoções selecionadas são enviadas automaticamente para o grupo da comunidade no WhatsApp. Inclui geração de conteúdo com OpenAI, autenticação, SEO técnico e testes automatizados.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "OpenAI",
      "WhatsApp (Z-API)",
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
        href: "https://chat.whatsapp.com/B6UbH1FdldVE2CfaUhOq8P",
        label: "Grupo no WhatsApp",
        kind: "whatsapp",
      },
    ],
    media: {
      main: {
        kind: "image",
        src: "/projects/kompreaki-desktop.webp",
        alt: "Página inicial do KompreAki em desktop, com destaque de artigo, categorias e coluna lateral de ofertas em alta",
        width: 1440,
        height: 810,
      },
      phone: {
        src: "/projects/kompreaki-mobile.webp",
        alt: "Página inicial do KompreAki em tela de celular",
        width: 600,
        height: 1299,
      },
    },
  },
];

export const education = {
  title: "Análise e Desenvolvimento de Sistemas",
  detail: "EAD · em andamento",
  note: "Cursei dois anos de Engenharia de Software antes de migrar para ADS no formato EAD. Minha base técnica não vem só da faculdade: ela se apoia em estudo contínuo, prática profissional e na construção de produtos reais.",
} as const;

export const english = {
  title: "English — B1",
  detail: "Em desenvolvimento",
  note: "Estudo com foco em comunicação técnica e no objetivo de atuar com empresas internacionais.",
} as const;
