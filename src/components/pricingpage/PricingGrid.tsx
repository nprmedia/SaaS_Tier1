'use client';

import { useState } from 'react';
import PricingCard from '@/components/pricingpage/PricingCard';

const PLANS = [
  {
    id: 'starter',
    title: 'Starter',
    price: { monthly: 29, annual: 24 },
    description: 'For early-stage founders and solopreneurs.',
    features: [
      'Basic analytics dashboard',
      'Email support',
      'Unlimited projects',
      'Public integrations',
    ],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    id: 'growth',
    title: 'Growth',
    price: { monthly: 59, annual: 47 },
    description: 'Best for scaling teams and B2B SaaS startups.',
    features: [
      'Everything in Starter',
      'Team access & roles',
      'Advanced reporting',
      'Priority support',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: { monthly: 129, annual: 99 },
    description: 'For organizations with compliance needs.',
    features: [
      'All Growth features',
      'SSO & SAML',
      'Dedicated CSM',
      'Custom SLA & onboarding',
    ],
    cta: 'Request Demo',
    highlight: false,
  },
];

export default function PricingGrid({ isAnnual }: { isAnnual: boolean }) {

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PLANS.map(plan => (
          <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
        ))}
      </div>
    </section>
  );
}
