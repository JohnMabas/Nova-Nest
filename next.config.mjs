/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.zillowstatic.com",
      },
      {
        protocol: "https",
        hostname: "**.zillowstatic.com",
      },
    ],
  },
};

export default nextConfig;
