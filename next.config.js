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
        hostname: 'hippoicons.korshukovstepan.dev',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
