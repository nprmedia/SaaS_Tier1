// components/HeroSection.tsx (with Variant Engine)

'use client'

import { FC, useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimationControls, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Info, Flame, Users, X, ArrowRight } from 'lucide-react'
import { useVariant } from '@/lib/useVariant'
import { track } from '@/lib/analytics'

const iconMap = {
  flame: <Flame className="h-4 w-4 text-orange-500" />,
};

const shimmerText = (text: string) => (
  <motion.span
    whileHover={{ opacity: 1 }}
    className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent transition-all duration-300 hover:brightness-110"
  >
    {text}
  </motion.span>
);

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

  useEffect(() => {
    document.body.style.overflow = canScroll ? 'auto' : 'hidden';
    const t = setTimeout(() => setCanScroll(true), 1800);
    return () => clearTimeout(t)
  }, [canScroll])

  useEffect(() => {
    const nudger = setTimeout(() => setNudge(getNudge()), 9000);
    return () => clearTimeout(nudger);
  }, [])

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;
    const resetIdle = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setShowIdleCTA(true), 30000);
    };
    document.addEventListener('mousemove', resetIdle);
    document.addEventListener('scroll', resetIdle);
    document.addEventListener('keydown', resetIdle);
    resetIdle();
    return () => {
      document.removeEventListener('mousemove', resetIdle);
      document.removeEventListener('scroll', resetIdle);
      document.removeEventListener('keydown', resetIdle);
      clearTimeout(idleTimer);
    }
  }, [])

  return (
    <>
      <section ref={sectionRef} className="relative isolate overflow-hidden pt-24 pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col max-w-xl">
            <motion.h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>{shimmerText(variant.headline)}</motion.h1>
            <motion.p className="mt-4 text-lg text-gray-600 max-w-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>{variant.subheadline}</motion.p>
            <motion.div className="mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Button asChild className="text-base px-6 py-3" onClick={() => track('hero_cta_clicked')}>
                <a href="#demo">
                  {variant.ctaLabel} <ArrowRight className="inline w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {showIdleCTA && !dismissIdleCTA && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-xl border bg-white px-5 py-3 shadow-md flex items-center justify-between gap-3"
        >
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
