import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static exports
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js image optimization
  },

  basePath: '/portfolio',
};

export default nextConfig;
