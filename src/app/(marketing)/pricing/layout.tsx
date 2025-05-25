import type { ReactNode } from 'react';
import StickyHeader from '@/components/global/StickyHeader';
import FooterSection from '@/components/global/FooterSection';

export const metadata = {
  title: 'Pricing – Authority SaaS Platform',
  description: 'Simple, transparent pricing for teams of any size. No hidden fees. Cancel anytime.',
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <StickyHeader />
      <main className="flex-1 w-full overflow-x-hidden">{children}</main>
      <FooterSection />
    </div>
  );
}
