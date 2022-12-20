/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org','robohash.org',"rb.gy"],
  },
}

module.exports = nextConfig
