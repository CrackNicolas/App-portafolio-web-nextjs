/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DEVELOPMENT_DOMAIN: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://app-portafolio-web-nextjs.vercel.app',
    }
}

module.exports = nextConfig
