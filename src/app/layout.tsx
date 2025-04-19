// src/app/layout.tsx

/**
 * 🧠 Features Implemented (Global SOP):
 * - App Router shell with global layout
 * - Includes StickyHeader + Footer
 * - Imports tailwind globals, HTML lang tag, font preload
 * - Section wrappers with max width
 * 💸 Tier Justification: Global experience control & branding
 * 📈 ROI Optimization: Trust, scroll behavior, consistent polish
 */

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StickyHeader from '@/components/global/StickyHeader'
import Footer from '@/components/global/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Authority Platform',
  description: 'Enterprise-grade automation, web, and strategy platform.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <StickyHeader
          logo="/logo.svg"
          navLinks={[
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
          ]}
          cta={{ label: 'Get Started', href: '/signup' }}
        />

        <main className="pt-20 lg:pt-24">
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
      </body>
    </html>
  )
}
