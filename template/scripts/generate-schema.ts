import path from "path";
import * as dotenv from "dotenv";
import fs from "fs/promises";
import fetch from "node-fetch";
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getIntrospectionQuery, buildClientSchema, printSchema } from 'graphql';

// Make fetch available globally for Apollo Client
global.fetch = fetch as any;

// GraphQL introspection query
const INTROSPECTION_QUERY = gql`
  ${getIntrospectionQuery()}
`;

(async () => {
  try {
    console.log("🚀 Starting GraphQL Schema Generation with Apollo Client");
    
    // Load environment variables from both .env and .env.local
    const envPath = path.join(process.cwd(), ".env");
    const envLocalPath = path.join(process.cwd(), ".env.local");

    dotenv.config({ path: envPath });
    dotenv.config({ path: envLocalPath });

    // Validate required environment variables
    if (!process.env.NEXT_PUBLIC_DRUPAL_BASE_URL) {
      throw new Error("NEXT_PUBLIC_DRUPAL_BASE_URL is required");
    }
    if (!process.env.DRUPAL_CLIENT_ID) {
      throw new Error("DRUPAL_CLIENT_ID is required");
    }
    if (!process.env.DRUPAL_CLIENT_SECRET) {
      throw new Error("DRUPAL_CLIENT_SECRET is required");
    }

    // Construct auth and GraphQL URIs from base URL
    const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;
    const authUri = `${baseUrl}/oauth/token`;
    const graphqlUri = `${baseUrl}/graphql`;

    console.log(`🔑 Authenticating with: ${authUri}`);
    
    // Get OAuth token using direct fetch
    const authResponse = await fetch(authUri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.DRUPAL_CLIENT_ID,
        client_secret: process.env.DRUPAL_CLIENT_SECRET,
      }).toString(),
    });

    if (!authResponse.ok) {
      throw new Error(`Authentication failed: ${authResponse.status} ${authResponse.statusText}`);
    }

    const authData = await authResponse.json() as any;
    
    if (!authData.access_token) {
      throw new Error('No access token received from authentication');
    }

    const token = `${authData.token_type || 'Bearer'} ${authData.access_token}`;
    
    console.log("✅ Authentication successful");

    // Create HTTP link for GraphQL endpoint
    const httpLink = createHttpLink({
      uri: graphqlUri,
    });

    // Create auth link with Bearer token
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          Authorization: token,
          'Content-Type': 'application/json',
        }
      };
    });

    // Create Apollo Client instance
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
        },
      },
    });

    console.log(`\n🔍 Introspecting GraphQL Schema from: ${graphqlUri}`);

    // Execute introspection query
    const { data } = await client.query({
      query: INTROSPECTION_QUERY,
    });

    if (!data || !data.__schema) {
      throw new Error("Failed to retrieve schema from introspection query");
    }

    console.log("✅ Schema introspection successful");

    // Build client schema from introspection result
    const schema = buildClientSchema(data);

    // Convert to SDL (Schema Definition Language)
    const schemaSDL = printSchema(schema);

    // Ensure schema directory exists
    const schemaDir = path.join(process.cwd(), "schema");
    await fs.mkdir(schemaDir, { recursive: true });

    // Write schema to file
    const schemaPath = path.join(schemaDir, "schema.graphql");
    await fs.writeFile(schemaPath, schemaSDL, 'utf8');

    console.log(`📄 Schema written to: ${schemaPath}`);

    // Also write the introspection result as JSON for tooling
    const introspectionPath = path.join(schemaDir, "introspection.json");
    await fs.writeFile(introspectionPath, JSON.stringify(data, null, 2), 'utf8');

    console.log(`📄 Introspection result written to: ${introspectionPath}`);

    // Generate TypeScript types file
    const typesContent = `// Generated GraphQL Schema Types
// This file is auto-generated. Do not edit manually.

export interface GraphQLSchema {
  __schema: {
    types: Array<{
      name: string;
      kind: string;
      description?: string;
      fields?: Array<{
        name: string;
        type: {
          name?: string;
          kind: string;
        };
        description?: string;
      }>;
    }>;
  };
}

// Export the introspection result
export const introspectionResult = ${JSON.stringify(data, null, 2)} as const;
`;

    const typesPath = path.join(schemaDir, "types.ts");
    await fs.writeFile(typesPath, typesContent, 'utf8');

    console.log(`📄 TypeScript types written to: ${typesPath}`);

    console.log("\n✅ GraphQL Schema generation completed successfully!");
    console.log("\nGenerated files:");
    console.log(`  • ${schemaPath}`);
    console.log(`  • ${introspectionPath}`);
    console.log(`  • ${typesPath}`);

  } catch (error) {
    console.error("\n❌ Error generating schema:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Stack trace:", error.stack);
    }
    process.exit(1);
  }
})();