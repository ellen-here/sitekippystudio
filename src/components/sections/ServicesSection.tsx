"use client";

import { useState } from "react";
import Link from "next/link";
import { services, type Service } from "@/data/services";
import Icon from "@/components/ui/Icon";
import Sparkle from "@/components/ui/Sparkle";
import Modal from "@/components/ui/Modal";
import { btnPrimary } from "@/components/ui/buttons";
import { track } from "@/lib/analytics";

export default function ServicesSection() {
  const [active, setActive] = useState<Service | null>(null);

  function openService(service: Service) {
    track("open_service_modal", { service: service.slug });
    setActive(service);
  }

  function requestQuote(service: Service) {
    setActive(null);
    // Tell the contact form which service the user is interested in
    window.dispatchEvent(
      new CustomEvent("kippy:select-service", { detail: service.slug })
    );
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blush/30 bg-rose-light/30 px-4 py-1.5 font-display text-xs font-bold tracking-wider text-blush-deep uppercase">
            <Icon name="sparkle" className="h-3.5 w-3.5" />
            O que fazemos
          </span>
          <h2
            id="servicos-title"
            className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-5xl"
          >
            Serviços que cobrem sua marca{" "}
            <span className="text-blush-deep">do zero ao crescimento</span>
          </h2>
          <p className="mt-4 text-graphite">
            Dois pilares, seis frentes. Clique em cada serviço para ver entregáveis,
            benefícios e pedir um orçamento sob medida.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => openService(service)}
              aria-haspopup="dialog"
              className="group animate-fade-up rounded-3xl border border-black/5 bg-cream p-8 text-left transition-all duration-300 hover:border-blush/40 hover:shadow-xl focus-visible:border-blush"
              style={{ animationDelay: `${Math.min(index * 70, 420)}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-light/40 text-blush-deep transition-colors duration-300 group-hover:bg-blush-deep group-hover:text-white">
                  <Icon name={service.icon} className="h-6.5 w-6.5" />
                </span>
                <span className="rounded-full bg-lavender/20 px-3 py-1 text-[11px] font-semibold tracking-wide text-graphite uppercase">
                  {service.pillarLabel}
                </span>
              </div>

              <h3 className="mt-5 text-xl leading-snug font-bold text-ink">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-graphite">{service.short}</p>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-blush-deep">
                Saiba mais
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* -------- Service detail modal -------- */}
      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        title={active?.title ?? ""}
        className="max-w-2xl"
      >
        {active && (
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blush/30 bg-rose-light/30 px-3 py-1.5 font-display text-[11px] font-bold tracking-wide text-blush-deep uppercase">
              <Sparkle className="h-3 w-3" />
              {active.pillarLabel}
            </span>

            <p className="mt-4 leading-relaxed text-graphite">{active.description}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-ink uppercase">
                  <Icon name="check" className="h-4 w-4 text-blush-deep" />
                  Entregáveis
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {active.deliverables.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-graphite">
                      <Sparkle className="mt-1 h-3 w-3 shrink-0 text-blush-deep" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-ink uppercase">
                  <Icon name="sparkle" className="h-4 w-4 text-lavender" />
                  Benefícios
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {active.benefits.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-graphite">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-blush-deep" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-6">
              <button type="button" onClick={() => requestQuote(active)} className={btnPrimary}>
                Solicitar orçamento deste serviço
                <Icon name="arrow-right" className="h-4 w-4" />
              </button>
              <Link
                href="/#portfolio"
                onClick={() => setActive(null)}
                className="text-sm font-semibold text-graphite underline underline-offset-4 hover:text-ink"
              >
                Ver cases relacionados
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
