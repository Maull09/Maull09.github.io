import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "development" ? undefined : "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Development uses Next.js; the exported home page uses an HTML redirect.
  ...(process.env.NODE_ENV === "development" ? {
    async redirects() {
      return [{ source: "/", destination: "/id/", permanent: false }];
    },
  } : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
