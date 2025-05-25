'use client';
import { useState } from 'react';
import PricingToggle from '@/components/pricingpage/PricingToggle';
import PricingGrid from '@/components/pricingpage/PricingGrid';
import PricingFAQ from '@/components/pricingpage/PricingFAQ';
import StickyCTA from '@/components/pricingpage/StickyCTA';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true); // ← define it here

  return (
    <>
      <section className="w-full px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-muted-foreground mb-8">No hidden fees. Cancel anytime.</p>
        <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      </section>

      <PricingGrid isAnnual={isAnnual} />
      <PricingFAQ />
      <StickyCTA />
    </>
  );
}
