// Central site configuration (edit here to update contact info, social links, etc.)
// Content in PT-BR, code/comments in English.

export const site = {
  name: "Kippy Studio",
  tagline: "Agência Digital & Criativa",
  legalName: "Kippy Studio Agência Digital e Criativa",
  description:
    "Kippy Studio é uma agência digital e criativa full-service: sites e e-commerce de alta performance, tráfego pago, design, social media e produção audiovisual para transformar ideias em resultados reais.",
  // Replace with the real production domain before deploying
  url: "https://www.kippystudio.com.br",
  email: "contato@kippystudio.com.br",
  // WhatsApp number with country code, digits only (55 + DDD + number)
  whatsappNumber: "5511999999999",
  whatsappDisplay: "(11) 99999-9999",
  // Optional: direct URL for the institutional showreel video (mp4/webm). Leave empty to show the animated placeholder.
  showreelUrl: "",
  locale: "pt_BR",
} as const;

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/kippystudio", icon: "instagram" as const },
  { label: "Behance", href: "https://behance.net/kippystudio", icon: "behance" as const },
  { label: "LinkedIn", href: "https://linkedin.com/company/kippystudio", icon: "linkedin" as const },
  { label: "YouTube", href: "https://youtube.com/@kippystudio", icon: "youtube" as const },
  { label: "TikTok", href: "https://tiktok.com/@kippystudio", icon: "tiktok" as const },
];

export const navLinks = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Depoimentos", href: "/#depoimentos" },
] as const;

// Pre-filled WhatsApp message for the floating button
export function whatsappLink(message?: string): string {
  const text =
    message ??
    `Olá, Kippy Studio! Vim pelo site e gostaria de conversar sobre um projeto.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
