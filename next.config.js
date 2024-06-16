/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: 'dist',
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
