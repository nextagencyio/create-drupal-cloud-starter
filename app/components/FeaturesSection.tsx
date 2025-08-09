import { DrupalHomepage } from '@/lib/types'
import { FEATURE_COLORS } from '@/lib/constants'
import FeatureIcon from './FeatureIcon'

interface FeaturesSectionProps {
  homepageContent?: DrupalHomepage | null
}

export default function FeaturesSection({ homepageContent }: FeaturesSectionProps) {
  const hasHomepageContent = homepageContent && homepageContent.title

  // Normalize features array from possible GraphQL shapes (direct array or edges -> node).
  const rawFeatures: any = hasHomepageContent ? (homepageContent as any).featuresItems : null
  const features = Array.isArray(rawFeatures)
    ? rawFeatures
    : Array.isArray(rawFeatures?.edges)
      ? rawFeatures.edges.map((e: any) => e?.node).filter(Boolean)
      : []

  function inferIconFromText(title?: string, descriptionHtml?: string): string | undefined {
    const haystack = `${title || ''} ${(descriptionHtml || '').replace(/<[^>]+>/g, ' ')}`.toLowerCase()
    if (/speed|fast|performance|optimi[sz]e|lightning/.test(haystack)) return 'zap'
    if (/secure|security|auth|oauth|privacy|shield/.test(haystack)) return 'shield'
    if (/global|world|international|scale|scalable|cloud/.test(haystack)) return 'globe'
    if (/developer|code|api|graphql|sdk/.test(haystack)) return 'code'
    if (/team|teams|user|users|collaborat|community/.test(haystack)) return 'users'
    if (/data|content|database|cms|storage/.test(haystack)) return 'database'
    return undefined
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {hasHomepageContent && homepageContent.featuresTitle
              ? homepageContent.featuresTitle
              : 'Why Choose Drupal Cloud?'
            }
          </h2>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto">
            {hasHomepageContent && homepageContent.featuresSubtitle?.processed ? (
              <div dangerouslySetInnerHTML={{ __html: homepageContent.featuresSubtitle.processed }} />
            ) : (
              <p>Combine the content management power of Drupal with modern frontend technologies for the ultimate development experience.</p>
            )}
          </div>
        </div>

        {features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: any, index: number) => {
              // Cycle through colors based on index
              const iconColor = FEATURE_COLORS[index % FEATURE_COLORS.length]
              const title = feature.featureTitle
              const description = feature.featureDescription?.processed
              const inferred = inferIconFromText(title, description)
              const iconName = (feature as any).icon || inferred || 'database'

              return (
                <div key={feature.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <FeatureIcon
                    iconName={iconName}
                    iconColor={iconColor}
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                  <div className="text-gray-600">
                    <div dangerouslySetInnerHTML={{ __html: description || '' }} />
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {features.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No features available. Please add features in Drupal.</p>
          </div>
        )}
      </div>
    </section>
  )
}
