/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org','robohash.org',"rb.gy","upload.wikimedia.org","lh3.googleusercontent.com"],
  },
}

module.exports = nextConfig
