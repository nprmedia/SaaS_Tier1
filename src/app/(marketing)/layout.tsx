// src/app/(marketing)/layout.tsx
import { ReactNode } from 'react';
import StickyHeader from '@/components/global/StickyHeader';
import Footer from '@/components/global/Footer';

export const metadata = {
  title: 'NPR Media – Digital Growth Systems for Founders',
  description:
    'High-conversion websites and automation systems engineered for SaaS, e-commerce, and consulting founders. Built for speed, scale, and trust.',
  openGraph: {
    title: 'NPR Media',
    description:
      'Elite website builds and scaling systems for growth-stage founders.',
    url: 'https://npr-media.com',
    siteName: 'NPR Media',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NPR Media',
    description:
      'Elite website builds and scaling systems for growth-stage founders.',
    creator: '@nprmedia',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased transition-colors duration-300">
        <StickyHeader
          logo="/logo.svg"
          navLinks={[
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          cta={{
            label: 'Get Started',
            href: '/register',
          }}
        />
        <main className="relative z-10 flex flex-col overflow-x-hidden pt-16 sm:pt-20">
          {children}
        </main>
        <Footer
          logo="/logo.svg"
          legal="© 2025 NPR Media. All rights reserved."
          contact={{ label: 'Contact Us', href: '/contact' }}
          navGroups={[
            {
              heading: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              heading: 'Legal',
              links: [
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ],
            },
          ]}
        />
      </body>
    </html>
  );
}
