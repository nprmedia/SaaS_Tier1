'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductHero() {
  return (
    <section className="relative w-full px-4 py-32 sm:px-8 bg-gradient-to-b from-[#bde2f8] to-[#edf6fd] text-center text-black overflow-hidden max-w-screen-full mx-auto">
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-[#bde2f8] to-transparent opacity-40 blur-3xl animate-pulse z-0" />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-sm font-medium uppercase tracking-wide text-neutral-600 mb-3">
          Built for lean B2B SaaS teams
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 border-b-2 border-dashed border-black inline-block pb-1">
          What Authority Helps You Do
        </h1>
        <p className="text-xl text-neutral-800 mb-8">
          Automate reporting. Centralize your metrics. Ship smarter every week.
        </p>

        <Link
          href="#features"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-semibold text-lg shadow-xl hover:scale-105 transition-transform duration-300"
        >
          🚀 See it in action
        </Link>

        <div className="mt-4 text-sm text-neutral-600 space-y-1">
          <p>2,100+ workflows built last month</p>
          <p>Can I cancel anytime? <strong>Yes.</strong></p>
        </div>
      </motion.div>
    </section>
  );
}
