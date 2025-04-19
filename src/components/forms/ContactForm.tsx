// src/components/forms/ContactForm.tsx

'use client';

import { useForm } from '@/hooks/useForm';
import { useState } from 'react';

export default function ContactForm() {
  const { values, handleChange, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Simulated send — replace with real endpoint
      await new Promise((res) => setTimeout(res, 1200));
      setSubmitted(true);
      reset();
    } catch {
      alert('Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <label className="text-sm font-medium text-gray-800">
        Full Name
        <input
          type="text"
          name="name"
          required
          value={values.name}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-black"
        />
      </label>

      <label className="text-sm font-medium text-gray-800">
        Email Address
        <input
          type="email"
          name="email"
          required
          value={values.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-black"
        />
      </label>

      <label className="text-sm font-medium text-gray-800">
        Message
        <textarea
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-black"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 disabled:opacity-50"
      >
        {submitting ? 'Sending…' : submitted ? 'Sent!' : 'Send Message'}
      </button>
    </form>
  );
}
