"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="relative w-full px-4 py-[clamp(2.25rem,4.5vw,3.375rem)] sm:px-8 bg-gradient-to-b from-[#bde2f8] to-[#edf6fd] text-black text-center overflow-hidden"
    >
      <motion.div
        className="relative mx-auto max-w-3xl z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-[clamp(1.35rem,3vw,1.875rem)] font-extrabold mb-4 text-green-400 animate-pulse"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Ready to automate your workflow?
        </motion.h2>

        <motion.p
          className="text-[clamp(0.75rem,1vw,0.875rem)] text-neutral-800 mb-6"
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
            className="inline-block px-6 py-3 rounded-full bg-black text-white font-semibold text-[clamp(0.75rem,1vw,0.875rem)] shadow-xl hover:scale-105 transition transform duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Start Free Trial</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ffffff] to-[#8bb4f8] opacity-20 blur-xl animate-pulse z-0" />
          </Link>
        </motion.div>

        <motion.p
          className="mt-3 text-[clamp(0.6rem,0.85vw,0.75rem)] text-neutral-600"
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
