import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zen.wego.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.wego.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.wego.pk",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
