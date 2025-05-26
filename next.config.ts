/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {}, // ✅ empty object if unused
  },
  // ❌ remove `swcMinify`, it's deprecated in Next 14+
  reactStrictMode: true,
};

export default nextConfig;
