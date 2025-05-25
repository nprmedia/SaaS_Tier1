/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // ✅ empty object if unused
  },
  // ❌ remove `swcMinify`, it's deprecated in Next 14+
  reactStrictMode: true,
};

export default nextConfig;
