import { NextRequest, NextResponse } from 'next/server'

interface TokenCache {
  token: string | null
  expiresAt: number | null
}

let tokenCache: TokenCache = {
  token: null,
  expiresAt: null,
}

async function getAccessToken(): Promise<string | null> {
  if (!process.env.DRUPAL_CLIENT_ID || !process.env.DRUPAL_CLIENT_SECRET) {
    return null
  }

  // Return cached token if still valid (with 60 second buffer)
  if (tokenCache.token && tokenCache.expiresAt && Date.now() < (tokenCache.expiresAt - 60000)) {
    return tokenCache.token
  }

  try {
    const tokenUrl = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`
    
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.DRUPAL_CLIENT_ID,
        client_secret: process.env.DRUPAL_CLIENT_SECRET,
      }),
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    
    if (!data.access_token) {
      return null
    }
    
    const token = `${data.token_type || 'Bearer'} ${data.access_token}`
    
    // Cache the token
    tokenCache.token = token
    tokenCache.expiresAt = Date.now() + (parseInt(data.expires_in || '3600') * 1000)
    
    return token
  } catch (error) {
    console.error('Auth error:', error)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    
    // Get access token for authentication
    const accessToken = await getAccessToken()
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    // Add auth token if available
    if (accessToken) {
      headers['Authorization'] = accessToken
    }
    
    const graphqlUrl = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/graphql`
    
    const response = await fetch(graphqlUrl, {
      method: 'POST',
      headers,
      body,
    })

    const data = await response.text()
    
    return new NextResponse(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    console.error('GraphQL proxy error:', error)
    return NextResponse.json(
      { error: 'Failed to proxy GraphQL request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  return POST(request)
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}