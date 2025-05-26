// src/app/layout.tsx

import '@styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description for SEO/meta',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

