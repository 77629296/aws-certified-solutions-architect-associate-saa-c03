import webpack from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.resolve.fallback = {
      child_process: false,
    };

    return config;
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

export default nextConfig;
