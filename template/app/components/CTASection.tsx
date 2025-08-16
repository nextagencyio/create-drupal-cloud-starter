import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent?: DrupalHomepage | null
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const hasHomepageContent = homepageContent && homepageContent.title

  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {hasHomepageContent && homepageContent.ctaTitle
            ? homepageContent.ctaTitle
            : 'Ready to Get Started?'
          }
        </h2>
        <div className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {hasHomepageContent && homepageContent.ctaDescription?.processed ? (
            <div dangerouslySetInnerHTML={{ __html: homepageContent.ctaDescription.processed }} />
          ) : (
            <p>Join thousands of developers building amazing web experiences with Drupal Cloud.</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {hasHomepageContent && homepageContent.ctaPrimary ? (
            <Link
              href={homepageContent.ctaPrimary.url}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              {homepageContent.ctaPrimary.title}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          ) : (
            <Link
              href="/articles"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Browse Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          )}
          {hasHomepageContent && homepageContent.ctaSecondary ? (
            <Link
              href={homepageContent.ctaSecondary.url}
              className="inline-flex items-center px-8 py-3 border-2 border-gray-400 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-gray-300 transition-colors duration-200 font-semibold"
            >
              {homepageContent.ctaSecondary.title}
            </Link>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-gray-400 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-gray-300 transition-colors duration-200 font-semibold"
            >
              Contact Us
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}