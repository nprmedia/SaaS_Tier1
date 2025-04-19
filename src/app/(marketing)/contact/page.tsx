// src/app/(marketing)/contact/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-20 px-6 py-20 md:px-12 lg:px-32 max-w-4xl mx-auto">
      {/* 🧠 Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let’s Talk Growth</h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Whether you're ready to start or just exploring options, we're here to help you scale with confidence.
        </p>
      </motion.div>

      {/* 📩 Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-6"
        onSubmit={(e) => e.preventDefault()} // Replace with form handling later
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-800">Your Email</span>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-800">Message</span>
          <textarea
            required
            rows={5}
            placeholder="What can we help you with?"
            className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>

        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-900 transition"
        >
          Let’s Build Something Great
        </button>
      </motion.form>

      {/* 🧱 Backup Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-sm text-gray-500"
      >
        Prefer direct contact? Email us at{' '}
        <Link href="mailto:team@npr-media.com" className="underline hover:text-black">
          team@npr-media.com
        </Link>
      </motion.div>
    </section>
  );
}
