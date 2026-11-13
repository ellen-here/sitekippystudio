import { cn } from "@/lib/utils";

// Shared button class helpers (pill shape, 9999px) — usable on <a>, <button> or <Link>.
// Dark CTA hover uses the accessible rose (blush-deep) so white text keeps AA contrast.

export const btnBase = cn(
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3",
  "font-display text-sm font-semibold tracking-wide",
  "transition-all duration-200 ease-out",
  "active:scale-[0.98]"
);

export const btnPrimary = cn(
  btnBase,
  "bg-ink text-cream shadow-[0_8px_24px_-12px_rgba(33,37,41,0.6)]",
  "hover:-translate-y-0.5 hover:bg-blush-deep hover:shadow-[0_12px_28px_-12px_rgba(150,84,81,0.7)]"
);

export const btnSecondary = cn(
  btnBase,
  "border border-ink/10 bg-white text-ink shadow-sm",
  "hover:-translate-y-0.5 hover:border-blush/50 hover:bg-cream"
);

export const btnLight = cn(
  btnBase,
  "bg-cream text-ink shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]",
  "hover:-translate-y-0.5 hover:bg-blush-deep hover:text-white"
);

export const btnGhostLight = cn(
  btnBase,
  "border border-cream/35 bg-transparent text-cream",
  "hover:border-cream hover:bg-cream/10"
);
