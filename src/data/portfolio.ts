// Portfolio / case studies — RF-05.
// Categories used by the filter chips and cards.

export type ProjectCategory =
  | "sites"
  | "design"
  | "social"
  | "video"
  | "ads";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  /** Visual style used by <ProjectVisual /> to render the mockup/thumbnail */
  visual: "browser" | "phone" | "branding" | "video" | "ads" | "social";
  /** Accent color of the mockup (brand color of the fictional client) */
  accent: string;
  /** Photographic cover (Unsplash) shown on the card and case modal */
  image?: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string[];
  /** Optional live link (web projects) */
  liveUrl?: string;
  /** For ads case studies: before/after metrics shown on the card */
  metrics?: { before: string; after: string; label: string }[];
  /** For video/social: duration label on the play button */
  duration?: string;
}

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "Todos",
  sites: "Sites & E-commerce",
  design: "Design & Branding",
  social: "Social Media",
  video: "Videomaker",
  ads: "Tráfego Pago",
};

export const portfolioFilters: { slug: ProjectCategory | "all"; label: string }[] = [
  { slug: "all", label: "Todos" },
  { slug: "sites", label: "Sites & E-commerce" },
  { slug: "design", label: "Design & Branding" },
  { slug: "social", label: "Social Media" },
  { slug: "video", label: "Videomaker" },
  { slug: "ads", label: "Tráfego Pago" },
];

export const projects: Project[] = [
  {
    slug: "verde-vivo-ecommerce",
    title: "Verde Vivo — E-commerce de Cosméticos Naturais",
    client: "Verde Vivo",
    category: "sites",
    visual: "browser",
    accent: "#7C9A72",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    year: "2026",
    services: ["E-commerce", "Tráfego Pago", "Design"],
    challenge:
      "A marca vendia apenas por redes sociais, com pedidos manuais no direct e carrinho cheio de atrito. Faltava uma loja própria para escalar.",
    solution:
      "Migramos o catálogo para uma loja Shopify sob medida, com página de produto otimizada, checkout enxuto, integração de frete e recuperação de carrinho automatizada — e ligamos Meta Ads com API de Conversões.",
    results: [
      "+180% em vendas em 90 dias",
      "-32% no custo de aquisição (CAC)",
      "2,4x de ROAS médio no trimestre",
    ],
    liveUrl: "https://example.com",
    metrics: [
      { label: "Vendas", before: "R$ 38 mil", after: "R$ 107 mil" },
      { label: "ROAS", before: "1,1x", after: "2,4x" },
    ],
  },
  {
    slug: "terra-mia-institucional",
    title: "Terra Mia — Site Institucional & Booking",
    client: "Terra Mia Pousadas",
    category: "sites",
    visual: "phone",
    accent: "#C78D8B",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80",
    year: "2026",
    services: ["Sites Institucionais", "Design"],
    challenge:
      "A pousada dependia 100% de OTAs, que cobravam comissão alta por reserva e não mostravam a experiência real do lugar.",
    solution:
      "Criamos um site institucional com estética editorial, reservas diretas integradas ao WhatsApp e SEO local para destinos — além de uma vitrine de experiências.",
    results: [
      "41% das reservas passaram a ser diretas",
      "-R$ 9 mil/mês em comissões de OTAs",
      "Lighthouse 96/100 em performance",
    ],
    liveUrl: "https://example.com",
  },
  {
    slug: "ateliê-nuvem-branding",
    title: "Ateliê Nuvem — Identidade Visual Completa",
    client: "Ateliê Nuvem",
    category: "design",
    visual: "branding",
    accent: "#A79BC6",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=80",
    year: "2025",
    services: ["Design", "Social Media"],
    challenge:
      "Marca nova, sem consistência: cores e tipografia mudavam a cada postagem e o perfil não transmitia o valor percebido do produto.",
    solution:
      "Desenvolvemos naming visual, logotipo, paleta, tipografia e um manual da marca com templates prontos para redes e embalagens.",
    results: [
      "+62% de reconhecimento em pesquisa com clientes",
      "Consistência em todos os pontos de contato",
      "3x mais agilidade na produção de peças",
    ],
  },
  {
    slug: "fitcore-social-media",
    title: "FitCore — Social Media & Conteúdo",
    client: "FitCore Academias",
    category: "social",
    visual: "social",
    accent: "#495561",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=700&q=80",
    year: "2026",
    services: ["Social Media", "Videomaker"],
    challenge:
      "Perfil parado há meses, publicações sem estratégia e zero interação com a comunidade local.",
    solution:
      "Planejamento editorial com pilares de conteúdo, calendário mensal, produção de reels e gestão ativa de comunidade com foco em captação de alunos.",
    results: [
      "+210% de engajamento em 6 meses",
      "89 mil novos seguidores qualificados",
      "47 leads/mês vindos do direct",
    ],
  },
  {
    slug: "showreel-2026",
    title: "Reel Manifesto — Vídeo Institucional",
    client: "Manifesto Café",
    category: "video",
    visual: "video",
    accent: "#9C5A58",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=700&q=80",
    year: "2026",
    services: ["Videomaker"],
    challenge:
      "A torrefação tinha um processo artesanal incrível, mas nenhuma peça de vídeo contava essa história para o público.",
    solution:
      "Produção completa: roteiro, captação em 4K na torrefação, edição dinâmica, motion graphics e versões adaptadas para Reels, YouTube e anúncios.",
    results: [
      "1,2 milhão de visualizações orgânicas",
      "+58% de tempo médio no site",
      "Peça usada como material de vendas B2B",
    ],
    duration: "1:24",
  },
  {
    slug: "dr-clarice-performance",
    title: "Dra. Clarice — Performance em Saúde",
    client: "Dra. Clarice Odontologia",
    category: "ads",
    visual: "ads",
    accent: "#7C9A72",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    year: "2026",
    services: ["Tráfego Pago", "Design"],
    challenge:
      "Agenda com horários ociosos e captação dependente de indicação. O objetivo era preencher a agenda de implantes, o tratamento de maior ticket.",
    solution:
      "Campanhas de Google Ads locais + Meta Ads com criativos de antes/depois, pixel com API de Conversões e páginas de destino dedicadas por tratamento.",
    results: [
      "+180% em agendamentos em 90 dias",
      "Custo por lead 41% menor",
      "ROAS de 5,8x no funil de implantes",
    ],
    metrics: [
      { label: "Agendamentos", before: "62/mês", after: "174/mês" },
      { label: "Custo por lead", before: "R$ 89", after: "R$ 52" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
