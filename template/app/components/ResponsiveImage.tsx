import Image from 'next/image'
import { DrupalArticle } from '@/lib/types'
import { getImageUrl, generateSrcSet, getAspectRatio, type ImageSize } from '@/lib/image-utils'

interface ResponsiveImageProps {
  image: DrupalArticle['image']
  alt?: string
  className?: string
  priority?: boolean
  sizes?: string
  preferredSize?: ImageSize
  aspectRatioFallback?: string
  maxHeight?: string
  width?: number
  height?: number
  context?: 'hero' | 'teaser' | 'thumbnail' | 'full'
}

export default function ResponsiveImage({
  image,
  alt,
  className = '',
  priority = false,
  sizes,
  preferredSize,
  aspectRatioFallback = '16/9',
  maxHeight,
  width,
  height,
  context = 'full',
}: ResponsiveImageProps) {
  if (!image?.url) {
    return null
  }

  const imageAlt = alt || image.alt || ''
  
  // Set defaults based on context
  const contextDefaults = {
    hero: { sizes: '(max-width: 768px) 100vw, 832px', preferredSize: 'LARGE' as ImageSize },
    teaser: { sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw', preferredSize: 'LARGE' as ImageSize },
    thumbnail: { sizes: '(max-width: 768px) 50vw, 25vw', preferredSize: 'THUMBNAIL' as ImageSize },
    full: { sizes: '100vw', preferredSize: 'LARGE' as ImageSize },
  }
  
  const finalSizes = sizes || contextDefaults[context].sizes
  const finalPreferredSize = preferredSize || contextDefaults[context].preferredSize
  const aspectRatio = getAspectRatio(image, finalPreferredSize) || aspectRatioFallback

  // Use fixed dimensions if provided, otherwise use fill
  if (width && height) {
    return (
      <Image
        src={getImageUrl(image, finalPreferredSize, context)}
        alt={imageAlt}
        width={width}
        height={height}
        className={`object-cover transition-opacity duration-300 ${className}`}
        sizes={finalSizes}
        priority={priority}
        placeholder="empty"
      />
    )
  }

  // Use fill with container for responsive layout
  return (
    <div 
      className={`relative w-full bg-gray-50 ${className}`}
      style={{
        aspectRatio,
        maxHeight: maxHeight || undefined
      }}
    >
      <Image
        src={getImageUrl(image, finalPreferredSize, context)}
        alt={imageAlt}
        fill
        className="object-cover transition-opacity duration-300"
        sizes={finalSizes}
        priority={priority}
        placeholder="empty"
      />
    </div>
  )
}