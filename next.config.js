/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    emotion: true,
    esmExternals:false,
  }
}

module.exports = nextConfig
