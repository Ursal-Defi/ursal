/** @type {import('next').NextConfig} */
// next.config.js
const repo = "ursal";

const nextConfig = {
  output: "export",
  distDir: "docs",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
