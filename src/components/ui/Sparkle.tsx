import { cn } from "@/lib/utils";

interface SparkleProps {
  className?: string;
  /** Animation delay in ms */
  delay?: number;
}

/** Four-pointed star (✦) used as the Kippy interface marker. */
export default function Sparkle({ className, delay = 0 }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("animate-twinkle", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      fill="currentColor"
    >
      <path d="M12 0c1 8.2 2.8 10 12 12-9.2 2-11 3.8-12 12-1-8.2-2.8-10-12-12C9.2 10 11 8.2 12 0Z" />
    </svg>
  );
}
