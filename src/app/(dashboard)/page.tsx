'use client';

import { useEffect, useState } from 'react';
import { useSession } from '@/lib/providers/SessionProvider';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { isLoggedIn } = useSession();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated && !isLoggedIn) {
      router.replace('/login?redirect=/dashboard');
    }
  }, [hydrated, isLoggedIn]);

  if (!hydrated || !isLoggedIn) return null;

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard 🎉</h1>
      <p className="text-neutral-600 mt-4">
        This page is protected and only visible when logged in.
      </p>
    </div>
  );
}
