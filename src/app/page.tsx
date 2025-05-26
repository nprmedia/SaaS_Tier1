'use client';

import { usePathname } from 'next/navigation';
import StickyHeader from '@/components/global/StickyHeader';
import HeroSection from '@/components/homepage/HeroSection';
import { hero } from '@/content/homepage/hero';
import TrustSection from '@/components/homepage/TrustSection';
import TabbedPricing from '@/components/homepage/Feature';
import FaqSection from '@/components/homepage/FaqSection';
import CtaSection from '@/components/homepage/CtaSection';
import FooterSection from '@/components/global/FooterSection';

export default function Page() {
  const pathname = usePathname();

  return (
    <section>
    <StickyHeader />
    <main key={pathname} className="relative w-full overflow-x-hidden bg-white text-black">
        <HeroSection {...hero} />
        <TrustSection />
        <TabbedPricing />
        <FaqSection />
        <CtaSection />
    </main>
    <FooterSection />
    </section>  
  );
}
