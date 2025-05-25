"use client";

import StickyHeader from '@/components/global/StickyHeader';
import HeroSection from '@/components/homepage/HeroSection';
import { hero } from '@/content/homepage/hero';
import TrustSection from "@/components/homepage/TrustSection";
import { pricingData } from '@/content/homepage/feature';
import TabbedPricing from '@/components/homepage/Feature';
import FaqSection from "@/components/homepage/FaqSection";
import CtaSection from "@/components/homepage/CtaSection";
import FooterSection from "@/components/global/FooterSection";
import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  return (
    <main key={pathname}>      
      <StickyHeader />
      <HeroSection {...hero} />
      <TrustSection />
      <TabbedPricing pricingData={pricingData} />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
