// config/seo.config.ts
export const defaultSeo = {
    title: 'Authority Platform',
    description: 'Elite-grade CMS, automation & design infrastructure.',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://authorityplatform.com',
      site_name: 'Authority Platform',
      images: [
        {
          url: '/images/og-default.png',
          width: 1200,
          height: 630,
          alt: 'Authority Platform',
        },
      ],
    },
    twitter: {
      handle: '@yourhandle',
      site: '@yourhandle',
      cardType: 'summary_large_image',
    },
  }
  