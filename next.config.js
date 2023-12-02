/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: true,
    env: {
        APP_NAME: process.env.APP_NAME,
        THE_BACKEND_API_URL: process.env.THE_BACKEND_API_URL
    }
}

module.exports = nextConfig
