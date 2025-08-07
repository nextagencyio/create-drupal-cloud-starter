import { DefaultFeature } from './types'

export const DEFAULT_FEATURES: DefaultFeature[] = [
  {
    id: '1',
    title: 'Powerful CMS',
    description: 'Leverage Drupal\'s robust content management capabilities with custom content types, workflows, and user permissions.',
    iconName: 'database',
    iconColor: 'blue'
  },
  {
    id: '2',
    title: 'Lightning Fast',
    description: 'Next.js provides server-side rendering, static generation, and optimized performance for blazing-fast user experiences.',
    iconName: 'zap',
    iconColor: 'green'
  },
  {
    id: '3',
    title: 'Enterprise Security',
    description: 'Built-in security features, OAuth2 authentication, and role-based access control keep your content safe and secure.',
    iconName: 'shield',
    iconColor: 'purple'
  },
  {
    id: '4',
    title: 'Developer Friendly',
    description: 'GraphQL API, TypeScript support, and modern tooling make development efficient and enjoyable for your team.',
    iconName: 'users',
    iconColor: 'yellow'
  },
  {
    id: '5',
    title: 'Modern Stack',
    description: 'React components, Tailwind CSS, and the latest web technologies ensure your project stays current and maintainable.',
    iconName: 'code',
    iconColor: 'red'
  },
  {
    id: '6',
    title: 'Global Scale',
    description: 'Deploy anywhere with edge computing, CDN integration, and optimized performance for users worldwide.',
    iconName: 'globe',
    iconColor: 'blue'
  }
]

export const COLOR_CLASSES = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  yellow: 'bg-yellow-100 text-yellow-600',
  red: 'bg-red-100 text-red-600',
  indigo: 'bg-indigo-100 text-indigo-600'
} as const