/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/assets/:path*",
          destination: "https://likova.space/assets/:path*",
        },
        {
          source: "/en/:path*",
          destination: "https://likova.space/en/:path*",
        },
        {
          source: "/ajax/:path*",
          destination: "https://likova.space/ajax/:path*",
        },
        {
          source: "/api/:path*",
          destination: "https://likova.space/api/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
