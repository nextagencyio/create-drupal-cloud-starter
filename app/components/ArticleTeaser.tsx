import Link from 'next/link'
import { DrupalArticle } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'

interface ArticleTeaserProps {
  article: DrupalArticle
}

export default function ArticleTeaser({ article }: ArticleTeaserProps) {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const summary = article.body?.summary

  return (
    <Link href={article.path} className="block h-full">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer h-full flex flex-col">
        {article.image?.url && (
          <div className="h-48 w-full overflow-hidden">
            <ResponsiveImage
              image={article.image}
              alt={article.image.alt || article.title}
              className="transition-transform duration-300 hover:scale-105 h-full"
              context="teaser"
              priority={false}
            />
          </div>
        )}
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <time dateTime={new Date(article.created.timestamp * 1000).toISOString()}>
              {formatDate(article.created.timestamp)}
            </time>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
            {article.title}
          </h2>
          
          {summary && (
            <p className="text-gray-600 line-clamp-3 mb-4">
              {summary}
            </p>
          )}
          
          <div className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 mt-auto">
            Read more
            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}