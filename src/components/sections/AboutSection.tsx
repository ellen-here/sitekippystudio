import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Sparkle from "@/components/ui/Sparkle";
import { btnSecondary } from "@/components/ui/buttons";

const pillars = [
  {
    icon: "code" as const,
    title: "Estrutura digital",
    text: "Sites, landing pages e e-commerces de alta performance — a base que sustenta todo o resto.",
  },
  {
    icon: "target" as const,
    title: "Atração & retenção",
    text: "Tráfego pago, design, social media e audiovisual para trazer clientes e mantê-los.",
  },
];

/** "Sobre" section — institutional narrative + differentials. */
export default function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blush/30 bg-rose-light/30 px-4 py-1.5 font-display text-xs font-bold tracking-wider text-blush-deep uppercase">
              <Icon name="sparkle" className="h-3.5 w-3.5" />
              Sobre a Kippy
            </span>
            <h2
              id="sobre-title"
              className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-5xl"
            >
              Uma agência que une tecnologia, estética{" "}
              <span className="text-blush-deep">acolhedora</span> e estratégia de vendas.
            </h2>
            <p className="mt-5 leading-relaxed text-graphite">
              A Kippy Studio nasceu para resolver um problema comum: marcas boas que perdem
              vendas por falta de estrutura digital. Unimos desenvolvimento web, marketing e
              produção audiovisual em um só time — sem terceirização, sem ruído e com
              responsabilidade ponta a ponta pelo resultado.
            </p>
            <p className="mt-4 leading-relaxed text-graphite">
              Trabalhamos lado a lado com pequenas e médias empresas, marcas D2C e negócios
              B2B que querem profissionalizar a presença digital e escalar vendas com
              previsibilidade.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contato" className={btnSecondary}>
                Quero um diagnóstico
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <Sparkle className="absolute -top-6 right-10 h-5 w-5 text-blush" />
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-3xl border border-black/5 bg-white p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-light/40 text-blush-deep">
                    <Icon name={pillar.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">{pillar.text}</p>
                </article>
              ))}
            </div>

            {/* Values card */}
            <article className="mt-4 rounded-3xl border border-white/10 bg-ink p-6 text-cream">
              <h3 className="flex items-center gap-2 text-lg font-bold text-cream">
                Como trabalhamos
                <Icon name="sparkle" className="h-4 w-4 text-blush" />
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-cream/80">
                <li className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                  Briefing rápido e proposta transparente, sem letras miúdas.
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                  Time sênior do primeiro rascunho à entrega final.
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                  Métricas claras: o que foi feito, o que gerou e o próximo passo.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
