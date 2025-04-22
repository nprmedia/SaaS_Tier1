'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { HeroProps } from '@/content/homepage/hero';
import { useEffect, useState } from 'react';

export default function HeroSection({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  tooltipText,
  image,
  gamifiedBadge,
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanScroll(true), 1200);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (canScroll) document.body.style.overflow = '';
  }, [canScroll]);

  return (
    <section className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <iframe
          src="/sand-flow-corrected.html"
          referrerPolicy="origin"
          className="w-full h-full border-0 opacity-30 mix-blend-darken"
          loading="lazy"
          allowFullScreen
          title="Sand Flow Field"
        />
      </div>

      {/* Left Text Content */}
      <div className="relative z-10 flex flex-col max-w-xl text-left space-y-5">
        {gamifiedBadge && (
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
            {gamifiedBadge}
          </span>
        )}
        <motion.h1
          id="hero-heading"
          className="text-4xl lg:text-6xl font-extrabold leading-tight text-black tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {headline} <span className="inline-block text-indigo-500">⚡</span>
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl text-gray-700 max-w-md"
          initial={{ opacity: 0, y: -20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {subheadline}
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <motion.a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-md hover:bg-indigo-700 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            initial={{ opacity: 0, y: -20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {ctaLabel}
            <span className="text-xs opacity-75 ml-2">{tooltipText}</span>
            <span className="ml-1">→</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 border border-indigo-300 px-6 py-3 rounded-lg text-base font-semibold shadow-sm hover:bg-indigo-50 transition"
            initial={{ opacity: 0, y: -20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Talk to Sales
          </motion.a>
        </div>
        <motion.div
          className="pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span className="text-gray-500 text-sm animate-bounce">↓ Scroll</span>
        </motion.div>
      </div>

      {/* Right Side Visual */}
      {image?.url && (
        <motion.div
          className="relative z-10 w-full max-w-md lg:max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Image
            src={image.url}
            alt={image.alt || 'Hero image'}
            width={image.width || 800}
            height={image.height || 600}
            className="rounded-xl shadow-2xl hover:scale-[1.01] transition-transform"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      )}
    </section>
  );
}
