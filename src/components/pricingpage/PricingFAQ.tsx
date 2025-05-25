'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'Is there a free trial?',
    a: 'Yes — every plan includes a 14-day free trial with full feature access.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. There are no contracts and you can cancel from your dashboard.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards and ACH for enterprise plans.',
  },
  {
    q: 'Is support included?',
    a: 'Yes — email and live chat support are included on all plans.',
  },
  {
    q: 'Can I change plans later?',
    a: 'You can upgrade, downgrade, or switch billing frequency at any time.',
  },
  {
    q: 'Do you offer annual billing discounts?',
    a: 'Yes — annual plans are 20% cheaper than monthly.',
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 py-20 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {FAQS.map((item, i) => (
            <div key={i} className="border rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-4 py-3 font-medium text-gray-900 hover:bg-gray-50"
              >
                {item.q}
              </button>
              {openIndex === i && (
                <div className="px-4 py-3 text-sm text-gray-700 border-t bg-gray-50">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground mt-12">
          Still have questions? <button className="underline underline-offset-2">Contact us</button>
        </div>
      </div>
    </section>
  );
}
