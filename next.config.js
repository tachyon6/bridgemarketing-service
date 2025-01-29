/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
        unoptimized: true,
    }
}

module.exports = nextConfig 