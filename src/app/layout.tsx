// 📜 layout.tsx
// Institutional Layout with Dynamic Metadata Generation

import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { theme } from '@/config/theme';
import Head from 'next/head';
import { generateMetadata } from '@/lib/metadata';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

// Dynamically generated SEO Metadata
const metadata = generateMetadata({
  title: 'Your Site Title',
  description: 'Your site description here',
  url: 'https://your-site-url.com',
  image: '/default-og-image.webp',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <Head>
        {/* 🎯 Preload Fonts */}
        <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* 🎯 Preload Hero Image */}
        <link rel="preload" href="/your-hero-image-path.webp" as="image" />

        {/* 🎯 Dynamic SEO Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* 🎯 Browser/Device Optimization */}
        <meta name="theme-color" content={theme.colors.background} />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
        {children}
      </body>
    </html>
  );
}
