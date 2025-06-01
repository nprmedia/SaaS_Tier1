// app/blog/layout.tsx
import type { ReactNode } from 'react';
import StickyHeader from '@/components/global/StickyHeader';
import FooterSection from '@/components/global/FooterSection';

export const metadata = {
  title: 'Blog – Authority Platform',
  description: 'Insights, updates, and expert guides from the Authority Platform team.',
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <StickyHeader />
        <div className="pt-[clamp(6rem,8vw,8rem)]">{children}</div>
        <FooterSection />
      </body>
    </html>
  );
}
