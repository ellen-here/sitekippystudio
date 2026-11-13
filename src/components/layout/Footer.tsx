import Link from "next/link";
import { navLinks, site, socialLinks, whatsappLink } from "@/data/site";
import { services } from "@/data/services";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  // Stable value for static prerendering — update yearly or derive at request time
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-ink text-cream">
      {/* Newsletter — "Fique por dentro" */}
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-cream sm:text-2xl">
              Fique por dentro
              <Icon name="sparkle" className="h-4 w-4 text-blush" />
            </h2>
            <p className="mt-1.5 max-w-md text-sm text-cream/70">
              Bastidores, cases e dicas de digital direto no seu e-mail. Sem spam — só o que
              agrega.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" compact />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Agência digital e criativa full-service. Unimos tecnologia, estética acolhedora e
            estratégia de vendas para transformar ideias em impacto digital.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5" aria-label="Redes sociais">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream/80 transition-all hover:-translate-y-0.5 hover:border-blush-deep hover:bg-blush-deep hover:text-white"
                >
                  <Icon name={social.icon} className="h-4.5 w-4.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Links rápidos">
          <h3 className="font-display text-sm font-bold tracking-wider text-blush uppercase">
            Links rápidos
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#contato" className="text-cream/70 transition-colors hover:text-cream">
                Orçamento
              </Link>
            </li>
            <li>
              <Link
                href="/privacidade"
                className="text-cream/70 transition-colors hover:text-cream"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos" className="text-cream/70 transition-colors hover:text-cream">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Serviços">
          <h3 className="font-display text-sm font-bold tracking-wider text-blush uppercase">
            Serviços
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href="/#servicos"
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wider text-blush uppercase">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-2.5 text-cream/70 transition-colors hover:text-cream"
              >
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-blush" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-cream/70 transition-colors hover:text-cream"
              >
                <Icon name="whatsapp" className="mt-0.5 h-4 w-4 shrink-0 text-blush" />
                {site.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-cream/70">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-blush" />
              <span>Atendimento em todo o Brasil — remoto</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream/60 sm:flex-row sm:px-8">
          <p>
            © {year} {site.legalName}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-4">
            <Link href="/privacidade" className="transition-colors hover:text-cream">
              Privacidade
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/termos" className="transition-colors hover:text-cream">
              Termos
            </Link>
            <span aria-hidden="true">·</span>
            <span>Feito com ✦ pela Kippy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
