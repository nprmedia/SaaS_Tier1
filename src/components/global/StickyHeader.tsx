'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSession } from '@/lib/providers/SessionProvider';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isLoggedIn, logout } = useSession();

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
        scrolled ? 'bg-white backdrop-blur-md shadow-md' : 'bg-white'
      } text-textDark`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 flex items-center justify-between h-20">
        <Link href="/">
          <span className="text-xl font-bold tracking-tight hover:scale-105 transition-transform">
            Authority Platform
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/features" className="hover:text-primary hover:scale-105 transition-transform">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-primary hover:scale-105 transition-transform">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-primary hover:scale-105 transition-transform">
            Contact
          </Link>

          {!isLoggedIn ? (
            <Link
              href="/login"
              className="ml-6 inline-flex items-center gap-2 bg-primary text-primary px-5 py-2 rounded-lg text-sm font-semibold shadow-lg hover:brightness-110 animate-pulse hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          ) : (
            <div
              className="relative ml-6"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg text-sm font-medium shadow hover:bg-neutral-800 transition-transform">
                Dashboard
              </button>

              <div
                className={`absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg text-sm z-50 transition-opacity duration-200 ${
                  dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 hover:bg-neutral-100"
                >
                  My Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-neutral-100"
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </motion.header>
  );
}
