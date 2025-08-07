import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

function getServerBaseUrl(): string {
  // Prefer an explicit site URL if provided (e.g., https://example.com).
  const explicitSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (explicitSiteUrl) {
    return explicitSiteUrl.replace(/\/$/, '')
  }

  // Vercel provides VERCEL_URL without protocol.
  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) {
    return `https://${vercelUrl}`
  }

  // Fallback to localhost with the detected PORT, defaulting to 3001 for this project.
  const port = process.env.PORT || '3000'
  const host = process.env.HOST || 'localhost'
  return `http://${host}:${port}`
}

function getGraphqlUri(): string {
  if (typeof window !== 'undefined') {
    // On the client, a relative URL works and keeps same-origin.
    return '/api/graphql'
  }
  // On the server, construct an absolute URL so Node fetch knows where to send the request.
  return `${getServerBaseUrl()}/api/graphql`
}

// Client-side singleton to avoid re-creating the client.
let browserClient: ApolloClient<any> | null = null

export function getServerApolloClient(requestHeaders: Headers): ApolloClient<any> {
  // Derive origin from incoming request when possible to get exact host and port.
  const protocol = requestHeaders.get('x-forwarded-proto') || 'http'
  const forwardedHost = requestHeaders.get('x-forwarded-host')
  const host = forwardedHost || requestHeaders.get('host') || 'localhost:3000'
  const origin = `${protocol}://${host}`

  const httpLink = createHttpLink({
    uri: `${origin}/api/graphql`,
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'ignore',
      },
      query: {
        errorPolicy: 'all',
      },
    },
  })
}

// Default export remains for client usage via ApolloProvider.
const httpLink = createHttpLink({
  uri: getGraphqlUri(),
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    }
  }
})

const client = typeof window !== 'undefined'
  ? (browserClient || (browserClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'ignore',
      },
      query: {
        errorPolicy: 'all',
      },
    },
  })))
  : new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'ignore',
      },
      query: {
        errorPolicy: 'all',
      },
    },
  })

export default client
