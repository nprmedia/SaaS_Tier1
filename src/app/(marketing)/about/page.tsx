// src/app/(marketing)/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-24 px-6 py-20 md:px-12 lg:px-32">
      {/* 🧠 Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Built for Founders Who Scale
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          We engineer high-conversion websites and growth systems for SaaS, eCommerce, and consulting founders.
        </p>
      </motion.div>

      {/* 🚀 Mission */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Our Mission</h2>
        <p className="mt-4 text-gray-700 text-lg">
          To equip modern founders with elite digital infrastructure — design, automation, and performance you’d expect from a top-tier firm, delivered at founder speed.
        </p>
      </motion.div>

      {/* 📸 Visual Story / Founder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid gap-10 md:grid-cols-2 items-center"
      >
        <Image
          src="/founder.jpg"
          alt="Founder Portrait"
          width={600}
          height={600}
          className="rounded-xl object-cover shadow-md"
        />
        <div>
          <h3 className="text-xl font-medium">Led by Builders, Not Middlemen</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            NPR Media was founded by operators who understand the trenches. Every project is designed to compound revenue, reduce friction, and build trust from pixel one. 
          </p>
          <p className="mt-4 text-gray-600">
            We're not just coders — we're system architects, CRO tacticians, and brand strategists.
          </p>
        </div>
      </motion.div>

      {/* 💼 CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <h4 className="text-xl font-semibold">Want your digital presence to match your product?</h4>
        <p className="mt-2 text-gray-600">Let’s turn your traffic into trust and growth.</p>
        <Link
          href="/contact"
          className="inline-block mt-6 rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-900 transition"
        >
          Book a Discovery Call
        </Link>
      </motion.div>
    </section>
  );
}
