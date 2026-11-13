// Shared client-side analytics helper.
// Pushes events to the dataLayer (GTM) when consent was granted — see <Analytics />.

export type KippyEvent =
  | "click_whatsapp"
  | "submit_lead"
  | "view_portfolio"
  | "play_showreel"
  | "open_service_modal"
  | "newsletter_signup"
  | "click_cta";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: KippyEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // Events are only pushed after cookie consent (Analytics gates dataLayer usage)
  if (window.dataLayer) {
    window.dataLayer.push({ event, ...params });
  }
}
