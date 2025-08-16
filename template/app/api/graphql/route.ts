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
      console.error('OAuth token request failed:', response.status, response.statusText)
      const errorText = await response.text()
      console.error('OAuth error response:', errorText)
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
  // Check if required environment variables are configured
  if (!process.env.NEXT_PUBLIC_DRUPAL_BASE_URL || 
      !process.env.DRUPAL_CLIENT_ID || 
      !process.env.DRUPAL_CLIENT_SECRET) {
    return NextResponse.json({
      errors: [{
        message: 'Drupal Cloud is not configured yet. Please set up your environment variables.',
        extensions: {
          code: 'CONFIGURATION_REQUIRED',
          missingVars: [
            !process.env.NEXT_PUBLIC_DRUPAL_BASE_URL && 'NEXT_PUBLIC_DRUPAL_BASE_URL',
            !process.env.DRUPAL_CLIENT_ID && 'DRUPAL_CLIENT_ID',
            !process.env.DRUPAL_CLIENT_SECRET && 'DRUPAL_CLIENT_SECRET'
          ].filter(Boolean)
        }
      }]
    }, { status: 200 }) // Return 200 so GraphQL client handles it properly
  }

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
      console.log('Using access token for GraphQL request')
    } else {
      console.log('No access token available for GraphQL request')
    }
    
    const graphqlUrl = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/graphql`
    
    const response = await fetch(graphqlUrl, {
      method: 'POST',
      headers,
      body,
    })

    if (!response.ok) {
      console.error('GraphQL request failed:', response.status, response.statusText)
      const errorText = await response.text()
      console.error('GraphQL error response:', errorText)
    }

    const data = await response.text()
    
    const corsHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }

    // Set CORS origin based on environment
    if (process.env.NODE_ENV === 'development') {
      corsHeaders['Access-Control-Allow-Origin'] = '*'
    } else {
      // In production, only allow requests from the same origin
      const origin = request.headers.get('origin')
      const host = request.headers.get('host')
      if (origin && host && new URL(origin).host === host) {
        corsHeaders['Access-Control-Allow-Origin'] = origin
      }
    }

    return new NextResponse(data, {
      status: response.status,
      headers: corsHeaders,
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

export async function OPTIONS(request: NextRequest) {
  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }

  // Set CORS origin based on environment
  if (process.env.NODE_ENV === 'development') {
    corsHeaders['Access-Control-Allow-Origin'] = '*'
  } else {
    // In production, only allow requests from the same origin
    const origin = request.headers.get('origin')
    const host = request.headers.get('host')
    if (origin && host && new URL(origin).host === host) {
      corsHeaders['Access-Control-Allow-Origin'] = origin
    }
  }

  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  })
}