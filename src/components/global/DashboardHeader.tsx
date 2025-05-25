'use client';

import Link from 'next/link';
import { useSession } from '@/lib/providers/SessionProvider';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DashboardHeader() {
  const { isLoggedIn, logout } = useSession();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!isLoggedIn) return null;

  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white px-6 md:px-10 lg:px-20 h-16 flex items-center justify-between shadow-sm">
      <Link href="/dashboard" className="font-semibold text-lg tracking-tight hover:opacity-80">
        Authority Platform
      </Link>

      <div className="flex items-center gap-4 relative">
        <button
          onClick={() => alert('Start onboarding')}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Onboarding
        </button>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-8 h-8 rounded-full bg-black text-white font-semibold flex items-center justify-center hover:brightness-110"
          >
            A
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg text-sm z-50">
              <Link href="/dashboard" className="block px-4 py-2 hover:bg-neutral-100" onClick={() => setDropdownOpen(false)}>
                Dashboard
              </Link>
              <Link href="/profile" className="block px-4 py-2 hover:bg-neutral-100" onClick={() => setDropdownOpen(false)}>
                Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  router.push('/');
                }}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-neutral-100"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
