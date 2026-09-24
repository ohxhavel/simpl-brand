import type { NextConfig } from "next";

// Static export for GitHub Pages, served at the root of brand.simplsolutions.io.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
