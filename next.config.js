/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        KEY_RECAPTCHA : '6LfoLOklAAAAAMZ0rM3pBfmzxa6Kj47b5EIvA45C',
        KEY_EMAIL: 're_Ex9S7ZqP_HsvNt7b7EpjTH9eTSR5x7yau',
        DEVELOPMENT_DOMAIN:
            process.env.NODE_ENV === 'development' ?
                'http://localhost:3000'
                :
                'https://app-portafolio-web-nextjs.vercel.app',
    }
}

module.exports = nextConfig
