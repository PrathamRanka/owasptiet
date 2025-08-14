const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // ✅ Allow Cloudinary images
    formats: ['image/avif', 'image/webp'], // ✅ Optional: Modern formats for better performance
  },
};

module.exports = withBundleAnalyzer(nextConfig);
