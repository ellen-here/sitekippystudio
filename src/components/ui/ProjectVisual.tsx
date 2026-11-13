import type { Project } from "@/data/portfolio";
import Icon from "./Icon";

interface ProjectVisualProps {
  project: Project;
}

/**
 * Card artwork — realistic-ish mockups drawn with CSS/SVG
 * (no photographic assets available in the MVP).
 */
export default function ProjectVisual({ project }: ProjectVisualProps) {
  const { visual, accent } = project;

  if (visual === "browser") {
    return (
      <div className="flex h-full flex-col bg-gradient-to-br from-sand to-cream p-5 sm:p-7">
        <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-xl border border-ink/10 bg-cream shadow-xl">
          <div className="flex items-center gap-1.5 border-b border-ink/8 bg-sand px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-blush" />
            <span className="h-2 w-2 rounded-full bg-lavender" />
            <span className="h-2 w-2 rounded-full bg-graphite/40" />
            <span className="ml-2 h-2 flex-1 rounded-full bg-ink/8" />
          </div>
          <div className="space-y-2.5 p-4">
            <div className="h-16 rounded-lg" style={{ backgroundColor: accent, opacity: 0.85 }} />
            <div className="h-2.5 w-4/5 rounded-full bg-ink/15" />
            <div className="h-2.5 w-3/5 rounded-full bg-ink/10" />
            <div className="flex gap-2 pt-1">
              <div className="h-6 w-20 rounded-full" style={{ backgroundColor: accent }} />
              <div className="h-6 w-14 rounded-full border border-ink/15" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "phone") {
    return (
      <div className="relative flex h-full items-center justify-center bg-gradient-to-br from-lavender/30 to-blush/25 p-5">
        <div className="w-[150px] overflow-hidden rounded-[26px] border-[5px] border-ink bg-cream shadow-2xl">
          <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-ink/25" />
          <div className="mt-2 h-24" style={{ backgroundColor: accent, opacity: 0.9 }} />
          <div className="space-y-2 p-3">
            <div className="h-2.5 w-4/5 rounded-full bg-ink/15" />
            <div className="h-2.5 w-3/5 rounded-full bg-ink/10" />
            <div className="h-7 rounded-full" style={{ backgroundColor: accent }} />
            <div className="h-10 rounded-lg bg-sand" />
          </div>
        </div>
        <div className="absolute right-5 bottom-5 h-16 w-16 rounded-full bg-cream/70 blur-xl" />
      </div>
    );
  }

  if (visual === "branding") {
    return (
      <div className="flex h-full items-center justify-center bg-ink p-5 sm:p-7">
        <div className="grid w-full max-w-[300px] grid-cols-2 gap-3">
          <div className="col-span-2 flex h-24 items-center justify-center rounded-xl bg-cream">
            <span className="font-display text-2xl font-semibold" style={{ color: accent }}>
              marca
            </span>
            <Icon name="sparkle" className="ml-1 h-4 w-4" />
          </div>
          <div className="h-16 rounded-xl" style={{ backgroundColor: accent }} />
          <div className="h-16 rounded-xl bg-cream/90" />
          <div className="h-10 rounded-xl bg-lavender" />
          <div className="h-10 rounded-xl bg-cream/70" />
        </div>
      </div>
    );
  }

  if (visual === "video") {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-ink via-graphite to-ink">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, ${accent}66, transparent 50%), radial-gradient(circle at 75% 75%, rgba(167,155,198,0.4), transparent 50%)`,
          }}
        />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 text-ink shadow-xl transition-transform duration-200 group-hover:scale-110">
          <Icon name="play" className="ml-1 h-8 w-8" />
        </span>
        {project.duration && (
          <span className="absolute right-3 bottom-3 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-medium text-cream">
            {project.duration}
          </span>
        )}
      </div>
    );
  }

  if (visual === "ads") {
    return (
      <div className="flex h-full flex-col justify-center bg-gradient-to-br from-cream to-sand p-5 sm:p-7">
        <div className="rounded-xl border border-ink/10 bg-cream p-4 shadow-lg">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] font-semibold tracking-wide text-graphite uppercase">
              Resultado em 90 dias
            </span>
            <Icon name="sparkle" className="h-3.5 w-3.5 text-blush-deep" />
          </div>
          {/* Bar chart: before vs after */}
          <div className="mt-4 flex h-24 items-end gap-5">
            <div className="flex flex-1 flex-col items-center gap-1.5">
              <div className="w-full rounded-t-md bg-ink/15" style={{ height: "34%" }} />
              <span className="text-[10px] text-graphite">antes</span>
            </div>
            <div className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className="w-full rounded-t-md"
                style={{ height: "92%", backgroundColor: accent }}
              />
              <span className="text-[10px] font-semibold text-ink">depois</span>
            </div>
            <div className="flex flex-1 flex-col items-center gap-1.5">
              <div className="w-full rounded-t-md bg-lavender/70" style={{ height: "62%" }} />
              <span className="text-[10px] text-graphite">meta</span>
            </div>
          </div>
        </div>
        {project.metrics?.[0] && (
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-ink px-3 py-2 text-cream">
            <span className="text-[11px] text-cream/70">{project.metrics[0].label}</span>
            <span className="text-[11px] text-cream/50 line-through">
              {project.metrics[0].before}
            </span>
            <Icon name="arrow-right" className="h-3 w-3 text-lavender" />
            <span className="text-[11px] font-semibold" style={{ color: "#B8A5D1" }}>
              {project.metrics[0].after}
            </span>
          </div>
        )}
      </div>
    );
  }

  // visual === "social"
  return (
    <div className="flex h-full items-center justify-center bg-sand p-5 sm:p-7">
      <div className="grid w-full max-w-[300px] grid-cols-3 gap-2.5">
        {[0, 1, 2, 3, 4, 5].map((tile) => (
          <div
            key={tile}
            className="aspect-square rounded-lg"
            style={{
              backgroundColor: tile % 3 === 0 ? accent : tile % 3 === 1 ? "#B8A5D1" : "#E0989B",
              opacity: tile % 2 === 0 ? 0.9 : 0.55,
            }}
          />
        ))}
      </div>
    </div>
  );
}
