'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'

interface HomepageContent {
  id: string
  title: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: {
    processed: string
  }
  featuresTitle: string
  featuresSubtitle: {
    processed: string
  }
  featuresItems: Array<{
    id: string
    featureTitle: string
    featureDescription: {
      processed: string
    }
  }>
  ctaTitle: string
  ctaDescription: {
    processed: string
  }
  ctaPrimary: {
    title: string
    url: string
  }
  ctaSecondary: {
    title: string
    url: string
  }
}

interface HomepageRendererProps {
  homepageContent: HomepageContent | null | undefined
}

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <FeaturesSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>
    </div>
  )
}