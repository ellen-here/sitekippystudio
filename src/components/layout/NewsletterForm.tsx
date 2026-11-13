"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { isValidEmail } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

/** Simple newsletter signup ("Fique por dentro") — posts to /api/lead. */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "done">("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });
      if (!response.ok) throw new Error("request failed");
      track("newsletter_signup");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="flex items-center gap-2 text-sm text-cream" role="status">
        <Icon name="check" className="h-4 w-4 text-blush" />
        Pronto! Você receberá as novidades da Kippy.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5 transition-colors focus-within:border-blush/60">
        <label htmlFor="newsletter-email" className="sr-only">
          Seu melhor e-mail
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Seu melhor e-mail"
          className="min-w-0 flex-1 bg-transparent px-3.5 py-2 text-sm text-cream placeholder:text-cream/60 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blush text-white transition-colors hover:bg-blush-deep disabled:opacity-60"
          aria-label="Assinar newsletter"
        >
          <Icon name="arrow-right" className="h-4 w-4" />
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 pl-1 text-xs text-blush" role="alert">
          Digite um e-mail válido para continuar.
        </p>
      )}
    </form>
  );
}
