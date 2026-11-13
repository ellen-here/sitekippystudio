// Service catalog — RF-04: two pillars, six services with modal details.

export type ServicePillar = "web" | "marketing";

export interface Service {
  slug: string;
  pillar: ServicePillar;
  pillarLabel: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  benefits: string[];
  icon: "code" | "cart" | "target" | "palette" | "social" | "video";
}

export const pillarLabels: Record<ServicePillar, string> = {
  web: "Desenvolvimento Web",
  marketing: "Marketing & Criativo",
};

export const services: Service[] = [
  {
    slug: "sites-institucionais",
    pillar: "web",
    pillarLabel: "Desenvolvimento Web",
    title: "Sites Institucionais & Landing Pages",
    short:
      "Sites rápidos, bonitos e feitos para converter — do design exclusivo ao SEO técnico.",
    description:
      "Estruturamos sua presença digital com páginas de alta performance, pensadas para o Google e para o seu cliente. Cada projeto nasce com UI/UX exclusivo, código otimizado e integrações prontas para seu time comercial.",
    deliverables: [
      "Design exclusivo (UI/UX) alinhado à identidade da marca",
      "Código otimizado para SEO técnico e velocidade (Core Web Vitals)",
      "Responsividade total (mobile-first, 360px a 1440px+)",
      "Integração com CRM, WhatsApp e formulários inteligentes",
      "Painel editável para atualizar conteúdos sem depender de código",
    ],
    benefits: [
      "Mais visibilidade orgânica e leads qualificados",
      "Primeira impressão profissional que gera confiança",
      "Velocidade que reduz a taxa de rejeição e melhora o anúncio",
    ],
    icon: "code",
  },
  {
    slug: "ecommerce",
    pillar: "web",
    pillarLabel: "Desenvolvimento Web",
    title: "E-commerce (Lojas Virtuais)",
    short:
      "Lojas de alta conversão com checkout otimizado, pagamentos e logística integrados.",
    description:
      "Criamos e escalamos e-commerces pensados para vender: arquitetura de produto clara, checkout sem atrito, integrações de pagamento e frete, além de automações de recuperação de carrinho que recuperam receita perdida.",
    deliverables: [
      "Loja em Shopify, Nuvemshop, WooCommerce ou sob medida",
      "Integração com meios de pagamento e logística/frete",
      "Checkout otimizado para máxima conversão",
      "Automação de recuperação de carrinho abandonado",
      "Performance e SEO para produtos e categorias",
    ],
    benefits: [
      "Aumento do faturamento online com menos abandono de carrinho",
      "Operação previsível, escalável e fácil de gerenciar",
      "Base sólida para tráfego pago escalar com rentabilidade",
    ],
    icon: "cart",
  },
  {
    slug: "trafego-pago",
    pillar: "marketing",
    pillarLabel: "Marketing & Criativo",
    title: "Tráfego Pago (Performance)",
    short:
      "Google, Meta e TikTok Ads geridos com estratégia, criativos e foco em ROI/ROAS.",
    description:
      "Planejamos e executam campanhas de performance com metas claras de aquisição e retorno. Da configuração técnica de pixel e conversões aos testes A/B de criativos, tudo é medido e reportado.",
    deliverables: [
      "Gestão estratégica de Google Ads, Meta Ads e TikTok Ads",
      "Configuração de Pixel e API de Conversões",
      "Testes A/B de criativos e públicos",
      "Relatórios mensais de ROI/ROAS com recomendações",
      "Otimização contínua de verba e lances",
    ],
    benefits: [
      "Custo de aquisição menor e crescimento previsível",
      "Decisões baseadas em dados, não em achismo",
      "Escala com segurança sem queimar orçamento",
    ],
    icon: "target",
  },
  {
    slug: "design",
    pillar: "marketing",
    pillarLabel: "Marketing & Criativo",
    title: "Design (Branding & UI/Criativos)",
    short:
      "Identidade visual, manual da marca e criativos de alta conversão para anúncios.",
    description:
      "Traduzimos a essência da sua marca em um sistema visual consistente — e em peças que vendemos. Do branding completo aos criativos para mídia, cada entrega é feita para destacar e converter.",
    deliverables: [
      "Criação de identidade visual completa",
      "Manual da marca com guias de uso",
      "Design de interface (UI) para sites e produtos digitais",
      "Peças para redes sociais e materiais institucionais",
      "Criativos de alta conversão para anúncios",
    ],
    benefits: [
      "Marca reconhecível e consistente em todos os canais",
      "Criativos que param o scroll e geram clique",
      "Profissionalização que sustenta precificação premium",
    ],
    icon: "palette",
  },
  {
    slug: "social-media",
    pillar: "marketing",
    pillarLabel: "Marketing & Criativo",
    title: "Social Media",
    short:
      "Estratégia, linha editorial e gestão de perfil com foco em engajamento e vendas.",
    description:
      "Cuidamos do seu dia a dia nas redes com planejamento, conteúdo e análise de métricas. A marca fala com consistência, constrói autoridade e transforma audiência em clientes.",
    deliverables: [
      "Planejamento estratégico e definição de pilares de conteúdo",
      "Linha editorial e calendário de postagens",
      "Copywriting persuasivo para cada formato",
      "Gestão de perfil e interação com a comunidade",
      "Análise mensal de métricas de engajamento",
    ],
    benefits: [
      "Presença consistente sem a correria de postar sem estratégia",
      "Autoridade no nicho e relação próxima com o público",
      "Conteúdo que alimenta tráfego pago e vendas orgânicas",
    ],
    icon: "social",
  },
  {
    slug: "videomaker",
    pillar: "marketing",
    pillarLabel: "Marketing & Criativo",
    title: "Videomaker (Produção Audiovisual)",
    short:
      "Reels, vídeos institucionais, cobertura de eventos e motion graphics para anúncios.",
    description:
      "O núcleo audiovisual da Kippy cria vídeos dinâmicos que prendem a atenção: do roteiro à finalização, produzimos conteúdo para redes sociais, institucional e performance.",
    deliverables: [
      "Captação e edição dinâmica de vídeos curtos (Reels/TikTok/Shorts)",
      "Vídeos institucionais e de produto",
      "Cobertura de eventos e bastidores",
      "Roteirização com direção de arte",
      "Motion graphics para anúncios e apresentações",
    ],
    benefits: [
      "Formato que o algoritmo prioriza e o público consome",
      "Conteúdo multiuso: redes, site, anúncios e vendas",
      "Produção leve, com equipe própria e prazos ágeis",
    ],
    icon: "video",
  },
];

export const serviceOptions = services.map((s) => ({
  slug: s.slug,
  label: s.title,
}));

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
