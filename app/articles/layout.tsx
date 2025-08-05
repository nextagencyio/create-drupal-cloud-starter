import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Discover the latest insights, tutorials, and updates from the Drupal Cloud community. Learn about headless CMS, GraphQL, and modern web development.',
  keywords: ['Drupal Cloud Articles', 'Headless CMS Tutorials', 'GraphQL Guides', 'Next.js Tips', 'Web Development'],
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}