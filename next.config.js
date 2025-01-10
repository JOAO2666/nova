/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/nova',
  assetPrefix: '/nova/',
  images: {
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig
