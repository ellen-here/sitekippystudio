import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { site } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import CookieConsent from "@/components/layout/CookieConsent";
import Analytics from "@/components/layout/Analytics";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kippy Studio — Agência Digital & Criativa",
    template: "%s | Kippy Studio",
  },
  description: site.description,
  keywords: [
    "agência digital",
    "agência criativa",
    "criação de site",
    "e-commerce",
    "tráfego pago",
    "design",
    "social media",
    "videomaker",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Kippy Studio — Agência Digital & Criativa",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kippy Studio — Agência Digital & Criativa",
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#FCFAF7",
  width: "device-width",
  initialScale: 1,
};

// Organization / LocalBusiness structured data (SEO — Schema Markup)
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: `+${site.whatsappNumber}`,
  slogan: "Unindo tecnologia, estética acolhedora e estratégia de vendas",
  areaServed: "BR",
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${jakarta.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col bg-cream font-body text-graphite antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#conteudo"
          className="sr-only z-100 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
