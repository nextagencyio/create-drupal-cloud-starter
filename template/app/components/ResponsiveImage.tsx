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
        className={`object-cover ${className}`}
        sizes={finalSizes}
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    )
  }

  // Use fill with container for responsive layout
  return (
    <div 
      className={`relative w-full bg-gray-100 ${className}`}
      style={{
        aspectRatio,
        maxHeight: maxHeight || undefined
      }}
    >
      <Image
        src={getImageUrl(image, finalPreferredSize, context)}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes={finalSizes}
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkv/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </div>
  )
}