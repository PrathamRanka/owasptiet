const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // allows all paths under res.cloudinary.com
      },
      {
        protocol: 'https',
        hostname: 'www.linkedin.com',
        pathname: '/**', // allows all LinkedIn images
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**', // for GitHub profile avatars
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
