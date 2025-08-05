# Drupal Cloud Next.js Starter

A comprehensive Next.js starter template for building modern headless websites with Drupal Cloud backends. Features a professional marketing homepage, dynamic articles system, and seamless GraphQL integration.

## Features

- 🚀 **Next.js 14** with App Router and Server Components
- 🎨 **Tailwind CSS** for modern, responsive styling
- 📡 **Apollo Client** with GraphQL integration
- 🔐 **OAuth2 Authentication** with automatic token management
- 🌐 **PWA Ready** with custom icons and web manifest
- 📱 **Mobile-First Design** with responsive navigation
- 🔧 **TypeScript** for full type safety
- 🎯 **Dynamic Routing** for article detail pages
- 🏠 **Marketing Homepage** with feature showcase
- 📊 **SEO Optimized** with comprehensive metadata
- 🎪 **Professional Navigation** with contact button placement

## Prerequisites

- Node.js 18+ 
- A Drupal backend with GraphQL Compose and GraphQL Compose Edges enabled
- Drupal Cloud instance or DDEV environment
- OAuth2 client credentials configured in Drupal

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Drupal backend configuration:
   ```env
   # Required - Drupal backend URL
   NEXT_PUBLIC_DRUPAL_BASE_URL=https://your-site.dcloud.ddev.site
   NEXT_IMAGE_DOMAIN=your-site.dcloud.ddev.site

   # Authentication - OAuth credentials
   DRUPAL_CLIENT_ID=your-client-id
   DRUPAL_CLIENT_SECRET=your-client-secret

   # Required for On-demand Revalidation
   DRUPAL_REVALIDATE_SECRET=your-revalidate-secret

   # Allow self-signed certificates for development (DDEV)
   NODE_TLS_REJECT_UNAUTHORIZED=0
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

## Site Structure

The starter provides these main pages:

- **`/` (Homepage)** - Static marketing page with hero section and features showcase
- **`/articles`** - Dynamic article listing powered by GraphQL
- **`/articles/[...slug]`** - Individual article detail pages with full content
- **`/about`** - Static about page with company information
- **`/contact`** - Static contact page with form and business details

## Drupal Backend Requirements

Your Drupal backend needs:

1. **Required Modules:**
   - GraphQL
   - GraphQL Compose
   - GraphQL Compose Edges
   - Simple OAuth (for authentication)

2. **Article Content Type** with these fields:
   - `title` (default)
   - `body` (default) 
   - Standard publishing options

3. **OAuth2 Configuration:**
   - Consumer with client credentials
   - Appropriate permissions for GraphQL access

4. **GraphQL Schema** configured to expose:
   - `nodeArticles` query (from GraphQL Compose Edges)
   - `route` query for individual articles
   - Node Article type with body field

## Project Structure

```
drupal-cloud-starter/
├── app/                           # Next.js app directory
│   ├── about/                     # About page
│   │   └── page.tsx
│   ├── api/                       # API routes
│   │   └── graphql/               # GraphQL proxy
│   │       └── route.ts
│   ├── articles/                  # Articles section
│   │   ├── [...slug]/             # Dynamic article pages
│   │   │   └── page.tsx
│   │   ├── layout.tsx             # Articles metadata
│   │   └── page.tsx               # Articles listing
│   ├── components/                # React components
│   │   ├── ArticleTeaser.tsx      # Article card component
│   │   ├── Header.tsx             # Site navigation
│   │   └── providers/
│   │       └── ApolloProvider.tsx # GraphQL client provider
│   ├── contact/                   # Contact page
│   │   └── page.tsx
│   ├── apple-icon.tsx             # Apple touch icon generator
│   ├── favicon.ico                # Traditional favicon
│   ├── globals.css                # Global styles
│   ├── icon.tsx                   # Favicon generator
│   ├── layout.tsx                 # Root layout with metadata
│   └── page.tsx                   # Marketing homepage
├── lib/                           # Utility libraries
│   ├── apollo-client.ts           # GraphQL client setup
│   ├── queries.ts                 # GraphQL queries
│   └── types.ts                   # TypeScript interfaces
├── public/                        # Static assets
│   └── site.webmanifest           # PWA manifest
├── .env.example                   # Environment variables template
└── next.config.js                 # Next.js configuration
```

## GraphQL Queries

The starter includes these GraphQL queries:

- **GET_ARTICLE_TEASERS**: Fetches article list with sorting and pagination
- **GET_ARTICLE_BY_PATH**: Fetches individual article content by URL path

## Authentication

The starter uses OAuth2 client credentials flow for authentication:

1. **API Route Proxy**: `/api/graphql` handles authentication automatically
2. **Token Caching**: Access tokens are cached and refreshed automatically
3. **Error Handling**: Graceful fallback when authentication fails

## PWA Features

The application includes Progressive Web App capabilities:

- **Custom Icons**: Dynamic favicon and Apple touch icons
- **Web Manifest**: Installable as a native app
- **Responsive Design**: Works perfectly on mobile devices
- **Offline Ready**: Can be extended with service workers

## Customization

### Adding New Content Types

1. Create TypeScript interfaces in `lib/types.ts`
2. Add GraphQL queries in `lib/queries.ts`
3. Create components in `app/components/`
4. Add new pages in `app/` directory

### Styling and Branding

The project uses Tailwind CSS with a blue theme:
- **Colors**: Blue (#2563eb) primary, gray neutrals
- **Typography**: Inter font family
- **Icons**: Lucide React icon library
- **Responsive**: Mobile-first breakpoints

### SEO and Metadata

Each page includes optimized metadata:
- **Title Templates**: Consistent page titles
- **Open Graph**: Social media sharing
- **Twitter Cards**: Enhanced Twitter previews
- **Keywords**: Targeted SEO keywords

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Troubleshooting

### GraphQL Connection Issues

1. **CORS Errors**: The starter uses an API route proxy to bypass CORS
2. **Authentication Failures**: Check OAuth client credentials in `.env.local`
3. **Certificate Issues**: For DDEV, set `NODE_TLS_REJECT_UNAUTHORIZED=0`
4. **GraphQL Schema**: Ensure GraphQL Compose and GraphQL Compose Edges are enabled

### No Articles Displayed

1. **Missing Content**: Create article content in your Drupal admin
2. **GraphQL Schema**: Verify `nodeArticles` query is available in GraphQL schema
3. **Permissions**: Check that OAuth client has proper permissions
4. **Query Errors**: Check browser network tab for GraphQL error responses

### Authentication Issues

1. **Missing Credentials**: Ensure `DRUPAL_CLIENT_ID` and `DRUPAL_CLIENT_SECRET` are set
2. **Invalid Client**: Verify OAuth consumer exists in Drupal with correct credentials
3. **Permissions**: Grant GraphQL execution permissions to your OAuth client
4. **Token Errors**: Check server logs for authentication error details

### Development Setup

1. **DDEV**: For local DDEV development, use `.dcloud.ddev.site` domains
2. **HTTPS**: Ensure your Drupal backend uses HTTPS
3. **Environment**: Copy `.env.example` to `.env.local` and configure properly

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.