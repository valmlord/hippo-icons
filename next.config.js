/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.korshukovstepan.dev',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.korshukovstepan.dev',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: '**.korshukovstepan.dev',
        port: '',
        pathname: '/product_files/**',
      },
    ],
  },
};

module.exports = nextConfig;
