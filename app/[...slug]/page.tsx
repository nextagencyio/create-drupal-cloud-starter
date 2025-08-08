import Header from '../components/Header'
import ErrorBoundary from '../components/ErrorBoundary'
import HomepageRenderer from '../components/HomepageRenderer'
import ResponsiveImage from '../components/ResponsiveImage'
import { headers } from 'next/headers'
import { Metadata } from 'next'
import { GET_NODE_BY_PATH } from '@/lib/queries'
import { getServerApolloClient } from '@/lib/apollo-client'

export const revalidate = 300

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const path = `/${(params.slug || []).join('/')}`
  try {
    const apollo = getServerApolloClient(headers())
    const { data } = await apollo.query({ query: GET_NODE_BY_PATH, variables: { path } })
    const title = data?.route?.entity?.title || 'Page'
    return { title }
  } catch {
    return { title: 'Page' }
  }
}

function PageNotFound({ path }: { path: string }) {
  return (
    <div className="text-center py-16">
      <div className="bg-white rounded-lg shadow-sm p-12">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-2">We couldn't find any content at this path.</p>
        <p className="text-sm text-gray-500">Path: {path}</p>
      </div>
    </div>
  )
}

export default async function GenericPage({ params }: { params: { slug: string[] } }) {
  const path = `/${(params.slug || []).join('/')}`
  const apollo = getServerApolloClient(headers())

  try {
    console.log('Querying for path:', path)
    const result = await apollo.query({ query: GET_NODE_BY_PATH, variables: { path }, fetchPolicy: 'no-cache' })
    console.log('GraphQL result:', JSON.stringify(result, null, 2))
    const { data } = result
    const entity = data?.route?.entity

    if (!entity) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <PageNotFound path={path} />
          </main>
        </div>
      )
    }

    // Handle homepage nodes
    if (entity.__typename === 'NodeHomepage') {
      return <HomepageRenderer homepageContent={entity} />
    }

    // Handle regular page and article nodes
    const title = entity.title || 'Untitled'
    const bodyHtml = entity?.body?.processed || ''
    const image = entity?.image

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ErrorBoundary>
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              {image && (
                <ResponsiveImage
                  image={image}
                  alt={image.alt || title}
                  context="hero"
                  className="rounded-t-lg"
                  maxHeight="60vh"
                  priority={true}
                />
              )}
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h1>
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
              </div>
            </article>
          </ErrorBoundary>
        </main>
      </div>
    )
  } catch (error) {
    console.error('Error loading page by path:', error)
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <PageNotFound path={path} />
        </main>
      </div>
    )
  }
}


