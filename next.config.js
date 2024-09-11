/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['static.ipms247.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/booking',
        destination: 'https://live.ipms247.com/booking/reservation_api/listing.php',
      },
    ];
  },
};

module.exports = nextConfig;