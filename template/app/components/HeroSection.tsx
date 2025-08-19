import Link from 'next/link'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent?: DrupalHomepage | null
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const hasHomepageContent = homepageContent && homepageContent.title

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {hasHomepageContent && homepageContent.heroTitle ? homepageContent.heroTitle : 'Modern Headless CMS'}
            {hasHomepageContent && homepageContent.heroSubtitle && (
              <span className="block text-blue-200">{homepageContent.heroSubtitle}</span>
            )}
            {!hasHomepageContent && (
              <span className="block text-blue-200">Powered by Drupal</span>
            )}
          </h1>
          <div className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {hasHomepageContent && homepageContent.heroDescription?.processed ? (
              <div dangerouslySetInnerHTML={{ __html: homepageContent.heroDescription.processed }} />
            ) : (
              <p>Build fast, scalable web applications with the power of Drupal backend and the flexibility of Next.js frontend.</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/articles"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              View Articles
              →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}