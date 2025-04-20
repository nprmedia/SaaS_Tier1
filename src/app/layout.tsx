import '@/styles/globals.css'
import type { Metadata } from 'next'
import StickyHeader from '@/components/global/StickyHeader'
import Footer from '@/components/global/Footer'
import { Toaster, toast } from '@/components/ui/sonner'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { track } from '@/lib/analytics'

export const metadata: Metadata = {
  title: 'Authority Platform',
  description: 'Enterprise-grade automation, web, and strategy platform.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const referrer = document.referrer
    const utmParams = Object.fromEntries([...searchParams.entries()].filter(([key]) => key.startsWith('utm_')))

    track('page_view', {
      pathname,
      referrer,
      ...utmParams,
    })
  }, [pathname])

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://yourdomain.com" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <a href="#main" className="sr-only focus:not-sr-only absolute top-0 left-0 z-50 p-2 bg-black text-white">Skip to main content</a>

        <StickyHeader
          logo="/logo.svg"
          navLinks={[
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
          ]}
          cta={{ label: 'Get Started', href: '/signup' }}
        />

        <main id="main" className="pt-20 lg:pt-24">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-20">
            {children}
          </div>
        </main>

        <Footer
          logo="/logo.svg"
          legal="© 2025 Authority Platform. All rights reserved."
          contact={{ label: 'hello@authority.io', href: 'mailto:hello@authority.io' }}
          navGroups={[
            {
              heading: 'Product',
              links: [
                { label: 'Features', href: '#' },
                { label: 'Pricing', href: '#' },
              ],
            },
            {
              heading: 'Company',
              links: [
                { label: 'About', href: '#' },
                { label: 'Careers', href: '#' },
              ],
            },
          ]}
        />

        <Toaster position="bottom-center" closeButton richColors />
      </body>
    </html>
  )
}
