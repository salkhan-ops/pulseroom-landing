import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pulseroom-landing",
  trailingSlash: true,
  images: { unoptimized: true },
  // REPEAT: Do not add redirects here; it causes the warnings you see.
};

export default nextConfig;