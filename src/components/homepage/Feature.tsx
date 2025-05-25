"use client";

import { useState } from 'react';
import { pricingData, Tier, PricingGroup } from '@/content/homepage/feature';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';

interface TabbedPricingProps {
  pricingData?: PricingGroup[];
}

import { usePathname } from 'next/navigation';

export default function TabbedPricing({ pricingData: externalData }: TabbedPricingProps) {
  const data = externalData || pricingData;
  const [active, setActive] = useState(data[0].category);

  const pathname = usePathname();

  return (
    <section
      key={pathname}
      id="pricing"
      className="relative isolate w-full py-32 bg-white border-t border-border overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="pricing-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Built to Replace Busywork—Not Your Team
          </h2>
          <p className="text-lg text-muted-foreground">
              Automate what slows you down. Empower what drives growth. Every feature is designed to save hours, cut costs, and scale intelligently.
          </p>
          <p className="text-sm text-muted-foreground">Trusted by 120+ teams worldwide</p>
        </motion.div>

        <motion.div
          className="mt-20 mb-6 flex justify-center gap-4 flex-wrap sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-border/60 pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {data.map((tab) => (
            <button
              key={tab.category}
              onClick={() => setActive(tab.category)}
              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-gray-300
                ${
                  active === tab.category
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {tab.category}
            </button>
          ))}
        </motion.div>

        <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {data
                .find((tab) => tab.category === active)
                ?.tiers.map((tier, index) => {
                  const isFeatured = tier.highlight;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.04 }}
                      className={`${isFeatured ? 'relative z-10 scale-[1.015]' : ''}`}
                    >
                      {isFeatured && (
                        <motion.div
                          className="absolute inset-0 -z-10 rounded-2xl"
                          animate={{ opacity: [0.15, 0.3, 0.15] }}
                          style={{ background: 'radial-gradient(circle, gold, var(--featured-opacity, 0.01))', '--featured-opacity': '0.01' } as React.CSSProperties }
                        />
                      )}
                      <div className={`relative rounded-2xl ${isFeatured ? 'ring-2 ring-yellow-400' : ''}`}>
                        <Card className="relative flex flex-col justify-between bg-[rgba(230, 230, 230, 0.05)] backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow h-full rounded-2xl overflow-hidden border-0">
                          <CardContent className="p-6 space-y-8">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-900">
                                  {tier.title}
                                </h3>
                                <p className="text-lg font-bold text-gray-800 whitespace-nowrap">
                                </p>
                              </div>
                              <p className="text-sm italic text-muted-foreground">
                                {tier.description}
                              </p>
                            </div>

                            <ul className="text-sm text-muted-foreground space-y-2 max-h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                              {tier.features.map((feature, i) => (
                                <li key={i} className={`flex items-start gap-2 ${i === 0 ? 'font-semibold text-gray-900' : ''}`}>
                                  <span className="text-green-500">{i === 0 ? '✅' : '✓'}</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            <div className="pt-2">
                              <button className="group mt-4 inline-flex w-full justify-center items-center gap-2 rounded-full border border-gray-300 bg-gradient-to-br from-white to-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:from-gray-100 hover:to-white hover:scale-105 transition">
                                {tier.cta}
                                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform group-hover:opacity-100" />
                              </button>
                              <p className="text-xs text-center text-muted-foreground mt-2 flex items-center justify-center gap-1 italic">
                                <Info className="w-3 h-3 opacity-70" />
                                {tier.title} Plan
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
