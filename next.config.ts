import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Nule',
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
