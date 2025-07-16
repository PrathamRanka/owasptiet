// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optional: You can also enable future Rust-based image handling or turbopack
  // images: {
  //   formats: ['image/avif', 'image/webp'],
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
