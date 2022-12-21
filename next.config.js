/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["backend.texnomart.uz"],
  },
};

module.exports = nextConfig;
