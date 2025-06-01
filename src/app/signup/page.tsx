'use client';

import FooterSection from '@/components/global/FooterSection';
import StickyHeader from '@/components/global/StickyHeader';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DemoSignupPage() {
  return (
    <section>
        <StickyHeader/>
    <main className="w-full max-w-xl mx-auto px-6 sm:px-10 py-32 text-center">
      <motion.h1
        className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-gray-900 leading-tight tracking-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Expand Your Digital Web Today
      </motion.h1>

      <motion.p
        className="text-[clamp(0.95rem,1.1vw,1rem)] text-gray-600 mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        This is a demo site. Click below to sign up for a real site and get started in minutes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Link
          href="https://npr-media.com/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform text-lg"
        >
          Go to NPR Media →
        </Link>
      </motion.div>

      <motion.p
        className="mt-6 text-sm text-gray-400 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        You’ll be redirected to our main signup page.
      </motion.p>
      </main>
      <FooterSection/>
    </section>
  );
}
