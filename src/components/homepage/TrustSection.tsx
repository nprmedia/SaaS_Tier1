"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/slack.svg", alt: "Slack" },
  { src: "/logos/stripe.svg", alt: "Stripe" },
  { src: "/logos/shopify.svg", alt: "Shopify" },
  { src: "/logos/intercom.svg", alt: "Intercom" },
  { src: "/logos/notion.svg", alt: "Notion" },
  { src: "/logos/airbnb.svg", alt: "Airbnb" },
];

export default function TrustSection() {
  return (
    <section
    id="trust" 
    className="relative w-full px-4 py-20 sm:px-8 bg-gradient-to-b from-[#ffffff] to-[#edf6fd] border-t border-neutral-200 text-center overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#bde2f8] via-white to-transparent opacity-30 blur-3xl animate-pulse z-0" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-6">
          Trusted by teams at
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="mx-auto opacity-70 hover:opacity-100 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
