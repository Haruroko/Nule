import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === "development" ?  '' : '/Nule',
  experimental: {
    viewTransition: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
