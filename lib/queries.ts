import { gql } from '@apollo/client'

export const GET_ARTICLE_TEASERS = gql`
  query GetArticleTeasers($first: Int = 10) {
    nodeArticles(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeArticle {
          body {
            processed
            summary
          }
        }
      }
    }
  }
`

export const GET_ARTICLE_BY_PATH = gql`
  query GetArticleByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    # Get the dedicated homepage content
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        featuresTitle
        featuresSubtitle {
          processed
        }
        featuresItems {
          ... on ParagraphFeatureItem {
            id
            featureTitle
            featureDescription {
              processed
            }
          }
        }
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary {
          title
          url
        }
        ctaSecondary {
          title
          url
        }
      }
    }
  }
`
