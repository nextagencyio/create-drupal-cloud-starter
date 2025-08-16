# Drupal Cloud App

A Next.js application integrated with Drupal Cloud, built with modern web technologies.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/drupal-cloud-starter&project-name=my-drupal-app&repository-name=my-drupal-app&root-directory=template&env=NEXT_PUBLIC_DRUPAL_BASE_URL,DRUPAL_CLIENT_ID,DRUPAL_CLIENT_SECRET,DRUPAL_REVALIDATE_SECRET&envDescription=Configure%20your%20Drupal%20Cloud%20connection&envLink=https://github.com/nextagencyio/drupal-cloud-starter%23environment-setup)

> **Note**: After deployment, you'll see a friendly setup guide that walks you through configuring your Drupal Cloud connection. No more confusing error messages!

## Features

- ⚡ Next.js 15 with App Router
- 🍃 Drupal integration ready
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- 🔧 TypeScript support
- 🧹 ESLint configuration

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Environment Setup

Copy the example environment file and configure your variables:

```bash
cp .env.example .env.local
```

## Requirements

- Node.js 14.0.0 or later
- npm, yarn, or pnpm

## About

Created by [Next Agency](https://github.com/nextagencyio) for rapid Drupal headless development.

## License

MIT