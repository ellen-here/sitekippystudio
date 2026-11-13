"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  categoryLabels,
  portfolioFilters,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio";
import Icon from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { btnLight, btnGhostLight } from "@/components/ui/buttons";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

type Filter = ProjectCategory | "all";

/** Card artwork — photographic cover when available, CSS mockup otherwise. */
function projectArtwork(project: Project, className?: string) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        width={700}
        height={512}
        className={cn("h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", className)}
      />
    );
  }
  return (
    <div className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]">
      <ProjectVisual project={project} />
    </div>
  );
}

export default function PortfolioSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);

  const visible =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  function changeFilter(next: Filter) {
    setFilter(next);
    track("view_portfolio", { filter: next });
  }

  function openProject(project: Project) {
    track("view_portfolio", { project: project.slug, action: "open_case" });
    setActive(project);
  }

  return (
    <>
      <section
        id="portfolio"
        aria-labelledby="portfolio-title"
        className="scroll-mt-24 bg-ink text-cream"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-display text-xs font-bold tracking-wider text-blush uppercase">
                <Icon name="sparkle" className="h-3.5 w-3.5" />
                Portfólio &amp; Cases
              </span>
              <h2
                id="portfolio-title"
                className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-cream sm:text-5xl"
              >
                Projetos que viraram{" "}
                <span className="text-blush">resultado de verdade</span>
              </h2>
              <p className="mt-4 text-cream/70">
                Sites, lojas, marcas, conteúdo e campanhas. Clique em um projeto para ver o
                desafio, a solução e os números.
              </p>
            </div>

            {/* Category filters */}
            <div
              role="group"
              aria-label="Filtrar projetos por categoria"
              className="flex flex-wrap gap-2"
            >
              {portfolioFilters.map((option) => {
                const isActive = filter === option.slug;
                return (
                  <button
                    key={option.slug}
                    type="button"
                    onClick={() => changeFilter(option.slug)}
                    aria-pressed={isActive}
                    className={cn(
                      "rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 sm:text-sm",
                      isActive
                        ? "bg-cream text-ink shadow-lg"
                        : "border border-cream/25 text-cream/75 hover:border-cream/60 hover:text-cream"
                    )}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project grid */}
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, index) => (
              <li key={project.slug} className="grid-item-enter" style={{ animationDelay: `${index * 60}ms` }}>
                <button
                  type="button"
                  onClick={() => openProject(project)}
                  aria-haspopup="dialog"
                  className="group flex h-full w-full flex-col rounded-3xl border border-white/10 bg-white/5 p-5 text-left transition-all duration-300 hover:border-blush/50"
                >
                  <div className="relative mb-5 h-64 overflow-hidden rounded-2xl">
                    {projectArtwork(project)}
                    {project.category === "video" && (
                      <span className="absolute top-3 left-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-semibold text-cream backdrop-blur">
                        ▶ Vídeo
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col">
                    <span className="text-xs font-bold tracking-wider text-blush uppercase">
                      {categoryLabels[project.category]} · {project.year}
                    </span>

                    <h3 className="mt-1.5 text-xl leading-snug font-bold text-cream">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-cream/60">{project.client}</p>

                    {project.metrics?.[0] && (
                      <p className="mt-3 text-sm font-semibold text-blush">
                        {project.metrics[0].before} → {project.metrics[0].after}
                      </p>
                    )}
                    {!project.metrics && project.results[0] && (
                      <p className="mt-3 text-sm font-semibold text-blush">{project.results[0]}</p>
                    )}

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-cream/70 transition-colors group-hover:text-cream">
                      Ver case completo
                      <Icon
                        name="arrow-right"
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {visible.length === 0 && (
            <p className="py-16 text-center text-cream/70">
              Nenhum projeto nesta categoria ainda — volte em breve ✦
            </p>
          )}
        </div>
      </section>

      {/* -------- Case modal -------- */}
      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        title={active?.title ?? ""}
        variant="dark"
        className="max-w-3xl"
      >
        {active && (
          <div className="text-cream">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-wide uppercase">
              <span className="rounded-full bg-blush/20 px-3 py-1 text-blush">
                {categoryLabels[active.category]}
              </span>
              <span className="rounded-full border border-cream/25 px-3 py-1 text-cream/80">
                {active.client}
              </span>
              <span className="text-cream/60">{active.year}</span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl">
              <div className="aspect-[16/9]">
                {active.image ? (
                  <Image
                    src={active.image}
                    alt={active.title}
                    width={1152}
                    height={648}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ProjectVisual project={active} />
                )}
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-blush uppercase">
                  <Icon name="target" className="h-4 w-4" />
                  Desafio do cliente
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/80">
                  {active.challenge}
                </p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-blush uppercase">
                  <Icon name="sparkle" className="h-4 w-4" />
                  Solução da Kippy
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/80">{active.solution}</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-display text-sm font-semibold tracking-wide text-blush uppercase">
                Serviços envolvidos
              </h4>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {active.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full bg-cream/10 px-3 py-1.5 text-xs font-medium text-cream/85"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-blush/40 bg-blush/10 p-5">
              <h4 className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-blush uppercase">
                <Icon name="check" className="h-4 w-4" />
                Resultados obtidos
              </h4>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-3">
                {active.results.map((result) => (
                  <li
                    key={result}
                    className="rounded-xl bg-ink/60 px-3.5 py-3 text-sm font-semibold text-cream"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {active.liveUrl && (
                <a
                  href={active.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnLight}
                >
                  Ver projeto ao vivo
                  <Icon name="arrow-right" className="h-4 w-4" />
                </a>
              )}
              <Link
                href="/#contato"
                onClick={() => setActive(null)}
                className={btnGhostLight}
              >
                Quero um resultado assim
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
