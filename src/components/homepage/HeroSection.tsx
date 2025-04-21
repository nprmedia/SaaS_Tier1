// components/HeroSection.tsx (Final SOP Max Patch w/ Image Scaling Fixes)

'use client'

import { FC, useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimationControls, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Flame, Users, X, ArrowRight } from 'lucide-react'
import { useVariant } from '@/lib/useVariant'
import { track } from '@/lib/analytics'

const shimmerText = (text: string) => (
  <motion.span
    layoutId="hero-heading"
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
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState<'idle' | 'success' | 'error'>('idle')
  const [hasScrolled, setHasScrolled] = useState(false)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const controls = useAnimationControls()
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 300], [0, -40])

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
    document.addEventListener('scroll', () => {
      resetIdle()
      setHasScrolled(true)
    })
    document.addEventListener('keydown', resetIdle)
    resetIdle()
    return () => {
      document.removeEventListener('mousemove', resetIdle)
      document.removeEventListener('scroll', resetIdle)
      document.removeEventListener('keydown', resetIdle)
      clearTimeout(idleTimer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, ts: Date.now(), source: 'hero-form' }),
      })
      if (res.ok) {
        setSubmitted('success')
        track('newsletter_signup')
        variant.markConversion?.()
        localStorage.setItem('user_email', email)
      } else {
        setSubmitted('error')
      }
    } catch {
      setSubmitted('error')
    }
  }

  return (
    <main
      ref={sectionRef}
      className="relative isolate overflow-hidden scroll-smooth pt-32 pb-40 bg-gradient-to-b from-white to-slate-100 snap-start"
      aria-label="Homepage Hero"
      data-section="hero"
    >
      <a href="#main" className="sr-only focus:not-sr-only absolute top-0 left-0 z-50 p-2 bg-black text-white">Skip to main content</a>

      <div className="absolute inset-0 -z-10 bg-[url('/glyph-field.svg')] bg-cover opacity-10 pointer-events-none animate-pulse" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-tr from-yellow-100 to-purple-200 opacity-20 blur-xl pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-y-16 items-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col gap-8"
        >
          <motion.div className="inline-flex items-center gap-2 rounded-full bg-orange-500/90 px-4 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-sm ring-1 ring-white/20 animate-pulse">
            <Flame className="w-4 h-4 animate-bounce-slow" /> Popular among startups
          </motion.div>

          <motion.h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight max-w-2xl drop-shadow">
            {shimmerText(variant.headline)}
          </motion.h1>

          <motion.p className="text-lg text-gray-600 max-w-xl">
            {variant.subheadline}
          </motion.p>

          <div className="space-y-4">
            <div className="relative inline-block">
              <span className="absolute -inset-1 rounded-xl bg-yellow-400 opacity-20 blur-lg" aria-hidden="true" />
              <Button
                asChild
                size="lg"
                className="text-base px-6 py-3 font-semibold hover:scale-105 hover:shadow-xl"
                onClick={() => {
                  track('hero_cta_clicked')
                  variant.markConversion?.()
                }}
              >
                <a href="#demo">
                  {variant.ctaLabel} <ArrowRight className="inline w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-gray-500">✅ 14-day trial. No credit card required.</p>
            <p className="text-xs text-gray-400">{nudge || '128 people viewed this today'}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-lg p-4 rounded-xl shadow-inner flex flex-col sm:flex-row gap-3 items-center max-w-xl mt-2 border border-gray-200" role="form">
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              inputMode="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
            <Button type="submit" size="lg">
              {submitted === 'success' ? '✔ Joined!' : submitted === 'error' ? 'Retry' : 'Join Waitlist'}
            </Button>
          </form>
          <p className="text-xs text-gray-500" id="emailHelp" role="alert">
            {submitted === 'success' && '🎉 You’re on the list!'}
            {submitted === 'error' && '❌ Something went wrong.'}
          </p>

          <div className="mt-6 text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center gap-2">
            <span>⭐️ Rated 4.9/5 by top startups</span>
            <div className="flex gap-3 items-center">
              {["/logo1.svg", "/logo2.svg", "/logo3.svg"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Used by company ${i + 1}`}
                  className="h-4 grayscale hover:grayscale-0 transition duration-300"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: yParallax }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full min-h-[420px] max-w-[580px] lg:max-w-[600px] rounded-2xl overflow-hidden shadow-xl shadow-purple-200/30"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-transparent opacity-40 blur-2xl" />
          <img
            src="/hero-preview.webp"
            alt="Live preview of SaaS dashboard UI"
            loading="eager"
            width="640"
            height="400"
            className="relative z-10 w-full h-auto object-contain transition-transform duration-500 ease-out hover:scale-[1.04] hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]"
          />
        </motion.div>
      </div>

      {!hasScrolled && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-pulse">
          <div className="text-gray-400 text-xs opacity-70">
            <Users className="w-4 h-4 inline mr-1" /> Scroll ↓
          </div>
        </div>
      )}

      {showIdleCTA && !dismissIdleCTA && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-6 left-1/2 z-50 w-[95%] max-w-md -translate-x-1/2 rounded-xl border bg-white px-5 py-3 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <span className="text-sm text-gray-700 text-center sm:text-left">Still exploring? You can get started in seconds — no setup required.</span>
          <div className="flex gap-2 items-center">
            <Button size="sm" onClick={() => { track('hero_cta_clicked'); window.location.href = '#demo' }}>
              Start Now
            </Button>
            <button onClick={() => setDismissIdleCTA(true)} aria-label="Dismiss CTA" className="p-1 text-gray-500 hover:text-black">
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </main>
  )
}

export default HeroSection
