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
    console.log('Missing OAuth credentials')
    return null
  }

  // Return cached token if still valid (with 60 second buffer)
  if (tokenCache.token && tokenCache.expiresAt && Date.now() < (tokenCache.expiresAt - 60000)) {
    return tokenCache.token
  }

  try {
    const tokenUrl = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`
    console.log('Requesting token from:', tokenUrl)
    
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
      const errorText = await response.text()
      console.error('Token request failed:', response.status, errorText)
      return null
    }

    const data = await response.json()
    console.log('Token response received')
    
    if (!data.access_token) {
      console.error('No access token in response:', data)
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
    console.log('GraphQL request body:', body)
    
    // Get access token for authentication
    const accessToken = await getAccessToken()
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    // Add auth token if available
    if (accessToken) {
      headers['Authorization'] = accessToken
      console.log('Using authorization token')
    } else {
      console.log('No authorization token available')
    }
    
    const graphqlUrl = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/graphql`
    console.log('Making GraphQL request to:', graphqlUrl)
    
    const response = await fetch(graphqlUrl, {
      method: 'POST',
      headers,
      body,
    })

    console.log('GraphQL response status:', response.status)
    const data = await response.text()
    
    if (!response.ok) {
      console.error('GraphQL request failed:', response.status, data)
    } else {
      // Log the response for debugging
      try {
        const parsed = JSON.parse(data)
        console.log('GraphQL response data:', JSON.stringify(parsed, null, 2))
        if (parsed.errors) {
          console.error('GraphQL errors:', parsed.errors)
        }
      } catch (e) {
        console.log('Raw GraphQL response:', data)
      }
    }
    
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