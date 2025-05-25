'use client';

import { features } from "@/content/marketing/features";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  return (
    <section id="features" className="w-full px-4 py-24 sm:px-8 bg-white text-black">
      <div className="max-w-5xl mx-auto space-y-32">
        {features.slice(0, 2).map((feature, index) => (
          <motion.div
            key={feature.title}
            className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="md:w-1/2">
              <Image
                src={feature.image}
                alt={feature.title}
                width={560}
                height={320}
                className="rounded-xl border border-neutral-200 shadow-md"
              />
              <p className="text-sm text-neutral-500 italic mt-2">
                "Saved us 8+ hours a week."
              </p>
              <span className="inline-block mt-2 text-xs text-white bg-black px-2 py-1 rounded-full">
                ✅ SOC2 Ready
              </span>
            </div>

            <div className="md:w-1/2 space-y-4">
              <p className="text-xs tracking-wide text-neutral-500 uppercase">
                AUTOMATION ENGINE
              </p>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                {feature.description}
              </p>
              <ul className="mt-4 space-y-2 text-base">
                <li>❌ Manually exporting CSVs from 6+ tools</li>
                <li>⚙️ Connect your stack once — we sync automatically</li>
                <li>✅ Reclaim 12+ hours a week and impress stakeholders</li>
              </ul>
              <Link href="/case-study" className="inline-block text-sm text-blue-600 mt-4 underline">
                See full case →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
