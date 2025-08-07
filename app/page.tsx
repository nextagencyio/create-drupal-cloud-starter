import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import CTASection from './components/CTASection'
import ErrorBoundary from './components/ErrorBoundary'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '../lib/apollo-client'
import { GET_HOMEPAGE_DATA } from '../lib/queries'
import { HomepageData } from '../lib/types'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600


async function getHomepageData(apolloClient: ReturnType<typeof getServerApolloClient>): Promise<HomepageData | null> {
  try {
    const { data } = await apolloClient.query<HomepageData>({
      query: GET_HOMEPAGE_DATA,
      fetchPolicy: 'cache-first', // Use cache for ISR
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
  const requestHeaders = headers()
  const apolloClient = getServerApolloClient(requestHeaders)
  const data = await getHomepageData(apolloClient)
  const homepageContent = data?.nodeHomepages?.nodes?.[0]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <FeaturesSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>
    </div>
  )
}
