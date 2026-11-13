"use client";

import { useEffect } from "react";

const STORAGE_KEY = "kippy_cookie_consent";

/**
 * Analytics loader (RNF — Rastreamento).
 * Initializes the dataLayer and loads Google Tag Manager only after cookie consent.
 *
 * Configure with:
 *   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX   (GTM container — loads GA4, Meta Pixel, Clarity, etc.)
 *
 * Mapped events (see src/lib/analytics.ts):
 *   click_whatsapp, submit_lead, view_portfolio, play_showreel,
 *   open_service_modal, newsletter_signup, click_cta
 */
export default function Analytics() {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

    function applyConsent(consent: string | null) {
      if (consent !== "accepted") return;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "kippy_consent_accepted" });

      if (gtmId && !document.getElementById("gtm-loader")) {
        const script = document.createElement("script");
        script.id = "gtm-loader";
        script.async = true;
        script.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');`;
        document.head.appendChild(script);
      }
    }

    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    applyConsent(stored);

    const onConsent = () => {
      let choice: string | null = null;
      try {
        choice = localStorage.getItem(STORAGE_KEY);
      } catch {
        choice = null;
      }
      applyConsent(choice);
    };

    window.addEventListener("kippy:consent", onConsent);
    return () => window.removeEventListener("kippy:consent", onConsent);
  }, []);

  return null;
}
