'use client';

import { useSession } from '@/lib/providers/SessionProvider';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const { isLoggedIn, login } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/dashboard';

  useEffect(() => {
    if (isLoggedIn) {
      console.log('🚀 Redirecting after login');
      router.replace(redirectTo);
    }
  }, [isLoggedIn, redirectTo]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full space-y-6 text-center">
        <h1 className="text-2xl font-bold">Log In</h1>
        <p className="text-sm text-neutral-600">No credentials needed — this is a demo session.</p>
        <button
          onClick={() => {
            login();
            // 🔁 optional: push here too, fallback is in useEffect
            // router.push(redirectTo);
          }}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-neutral-800 transition"
        >
          Enter Demo Dashboard
        </button>
      </div>
    </div>
  );
}
