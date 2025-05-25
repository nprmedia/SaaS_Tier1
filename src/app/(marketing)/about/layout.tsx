import type { ReactNode } from 'react';
import '@/styles/globals.css';
import StickyHeader from '@/components/global/StickyHeader';
import FooterSection from '@/components/global/FooterSection';

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <StickyHeader/>
      <div className="pt-20">{children}</div>
      <FooterSection/>
    </main>
  );
}
