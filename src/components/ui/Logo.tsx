import { cn } from "@/lib/utils";
import Icon from "./Icon";

interface LogoProps {
  /** "dark" for light backgrounds, "light" for dark backgrounds */
  tone?: "dark" | "light";
  /** Smaller variant used in the footer */
  compact?: boolean;
  className?: string;
}

/**
 * Reference wordmark: rounded-square wand icon + "kippy.studio"
 * with the rose dot accent.
 */
export default function Logo({ tone = "dark", compact = false, className }: LogoProps) {
  const dark = tone === "dark";

  return (
    <span
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
      aria-label="kippy.studio"
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex items-center justify-center rounded-2xl border shadow-sm",
          compact ? "h-9 w-9" : "h-11 w-11",
          dark
            ? "border-blush/30 bg-rose-light/40 text-blush"
            : "border-white/10 bg-white/10 text-blush"
        )}
      >
        <Icon name="wand" className={compact ? "h-4 w-4" : "h-5 w-5"} />
      </span>
      <span
        className={cn(
          "font-display font-extrabold tracking-tight",
          compact ? "text-xl" : "text-2xl",
          dark ? "text-ink" : "text-white"
        )}
      >
        kippy<span className="text-blush">.</span>studio
      </span>
    </span>
  );
}
