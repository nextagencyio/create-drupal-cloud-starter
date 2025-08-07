'use client'

import { Database } from 'lucide-react'
import { useState, useEffect } from 'react'

interface DynamicIconProps {
  iconName?: string
  className?: string
}

export default function DynamicIcon({ iconName, className }: DynamicIconProps) {
  const [IconComponent, setIconComponent] = useState<any>(null)

  useEffect(() => {
    if (!iconName) {
      setIconComponent(() => Database)
      return
    }

    const normalized = String(iconName).trim().toLowerCase()

    // Map icon names to correct Lucide names
    const iconNameMap: Record<string, string> = {
      'database': 'Database',
      'zap': 'Zap',
      'shield': 'Shield',
      'users': 'Users',
      'code': 'Code',
      'globe': 'Globe'
    }

    const lucideIconName = iconNameMap[normalized]

    if (!lucideIconName) {
      console.warn(`No mapping found for icon "${iconName}", using Database as fallback`)
      setIconComponent(() => Database)
      return
    }

    // Load the icon dynamically (same approach as test page)
    const loadIcon = async () => {
      try {
        const lucideModule = await import('lucide-react')
        const icon = (lucideModule as any)[lucideIconName]

        if (icon) {
          setIconComponent(() => icon)
        } else {
          console.warn(`Icon ${lucideIconName} not found`)
          setIconComponent(() => Database)
        }
      } catch (error) {
        console.error(`Error loading icon:`, error)
        setIconComponent(() => Database)
      }
    }

    loadIcon()
  }, [iconName])

  if (!IconComponent) {
    return <Database className={className} />
  }

  return <IconComponent className={className} />
}
