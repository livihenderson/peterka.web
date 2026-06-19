import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only — AVIF on-demand encoding is ~5x slower to generate on a
    // small server tier (≈3.7s cold vs ≈0.8s for WebP), which made the first
    // load of large portraits drag. WebP is well-compressed and universal.
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // The team portraits are served `unoptimized` (already-compressed WebP),
    // so the only images that hit the optimizer are the hero + service-page
    // portraits, none of which render wider than ~1200 CSS px (≈480px box at
    // 2x DPR). Dropping 1600/1920 shrinks the cold-encode variant matrix.
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 512],
    // Allow a lighter quality for the heavily CSS-filtered hero portraits
    // (required allowlist in Next 16 — default is [75]).
    qualities: [65, 75],
  },
};

export default nextConfig;
