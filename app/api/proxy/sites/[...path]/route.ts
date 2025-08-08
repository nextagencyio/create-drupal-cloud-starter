import { NextRequest, NextResponse } from 'next/server'
import https from 'https'

// Create HTTPS agent that ignores SSL certificate errors in development
const httpsAgent = new https.Agent({
  rejectUnauthorized: process.env.NODE_ENV === 'production'
})

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const path = params.path.join('/')
  const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  
  if (!drupalBaseUrl) {
    return NextResponse.json({ error: 'Drupal base URL not configured' }, { status: 500 })
  }

  const drupalUrl = `${drupalBaseUrl}/sites/${path}`
  
  try {
    const response = await fetch(drupalUrl, {
      // @ts-ignore - Node.js specific property
      agent: drupalUrl.startsWith('https:') ? httpsAgent : undefined,
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch asset' }, { status: response.status })
    }

    // Get the content type and body
    const contentType = response.headers.get('content-type') || 'application/octet-stream'
    const body = await response.arrayBuffer()

    // Return the asset with proper headers
    return new NextResponse(body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error proxying Drupal asset:', error)
    return NextResponse.json({ error: 'Failed to proxy asset' }, { status: 500 })
  }
}