import { DrupalHomepage, FeatureItem, isDrupalFeature, isDefaultFeature } from '@/lib/types'
import { DEFAULT_FEATURES } from '@/lib/constants'
import FeatureIcon from './FeatureIcon'

interface FeaturesSectionProps {
  homepageContent?: DrupalHomepage | null
}

export default function FeaturesSection({ homepageContent }: FeaturesSectionProps) {
  const hasHomepageContent = homepageContent && homepageContent.title
  
  // Check if Drupal features have icon data, otherwise use defaults
  const drupalFeatures = hasHomepageContent && homepageContent.featuresItems?.length ? homepageContent.featuresItems : null
  const hasIconData = drupalFeatures && drupalFeatures.some(f => 'icon' in f && f.icon)
  
  const features: FeatureItem[] = hasIconData ? drupalFeatures : DEFAULT_FEATURES


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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            // Since we're using DEFAULT_FEATURES when no Drupal content, these will be DefaultFeature objects
            const iconName = isDefaultFeature(feature) ? feature.iconName : (feature.icon || 'database')
            const iconColor = isDefaultFeature(feature) ? feature.iconColor : 'blue' as const
            const title = isDefaultFeature(feature) ? feature.title : feature.featureTitle
            const description = isDefaultFeature(feature) ? feature.description : feature.featureDescription?.processed


            return (
              <div key={feature.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FeatureIcon 
                  iconName={iconName} 
                  iconColor={iconColor as any}
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <div className="text-gray-600">
                  {isDrupalFeature(feature) ? (
                    <div dangerouslySetInnerHTML={{ __html: description || '' }} />
                  ) : (
                    <p>{description}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}