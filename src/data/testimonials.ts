// Social proof — RF-03 metrics bar and RF-06 testimonials.

export const metrics = [
  { value: "50+", label: "Clientes atendidos" },
  { value: "5+", label: "Anos de experiência" },
  { value: "200%", label: "Crescimento médio" },
  { value: "98%", label: "Índice de satisfação" },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  /** Initials used to build the avatar (no photos available) */
  initials: string;
  accent: string;
  /** Client photo (Unsplash) — falls back to the initials avatar when absent */
  photo?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marina Albuquerque",
    role: "Fundadora",
    company: "Verde Vivo",
    quote:
      "Em três meses a loja virou o nosso principal canal de venda. A Kippy cuidou do site, dos anúncios e do criativo como se fosse o time interno — com resultado mensurável toda semana.",
    rating: 5,
    initials: "MA",
    accent: "#7C9A72",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Rafael Torres",
    role: "Diretor Comercial",
    company: "Terra Mia Pousadas",
    quote:
      "Saímos da dependência das comissões de OTAs. O site novo trouxe reservas diretas desde a primeira semana e o atendimento foi próximo do início ao lançamento.",
    rating: 5,
    initials: "RT",
    accent: "#C78D8B",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Camila Duarte",
    role: "Head de Marketing",
    company: "FitCore Academias",
    quote:
      "O planejamento de social media mudou nossa relação com a audiência. A audiência parou de ser número e virou aluno. Sempre com relatórios claros e zero enrolação.",
    rating: 5,
    initials: "CD",
    accent: "#A79BC6",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Dr. Felipe Miranda",
    role: "Sócio-fundador",
    company: "Dra. Clarice Odontologia",
    quote:
      "Nunca tinha visto uma agência de tráfego explicar o ROI em português claro. O custo por lead caiu e a agenda de implantes encheu. Renovamos sem pensar duas vezes.",
    rating: 5,
    initials: "FM",
    accent: "#495561",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Letícia Prado",
    role: "CEO",
    company: "Ateliê Nuvem",
    quote:
      "A identidade visual que a Kippy criou finalmente combina com o preço que praticamos. A marca parece maior, e os clientes percebem isso antes mesmo do primeiro contato.",
    rating: 5,
    initials: "LP",
    accent: "#9C5A58",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Bruno Sato",
    role: "Head de E-commerce",
    company: "Casa Sato Móveis",
    quote:
      "Migração de plataforma sem queda de faturamento e com performance muito superior. O cuidado com detalhes de checkout fez diferença real no conversão.",
    rating: 5,
    initials: "BS",
    accent: "#495561",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
  },
];
