'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-200'
          : 'bg-transparent backdrop-blur-0'
      } text-black`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 flex items-center justify-between h-20">
        <Link href="/" className="text-xl font-bold tracking-tight hover:scale-105 transition-transform">
          Authority Platform
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/features" className="hover:text-blue-600 hover:scale-105 transition-transform">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-blue-600 hover:scale-105 transition-transform">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-blue-600 hover:scale-105 transition-transform">
            Contact
          </Link>
          <Link
            href="/signup"
            className="ml-6 inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg text-sm font-semibold shadow hover:brightness-110 hover:scale-105 transition-transform"
          >
            Get Started →
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
