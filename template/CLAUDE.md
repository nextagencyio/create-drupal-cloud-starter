# CLAUDE.md - End-to-End Content Type Development Guide

This document provides Claude Code with comprehensive instructions for building complete content type implementations from frontend to backend in this Drupal-Next.js project.

## Project Overview

**Architecture**: Headless Drupal backend with Next.js frontend
**Backend**: Drupal 11 with GraphQL Compose and DCloud Import API
**Frontend**: Next.js 15 with TypeScript, Tailwind CSS, and Apollo GraphQL
**Environment**: DDEV local development

## Environment Configuration

**Always read configuration from `.env.local`:**
- `NEXT_PUBLIC_DRUPAL_BASE_URL` - Drupal backend URL
- `DRUPAL_CLIENT_ID` - OAuth client ID for API authentication
- `DRUPAL_CLIENT_SECRET` - OAuth client secret for API authentication
- `DRUPAL_REVALIDATE_SECRET` - Secret for on-demand revalidation
- `NODE_TLS_REJECT_UNAUTHORIZED=0` - Allow self-signed certificates (development)

**Before making API calls, always read the current values:**
```bash
# Read environment variables
DRUPAL_BASE_URL=$(grep NEXT_PUBLIC_DRUPAL_BASE_URL .env.local | cut -d '=' -f2)
CLIENT_ID=$(grep DRUPAL_CLIENT_ID .env.local | cut -d '=' -f2)
CLIENT_SECRET=$(grep DRUPAL_CLIENT_SECRET .env.local | cut -d '=' -f2)
```

## End-to-End Development Workflow

When asked to create a new content type (e.g., "create a product page"), follow these steps:

### 1. Content Analysis & Planning

**Analyze the request and determine:**
- Content type name and machine name
- Required fields and their types
- Frontend components needed
- URL structure and routing
- Display requirements (listing, detail pages, etc.)

**Create a todo list for tracking progress:**
```markdown
1. Create DCloud Import JSON for [content_type]
2. Import content type and sample content via API
3. **CRITICAL**: Run schema generation (`npm run generate-schema`) to update GraphQL schema
4. Create TypeScript types and GraphQL queries
5. Build frontend components ([ContentCard], [ContentRenderer])
6. Create listing and detail pages
7. Test build process and fix errors
8. Validate end-to-end functionality
```

### 2. DCloud Import JSON Creation

**Use this format based on `schema/sample.json`:**

```json
{
  "model": [
    {
      "bundle": "content_type_name",
      "description": "Description of the content type",
      "label": "Content Type Label",
      "body": true,
      "fields": [
        {
          "id": "field_name",
          "label": "Field Label",
          "type": "text|string|image|datetime|bool|text[]"
        }
      ]
    }
  ],
  "content": [
    {
      "id": "item1",
      "type": "node.content_type_name",
      "path": "/content-type/item-slug",
      "values": {
        "title": "Item Title",
        "body": "<p>Body content</p>",
        "field_name": "field_value"
      }
    }
  ]
}
```

**Field Type Reference:**
- `text` - Long text with formatting
- `string` - Short plain text (max 255 chars)
- `image` - Image upload
- `datetime` - Date and time
- `bool` - Boolean true/false
- `text[]` - Multiple text values
- `string[]` - Multiple string values

**Important Notes:**
- Field IDs become `field_[id]` in Drupal (e.g., `"id": "price"` → `field_price`)
- **CRITICAL**: In content values, use the field ID directly without "field_" prefix (e.g., `"price": "$299.99"` NOT `"field_price": "$299.99"`)
- Use `"body": true` to include standard body field
- Always include sample content for testing
- Path aliases should follow `/content-type/slug` pattern

### 3. Import via DCloud API

**Get OAuth Token:**
```bash
# Read credentials from .env.local
DRUPAL_BASE_URL=$(grep NEXT_PUBLIC_DRUPAL_BASE_URL .env.local | cut -d '=' -f2)
CLIENT_ID=$(grep DRUPAL_CLIENT_ID .env.local | cut -d '=' -f2)
CLIENT_SECRET=$(grep DRUPAL_CLIENT_SECRET .env.local | cut -d '=' -f2)

curl -k -X POST "${DRUPAL_BASE_URL}/oauth/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}"
```

**Import Content Type:**
```bash
curl -k -X POST "${DRUPAL_BASE_URL}/api/dcloud-import" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [ACCESS_TOKEN]" \
  -d @content-type-import.json
```

**Always check the response for success and note:**
- Content type machine name (may differ from input)
- Field machine names (auto-generated)
- Node IDs created
- GraphQL schema updates
- **Important**: GraphQL field names may differ from DCloud field IDs (check actual schema)

**CRITICAL: Immediately Update GraphQL Schema After Import:**
```bash
# Generate updated GraphQL schema to include new content type
npm run generate-schema
```

**Verify the schema includes your content type:**
```bash
# Check that your content type appears in the generated schema
grep -i [your_content_type] schema/schema.graphql

# Example for products:
grep -i product schema/schema.graphql
```

**Test the GraphQL query works:**
```bash
# Get fresh token and test query
DRUPAL_BASE_URL=$(grep NEXT_PUBLIC_DRUPAL_BASE_URL .env.local | cut -d '=' -f2)
# ... (get token as shown above)
curl -k -X POST "${DRUPAL_BASE_URL}/graphql" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [ACCESS_TOKEN]" \
  -d '{"query":"{ node[ContentType]s(first: 2) { nodes { id title } } }"}'
```

### 4. Frontend Implementation

**File Structure:**
```
app/
├── components/
│   ├── [ContentType]Card.tsx      # List view component
│   ├── [ContentType]Renderer.tsx  # Detail view component
│   └── DynamicIcon.tsx            # Icon component (if needed)
├── [content-type]/
│   └── page.tsx                   # Listing page
├── [...slug]/
│   └── page.tsx                   # Dynamic routing (update)
lib/
├── queries.ts                     # GraphQL queries (update)
└── types.ts                       # TypeScript types (update)
```

#### GraphQL Queries

**Add to `lib/queries.ts`:**
```typescript
export const GET_CONTENT_TYPES = gql`
  query GetContentTypes($first: Int = 10) {
    node[ContentType]s(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on Node[ContentType] {
          body { processed }
          field[FieldName] { processed }
          // Add all fields
        }
      }
    }
  }
`
```

**Update `GET_NODE_BY_PATH` to include new content type:**
```typescript
... on Node[ContentType] {
  id
  title
  body { processed }
  field[FieldName] { processed }
  // Add all fields
}
```

#### TypeScript Types

**Add to `lib/types.ts`:**
```typescript
export interface Drupal[ContentType] extends DrupalNode {
  body?: { processed: string }
  field[FieldName]?: { processed: string }
  // Add all fields with proper types
}

export interface [ContentType]Data {
  node[ContentType]s: {
    nodes: Drupal[ContentType][]
  }
}
```

#### Component Templates

**Card Component (`[ContentType]Card.tsx`):**
```typescript
import Link from 'next/link'
import { Drupal[ContentType] } from '@/lib/types'

interface [ContentType]CardProps {
  [contentType]: Drupal[ContentType]
}

export default function [ContentType]Card({ [contentType] }: [ContentType]CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {[contentType].title}
        </h3>

        {/* Add field displays */}
        {/* For text[] fields with HTML content, use dangerouslySetInnerHTML */}
        {/* Example: <span dangerouslySetInnerHTML={{ __html: field.processed }} /> */}

        <Link
          href={[contentType].path || `/[content-type]/${[contentType].id}`}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
```

**Renderer Component (`[ContentType]Renderer.tsx`):**
```typescript
import Header from './Header'
import { Drupal[ContentType] } from '@/lib/types'

interface [ContentType]RendererProps {
  [contentType]: Drupal[ContentType]
}

export default function [ContentType]Renderer({ [contentType] }: [ContentType]RendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {[contentType].title}
            </h1>

            {/* Add field displays */}
            {/* For text[] fields with HTML content, use dangerouslySetInnerHTML */}
            {/* Example: <span dangerouslySetInnerHTML={{ __html: field.processed }} /> */}

            {[contentType].body?.processed && (
              <div
                className="prose prose-lg max-w-none mt-8"
                dangerouslySetInnerHTML={{ __html: [contentType].body.processed }}
              />
            )}
          </div>
        </article>
      </main>
    </div>
  )
}
```

#### Listing Page

**Create `app/[content-type]/page.tsx`:**
```typescript
import Header from '../components/Header'
import [ContentType]Card from '../components/[ContentType]Card'
import { GET_CONTENT_TYPES } from '@/lib/queries'
import { getServerApolloClient } from '@/lib/apollo-client'
import { [ContentType]Data } from '@/lib/types'

export const revalidate = 300

export default async function [ContentType]sPage() {
  const apollo = getServerApolloClient(await headers())

  try {
    const { data } = await apollo.query<[ContentType]Data>({
      query: GET_CONTENT_TYPES,
      variables: { first: 20 },
      fetchPolicy: 'no-cache'
    })

    const [contentType]s = data?.node[ContentType]s?.nodes || []

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              [Content Types]
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Description of content type listing
            </p>
          </div>

          {[contentType]s.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[contentType]s.map(([contentType]) => (
                <[ContentType]Card key={[contentType].id} [contentType]={[contentType]} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600">No [content types] available.</p>
            </div>
          )}
        </main>
      </div>
    )
  } catch (error) {
    console.error('Error loading [content types]:', error)
    // Return error state
  }
}
```

#### Update Dynamic Routing

**Add to `app/[...slug]/page.tsx`:**
```typescript
// In generateMetadata and page functions, add:
... on Node[ContentType] {
  id
  title
  // Add fields needed for display
}

// In the page component return:
if (node.__typename === 'Node[ContentType]') {
  return <[ContentType]Renderer [contentType]={node as Drupal[ContentType]} />
}
```

#### Update Navigation

**Add to `app/components/Header.tsx`:**
```typescript
// Add navigation link
<Link
  href="/[content-type]"
  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    pathname === '/[content-type]' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:text-blue-600'
  }`}
>
  [Content Types]
</Link>
```

### 5. Build and Test Process

**Always run these commands in sequence:**

1. **Build the application:**
```bash
npm run build
```

2. **Fix any TypeScript/build errors** that appear

3. **Start development server:**
```bash
npm run dev
```

4. **Test endpoints:**
   - Listing page: `http://localhost:3001/[content-type]`
   - Detail pages: `http://localhost:3001/[content-type]/[slug]`

5. **Validate with curl (optional):**
```bash
curl -s "http://localhost:3001/[content-type]" | grep -o "<title>[^<]*" | head -1
```

### 6. Testing Checklist

**Verify each step:**
- [ ] DCloud import successful with no errors
- [ ] GraphQL schema includes new content type
- [ ] TypeScript types are properly defined
- [ ] Build process completes without errors
- [ ] Listing page displays content
- [ ] Detail pages render correctly
- [ ] Navigation links work
- [ ] Responsive design functions
- [ ] Error states handled gracefully

## Common Content Type Patterns

### E-commerce Product
```json
{
  "id": "price",
  "label": "Price",
  "type": "string"
},
{
  "id": "product_images",
  "label": "Product Images",
  "type": "image[]"
},
{
  "id": "in_stock",
  "label": "In Stock",
  "type": "bool"
},
{
  "id": "features",
  "label": "Key Features",
  "type": "string[]"
}
```

### Event/Conference
```json
{
  "id": "event_date",
  "label": "Event Date",
  "type": "datetime"
},
{
  "id": "location",
  "label": "Location",
  "type": "string"
},
{
  "id": "speakers",
  "label": "Speakers",
  "type": "string[]"
}
```

### Team Member
```json
{
  "id": "position",
  "label": "Position",
  "type": "string"
},
{
  "id": "profile_image",
  "label": "Profile Image",
  "type": "image"
},
{
  "id": "bio",
  "label": "Biography",
  "type": "text"
}
```

### Portfolio/Case Study
```json
{
  "id": "project_url",
  "label": "Project URL",
  "type": "string"
},
{
  "id": "technologies",
  "label": "Technologies Used",
  "type": "string[]"
},
{
  "id": "project_images",
  "label": "Project Images",
  "type": "image[]"
}
```

## Troubleshooting

### Common Issues

**1. DCloud Import Fails**
- Check OAuth token expiration
- Verify JSON structure matches `schema/sample.json` format
- Ensure field IDs don't start with `field_`
- **Critical**: In content values, use field ID without "field_" prefix (e.g., `"price": "$299.99"` not `"field_price": "$299.99"`)

**2. GraphQL Errors**
- Check if content type was created successfully in Drupal
- Verify GraphQL Compose configuration
- Clear GraphQL cache in Drupal admin

**3. Build Errors**
- Check TypeScript type definitions
- Ensure all imports are correct
- Verify GraphQL query syntax

**4. Content Not Displaying**
- Check GraphQL query field names match Drupal fields (may not match DCloud field IDs)
- Verify content was created and published
- Check query variables and pagination
- For HTML content showing raw tags, use `dangerouslySetInnerHTML={{ __html: field.processed }}`

**5. GraphQL Schema Not Updated After DCloud Import**
- **Critical Issue**: DCloud imports create content types successfully but GraphQL schema may not update immediately
- Content exists in Drupal but `nodeProducts` query returns "field not found" errors
- This is the most common issue with DCloud imports

**Solution Process**:
1. Clear Drupal caches (if you have admin access)
2. **Always run schema generation script**: `npm run generate-schema`
3. This regenerates the GraphQL schema files and validates the schema is updated
4. Test queries again after schema regeneration

### Essential Schema Generation Workflow

**CRITICAL**: Always run schema generation after DCloud imports to ensure GraphQL integration works properly.

```bash
# Generate updated GraphQL schema after content type imports
npm run generate-schema
```

This command:
- Authenticates with Drupal using OAuth
- Performs GraphQL introspection to get the current schema
- Generates updated schema files in `/schema/` directory
- Validates that new content types are available in GraphQL

**Add this to your workflow**:
1. Import content type via DCloud API
2. **Immediately run**: `npm run generate-schema`
3. Check generated schema includes your new content type
4. Test GraphQL queries
5. Proceed with frontend implementation

### Debug Commands

```bash
# Read environment variables
DRUPAL_BASE_URL=$(grep NEXT_PUBLIC_DRUPAL_BASE_URL .env.local | cut -d '=' -f2)
CLIENT_ID=$(grep DRUPAL_CLIENT_ID .env.local | cut -d '=' -f2)
CLIENT_SECRET=$(grep DRUPAL_CLIENT_SECRET .env.local | cut -d '=' -f2)

# Test API endpoint
curl -k "${DRUPAL_BASE_URL}/api/dcloud-import/status"

# Get fresh OAuth token
curl -k -X POST "${DRUPAL_BASE_URL}/oauth/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}"

# Test GraphQL query and check available types
curl -k -X POST "${DRUPAL_BASE_URL}/graphql" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [TOKEN]" \
  -d '{"query":"{ __schema { types { name } } }"}' | grep -i product

# Check available query fields (look for nodeProducts)
curl -k -X POST "${DRUPAL_BASE_URL}/graphql" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [TOKEN]" \
  -d '{"query":"{ __schema { queryType { fields { name } } } }"}' | grep -i node

# Generate fresh schema (most important)
npm run generate-schema

# Test actual content type query
curl -k -X POST "${DRUPAL_BASE_URL}/graphql" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [TOKEN]" \
  -d '{"query":"{ nodeProducts(first: 2) { nodes { id title } } }"}'
```

## Best Practices

1. **Always create sample content** during import for immediate testing
2. **Use descriptive field names** that are clear and consistent
3. **Follow existing naming conventions** in the codebase
4. **Test responsive design** on different screen sizes
5. **Handle empty/missing data gracefully** in components
6. **Use semantic HTML** for accessibility
7. **Include proper TypeScript types** for all data structures
8. **Test the full user journey** from listing to detail pages
9. **Use `dangerouslySetInnerHTML`** for processed HTML content from Drupal to avoid raw tag display
10. **Verify GraphQL field names** match actual schema, not DCloud field IDs

## Success Criteria

A successful end-to-end implementation should:
- [ ] Build without errors
- [ ] Display content correctly on listing and detail pages
- [ ] Handle navigation between pages
- [ ] Render responsively on all device sizes
- [ ] Show appropriate fallbacks for missing data
- [ ] Follow the established design patterns
- [ ] Include proper metadata and SEO elements
- [ ] Work with the existing authentication and routing system

## Key Learnings and Common Mistakes

Based on successful product catalog implementation, here are critical learnings to avoid common pitfalls:

### DCloud Import Format Issues

**Problem**: Field values incorrectly formatted with "field_" prefix
```json
// WRONG - This causes import failures
"values": {
  "field_price": "$299.99",
  "field_in_stock": true
}

// CORRECT - Use field ID directly
"values": {
  "price": "$299.99",
  "in_stock": true
}
```

**Solution**: Always use the field `id` value directly in content values, never add "field_" prefix.

### GraphQL Field Name Mapping

**Problem**: Assuming GraphQL field names match DCloud field IDs
```typescript
// WRONG - Field names may be transformed
price: string           // DCloud field ID
fieldPrice: string      // What you might expect in GraphQL

// CORRECT - Check actual schema
price: string          // Actual GraphQL field name (can match DCloud ID)
inStock: boolean       // camelCase transformation
productImages: object  // snake_case to camelCase
```

**Solution**: Always verify GraphQL field names by checking the actual schema or API response before writing queries.

### GraphQL Field Value Structure Discovery

**Critical Learning**: GraphQL field values from DCloud imports return as simple types, not objects:

```typescript
// WRONG - Assuming field values are objects with .processed
fieldPrice?: {
  processed: string
}
fieldFeatures?: Array<{
  processed: string
}>

// CORRECT - DCloud imports create simple value fields
price?: string
features?: string[]
```

**Discovery Process**: Test GraphQL queries directly to understand actual schema:
```bash
# Test simple query to check field structure
curl -k -X POST "${DRUPAL_BASE_URL}/graphql" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [TOKEN]" \
  -d '{"query":"{ nodeProducts(first: 1) { nodes { id title price sku inStock features } } }"}'
```

**Solution**: Always test a simple GraphQL query first to understand the actual field structure before writing TypeScript types and components.

### HTML Content Rendering

**Problem**: Drupal processed HTML showing as raw tags in frontend
```jsx
// WRONG - Shows: "Key Features <p>Fast Wireless Charging</p> <p>Qi-Compatible</p>"
<span>{feature.processed}</span>

// CORRECT - Renders HTML properly
<span dangerouslySetInnerHTML={{ __html: feature.processed }} />
```

**Better Solution**: Use `string[]` instead of `text[]` for simple lists to avoid HTML altogether:
```jsx
// BEST - Clean, simple, no HTML rendering needed
<span>{feature}</span>  // Just plain text: "Fast Wireless Charging"
```

**Solution**: Use `dangerouslySetInnerHTML` only when necessary for rich `text[]` fields. Prefer `string[]` for simple bullet lists.

### Field Type Selection

**Best Practice**: Choose field types based on content structure:
- `string[]` for bullet points, features, specifications, tags, categories (clean plain text, no HTML rendering issues)
- `text[]` only when you need rich formatting within each item (rare - avoid unless necessary)
- `text` for rich content descriptions that need HTML formatting
- `string` for simple values like price, SKU, names (plain text, max 255 chars)

**Recommendation**: For repeated items like product features, use `string[]` instead of `text[]` to avoid HTML rendering complexity and security concerns.

### Navigation Menu Integration Pattern

**Essential Step**: Always update the main navigation when creating new content types:

```typescript
// Update navigationItems array in app/components/Header.tsx
const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },  // Add new content type
  { name: 'Articles', href: '/articles' },
  { name: 'About', href: '/about' }
]

// Update active tab detection to include content type routes
const getActiveTab = () => {
  if (pathname === '/') return 'Home'
  if (pathname === '/products' || pathname.startsWith('/products/')) return 'Products'
  if (pathname === '/articles' || pathname.startsWith('/articles/')) return 'Articles'
  if (pathname === '/about') return 'About'
  return null
}
```

**Pattern**: Use `.startsWith()` for active state detection to highlight navigation for both listing and detail pages.

### Component Architecture Best Practices

**Proven Pattern**: Create two components per content type:
1. **`[ContentType]Card.tsx`** - For listing views with preview information
2. **`[ContentType]Renderer.tsx`** - For detail pages with complete information

**Component Features**:
- **Cards**: Preview data, stock/status indicators, truncated feature lists, call-to-action links
- **Renderers**: Full data display, sticky sidebars, responsive grids, structured information hierarchy

**File Organization**:
```
app/
├── components/
│   ├── ProductCard.tsx      # Reusable card for listings
│   ├── ProductRenderer.tsx  # Full page renderer for details
│   └── Header.tsx          # Updated with new navigation
├── products/
│   └── page.tsx            # Listing page using ProductCard
└── [...slug]/
    └── page.tsx            # Updated to handle new content type routing
```

### Build Process Validation

**Critical**: Always run build process after major changes to catch TypeScript and import errors:

```bash
npm run build  # Must complete without errors
npm run dev    # Test in development mode
```

**Testing Checklist**: 
- [ ] Build completes successfully
- [ ] Listing page loads and displays content
- [ ] Detail pages render via dynamic routing
- [ ] Navigation highlights correctly
- [ ] Mobile responsive design works
- [ ] Error states display appropriately

### GraphQL Schema Generation Workflow (CRITICAL LEARNING)

The most important learning from the product catalog implementation is the **mandatory schema generation step**:

**Problem**: DCloud imports successfully create content types and content, but GraphQL schema doesn't update automatically.
**Symptoms**: 
- `nodeProducts` query returns "field not found" errors
- Content exists in Drupal but not accessible via GraphQL
- Route queries work but content type queries fail

**Solution**: **ALWAYS run schema generation immediately after DCloud imports**:

```bash
# After any DCloud import, immediately run:
npm run generate-schema

# This step is MANDATORY for GraphQL integration to work
```

**Why this is critical**:
- DCloud API creates Drupal content types but doesn't trigger GraphQL schema rebuilds
- The `generate-schema` script performs fresh introspection and updates local schema files
- Without this step, frontend development will fail with "type not found" errors
- This step bridges the gap between Drupal content type creation and Next.js GraphQL integration

**Workflow Integration**:
1. Import via DCloud API ✅
2. **Run `npm run generate-schema`** ✅ ← CRITICAL STEP
3. Verify schema includes new content type ✅
4. Proceed with frontend development ✅

This learning transforms the development workflow from "sometimes works" to "reliably works every time."

## Summary

This comprehensive guide enables "one-shot" prompts like "create a product catalog" to result in complete, working implementations from backend to frontend.
