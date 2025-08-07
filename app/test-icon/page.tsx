'use client'

import { useState, useEffect } from 'react'
import { Database } from 'lucide-react'

export default function TestIcon() {
  const [ZapIcon, setZapIcon] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadZap = async () => {
      try {
        console.log('Testing direct Zap import...')
        const lucide = await import('lucide-react')
        console.log('Available icons:', Object.keys(lucide).filter(k => k.startsWith('Z')).slice(0, 10))
        const Zap = (lucide as any).Zap
        console.log('Zap found:', !!Zap)
        if (Zap) {
          setZapIcon(() => Zap)
        } else {
          setError('Zap icon not found')
        }
      } catch (err) {
        console.error('Error:', err)
        setError(String(err))
      }
    }
    loadZap()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Icon Test</h1>
      <div className="flex gap-4 items-center">
        <div>
          <p>Database (direct import):</p>
          <Database className="w-8 h-8" />
        </div>
        <div>
          <p>Zap (dynamic import):</p>
          {ZapIcon ? <ZapIcon className="w-8 h-8" /> : <span>Loading...</span>}
        </div>
      </div>
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
    </div>
  )
}