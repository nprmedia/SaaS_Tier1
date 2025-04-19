// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yourcdn.com'], // <-- add CMS/image host domains here
  },
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
}

module.exports = nextConfig
