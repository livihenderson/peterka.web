import { ImageResponse } from "next/og";

export const alt =
  "Peterka & Kolektiv — Privátní finanční dům. Praha · České Budějovice · Tábor · Soběslav.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Palette mirrors app/globals.css design tokens.
const BONE = "#F2EBDD";
const MOSS = "#1E3A2C";
const INK_SOFT = "#2C322B";
const BRASS = "#A6814E";
const BRASS_DEEP = "#7B5C36";

/**
 * Fetch a TrueType font from Google Fonts for Satori. A plain server-side
 * fetch (no browser User-Agent) makes css2 return `format('truetype')`, which
 * Satori can parse. Returns null on any failure so the build never breaks —
 * ImageResponse then falls back to its bundled default font.
 */
async function loadFraunces(text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500&text=${encodeURIComponent(
      text,
    )}`;
    const css = await (await fetch(url)).text();
    const src = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
    );
    if (!src) return null;
    const res = await fetch(src[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const text =
    "Peterka & KolektivPrivátní finanční důmKomplexní péče o váš majetek a vaše záměry.PRAHAČESKÉBUDĚJOVICETÁBORSOBĚSLAVEST. MMX0123456789·—";
  const fraunces = await loadFraunces(text);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BONE,
          padding: "72px 80px",
          fontFamily: fraunces ? "Fraunces" : "serif",
        }}
      >
        {/* Top rule + eyebrow */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: BRASS_DEEP,
              fontSize: 22,
              letterSpacing: 6,
            }}
          >
            <div style={{ width: 56, height: 2, background: BRASS }} />
            PRIVÁTNÍ FINANČNÍ DŮM
          </div>
        </div>

        {/* Wordmark */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              lineHeight: 1,
              letterSpacing: -3,
              color: MOSS,
            }}
          >
            Peterka
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              lineHeight: 1.05,
              letterSpacing: -3,
              color: BRASS,
            }}
          >
            &amp; Kolektiv
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 34,
              color: INK_SOFT,
              maxWidth: 760,
            }}
          >
            Komplexní péče o váš majetek a vaše záměry.
          </div>
        </div>

        {/* Footer: branches + est */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${BRASS}`,
            paddingTop: 24,
            color: BRASS_DEEP,
            fontSize: 21,
            letterSpacing: 3,
          }}
        >
          <div style={{ display: "flex" }}>
            PRAHA · ČESKÉ BUDĚJOVICE · TÁBOR · SOBĚSLAV
          </div>
          <div style={{ display: "flex" }}>EST. MMX</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fraunces
        ? [{ name: "Fraunces", data: fraunces, style: "normal", weight: 500 }]
        : [],
    },
  );
}
