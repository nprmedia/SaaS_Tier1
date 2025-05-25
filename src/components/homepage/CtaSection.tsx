"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section 
    id="cta"
    className="relative w-full px-4 py-24 sm:px-8 bg-gradient-to-b from-[#bde2f8] to-[#edf6fd] text-black text-center overflow-hidden">
      {/* Background Moonlight Beam Gradient */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-[#bde2f8] to-transparent opacity-40 blur-3xl animate-pulse z-0" />

      <motion.div
        className="relative mx-auto max-w-3xl z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Ready to automate your workflow?
        </motion.h2>

        <motion.p
          className="text-lg text-neutral-800 mb-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Try it free for 14 days — join 10,000+ SaaS teams saving 12+ hours weekly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Link
            href="/signup"
            className="inline-block px-8 py-4 rounded-full bg-black text-white font-semibold text-lg shadow-xl hover:scale-105 transition transform duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Start Free Trial</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ffffff] to-[#8bb4f8] opacity-20 blur-xl animate-pulse z-0" />
          </Link>
        </motion.div>

        <motion.p
          className="mt-4 text-sm text-neutral-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          No credit card required • Cancel anytime
        </motion.p>
      </motion.div>
    </section>
  );
}
