import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/olivebakers',
  assetPrefix: '/olivebakers',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
