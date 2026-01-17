/** @type {import('next').NextConfig} */

// 1) Prefer explicit env (GH Actions will set this)
// 2) Fallback: if building in GitHub Actions, infer repo name from GITHUB_REPOSITORY
const repo =
  process.env.GITHUB_REPOSITORY?.split("/")[1] || ""; // e.g. "pulseroom-landing"

const rawBase =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_ACTIONS ? `/${repo}` : "");

const basePath = rawBase
  ? `/${rawBase.replace(/^\/+|\/+$/g, "")}` // normalize slashes
  : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
