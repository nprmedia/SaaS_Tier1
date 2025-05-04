// 📜 metadata.ts
// Purpose: Dynamic metadata generation for SEO optimization per page.

interface MetadataOptions {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
  }
  
  export function generateMetadata(options: MetadataOptions = {}) {
    const defaultTitle = 'Your Site Title';
    const defaultDescription = 'Your site description here.';
    const defaultImage = '/default-og-image.webp';
    const defaultUrl = 'https://your-site-url.com';
  
    return {
      title: options.title || defaultTitle,
      description: options.description || defaultDescription,
      openGraph: {
        title: options.title || defaultTitle,
        description: options.description || defaultDescription,
        url: options.url || defaultUrl,
        images: [
          {
            url: options.image || defaultImage,
            width: 1200,
            height: 630,
            alt: options.title || defaultTitle,
          },
        ],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: options.title || defaultTitle,
        description: options.description || defaultDescription,
        images: [options.image || defaultImage],
      },
    };
  }
  