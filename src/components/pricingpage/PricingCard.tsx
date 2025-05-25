'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PricingCardProps {
  plan: {
    id: string;
    title: string;
    price: { monthly: number; annual: number };
    description: string;
    features: string[];
    cta: string;
    highlight: boolean;
  };
  isAnnual: boolean;
}

export default function PricingCard({ plan, isAnnual }: PricingCardProps) {
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    if (window?.location?.hash === `#${plan.id}`) {
      setHighlighted(true);
      const timeout = setTimeout(() => setHighlighted(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [plan.id]);
  const displayPrice = isAnnual ? plan.price.annual : plan.price.monthly;
  const monthlyPrice = plan.price.monthly;
  const annualTotal = plan.price.annual * 12;
  const billing = isAnnual ? 'billed annually' : 'billed monthly';

  return (
    <div
      id={plan.id}
      className={`relative flex flex-col justify-between rounded-2xl border bg-white shadow-lg p-6 transition hover:shadow-xl ${
        plan.highlight ? 'ring-2 ring-yellow-400 scale-[1.02] z-10 animate-pulse-slow' : ''
      } ${highlighted ? 'ring-4 ring-green-400' : ''}`}
    >
      {plan.highlight && (
        <div className="absolute top-0 right-0 mt-3 mr-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow">
          Most Popular
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
        <p className="text-sm text-gray-500 italic">{plan.description}</p>

        <div className="text-gray-900">
          {isAnnual ? (
            <>
              <p className="text-3xl font-bold text-green-600">
                <span className="line-through text-gray-300 mr-2">${monthlyPrice}</span>
                {displayPrice}<span className="text-base font-medium">/mo</span>
              </p>
              <p className="text-xs text-green-700">Save ${monthlyPrice * 12 - annualTotal}/year</p>
            </>
          ) : (
            <>
              <p className="text-3xl font-bold text-green-600">
                {displayPrice}<span className="text-base font-medium">/mo</span>
              </p>
              <p className="text-xs text-muted-foreground">{billing}</p>
            </>
          )}
        </div>

        <ul className="text-sm text-gray-700 space-y-2 pt-2">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <button className="w-full inline-flex justify-center items-center gap-2 rounded-full border bg-black text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-900">
          {plan.cta}
        </button>
        <p className="text-xs text-center text-muted-foreground mt-2 italic">
          No credit card required
        </p>
      </div>
    </div>
  );
}
