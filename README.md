# Create Drupal Cloud App

The easiest way to get started with a Next.js application integrated with Drupal Cloud.

## Quick Start

### Option 1: Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/drupal-cloud-starter&project-name=my-drupal-app&repository-name=my-drupal-app&env=NEXT_PUBLIC_DRUPAL_BASE_URL,DRUPAL_CLIENT_ID,DRUPAL_CLIENT_SECRET,DRUPAL_REVALIDATE_SECRET&envDescription=Configure%20your%20Drupal%20Cloud%20connection&envLink=https://github.com/nextagencyio/drupal-cloud-starter%23environment-setup)

### Option 2: Create locally

Create a new Drupal Cloud app in one command:

```bash
npm create drupal-cloud-starter my-app
```

Or with npx:

```bash
npx create-drupal-cloud-starter my-app
```

Then navigate to your project and start developing:

```bash
cd my-app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app running.

## What's Included

Your new app comes with:

- ⚡ **Next.js 15** with App Router
- 🍃 **Drupal integration** ready to go
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive design** out of the box
- 🔧 **TypeScript** support
- 🧹 **ESLint** configuration
- 🚀 **Apollo Client** for GraphQL

## Available Scripts

Once your app is created, you can run:

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Environment Setup

Your new project includes an `.env.example` file. Copy it to `.env.local` and configure your Drupal Cloud settings:

```bash
cp .env.example .env.local
```

## Requirements

- Node.js 18.0.0 or later
- npm, yarn, or pnpm

## Contributing

Found a bug or want to contribute? Check out the [GitHub repository](https://github.com/your-username/create-drupal-cloud-starter).

## License

MIT