// app/server-sitemap.xml/route.ts

import { getServerSideSitemap, type ISitemapField } from 'next-sitemap'
import { type NextRequest } from 'next/server'

/**
 * Dynamic Sitemap Route
 * Generates a server-side XML sitemap for dynamic content (CMS, blogs, etc.)
 * Accessed via https://yourdomain.com/server-sitemap.xml
 */

export function GET(_req: NextRequest) {
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://authorityplatform.com'

  const fields: ISitemapField[] = [
    {
      loc: `${siteUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${siteUrl}/pricing`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
  ]

  return getServerSideSitemap(fields) // directly return Promise<Response>
}
