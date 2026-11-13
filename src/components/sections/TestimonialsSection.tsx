"use client";

import { useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import Icon from "@/components/ui/Icon";
import Sparkle from "@/components/ui/Sparkle";

/** Client testimonial carousel (RF-06) — 3 cards visible on desktop. */
export default function TestimonialsSection() {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 320) + 24;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-title"
      className="scroll-mt-24 bg-cream"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blush/30 bg-rose-light/30 px-4 py-1.5 font-display text-xs font-bold tracking-wider text-blush-deep uppercase">
              <Icon name="sparkle" className="h-3.5 w-3.5" />
              Depoimentos
            </span>
            <h2
              id="depoimentos-title"
              className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-5xl"
            >
              Quem confia na Kippy{" "}
              <span className="text-blush-deep">fala por nós</span>
            </h2>
          </div>

          <div className="flex gap-2.5" aria-label="Controles do carrossel">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Depoimento anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-all hover:-translate-x-0.5 hover:border-blush/60 hover:text-blush-deep"
            >
              <Icon name="arrow-left" className="h-4.5 w-4.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Próximo depoimento"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-all hover:translate-x-0.5 hover:border-blush/60 hover:text-blush-deep"
            >
              <Icon name="arrow-right" className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8"
          aria-label="Lista de depoimentos de clientes"
        >
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              data-card
              className="min-w-[86%] snap-start rounded-3xl border border-black/5 bg-white p-8 shadow-sm sm:min-w-[54%] lg:min-w-[31.5%]"
            >
              {/* 4-pointed star rating — Kippy pattern */}
              <div
                className="flex gap-1"
                role="img"
                aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
              >
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Sparkle key={index} className="h-3.5 w-3.5 text-blush" delay={index * 150} />
                ))}
              </div>

              <blockquote className="mt-4 text-sm leading-relaxed text-graphite italic">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
                {testimonial.photo ? (
                  <Image
                    src={testimonial.photo}
                    alt={`Foto de ${testimonial.name}`}
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
                    style={{ backgroundColor: testimonial.accent }}
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </span>
                )}
                <div>
                  <p className="text-sm font-bold text-ink">{testimonial.name}</p>
                  <p className="text-xs text-graphite">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
