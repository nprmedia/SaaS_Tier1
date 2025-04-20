// components/HeroSection.tsx (Full SOP Visual Patch)

'use client'

import { FC, useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimationControls, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Info, Flame, Users, X, ArrowRight } from 'lucide-react'
import { useVariant } from '@/lib/useVariant'
import { track } from '@/lib/analytics'

const shimmerText = (text: string) => (
  <motion.span
    whileHover={{ opacity: 1 }}
    className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent transition-all duration-300 hover:brightness-110"
  >
    {text}
  </motion.span>
)

const getNudge = () => {
  const users = ['Maya from NYC', 'Chris from LA', 'Tina from Austin', 'Leo from Miami']
  return `👤 ${users[Math.floor(Math.random() * users.length)]} just signed up — you're next.`
}

const HeroSection: FC = () => {
  const variant = useVariant('hero')
  const [canScroll, setCanScroll] = useState(false)
  const [showIdleCTA, setShowIdleCTA] = useState(false)
  const [dismissIdleCTA, setDismissIdleCTA] = useState(false)
  const [nudge, setNudge] = useState('')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const controls = useAnimationControls()
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 300], [0, -40])

  const isReturningUser = true
  const location = 'your city'

  useEffect(() => {
    document.body.style.overflow = canScroll ? 'auto' : 'hidden'
    const t = setTimeout(() => setCanScroll(true), 1800)
    return () => clearTimeout(t)
  }, [canScroll])

  useEffect(() => {
    const nudger = setTimeout(() => setNudge(getNudge()), 9000)
    return () => clearTimeout(nudger)
  }, [])

  useEffect(() => {
    let idleTimer: NodeJS.Timeout
    const resetIdle = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => setShowIdleCTA(true), 30000)
    }
    document.addEventListener('mousemove', resetIdle)
    document.addEventListener('scroll', resetIdle)
    document.addEventListener('keydown', resetIdle)
    resetIdle()
    return () => {
      document.removeEventListener('mousemove', resetIdle)
      document.removeEventListener('scroll', resetIdle)
      document.removeEventListener('keydown', resetIdle)
      clearTimeout(idleTimer)
    }
  }, [])

  return (
    <>
      <section ref={sectionRef} className="relative isolate overflow-hidden pt-24 pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-b from-white to-gray-50" aria-label="Homepage Hero">
        <a href="#main" className="sr-only focus:not-sr-only absolute top-0 left-0 p-2 bg-black text-white z-50">Skip to main content</a>

        <div className="absolute inset-0 -z-10 bg-[url('/glyph-field.svg')] bg-cover opacity-10 pointer-events-none" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-tr from-yellow-50 via-transparent to-purple-50 opacity-25 blur-2xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col max-w-xl">
            <motion.div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold text-white shadow-md animate-pulse">
              <Flame className="w-4 h-4" /> Popular among startups
            </motion.div>

            <motion.h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {isReturningUser && `👋 Welcome back from ${location}. `}
              {shimmerText(variant.headline)}
            </motion.h1>

            <motion.p className="mt-4 text-lg text-gray-600 max-w-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>{variant.subheadline}</motion.p>

            <motion.div className="mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="relative inline-block">
                <span className="absolute -inset-1 rounded-xl bg-yellow-400 opacity-20 blur-lg" aria-hidden="true" />
                <Button asChild className="text-base px-6 py-3" onClick={() => track('hero_cta_clicked')}>
                  <a href="#demo">
                    {variant.ctaLabel} <ArrowRight className="inline w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
              <p className="mt-2 text-xs text-gray-500">14-day trial. No credit card required.</p>
              <p className="mt-1 text-xs text-gray-400">128 people viewed this today</p>
            </motion.div>

            <form className="mt-4 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="rounded-md border px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <Button type="submit">Join the Waitlist</Button>
            </form>

            <motion.div className="mt-6 flex items-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="text-sm text-gray-500">Rated 4.9/5 ⭐️</div>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((_, i) => (
                  <img key={i} src="/logo-light.svg" alt="Trusted brand" className="h-5 w-auto grayscale opacity-70" />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yParallax }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md md:max-w-lg lg:max-w-xl will-change-transform">
            <img src="/hero-illustration.png" alt="Product preview hero visual" className="w-full h-auto object-contain" loading="lazy" />
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="animate-bounce text-gray-400 text-xs opacity-70">
            <Users className="w-4 h-4 inline mr-1" /> Scroll ↓
          </div>
        </div>
      </section>

      {showIdleCTA && !dismissIdleCTA && (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} className="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-xl border bg-white px-5 py-3 shadow-md flex items-center justify-between gap-3">
          <span className="text-sm text-gray-700">Still exploring? You can get started in seconds →</span>
          <Button size="sm" onClick={() => { track('hero_cta_clicked'); window.location.href = '#demo' }}>Get Started</Button>
          <button onClick={() => setDismissIdleCTA(true)} aria-label="Dismiss CTA" className="p-1 text-gray-500 hover:text-black">
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </>
  )
}

export default HeroSection
