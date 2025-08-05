/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      process.env.NEXT_IMAGE_DOMAIN,
    ].filter(Boolean),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.dcloud.ddev.site',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig