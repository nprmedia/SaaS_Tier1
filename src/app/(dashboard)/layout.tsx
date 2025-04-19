// src/app/(dashboard)/layout.tsx
import type { ReactNode } from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-neutral-900 antialiased">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="hidden w-64 shrink-0 border-r bg-white px-6 py-8 md:flex md:flex-col">
            <Link href="/" className="text-xl font-bold mb-8">
              NPR Media
            </Link>
            <nav className="flex flex-col gap-4 text-sm">
              <Link href="/dashboard" className="text-gray-700 hover:text-black">
                Dashboard Home
              </Link>
              <Link href="/dashboard/analytics" className="text-gray-700 hover:text-black">
                Analytics
              </Link>
              <Link href="/dashboard/settings" className="text-gray-700 hover:text-black">
                Settings
              </Link>
            </nav>
            <div className="mt-auto text-xs text-gray-400 pt-12">
              © {new Date().getFullYear()} NPR Media
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 md:p-10 overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
