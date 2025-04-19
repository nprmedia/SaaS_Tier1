// src/app/not-found.tsx

'use client';

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-6xl font-bold tracking-tight text-black sm:text-7xl">404</h1>
      <p className="mt-4 text-lg text-gray-600">Not lost — just not here.</p>
      <p className="mt-2 max-w-md text-sm text-gray-500">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition"
      >
        Return Home
      </Link>
    </main>
  );
}
