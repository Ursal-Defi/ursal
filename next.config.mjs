/** @type {import('next').NextConfig} */
// next.config.js
const repo = "ursal";
const isProduction = process.env.NEXT_PUBLIC_PRODUCTION === 'true';

const nextConfig = {
  ...(isProduction && {
    output: "export",
    distDir: "docs",
    basePath: `/${repo}`,
    assetPrefix: `/${repo}`,
    images: { unoptimized: true },
    trailingSlash: true,
  }),
};
export default nextConfig;
