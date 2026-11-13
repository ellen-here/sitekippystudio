"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import { btnPrimary, btnSecondary } from "@/components/ui/buttons";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b bg-cream/90 backdrop-blur-md transition-all duration-300",
          scrolled
            ? "border-ink/5 shadow-[0_8px_30px_-20px_rgba(33,37,41,0.45)]"
            : "border-black/5"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link
            href="/"
            aria-label="kippy.studio — voltar ao topo"
            className="transition-transform hover:-translate-y-0.5"
            onClick={() => track("click_cta", { location: "header_logo" })}
          >
            <Logo />
          </Link>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-graphite transition-colors hover:text-blush-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/#contato"
              className={cn(btnPrimary, "px-6 py-3")}
              onClick={() => track("click_cta", { location: "header" })}
            >
              Vamos Conversar
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-rose-light/60 lg:hidden"
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile drawer — light menu, per the reference design */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="animate-fade-up fixed inset-0 z-50 flex flex-col bg-cream text-ink lg:hidden"
        >
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream transition-colors hover:bg-blush-deep"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Navegação mobile" className="flex-1 overflow-y-auto px-5 pt-6 sm:px-8">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <li key={link.href} className="animate-fade-up" style={{ animationDelay: `${index * 70}ms` }}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between border-b border-ink/10 py-5 font-display text-2xl font-medium transition-colors hover:text-blush-deep"
                  >
                    {link.label}
                    <Icon name="arrow-right" className="h-5 w-5 text-blush" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="animate-fade-up space-y-3 px-5 pt-4 pb-8 sm:px-8" style={{ animationDelay: "280ms" }}>
            <Link
              href="/#contato"
              onClick={() => {
                setMenuOpen(false);
                track("click_cta", { location: "mobile_drawer" });
              }}
              className={cn(btnPrimary, "w-full")}
            >
              Vamos Conversar
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <a
              href="mailto:contato@kippystudio.com.br"
              className={cn(btnSecondary, "w-full")}
            >
              contato@kippystudio.com.br
            </a>
          </div>
        </div>
      )}
    </>
  );
}
