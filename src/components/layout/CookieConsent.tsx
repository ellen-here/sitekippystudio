"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import { btnPrimary } from "@/components/ui/buttons";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "kippy_cookie_consent";

type Consent = "accepted" | "declined";

/**
 * LGPD cookie consent banner (RF / RNF — LGPD e Segurança).
 * Tracking scripts are only loaded after the user accepts — see <Analytics />.
 * Styled after the reference toast: white card, rose border, rounded-2xl.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const timer = window.setTimeout(() => setVisible(true), 900);
        return () => window.clearTimeout(timer);
      }
    } catch {
      // Storage unavailable — keep the banner hidden to avoid blocking users
    }
  }, []);

  function decide(choice: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Ignore storage failures
    }
    window.dispatchEvent(new CustomEvent("kippy:consent", { detail: choice }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="animate-fade-up fixed inset-x-0 bottom-0 z-45"
    >
      <div className="mx-auto m-3 max-w-4xl rounded-2xl border border-blush/30 bg-white p-5 shadow-2xl sm:m-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="flex items-center gap-2.5 font-display text-sm font-bold text-ink">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-light/50 text-blush-deep"
              >
                <Icon name="sparkle" className="h-4 w-4" />
              </span>
              Sua privacidade importa
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-graphite sm:text-sm">
              Usamos cookies para melhorar sua experiência e medir a performance do site (GA4,
              Meta Pixel e mapas de calor). Nada é carregado sem o seu aceite.{" "}
              <Link
                href="/privacidade"
                className="font-medium text-blush-deep underline underline-offset-2 hover:text-ink"
              >
                Saiba mais na Política de Privacidade
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => decide("declined")}
              className="rounded-full border border-ink/20 px-5 py-2.5 font-display text-sm font-medium text-ink transition-colors hover:border-ink/60 hover:bg-cream"
            >
              Só o essencial
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className={cn(btnPrimary, "px-5 py-2.5")}
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
