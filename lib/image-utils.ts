import { DrupalArticle } from './types'

export type ImageSize = 'THUMBNAIL' | 'MEDIUM' | 'LARGE'

/**
 * Convert a Drupal absolute URL to a proxied URL
 */
function proxyDrupalUrl(url: string): string {
  if (!url) return '';
  
  const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;
  if (!drupalBaseUrl || !url.startsWith(drupalBaseUrl)) {
    return url; // Return as-is if not a Drupal URL
  }
  
  // Extract the path after the Drupal base URL (should be /sites/...)
  const path = url.substring(drupalBaseUrl.length + 1); // +1 to remove leading slash
  
  // Return the path directly - Next.js rewrites will handle the proxying
  return `/${path}`;
}

/**
 * Get the best image URL for a given size preference
 */
export function getImageUrl(
  image: DrupalArticle['image'],
  preferredSize: ImageSize = 'MEDIUM',
  context: 'hero' | 'teaser' | 'thumbnail' | 'full' = 'full'
): string {
  if (!image) return ''
  
  // For hero contexts, balance quality vs file size for ~832px container
  if (context === 'hero' && preferredSize === 'LARGE') {
    const largeVariation = image.variations?.find(v => v.name === 'LARGE')
    
    // If LARGE variation is adequate (at least 1200px for retina), use it
    if (largeVariation && largeVariation.width && largeVariation.width >= 1200) {
      return proxyDrupalUrl(largeVariation.url)
    }
    
    // Otherwise, accept using original even if large, since LARGE is too small (480px)
    // Next.js Image will optimize it appropriately
    return proxyDrupalUrl(image.url)
  }
  
  // Try to find the preferred size variation
  const preferredVariation = image.variations?.find(v => v.name === preferredSize)
  if (preferredVariation) {
    return proxyDrupalUrl(preferredVariation.url)
  }
  
  // Fallback to original image
  return proxyDrupalUrl(image.url)
}

/**
 * Get image dimensions for a given size preference
 */
export function getImageDimensions(
  image: DrupalArticle['image'],
  preferredSize: ImageSize = 'MEDIUM'
): { width: number; height: number } | null {
  if (!image) return null
  
  // Try to find the preferred size variation
  const preferredVariation = image.variations?.find(v => v.name === preferredSize)
  if (preferredVariation) {
    return {
      width: preferredVariation.width,
      height: preferredVariation.height
    }
  }
  
  // Fallback to original image dimensions
  if (image.width && image.height) {
    return {
      width: image.width,
      height: image.height
    }
  }
  
  return null
}

/**
 * Generate responsive srcSet string for picture element
 */
export function generateSrcSet(image: DrupalArticle['image']): string {
  if (!image || !image.variations) return proxyDrupalUrl(image?.url || '')
  
  const srcSetEntries: string[] = []
  
  // Add variations to srcSet
  image.variations.forEach(variation => {
    srcSetEntries.push(`${proxyDrupalUrl(variation.url)} ${variation.width}w`)
  })
  
  // Add original image as largest option
  if (image.width && image.url) {
    srcSetEntries.push(`${proxyDrupalUrl(image.url)} ${image.width}w`)
  }
  
  return srcSetEntries.join(', ')
}

/**
 * Get the aspect ratio for an image
 */
export function getAspectRatio(
  image: DrupalArticle['image'],
  preferredSize: ImageSize = 'MEDIUM'
): number | null {
  const dimensions = getImageDimensions(image, preferredSize)
  if (!dimensions) return null
  
  return dimensions.width / dimensions.height
}