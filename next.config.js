/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.kindpng.com',
      'lh3.googleusercontent.com',
      'cdn.pixabay.com',
      'p16-amd-va.tiktokcdn.com',
      'image.shutterstock.com',
    ],
  },
}

module.exports = nextConfig
