/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.countryflags.com", "flagsapi.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
