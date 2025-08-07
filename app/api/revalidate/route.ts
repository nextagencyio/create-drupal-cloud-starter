import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData()
    const secret = formData.get('secret') as string
    const slug = formData.get('slug') as string

    // Verify required fields
    if (!secret || !slug) {
      return NextResponse.json(
        { message: 'Missing required fields: secret and slug' },
        { status: 400 }
      )
    }

    // Verify the secret
    const expectedSecret = process.env.DRUPAL_REVALIDATE_SECRET
    if (!expectedSecret) {
      console.error('DRUPAL_REVALIDATE_SECRET not configured')
      return NextResponse.json(
        { message: 'Revalidation not configured' },
        { status: 500 }
      )
    }

    if (secret !== expectedSecret) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      )
    }

    // Revalidate the page - map homepage and home to root
    let path: string
    if (slug === 'home' || slug === 'homepage') {
      path = '/'
    } else {
      path = `/${slug}`
    }
    revalidatePath(path)

    console.log(`Revalidated path: ${path}`)

    return NextResponse.json({
      message: 'Page revalidated successfully',
      path,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}