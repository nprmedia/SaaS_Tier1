"use client";

import { useState } from 'react';
import { pricingData, Tier, PricingGroup } from '@/content/homepage/feature';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface TabbedPricingProps {
  pricingData?: PricingGroup[];
}

export default function TabbedPricing({ pricingData: externalData }: TabbedPricingProps) {
  const data = externalData || pricingData;
  const [active, setActive] = useState(data[0].category);

  const pathname = usePathname();

  return (
    <section
      key={pathname}
      id="pricing"
      className="relative isolate w-full py-[clamp(3rem,6vw,4.5rem)] bg-white border-t border-border overflow-hidden"
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
          <h2 id="pricing-heading" className="text-[clamp(1.5rem,3.4vw,2.4rem)] font-bold tracking-tight text-gray-900">
            Built to Replace Busywork—Not Your Team
          </h2>
          <p className="text-[clamp(0.675rem,1vw,0.85rem)] text-muted-foreground">
            Automate what slows you down. Empower what drives growth. Every feature is designed to save hours, cut costs, and scale intelligently.
          </p>
          <p className="text-[clamp(0.56rem,0.75vw,0.66rem)] text-muted-foreground">Trusted by 120+ teams worldwide</p>
        </motion.div>

        <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                          style={{
                            background: 'radial-gradient(circle, gold, var(--featured-opacity, 0.01))',
                            '--featured-opacity': '0.01',
                          } as React.CSSProperties}
                        />
                      )}
                      <div className={`relative rounded-2xl ${isFeatured ? 'ring-2 ring-yellow-400' : ''}`}>
                        <Card className="relative flex flex-col justify-between bg-[rgba(230, 230, 230, 0.05)] backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow h-full rounded-2xl overflow-hidden border-0">
                          <CardContent className="p-5 space-y-6">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <h3 className="text-[clamp(0.825rem,1.2vw,1rem)] font-semibold text-grey-600">
                                  {tier.title}
                                </h3>
                              </div>
                              <p className="text-[clamp(0.56rem,0.75vw,0.66rem)] italic text-muted-foreground">
                                {tier.description}
                              </p>
                            </div>

                            <ul className="text-[clamp(0.56rem,0.75vw,0.66rem)] text-muted-foreground space-y-2 max-h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                              {tier.features.map((feature, i) => (
                                <li key={i} className={`flex items-start gap-2 ${i === 0 ? 'font-semibold text-gray-900' : ''}`}>
                                  <span className="text-green-500">{i === 0 ? '✅' : '✓'}</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            <div className="pt-2">
                              <button className="group mt-4 inline-flex w-full justify-center items-center gap-2 rounded-full border border-gray-300 bg-gradient-to-br from-white to-gray-50 px-4 py-[clamp(0.38rem,0.68vw,0.49rem)] text-[clamp(0.56rem,0.75vw,0.66rem)] font-medium text-gray-900 shadow-sm hover:from-gray-100 hover:to-white hover:scale-105 transition">
                                {tier.cta}
                                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform group-hover:opacity-100" />
                              </button>
                              <p className="text-[clamp(0.45rem,0.64vw,0.56rem)] text-center text-muted-foreground mt-2 flex items-center justify-center gap-1 italic">
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
