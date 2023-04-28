/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: false,
    },
    images: {
        unoptimized: true, // true for statics.
    },
    // Remove .html extension in URLs.
    exportPathMap: function () {
        return {
            "/": { page: "/" },
            "/company": { page: "/company" },
            "/404": { page: "/404" },
            // add more pages here
        };
    },
    // use this option if you want to use the file name as the route
    trailingSlash: true,
};

module.exports = nextConfig;
