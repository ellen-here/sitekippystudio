"use client";

import { whatsappLink } from "@/data/site";
import Icon from "@/components/ui/Icon";
import { track } from "@/lib/analytics";

/** Floating WhatsApp button (RF-08) — discreet, in Kippy colors. */
export default function FloatingWhatsApp() {
  function handleClick() {
    track("click_whatsapp", { location: "floating_button" });
    window.open(whatsappLink(), "_blank", "noopener,noreferrer");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Conversar no WhatsApp com a Kippy Studio"
      className="group fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6"
    >
      <span className="absolute inset-0 rounded-full bg-blush/50 animate-pulse-ring" aria-hidden="true" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-cream shadow-[0_12px_30px_-10px_rgba(43,52,61,0.7)] transition-all duration-200 group-hover:-translate-y-1 group-hover:bg-blush-deep sm:h-15 sm:w-15">
        <Icon name="whatsapp" className="h-7 w-7" />
      </span>
      <span className="pointer-events-none absolute right-full mr-3 hidden max-w-[180px] rounded-full bg-ink px-4 py-2 text-xs font-medium whitespace-nowrap text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Chama no WhatsApp ✦
      </span>
    </button>
  );
}
