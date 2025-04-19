// src/app/(auth)/register/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Replace with real registration logic
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4">
        <label className="text-sm font-medium text-gray-800">
          Full Name
          <input
            type="text"
            required
            placeholder="Jane Doe"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>

        <label className="text-sm font-medium text-gray-800">
          Email
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>

        <label className="text-sm font-medium text-gray-800">
          Password
          <input
            type="password"
            required
            placeholder="Create a secure password"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-900 disabled:opacity-50"
      >
        {loading ? 'Creating account…' : 'Create Account'}
      </button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{' '}
        <Link href="/login" className="underline hover:text-black">
          Log In
        </Link>
      </p>
    </form>
  );
}
