import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vellora Agency — Websites, Apps & SEO for Startups";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              border: "2px solid rgba(255,255,255,0.85)",
              background: "rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Vellora
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Build Faster
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 28,
              lineHeight: 1.35,
              maxWidth: 780,
            }}
          >
            Websites, apps, and SEO systems for ambitious startups.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#9eb0ff",
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Agency craft · Startup speed
        </div>
      </div>
    ),
    { ...size },
  );
}
