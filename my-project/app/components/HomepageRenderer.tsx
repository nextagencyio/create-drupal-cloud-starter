'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'

interface HomepageContent extends DrupalHomepage {}

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