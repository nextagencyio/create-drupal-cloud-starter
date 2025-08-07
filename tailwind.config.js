/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Feature icon colors
    'bg-blue-100',
    'text-blue-600',
    'bg-green-100', 
    'text-green-600',
    'bg-purple-100',
    'text-purple-600',
    'bg-yellow-100',
    'text-yellow-600', 
    'bg-red-100',
    'text-red-600',
    'bg-indigo-100',
    'text-indigo-600',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}