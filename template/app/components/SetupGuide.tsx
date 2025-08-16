'use client'

import { CheckCircle, Copy, ExternalLink, Settings } from 'lucide-react'
import { useState } from 'react'

interface SetupGuideProps {
  missingVars: string[]
}

export default function SetupGuide({ missingVars }: SetupGuideProps) {
  const [copiedVar, setCopiedVar] = useState<string | null>(null)

  const copyToClipboard = (text: string, varName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedVar(varName)
    setTimeout(() => setCopiedVar(null), 2000)
  }

  const envVarExamples = {
    'NEXT_PUBLIC_DRUPAL_BASE_URL': 'https://your-site.dcloud.ddev.site',
    'DRUPAL_CLIENT_ID': 'next-js-frontend',
    'DRUPAL_CLIENT_SECRET': 'your-drupal-client-secret',
    'DRUPAL_REVALIDATE_SECRET': 'your-revalidate-secret'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Settings className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Drupal Cloud!
          </h1>
          <p className="text-gray-600">
            Let's connect your app to your Drupal backend to get started.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h2 className="font-semibold text-blue-900 mb-2">
              🚀 Quick Setup Required
            </h2>
            <p className="text-blue-800 text-sm">
              Your app is deployed successfully! Now you need to configure your environment variables to connect to your Drupal Cloud instance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Missing Environment Variables:
            </h3>
            <div className="space-y-3">
              {missingVars.map((varName) => (
                <div key={varName} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                      {varName}
                    </code>
                    <button
                      onClick={() => copyToClipboard(varName, varName)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      title="Copy variable name"
                    >
                      {copiedVar === varName ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Example: <code className="bg-gray-50 px-1 rounded text-xs">
                      {envVarExamples[varName as keyof typeof envVarExamples]}
                    </code>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-amber-900 mb-2">
              📋 Get Your Values from Drupal Cloud
            </h3>
            <p className="text-amber-800 text-sm">
              Visit your <strong>Drupal Cloud homepage</strong> to find the exact environment variable values you need to copy and paste. They'll be ready for you there!
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              How to configure on Vercel:
            </h3>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                Get your values from your Drupal Cloud homepage
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                Go to your Vercel dashboard
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                Select your project
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                Go to Settings → Environment Variables
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">5</span>
                Copy and paste each variable from Drupal Cloud
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">6</span>
                Redeploy your app
              </li>
            </ol>
          </div>

          <div className="flex gap-4">
            <a
              href="https://vercel.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Open Vercel Dashboard
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Check Again
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Need help? Check out the{' '}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                documentation
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}