import Header from './components/Header'
import Link from 'next/link'
import { ArrowRight, Database, Zap, Shield, Users, Code, Globe } from 'lucide-react'
import { Metadata } from 'next'
import client from '../lib/apollo-client'
import { GET_HOMEPAGE_DATA } from '../lib/queries'
import { HomepageData } from '../lib/types'

// Force dynamic rendering to avoid caching
export const dynamic = 'force-dynamic'

async function getHomepageData(): Promise<HomepageData | null> {
  try {
    const { data } = await client.query<HomepageData>({
      query: GET_HOMEPAGE_DATA,
      fetchPolicy: 'no-cache', // Always fetch fresh data
      context: {
        headers: {
          'Cache-Control': 'no-cache',
          'x-timestamp': Date.now().toString(), // Cache busting
        },
      },
    })
    return data
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Modern Headless CMS Powered by Drupal'
  const description = 'Build fast, scalable web applications with Drupal Cloud. Combine the power of Drupal backend with Next.js frontend for the ultimate development experience.'

  return {
    title,
    description,
    keywords: ['Drupal Cloud', 'Headless CMS', 'Next.js', 'GraphQL', 'Modern Web Development', 'React'],
    openGraph: {
      title: `${title} - Drupal Cloud`,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Drupal Cloud`,
      description,
    },
  }
}

export default async function Home() {
  const data = await getHomepageData()

  // Extract homepage content from nodeHomepages
  const homepageContent = data?.nodeHomepages?.nodes?.[0]
  const hasHomepageContent = homepageContent && homepageContent.title

  // Default content for fallback
  const defaultFeatures = [
    {
      id: '1',
      title: 'Powerful CMS',
      description: 'Leverage Drupal\'s robust content management capabilities with custom content types, workflows, and user permissions.',
      icon: Database,
      iconColor: 'blue'
    },
    {
      id: '2',
      title: 'Lightning Fast',
      description: 'Next.js provides server-side rendering, static generation, and optimized performance for blazing-fast user experiences.',
      icon: Zap,
      iconColor: 'green'
    },
    {
      id: '3',
      title: 'Enterprise Security',
      description: 'Built-in security features, OAuth2 authentication, and role-based access control keep your content safe and secure.',
      icon: Shield,
      iconColor: 'purple'
    },
    {
      id: '4',
      title: 'Developer Friendly',
      description: 'GraphQL API, TypeScript support, and modern tooling make development efficient and enjoyable for your team.',
      icon: Users,
      iconColor: 'yellow'
    },
    {
      id: '5',
      title: 'Modern Stack',
      description: 'React components, Tailwind CSS, and the latest web technologies ensure your project stays current and maintainable.',
      icon: Code,
      iconColor: 'red'
    },
    {
      id: '6',
      title: 'Global Scale',
      description: 'Deploy anywhere with edge computing, CDN integration, and optimized performance for users worldwide.',
      icon: Globe,
      iconColor: 'indigo'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />



      {/* Hero Section - Dynamic */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {hasHomepageContent && homepageContent.heroTitle ? homepageContent.heroTitle : 'Modern Headless CMS'}
              {hasHomepageContent && homepageContent.heroSubtitle && (
                <span className="block text-blue-200">{homepageContent.heroSubtitle}</span>
              )}
              {!hasHomepageContent && (
                <span className="block text-blue-200">Powered by Drupal</span>
              )}
            </h1>
            <div className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {hasHomepageContent && homepageContent.heroDescription?.processed ? (
                <div dangerouslySetInnerHTML={{ __html: homepageContent.heroDescription.processed }} />
              ) : (
                <p>Build fast, scalable web applications with the power of Drupal backend and the flexibility of Next.js frontend.</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/articles"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                View Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Dynamic */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {hasHomepageContent && homepageContent.featuresTitle
                ? homepageContent.featuresTitle
                : 'Why Choose Drupal Cloud?'
              }
            </h2>
            <div className="text-xl text-gray-600 max-w-3xl mx-auto">
              {hasHomepageContent && homepageContent.featuresSubtitle?.processed ? (
                <div dangerouslySetInnerHTML={{ __html: homepageContent.featuresSubtitle.processed }} />
              ) : (
                <p>Combine the content management power of Drupal with modern frontend technologies for the ultimate development experience.</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(hasHomepageContent && homepageContent.featuresItems?.length ? homepageContent.featuresItems : defaultFeatures).map((feature) => {
              // Handle both dynamic features from Drupal and default features
              const isDynamicFeature = 'featureDescription' in feature
              const IconComponent = isDynamicFeature ? Database : (feature as any).icon // Default to Database icon for dynamic features
              const iconColor = isDynamicFeature ? 'blue' : (feature as any).iconColor
              const title = isDynamicFeature ? (feature as any).featureTitle : feature.title
              const description = isDynamicFeature ? (feature as any).featureDescription?.processed : (feature as any).description

              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                yellow: 'bg-yellow-100 text-yellow-600',
                red: 'bg-red-100 text-red-600',
                indigo: 'bg-indigo-100 text-indigo-600'
              }

              return (
                <div key={feature.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className={`w-12 h-12 ${colorClasses[iconColor as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                  <div className="text-gray-600">
                    <p>{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Dynamic */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {hasHomepageContent && homepageContent.ctaTitle
              ? homepageContent.ctaTitle
              : 'Ready to Get Started?'
            }
          </h2>
          <div className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {hasHomepageContent && homepageContent.ctaDescription?.processed ? (
              <div dangerouslySetInnerHTML={{ __html: homepageContent.ctaDescription.processed }} />
            ) : (
              <p>Join thousands of developers building amazing web experiences with Drupal Cloud.</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {hasHomepageContent && homepageContent.ctaPrimary ? (
              <Link
                href={homepageContent.ctaPrimary.url}
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                {homepageContent.ctaPrimary.title}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            ) : (
              <Link
                href="/articles"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Browse Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            )}
            {hasHomepageContent && homepageContent.ctaSecondary ? (
              <Link
                href={homepageContent.ctaSecondary.url}
                className="inline-flex items-center px-8 py-3 border-2 border-gray-400 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-gray-300 transition-colors duration-200 font-semibold"
              >
                {homepageContent.ctaSecondary.title}
              </Link>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-gray-400 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-gray-300 transition-colors duration-200 font-semibold"
              >
                Contact Us
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}