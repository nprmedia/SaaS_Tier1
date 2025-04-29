/*
 * File: StickyHeader.tsx
 * Purpose: Cinematic transparent header for homepage with scroll detection, depth layering, CTA glow.
 */

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
      className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? 'bg-white backdrop-blur-md shadow-md' : 'bg-white backdrop-blur-0'} text-textDark`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 flex items-center justify-between h-20">
        <Link href="/">
          <span className="text-xl font-bold tracking-tight hover:scale-105 transition-transform">Authority Platform</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#features" className="hover:text-primary hover:scale-105 transition-transform">Features</a>
          <a href="#pricing" className="hover:text-primary hover:scale-105 transition-transform">Pricing</a>
          <a href="#contact" className="hover:text-primary hover:scale-105 transition-transform">Contact</a>
          <Link
            href={{ pathname: '/signup' }}
            className="ml-6 inline-flex items-center gap-2 bg-primary text-primary px-5 py-2 rounded-lg text-sm font-semibold shadow-lg hover:brightness-110 animate-pulse hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
