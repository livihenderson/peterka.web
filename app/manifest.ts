import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_TAGLINE } from "./_lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    short_name: "Peterka",
    description:
      "Komplexní soukromá péče o váš majetek, vaši rodinu a vaše záměry — investice, hypotéky, pojištění a nemovitosti pod jednou střechou.",
    start_url: "/",
    display: "standalone",
    lang: "cs",
    background_color: "#F2EBDD",
    theme_color: "#1E3A2C",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
