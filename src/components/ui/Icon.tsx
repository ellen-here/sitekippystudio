// Inline SVG icon set (stroke-based, 24x24 grid).
// Keeps the bundle light — no icon library dependency.

export type IconName =
  | "arrow-right"
  | "arrow-left"
  | "close"
  | "menu"
  | "play"
  | "check"
  | "chevron-down"
  | "code"
  | "cart"
  | "target"
  | "palette"
  | "social"
  | "video"
  | "whatsapp"
  | "instagram"
  | "behance"
  | "linkedin"
  | "youtube"
  | "tiktok"
  | "mail"
  | "pin"
  | "sparkle"
  | "wand";

const paths: Record<IconName, React.ReactNode> = {
  "arrow-right": (
    <path d="M4 12h16m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "arrow-left": (
    <path d="M20 12H4m0 0 6-6m-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  close: (
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
  ),
  menu: (
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
  ),
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" strokeLinejoin="round" />,
  check: <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />,
  "chevron-down": <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />,
  code: (
    <path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14" strokeLinecap="round" strokeLinejoin="round" />
  ),
  cart: (
    <path
      d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.55h7.3a2 2 0 0 0 1.95-1.57L20 8H6m3 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm8 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.4-1.2-1.7-1.2-2.9 0-.9.7-1.6 1.7-1.6H16a5 5 0 0 0 5-5c0-3.9-4-6.7-9-6.7Z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  social: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="4" />
      <path d="M8 15v-4m4 4V9m4 6v-2" strokeLinecap="round" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="3" />
      <path d="m16 10.5 5-2.5v8l-5-2.5" strokeLinejoin="round" />
    </>
  ),
  whatsapp: (
    <path
      d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.15A8.8 8.8 0 1 0 12 3.2Zm0 1.7a7.1 7.1 0 0 1 6 10.9l-.2.3.55 2-2.05-.53-.3.17A7.1 7.1 0 1 1 12 4.9Zm-2.6 3.3c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34 1 2.5c.12.16 1.7 2.7 4.2 3.68 2.07.8 2.5.65 2.95.6.45-.04 1.45-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.67-.8-.22-.09-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.2-.72-.64-1.2-1.44-1.35-1.68-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.55-.41h-.3Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  behance: (
    <>
      <path d="M3 6.5h5.2a2.6 2.6 0 0 1 0 5.2H3V6.5Zm0 5.2h5.7a2.75 2.75 0 0 1 0 5.5H3v-5.5Z" />
      <path d="M14.5 13.8h6a3 3 0 0 0-6 0v.4a2.6 2.6 0 0 0 4.9 1.2M15.5 7.5h4" strokeLinecap="round" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V17M8 7.6v.1M12 17v-3.7c0-1.5 2.9-2 2.9.3V17" strokeLinecap="round" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.5 9.5 5 2.5-5 2.5v-5Z" strokeLinejoin="round" />
    </>
  ),
  tiktok: (
    <path
      d="M14.5 3.5c.4 2 1.9 3.5 4 3.8v2.6c-1.5 0-2.9-.5-4-1.3v5.6a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.7a3 3 0 1 0 2.1 2.9V3.5h2.7Z"
      strokeLinejoin="round"
    />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  sparkle: (
    <path
      d="M12 1.5c.9 6.6 3 8.7 10.5 10.5-7.5 1.8-9.6 3.9-10.5 10.5-.9-6.6-3-8.7-10.5-10.5C9 10.2 11.1 8.1 12 1.5Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  // "wand-magic-sparkles" style — brand mark of the reference logo
  wand: (
    <>
      <path d="M4.5 19.5 14 10" strokeLinecap="round" />
      <path
        d="M16.5 3c.55 3.05 1.45 3.95 4.5 4.5-3.05.55-3.95 1.45-4.5 4.5-.55-3.05-1.45-3.95-4.5-4.5 3.05-.55 3.95-1.45 4.5-4.5Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M6.5 4c.3 1.6.8 2.1 2.4 2.4-1.6.3-2.1.8-2.4 2.4-.3-1.6-.8-2.1-2.4-2.4C5.7 6.1 6.2 5.6 6.5 4Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M18.5 15c.25 1.3.65 1.7 1.95 1.95-1.3.25-1.7.65-1.95 1.95-.25-1.3-.65-1.7-1.95-1.95 1.3-.25 1.7-.65 1.95-1.95Z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({ name, className = "h-5 w-5", strokeWidth = 1.7 }: IconProps) {
  const filled = name === "whatsapp" || name === "sparkle" || name === "play";
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
