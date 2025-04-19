// components/HeroSection.tsx (Ultra Tier Max Feature Patch)

'use client'

import { FC, useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'
import { Button } from '@/src/components/ui/button'
import { Info, Flame, Users } from 'lucide-react'

interface HeroSectionProps {
  headline: string
  subheadline: string
  cta: { label: string; href: string; icon?: React.ReactNode; secondary?: { label: string; href: string } }
  imageSrc: string
  ribbonText?: string
  tooltipText?: string
  trustLogos?: string[]
  rating?: string
  visitorCount?: number
  isReturningUser?: boolean
  location?: string
  showForm?: boolean
}

const HeroSection: FC<HeroSectionProps> = ({
  headline, 
  subheadline,
  cta,
  imageSrc,
  ribbonText,
  tooltipText,
  trustLogos = [],
  rating = '4.9/5 ⭐️',
  visitorCount = 128,
  isReturningUser = false,
  location = '',
  showForm = false
}) => {
  const [canScroll, setCanScroll] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const controls = useAnimationControls()

  // Scroll freeze logic
  useEffect(() => {
    document.body.style.overflow = canScroll ? 'auto' : 'hidden'
    const timeout = setTimeout(() => setCanScroll(true), 1800)
    return () => clearTimeout(timeout)
  }, [canScroll])

  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const prefersReducedData = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-data: reduce)').matches

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pt-24 pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-b from-white to-gray-50"
      aria-label="Homepage Hero"
      data-session-replay="hero"
    >
      <a href="#main" className="sr-only focus:not-sr-only absolute top-0 left-0 p-2 bg-black text-white z-50">Skip to main content</a>

      <div className="absolute inset-0 -z-10 bg-[url('/glyph-field.svg')] bg-cover opacity-10 pointer-events-none" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-tr from-yellow-50 via-transparent to-purple-50 opacity-25 blur-2xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial="hidden"
          animate={isInView && !prefersReducedMotion ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col max-w-xl"
        >
          {ribbonText && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold text-white shadow-md animate-pulse"
            >
              <Flame className="w-4 h-4" /> {ribbonText}
            </motion.div>
          )}

          <motion.h1
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-ab-variant="hero-h1"
          >
            <span className="inline-block">
              {isReturningUser ? `👋 Welcome back from ${location || 'your city'}. ` : '✨ '} {headline}
            </span>
            {tooltipText && (
              <span className="ml-2 inline-flex items-center group relative focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-900" tabIndex={0} aria-label={tooltipText} role="tooltip">
                <Info className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                <span className="absolute left-full top-1/2 ml-2 w-max -translate-y-1/2 rounded-md bg-white px-2 py-1 text-xs text-gray-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  {tooltipText}
                </span>
              </span>
            )}
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-md line-clamp-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {subheadline}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6"
            data-ab-variant="cta-button"
          >
            <div className="relative inline-block">
              <span className="absolute -inset-1 rounded-xl bg-yellow-400 opacity-20 blur-lg" aria-hidden="true" />
              <Button asChild size="lg" data-click-id="hero-cta">
                <a href={cta.href} aria-describedby="cta-microcopy">
                  {cta.icon && <span className="mr-2 inline-block align-middle">{cta.icon}</span>}
                  {cta.label} ✨
                </a>
              </Button>
            </div>
            {cta.secondary && (
              <div className="mt-2">
                <a href={cta.secondary.href} className="text-sm text-blue-600 underline hover:text-blue-800">
                  {cta.secondary.label}
                </a>
              </div>
            )}
            <p className="mt-2 text-xs text-gray-500" id="cta-microcopy">
              14-day trial. No credit card required.
            </p>
            <p className="mt-1 text-xs text-gray-400">{visitorCount} people viewed this today</p>
          </motion.div>

          {/* Optional form */}
          {showForm && (
            <form className="mt-4 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit">Join the Waitlist</Button>
            </form>
          )}

          {/* Trust & Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 flex items-center gap-4"
          >
            <div className="text-sm text-gray-500">Rated {rating}</div>
            {trustLogos.length > 0 && (
              <div className="flex items-center gap-2">
                {trustLogos.map((src, i) => (
                  <img key={i} src={src} alt="Trusted brand" className="h-5 w-auto grayscale opacity-70" />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        {!prefersReducedData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl will-change-transform"
          >
            <img
              src={imageSrc}
              alt="Product preview hero visual"
              className="w-full h-auto object-contain motion-safe:transition-transform"
              srcSet={`${imageSrc} 1x, ${imageSrc.replace(/(\.\w+)$/, '@2x$1')} 2x`}
              data-replay="hero-image"
              loading="lazy"
            />
          </motion.div>
        )}
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="animate-bounce text-gray-400 text-xs opacity-70">
          <Users className="w-4 h-4 inline mr-1" /> Scroll ↓
        </div>
      </div>
    </section>
  )
}

export default HeroSection
