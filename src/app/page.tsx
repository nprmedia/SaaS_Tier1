import HeroSection from '@/components/homepage/HeroSection'
import { Metadata } from 'next'

// ✅ Import other sections here
// import FeaturesSection from '@/components/FeaturesSection'
// import PricingSection from '@/components/PricingSection'
// import TestimonialsSection from '@/components/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Launch Faster | Authority Platform',
  description: 'Everything founders need to move faster — automation, clarity, and power. Start your growth journey now.',
  openGraph: {
    title: 'Launch Faster | Authority Platform',
    description: 'Everything founders need to move faster — automation, clarity, and power. Start your growth journey now.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Authority Platform Hero Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Launch Faster | Authority Platform',
    description: 'Everything founders need to move faster — automation, clarity, and power. Start your growth journey now.',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return (
    <main id="main" className="relative min-h-screen bg-white text-gray-900">
      <HeroSection />

      {/* 🔻 Insert additional page sections below */}
      {/* <FeaturesSection /> */}
      {/* <PricingSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <CTASection /> */}
    </main>
  )
}
