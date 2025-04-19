// src/app/(marketing)/pricing/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const tiers = [
  {
    name: 'Launch Pad',
    price: '$1,000',
    description: 'MVP or single-page site built for speed and conversion.',
    features: [
      'Branded layout',
      'Lead capture integration',
      'Mobile-first responsive design',
    ],
    cta: 'Get Started',
    href: '/contact',
    highlight: false,
  },
  {
    name: 'Growth Engine',
    price: '$3,500',
    description: 'High-performance site with CMS, animations, and CRM logic.',
    features: [
      'Dynamic CMS-ready pages',
      'Scroll & interaction animations',
      'CRM & email integrations',
      'Performance-tuned UX',
    ],
    cta: 'Scale with Us',
    href: '/contact',
    highlight: true,
  },
  {
    name: 'Flagship Site',
    price: '$6,000+',
    description: 'Custom, API-ready builds engineered for enterprise growth.',
    features: [
      'Custom UX flows & UI animations',
      'API-integrated CMS',
      'Advanced analytics setup',
      'Pitch-ready visual polish',
    ],
    cta: 'Book a Consultation',
    href: '/contact',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-32 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Pricing That Reflects Value
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Whether you need a fast launch or a flagship-grade system, each package is built to drive measurable ROI.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid gap-12 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-2xl border px-6 py-10 shadow-sm transition hover:shadow-md ${
              tier.highlight ? 'border-black bg-gray-50' : 'border-gray-200'
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-900">{tier.name}</h2>
            <p className="mt-2 text-gray-600 text-sm">{tier.description}</p>
            <p className="mt-6 text-3xl font-bold">{tier.price}</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <span className="mr-2 text-black">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={tier.href}
              className="mt-6 inline-block w-full rounded-lg bg-black px-6 py-3 text-white text-center text-sm font-medium hover:bg-gray-900 transition"
            >
              {tier.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Trust Fallback */}
      <div className="mt-20 text-center text-sm text-gray-500">
        Need help choosing a plan?{' '}
        <Link href="/contact" className="underline hover:text-black">
          Let’s talk strategy.
        </Link>
      </div>
    </section>
  );
}
