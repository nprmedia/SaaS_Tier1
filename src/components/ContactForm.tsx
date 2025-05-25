'use client';

import { useState } from 'react';
import { CheckCircle, Mail } from 'lucide-react';

type ContactFormProps = {
  title: string;
  subheadline: string;
  fallbackEmail: string;
  topics: string[];
  trustLine: string;
  successMessage: string;
};

export default function ContactForm({
  title,
  subheadline,
  fallbackEmail,
  topics,
  trustLine,
  successMessage,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '', topic: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated submit logic
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <div className="bg-[#f9fafb] py-24 px-6 sm:px-12 lg:px-0">
      <div className="mx-auto max-w-2xl rounded-xl shadow-md bg-white p-8 space-y-8" id="contact">
        <div className="text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center gap-2">
            <Mail className="w-6 h-6 text-primary" />
            {title}
          </h2>
          <p className="text-sm text-muted-foreground mt-2">{subheadline}</p>
        </div>

        {submitted ? (
          <div className="text-center text-green-600 space-y-2">
            <CheckCircle className="mx-auto w-10 h-10" />
            <p className="text-xl font-medium">{successMessage}</p>
            <p className="text-sm text-muted-foreground">{trustLine}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-sm">First Name</label>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Jane"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-sm">Work Email <span className="text-red-500">*</span></label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block font-medium text-sm">I’m reaching out about...</label>
              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select an option</option>
                {topics.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-sm">Message</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                minLength={10}
                maxLength={1000}
                autoComplete="off"
                placeholder="Tell us how we can help"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition"
            >
              Send Message →
            </button>

            <p className="text-xs text-center text-muted-foreground">
              Can’t use the form? Email us at{' '}
              <a href={`mailto:${fallbackEmail}`} className="underline">
                {fallbackEmail}
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
