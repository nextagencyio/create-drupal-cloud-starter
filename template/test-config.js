// Quick test script for the config checker
const { checkConfiguration } = require('./lib/config-check.ts')

// Test with no env vars
delete process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
delete process.env.DRUPAL_CLIENT_ID
delete process.env.DRUPAL_CLIENT_SECRET
delete process.env.DRUPAL_REVALIDATE_SECRET

console.log('Config check with no vars:', checkConfiguration())

// Test with some vars
process.env.NEXT_PUBLIC_DRUPAL_BASE_URL = 'https://real-site.com'
process.env.DRUPAL_CLIENT_ID = 'real-client'

console.log('Config check with partial vars:', checkConfiguration())

// Test with placeholder values (should still show as missing)
process.env.DRUPAL_CLIENT_SECRET = 'your-drupal-client-secret'
process.env.DRUPAL_REVALIDATE_SECRET = 'your-revalidate-secret'

console.log('Config check with placeholder vars:', checkConfiguration())