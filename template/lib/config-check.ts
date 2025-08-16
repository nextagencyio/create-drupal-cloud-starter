export interface ConfigStatus {
  isConfigured: boolean
  missingVars: string[]
  allVars: string[]
}

export function checkConfiguration(): ConfigStatus {
  const requiredVars = [
    'NEXT_PUBLIC_DRUPAL_BASE_URL',
    'DRUPAL_CLIENT_ID', 
    'DRUPAL_CLIENT_SECRET',
    'DRUPAL_REVALIDATE_SECRET'
  ]

  const missingVars = requiredVars.filter(varName => {
    const value = process.env[varName]
    return !value || value.includes('your-') || value.includes('ddev.site')
  })

  return {
    isConfigured: missingVars.length === 0,
    missingVars,
    allVars: requiredVars
  }
}