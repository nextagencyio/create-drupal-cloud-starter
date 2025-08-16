// Bypass SSL verification for development Drupal instances
if (process.env.NODE_ENV === 'development') {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
}

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
    deviceSizes: [640, 750, 828, 1080, 1200, 1440],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
  async rewrites() {
    return [
      // Proxy Drupal file assets through API route to handle SSL
      {
        source: '/sites/:path*',
        destination: '/api/proxy/sites/:path*',
      },
    ]
  },
}

module.exports = nextConfig
