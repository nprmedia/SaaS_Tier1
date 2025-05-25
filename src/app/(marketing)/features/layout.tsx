// src/app/(marketing)/features/layout.tsx

import type { ReactNode } from 'react';
import { Metadata } from 'next';
import StickyHeader from '@/components/global/StickyHeader';
import FooterSection from '@/components/global/FooterSection';

export const metadata: Metadata = {
  title: 'Product Features — Authority Platform',
  description: 'Explore exactly how Authority helps you reduce manual work, automate reporting, and scale growth.',
};

export default function FeaturesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <StickyHeader />
      <main className="flex-1 w-full">{children}</main>
      <FooterSection />
    </div>
  );
}
