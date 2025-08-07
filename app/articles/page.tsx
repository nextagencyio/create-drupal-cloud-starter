import Header from '../components/Header'
import ArticleTeaser from '../components/ArticleTeaser'
import ErrorBoundary from '../components/ErrorBoundary'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_ARTICLE_TEASERS } from '@/lib/queries'
import { ArticleTeaserData } from '@/lib/types'
import { Metadata } from 'next'

// Enable ISR with 30 minute revalidation for articles
export const revalidate = 1800

export const metadata: Metadata = {
  title: 'Articles - Drupal Cloud',
  description: 'Discover the latest insights, tutorials, and updates from the Drupal Cloud community.',
}

async function getArticles(apolloClient: ReturnType<typeof getServerApolloClient>): Promise<ArticleTeaserData | null> {
  try {
    const { data } = await apolloClient.query<ArticleTeaserData>({
      query: GET_ARTICLE_TEASERS,
      variables: { first: 12 },
      fetchPolicy: 'cache-first',
    })
    return data
  } catch (error) {
    console.error('Error fetching articles:', error)
    return null
  }
}

function LoadingState() {
  return (
    <div className="text-center py-12">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <p className="mt-4 text-gray-600">Loading articles...</p>
    </div>
  )
}

function ErrorState({ error }: { error: string }) {
  return (
    <div className="text-center py-12">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <p className="text-red-600 text-lg mb-2">Error loading articles</p>
        <p className="text-gray-600 mb-4">{error}</p>
        <p className="text-sm text-gray-500">
          Make sure your Drupal backend is running and GraphQL is configured properly.
        </p>
      </div>
    </div>
  )
}

export default async function Articles() {
  const requestHeaders = headers()
  const apolloClient = getServerApolloClient(requestHeaders)
  const data = await getArticles(apolloClient)

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ErrorState error="Failed to load articles from the server." />
        </main>
      </div>
    )
  }

  const articles = data.nodeArticles?.nodes || []

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the latest insights, tutorials, and updates from the Drupal Cloud community.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-lg shadow-sm p-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">No articles found</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                It looks like there are no articles available yet. This could be because your Drupal backend
                isn&apos;t configured properly or no content has been created yet.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 text-left max-w-lg mx-auto">
                <h3 className="font-medium text-gray-900 mb-3">To get started:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-blue-500 mr-2">•</span>
                    Ensure your Drupal backend is running
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-blue-500 mr-2">•</span>
                    Verify GraphQL Compose and GraphQL Compose Edges are enabled
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-blue-500 mr-2">•</span>
                    Create some article content in your Drupal admin
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-blue-500 mr-2">•</span>
                    Check your environment variables in .env.local
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <ErrorBoundary>
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ErrorBoundary key={article.id}>
                  <ArticleTeaser article={article} />
                </ErrorBoundary>
              ))}
            </div>

            {/* Load More Section (placeholder for future pagination) */}
            {articles.length >= 12 && (
              <div className="text-center mt-12">
                <button
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                  disabled
                >
                  Load More Articles
                  <span className="ml-2 text-sm text-gray-500">(Coming Soon)</span>
                </button>
              </div>
            )}
          </ErrorBoundary>
        )}
      </main>
    </div>
  )
}
