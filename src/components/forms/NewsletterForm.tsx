// src/components/forms/NewsletterForm.tsx

'use client';

import { useForm } from '@/hooks/useForm';
import { useState } from 'react';

export default function NewsletterForm() {
  const { values, handleChange, reset } = useForm({ email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email }),
      });

      if (!res.ok) throw new Error('Failed');

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 3000); // reset message after 3s
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
      <input
        type="email"
        name="email"
        required
        value={values.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-black"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="whitespace-nowrap rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-900 transition disabled:opacity-50"
      >
        {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
      </button>

      {status === 'error' && (
        <p className="text-xs text-red-600 mt-1 sm:ml-2">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
