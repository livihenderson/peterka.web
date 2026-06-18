import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only — AVIF on-demand encoding is ~5x slower to generate on a
    // small server tier (≈3.7s cold vs ≈0.8s for WebP), which made the first
    // load of large portraits drag. WebP is well-compressed and universal.
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 512, 768],
  },
};

export default nextConfig;
