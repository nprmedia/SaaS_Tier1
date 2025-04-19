// src/app/error.tsx

'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-black">Something went wrong</h1>
      <p className="mt-4 text-gray-600 text-sm max-w-md">
        An unexpected error occurred. This has been logged — but you can try refreshing or returning home.
      </p>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition"
        >
          Try Again
        </button>
        <a
          href="/"
          className="rounded-lg border border-gray-300 px-6 py-3 text-sm text-gray-800 hover:bg-gray-100"
        >
          Go Home
        </a>
      </div>
    </main>
  );
}
