import { cn } from "@/lib/utils";

interface WaveDividerProps {
  /** Fill color of the wave shape (the section color it belongs to) */
  fill: string;
  className?: string;
  /** Put the wave at the bottom of its container instead of the top */
  position?: "top" | "bottom";
}

/**
 * Organic wavy divider between light and dark sections.
 * Renders an SVG stretched to the container width.
 */
export default function WaveDivider({
  fill,
  className,
  position = "top",
}: WaveDividerProps) {
  const path =
    position === "top"
      ? "M0,96 C240,140 420,40 720,64 C1020,88 1200,144 1440,88 L1440,0 L0,0 Z"
      : "M0,56 C240,8 460,120 720,96 C980,72 1220,4 1440,56 L1440,144 L0,144 Z";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative z-10 w-full overflow-hidden leading-[0]",
        position === "top" ? "-mt-px" : "-mb-px",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 144"
        preserveAspectRatio="none"
        className="block h-[70px] w-full sm:h-[100px] md:h-[120px]"
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}
