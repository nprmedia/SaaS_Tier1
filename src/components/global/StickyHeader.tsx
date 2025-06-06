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
      <div className="mx-auto w-full px-3 md:px-10 lg:px-60 flex items-center bg-white justify-between h-[clamp(3rem,6vw,3.75rem)]">
        <Link
          href="/"
          className="text-[clamp(0.9rem,1.4vw,1.25rem)] font-bold tracking-tight hover:scale-105 transition-transform"
        >
          Authority Platform
        </Link>
        <nav className="hidden md:flex gap-[clamp(1.25rem,3vw,2rem)] items-center">
          <Link href="/features" className="text-[clamp(0.75rem,1vw,0.875rem)] hover:text-blue-600 hover:scale-105 transition-transform">
            Features
          </Link>
          <Link href="/pricing" className="text-[clamp(0.75rem,1vw,0.875rem)] hover:text-blue-600 hover:scale-105 transition-transform">
            Pricing
          </Link>
          <Link href="/contact" className="text-[clamp(0.75rem,1vw,0.875rem)] hover:text-blue-600 hover:scale-105 transition-transform">
            Contact
          </Link>
          <Link href="/blog" className="text-[clamp(0.75rem,1vw,0.875rem)] hover:text-blue-600 hover:scale-105 transition-transform">
            Blog
          </Link>
          <Link
            href="/signup"
            className="ml-4 inline-flex items-center gap-2 bg-black text-white px-4 py-[0.45rem] rounded-lg text-[clamp(0.65rem,0.9vw,0.75rem)] font-semibold shadow hover:brightness-110 hover:scale-105 transition-transform"
          >
            Get Started →
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
