export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuresTitle?: string
  featuresSubtitle?: {
    processed: string
  }
  featuresItems?: DrupalFeature[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: {
    title: string
    url: string
  }
  ctaSecondary?: {
    title: string
    url: string
  }
}

export interface DrupalFeature {
  id: string
  featureTitle: string
  featureDescription?: {
    processed: string
  }
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}