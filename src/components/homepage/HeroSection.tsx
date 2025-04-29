/*
 * File: HeroSection.tsx
 * Purpose: Final Cinematic Hero Section + Micro-Interaction Systems
 * Adds: Idle Shimmer, Mouse Parallax, CTA Bloom, Magnetic Buttons, Scroll Tilt
 */

'use client';

import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { HeroProps } from '@/content/homepage/hero';
import { useEffect, useRef } from 'react';

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
  const orbRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const tiltX = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const tiltY = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const orb = orbRef.current;
    const handleMove = (e: MouseEvent) => {
      if (!orb) return;
      const x = e.clientX;
      const y = e.clientY;
      orb.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
      mouseX.set((e.clientX - window.innerWidth / 2) / 20);
      mouseY.set((e.clientY - window.innerHeight / 2) / 20);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section 
      style={{ rotateX: tiltY, rotateY: tiltX }}
      className="relative w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 items-center justify-between gap-y-16 gap-x-8 lg:gap-x-16 py-28 lg:py-36 px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#eef2ff] via-[#dce1f9] to-[#fff]"
    >

      {/* Deepened Midground Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,_rgba(0,0,0,0.18)_0%,_transparent_0%)] z-0"></div>

      {/* Background Ambient Particle Field */}
      <motion.div style={{ opacity: bgOpacity, y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          src="/backgrounds/ambient-gradient.html"
          className="w-full h-full border-none opacity-80 animate-[slowfloat_45s_linear_infinite]"
          loading="lazy"
          title="ambient particles"
        />
      </motion.div>

      {/* Orb Glow Focal Anchor */}
      <motion.div
        ref={orbRef}
        className="fixed top-0 left-0 w-80 h-80 z-10 rounded-full blur-3xl opacity-30 bg-primary pointer-events-none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>

      {/* Hero Main Content */}
      <motion.div className="relative z-30 col-span-12 lg:col-span-5 flex flex-col space-y-8 text-left lg:pl-20" style={{ y: midY }}>
        {gamifiedBadge && (
          <span className="inline-block bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
            {gamifiedBadge}
          </span>
        )}
        <motion.h1
          id="hero-heading"
          className="text-4xl lg:text-6xl font-extrabold leading-tight text-textDark tracking-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {headline} <span className="inline-block text-primary">⚡</span>
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl leading-relaxed text-textLight max-w-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2 relative">
          <motion.a
            href={ctaHref}
            whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(107,70,193,0.6)' }}
            className="inline-flex items-center gap-2 bg-primary text-prmiary px-6 py-3 rounded-lg text-base font-semibold shadow-xl tracking-tight transition-transform"
          >
            {ctaLabel}
            <span className="text-xs opacity-75 ml-2">{tooltipText}</span>
            <span className="ml-1">→</span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-white text-primary border border-borderLight px-6 py-3 rounded-lg text-base font-semibold hover:bg-neutral-50 transition"
          >
            Talk to Sales
          </motion.a>
        </div>

        <motion.div
          className="pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span className="text-textLight text-sm animate-bounce">↓ Scroll</span>
        </motion.div>
      </motion.div>

      {/* Hero Image Content */}
      {image?.url && (
        <motion.div
          style={{ x: springX, y: springY }}
          className="relative z-20 col-span-12 lg:col-span-7 flex justify-center lg:pr-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative">
            <Image
              src={image.url}
              alt={image.alt || 'Hero image'}
              width={image.width || 800}
              height={image.height || 600}
              className="rounded-xl shadow-2xl hover:scale-105 hover:brightness-105 transition-transform max-w-[720px] w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 hover:opacity-30 transition-opacity pointer-events-none rounded-xl"></div>
          </div>
        </motion.div>
      )}

    </motion.section>
  );
}
