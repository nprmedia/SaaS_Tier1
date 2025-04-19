// app/page.tsx (Universal Production Setup — Patched for Visual Clarity)

'use client'

import HeroSection from '@/components/homepage/HeroSection'
import { Flame } from 'lucide-react'

export default function HomePage() {
  return (
    <main id="main" className="relative isolate overflow-x-hidden bg-white text-black">
      {/* 🔥 Hero Section (Tier 1) */}
      <HeroSection
        headline="Authority Platform"
        subheadline="Content hub, booking system, and scaling workflows."
        cta={{
          label: 'View Demo Flow →',
          href: '#demo',
          icon: <Flame className="w-4 h-4" />,
          secondary: {
            label: 'Learn More',
            href: '#features'
          }
        }}
        imageSrc="/vercel.svg"
        ribbonText="🔥 Launch-Ready SaaS Stack"
        tooltipText="No credit card required"
        trustLogos={["/vercel.svg", "/next.svg", "/favicon.ico"]}
        rating="4.9/5 ⭐️ Based on 300+ reviews"
        visitorCount={217}
        isReturningUser={true}
        location="New York"
        showForm={true}
      />

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
