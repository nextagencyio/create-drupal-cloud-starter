'use client'

import { Cloud } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Articles', href: '/articles' },
  { name: 'About', href: '/about' }
]

export default function Header() {
  const pathname = usePathname()

  const getActiveTab = () => {
    if (pathname === '/articles') return 'Articles'
    if (pathname === '/about') return 'About'
    return 'Home'
  }

  const activeTab = getActiveTab()

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-900">Drupal Cloud</span>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors',
                    activeTab === item.name
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side - Contact button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Navigation - shown below on smaller screens */}
        <div className="md:hidden border-t border-gray-200">
          <div className="flex justify-between items-center py-2">
            <div className="flex space-x-4 overflow-x-auto">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'whitespace-nowrap py-2 px-3 rounded-md text-sm font-medium transition-colors',
                    activeTab === item.name
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-sm ml-4 flex-shrink-0"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}