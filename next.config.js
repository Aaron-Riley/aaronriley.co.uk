/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps with identifying potential issues in your app
  experimental: {}, // Your existing experimental feature flag

  // These settings ensure hot-reloading behaves as expected
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // Keep pages in the buffer for 25 seconds
    pagesBufferLength: 5, // Allows 5 pages to be kept in the buffer
  },

  // You can also enable SWC (the default for Next.js 12+) to ensure faster reloads
  swcMinify: true, // Faster builds with the SWC compiler
};

module.exports = nextConfig;
