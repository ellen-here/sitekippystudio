import { metrics } from "@/data/testimonials";

/** Social proof metrics bar (RF-03) — dark card with rose numbers (reference style). */
export default function MetricsBar() {
  return (
    <section aria-label="Resultados da Kippy Studio" className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="rounded-3xl border border-white/10 bg-ink px-6 py-10 text-center shadow-2xl sm:px-8">
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric) => (
            <li key={metric.label}>
              <p className="font-display text-3xl font-extrabold text-blush sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-xs leading-snug font-semibold tracking-wider text-cream/80 uppercase">
                {metric.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
