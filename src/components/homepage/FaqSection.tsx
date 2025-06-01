"use client";

import { faqs } from "@/content/homepage/faq";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="faq"
      className="relative w-full px-4 py-[clamp(2.25rem,4.5vw,3.375rem)] sm:px-8 bg-gradient-to-b from-[#edf6fd] to-[#bde2f8] text-black overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-[#bde2f8] to-transparent opacity-30 blur-3xl animate-pulse z-0" />

      <div className="relative mx-auto max-w-4xl z-10">
        <motion.h2
          className="text-[clamp(1.35rem,3vw,1.875rem)] font-bold tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-neutral-200 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full text-left text-[clamp(0.675rem,0.95vw,0.825rem)] font-semibold focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-black" : "text-neutral-400"
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3 text-[clamp(0.56rem,0.75vw,0.66rem)] text-neutral-700 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
