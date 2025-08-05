import Header from '../components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Drupal Cloud, a modern headless CMS solution that combines the power of Drupal with the flexibility of Next.js.',
  keywords: ['About Drupal Cloud', 'Headless CMS', 'Drupal', 'Next.js', 'GraphQL'],
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">About Drupal Cloud</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Drupal Cloud, a modern headless CMS solution that combines the power of Drupal with the flexibility of Next.js.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We're dedicated to providing developers and content creators with a seamless, modern web development experience. 
                By leveraging Drupal's robust content management capabilities and Next.js's cutting-edge front-end technology, 
                we enable teams to build fast, scalable, and maintainable web applications.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Headless Drupal CMS with GraphQL API</li>
                <li>Next.js frontend with server-side rendering</li>
                <li>Modern React components and TypeScript support</li>
                <li>Responsive design with Tailwind CSS</li>
                <li>Optimized for performance and SEO</li>
                <li>Easy deployment with Vercel integration</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Drupal 11</li>
                    <li>• GraphQL Compose</li>
                    <li>• OAuth2 Authentication</li>
                    <li>• DDEV for local development</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Next.js 14</li>
                    <li>• React 18</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Apollo GraphQL Client</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Started</h2>
              <p className="text-gray-600">
                Ready to build your next project with Drupal Cloud? Check out our documentation and starter templates 
                to get up and running quickly. Whether you're building a blog, corporate website, or complex web application, 
                we have the tools and resources to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}