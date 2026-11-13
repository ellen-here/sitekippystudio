import { ImageResponse } from "next/og";

// Static Open Graph image — appears on WhatsApp/Facebook/Twitter shares.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kippy Studio — Agência Digital & Criativa";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FCFAF7",
          backgroundImage:
            "radial-gradient(circle at 18% 24%, rgba(224,152,155,0.35), transparent 42%), radial-gradient(circle at 82% 76%, rgba(184,165,209,0.35), transparent 42%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 96,
            fontWeight: 700,
            color: "#212529",
            letterSpacing: -3,
          }}
        >
          kippy
          <span style={{ color: "#E0989B" }}>.</span>
          <span style={{ fontWeight: 300, opacity: 0.7 }}>studio</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            padding: "14px 34px",
            borderRadius: 999,
            backgroundColor: "#212529",
            color: "#FCFAF7",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Agência Digital &amp; Criativa
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 34,
            maxWidth: 900,
            fontSize: 32,
            color: "#4B5563",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Sites, e-commerce, tráfego pago, design, social media e audiovisual para
          transformar ideias em impacto digital.
        </div>
      </div>
    ),
    { ...size }
  );
}
