// src/app/(auth)/layout.tsx
import type { ReactNode } from 'react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-neutral-900 antialiased">
        <main className="flex min-h-screen items-center justify-center px-6 py-12">
          <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
            {/* Branding */}
            <div className="text-center">
              <Link href="/" className="text-2xl font-bold tracking-tight text-black">
                NPR Media
              </Link>
              <p className="mt-2 text-sm text-gray-500">Secure Client Portal</p>
            </div>

            {/* Page-specific content */}
            <div>{children}</div>

            {/* Legal */}
            <p className="text-center text-xs text-gray-400">
              © {new Date().getFullYear()} NPR Media. All rights reserved.
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
