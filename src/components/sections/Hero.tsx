"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import Icon from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import { btnPrimary, btnSecondary } from "@/components/ui/buttons";
import { track } from "@/lib/analytics";

// Hero imagery — verified Unsplash asset used by the reference design.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80";

export default function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  function openShowreel() {
    track("play_showreel", { location: "hero" });
    setShowreelOpen(true);
  }

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden blob-bg">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pt-12 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pt-20 lg:pb-24">
        {/* -------- Copy -------- */}
        <div className="lg:col-span-7">
          <span className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-blush/30 bg-white/90 px-4 py-2 shadow-sm">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 animate-pulse rounded-full bg-blush"
            />
            <span className="font-display text-xs font-bold tracking-wider text-graphite uppercase">
              Agência Digital &amp; Criativa
            </span>
          </span>

          <h1
            id="hero-title"
            className="animate-fade-up delay-100 mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Transformando Ideias Em{" "}
            <span className="relative isolate inline-block text-blush-deep">
              Impacto Digital
              <span
                aria-hidden="true"
                className="absolute bottom-1.5 left-0 -z-10 h-3 w-full rounded-full bg-rose-light"
              />
            </span>
          </h1>

          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-graphite md:text-xl">
            Tecnologia, design e marketing trabalhando juntos para gerar vendas e autoridade
            para a sua marca — do site que converte ao tráfego que escala, com atendimento
            próximo do briefing ao resultado.
          </p>

          <div className="animate-fade-up delay-300 mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#contato"
              className={btnPrimary}
              onClick={() => track("click_cta", { location: "hero_primary" })}
            >
              Solicitar Orçamento
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <button type="button" onClick={openShowreel} className={btnSecondary}>
              <Icon name="play" className="h-5 w-5 text-blush-deep" />
              Ver Showreel
            </button>
          </div>

          <div className="animate-fade-up delay-400 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-graphite">
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-blush-deep" />
              Briefing em até 24h
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-blush-deep" />
              Projetos ponta a ponta
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-blush-deep" />
              Time sênior, sem terceirização
            </span>
          </div>
        </div>

        {/* -------- Visual card (reference composition) -------- */}
        <div className="animate-fade-up delay-200 lg:col-span-5">
          <div className="custom-shadow relative mx-auto max-w-md rounded-3xl border border-black/5 bg-white p-5 shadow-2xl transition-transform duration-500 lg:rotate-2 lg:hover:rotate-0">
            <div className="absolute -top-4 -right-4 z-10 flex h-14 w-14 animate-bounce items-center justify-center rounded-2xl bg-lavender text-white shadow-lg">
              <Icon name="sparkle" className="h-6 w-6" />
            </div>
            <div className="mb-4 overflow-hidden rounded-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Diretora criativa da Kippy Studio em reunião de projeto"
                width={700}
                height={800}
                priority
                className="h-80 w-full object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1">
              <div>
                <h2 className="font-display text-lg font-bold text-ink">Time Kippy Studio</h2>
                <p className="text-xs text-graphite">Design &amp; Estratégia Digital</p>
              </div>
              <span className="shrink-0 rounded-xl border border-blush/30 bg-rose-light/40 px-4 py-2 text-xs font-bold text-blush-deep">
                +120 Projetos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* -------- Showreel modal -------- */}
      <Modal
        open={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        title="Showreel Kippy Studio"
        className="max-w-3xl"
      >
        <div className="overflow-hidden rounded-2xl bg-ink">
          {site.showreelUrl ? (
            <video
              src={site.showreelUrl}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full"
            >
              Seu navegador não suporta vídeos incorporados.
            </video>
          ) : (
            <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ink via-graphite to-ink">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 30%, rgba(184,165,209,0.45), transparent 45%), radial-gradient(circle at 80% 70%, rgba(224,152,155,0.45), transparent 45%)",
                }}
              />
              <div className="relative text-center">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cream/95 text-ink shadow-xl">
                  <Icon name="play" className="ml-1 h-9 w-9" />
                </span>
                <p className="mt-5 font-display text-xl font-semibold text-cream">
                  Showreel 2026
                </p>
                <p className="mt-1.5 max-w-sm px-6 text-sm text-cream/80">
                  Vídeo institucional em produção pelo nosso núcleo de Videomaker.
                </p>
              </div>
              <span className="absolute right-4 bottom-3 text-[11px] tracking-wider text-cream/60 uppercase">
                Em breve
              </span>
            </div>
          )}
        </div>
        <p className="mt-4 text-sm text-graphite">
          Quer um vídeo assim para a sua marca?{" "}
          <Link
            href="/#contato"
            className="font-semibold text-blush-deep underline underline-offset-4"
            onClick={() => setShowreelOpen(false)}
          >
            Fale com a gente
          </Link>
          .
        </p>
      </Modal>
    </section>
  );
}
