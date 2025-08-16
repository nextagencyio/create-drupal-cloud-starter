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

    const raw = String(iconName).trim()

    const toPascalCase = (value: string) => {
      return value
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .split(' ')
        .filter(Boolean)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join('')
    }

    const candidates = Array.from(new Set([
      raw,
      toPascalCase(raw),
      toPascalCase(raw.toLowerCase()),
    ]))

    // Load the icon dynamically (same approach as test page)
    const loadIcon = async () => {
      try {
        const lucideModule = await import('lucide-react')
        const iconExport = candidates
          .map(name => (lucideModule as any)[name])
          .find(Boolean)

        setIconComponent(() => (iconExport || Database))
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
