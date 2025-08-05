# Drupal Cloud Next.js Starter

A Next.js starter template for connecting to Drupal Cloud backends using GraphQL. This starter provides a clean, modern interface for displaying Drupal content with article teasers on the homepage.

## Features

- 🚀 **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📡 **Apollo Client** for GraphQL queries
- 🖼️ **Image optimization** with Next.js Image component
- 📱 **Responsive design** with mobile-first approach
- 🔧 **TypeScript** for type safety
- 🎯 **Article teasers** with thumbnail, title, summary, and tags

## Prerequisites

- Node.js 18+ 
- A Drupal backend with GraphQL enabled
- Drupal Cloud instance or DDEV environment

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Drupal backend URL:
   ```
   NEXT_PUBLIC_DRUPAL_BASE_URL=https://your-site.dcloud.ddev.site
   NEXT_IMAGE_DOMAIN=your-site.dcloud.ddev.site
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** to see your site.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_DRUPAL_BASE_URL` | Your Drupal backend URL | ✅ |
| `NEXT_IMAGE_DOMAIN` | Domain for Next.js image optimization | ✅ |
| `DRUPAL_CLIENT_ID` | OAuth client ID for authentication | ⚠️ |
| `DRUPAL_CLIENT_SECRET` | OAuth client secret | ⚠️ |
| `DRUPAL_REVALIDATE_SECRET` | Secret for on-demand revalidation | ⚠️ |
| `NODE_TLS_REJECT_UNAUTHORIZED` | Set to 0 for DDEV development | 🔧 |

## Drupal Backend Requirements

Your Drupal backend needs:

1. **GraphQL module** enabled and configured
2. **Article content type** with these fields:
   - `title` (default)
   - `body` (default) 
   - `field_summary` (text field, optional)
   - `field_thumbnail` (image field, optional)
   - `field_tags` (entity reference to taxonomy terms, optional)

3. **GraphQL schema** exposing article queries

## Project Structure

```
drupal-cloud-starter/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── ArticleTeaser.tsx
│   │   ├── Header.tsx
│   │   └── providers/
│   │       └── ApolloProvider.tsx
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Homepage
├── lib/                   # Utility libraries
│   ├── apollo-client.ts   # GraphQL client setup
│   ├── queries.ts         # GraphQL queries
│   └── types.ts          # TypeScript interfaces
├── .env.example          # Environment variables template
└── next.config.js        # Next.js configuration
```

## GraphQL Queries

The starter includes these GraphQL queries:

- **GET_ARTICLE_TEASERS**: Fetches article list with metadata
- **GET_ARTICLE_BY_PATH**: Fetches individual article by path

## Customization

### Adding New Content Types

1. Create TypeScript interfaces in `lib/types.ts`
2. Add GraphQL queries in `lib/queries.ts`
3. Create components in `app/components/`
4. Update pages to use new queries

### Styling

The project uses Tailwind CSS. Customize styles by:
- Modifying `tailwind.config.js`
- Adding custom styles to `app/globals.css`
- Using Tailwind classes in components

### Environment Configuration

For different environments (development, staging, production), create:
- `.env.local` (local development)
- `.env.development` 
- `.env.production`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Troubleshooting

### GraphQL Connection Issues

1. Verify your Drupal backend is accessible
2. Check that GraphQL module is enabled
3. Ensure CORS is configured properly
4. For DDEV, set `NODE_TLS_REJECT_UNAUTHORIZED=0`

### No Articles Displayed

1. Create article content in your Drupal backend
2. Verify GraphQL schema includes article queries
3. Check browser network tab for GraphQL errors
4. Ensure field names match your Drupal configuration

### Image Loading Issues

1. Add your domain to `next.config.js` `images.domains`
2. Check image URLs are absolute paths
3. Verify image fields exist in Drupal

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.