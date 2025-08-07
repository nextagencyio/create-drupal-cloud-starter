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
  async redirects() {
    // Redirect special front page alias to the actual homepage.
    return [
      {
        source: '/homepage',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
