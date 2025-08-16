'use client'

import DynamicIcon from './DynamicIcon'
import { COLOR_CLASSES } from '@/lib/constants'
import { FeatureColor } from '@/lib/types'

interface FeatureIconProps {
  iconName: string
  iconColor: FeatureColor
  className?: string
}

export default function FeatureIcon({ iconName, iconColor, className = 'w-6 h-6' }: FeatureIconProps) {
  return (
    <div className={`w-12 h-12 ${COLOR_CLASSES[iconColor]} rounded-lg flex items-center justify-center mb-6`}>
      <DynamicIcon iconName={iconName} className={className} />
    </div>
  )
}