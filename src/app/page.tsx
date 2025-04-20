// app/page.tsx (Universal Production Setup — Patched for Visual Clarity)

'use client'

import HeroSection from '@/components/homepage/HeroSection'
import { Flame } from 'lucide-react'

export default function HomePage() {
  return (
    <main id="main" className="relative isolate overflow-x-hidden bg-white text-black">
      {/* 🔥 Hero Section (Tier 1) */}
      <HeroSection />

      {/* 🚧 Future Sections Go Here */}
      {/* <LeadMagnetSection {...props} /> */}
      {/* <FeaturesSection {...props} /> */}
      {/* <PricingSection {...props} /> */}
      {/* <TestimonialsSection {...props} /> */}
      {/* <FAQSection {...props} /> */}
      {/* <CTAFooterSection {...props} /> */}
    </main>
  )
}
