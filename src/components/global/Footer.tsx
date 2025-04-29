/*
 * File: Footer.tsx
 * Purpose: Cinematic gradient footer with depth, polished hover animations, and brand anchoring.
 */

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-borderLight bg-gradient-to-b from-white via-[#f8faff] to-[#eef2ff] text-textLight overflow-hidden">
      {/* Radial vignette effect for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.08)_0%,_transparent_60%)]"></div>
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div className="space-y-4">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold tracking-tight text-textDark"
            >
              Authority Platform
            </motion.span>
          </Link>
          <p className="text-sm max-w-xs">Enterprise-grade automation, web, and strategy platform.</p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-base font-semibold text-textDark">Product</span>
          <nav className="flex flex-col gap-2">
            <Link href="#features" className="hover:underline hover:text-primary transition">Features</Link>
            <Link href="#pricing" className="hover:underline hover:text-primary transition">Pricing</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-base font-semibold text-textDark">Company</span>
          <nav className="flex flex-col gap-2">
            <Link href="#about" className="hover:underline hover:text-primary transition">About</Link>
            <Link href="#careers" className="hover:underline hover:text-primary transition">Careers</Link>
          </nav>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-xs text-textLight/70 pb-8 relative z-10"
      >
        © 2025 Authority Platform. All rights reserved.
      </motion.div>
    </footer>
  );
}
