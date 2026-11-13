"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import Icon from "./Icon";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Accessible title of the dialog */
  title: string;
  children: ReactNode;
  className?: string;
  /** Panel background tone — avoids conflicting bg utility classes */
  variant?: "light" | "dark";
}

/**
 * Accessible modal dialog: backdrop click, Esc to close, focus trap,
 * scroll lock and focus restore on close.
 */
export default function Modal({
  open,
  onClose,
  title,
  children,
  className,
  variant = "light",
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative flex min-h-full items-end justify-center sm:items-center sm:p-6">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className={cn(
            "animate-scale-in relative w-full rounded-t-3xl shadow-2xl sm:rounded-3xl",
            variant === "dark" ? "bg-ink" : "bg-cream",
            className
          )}
        >
          <div
            className={cn(
              "flex items-start justify-between gap-4 border-b px-6 py-5 sm:px-8",
              variant === "dark" ? "border-cream/10" : "border-ink/10"
            )}
          >
            <h3
              className={cn(
                "max-w-[85%] text-lg leading-snug font-semibold sm:text-xl",
                variant === "dark" ? "text-cream" : "text-ink"
              )}
            >
              {title}
            </h3>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar janela"
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors",
                variant === "light"
                  ? "bg-sand text-ink hover:bg-blush-deep hover:text-white"
                  : "bg-cream/10 text-cream hover:bg-cream/20"
              )}
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>
          <div className="px-6 py-6 sm:px-8 sm:py-7">{children}</div>
        </div>
      </div>
    </div>
  );
}
