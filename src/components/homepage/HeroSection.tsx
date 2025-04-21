'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { HeroProps } from '@/content/homepage/hero';
import { useEffect, useState, useRef } from 'react';

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
  const animationContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!animationContainerRef.current) return;

    const script = document.createElement('script');
    script.src = '/black-sand-flow-field/script.js';
    script.async = true;
    animationContainerRef.current.appendChild(script);

    return () => {
      animationContainerRef.current?.removeChild(script);
    };
  }, []);

  return (
    <section
      className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:py-32 py-20 max-w-[1200px] mx-auto min-h-[80vh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Black Sand Animated Background */}
      <div
        ref={animationContainerRef}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-black/30" aria-hidden="true" />

      {/* Left Text Content */}
      <div className="relative z-10 flex flex-col max-w-xl text-left">
        {gamifiedBadge && (
          <span className="mb-4 inline-block bg-gradient-to-r from-amber-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            {gamifiedBadge}
          </span>
        )}
        <motion.h1
          id="hero-heading"
          className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white max-w-prose drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {headline} <span className="inline-block text-indigo-500">⚡</span>
        </motion.h1>
        <motion.p
          className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-md"
          initial={{ opacity: 0, y: -20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {subheadline}
        </motion.p>
        <motion.a
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          initial={{ opacity: 0, y: -20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {ctaLabel}
          <span className="text-xs opacity-75 ml-2">{tooltipText}</span>
        </motion.a>
        <motion.div
          className="mt-6 animate-bounce w-fit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-gray-500 dark:text-gray-400 text-sm">↓ Scroll</span>
        </motion.div>
      </div>

      {/* Right Side Visual */}
      {image?.url && (
        <motion.div
          className="relative z-10 w-full max-w-md lg:max-w-lg order-[-1] lg:order-none"
          initial={{ opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Image
            src={image.url}
            alt={image.alt || 'Hero image'}
            width={image.width || 800}
            height={image.height || 600}
            className="rounded-xl shadow-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      )}
    </section>
  );
}
