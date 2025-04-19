// components/global/LayoutWrapper.tsx

/**
 * 🧠 Features Implemented:
 * - Max-width constraint and padding
 * - Section vertical rhythm
 * - Animations-ready container with "motion-safe" behavior
 * 💸 Tier Justification: Layout consistency across sections
 * 📈 ROI Optimization: Visual hierarchy, motion prep, readability
 */

import { FC } from 'react'
import { motion } from 'framer-motion'

const LayoutWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-20 motion-safe:transition-all motion-safe:duration-300"
    >
      {children}
    </motion.div>
  )
}

export default LayoutWrapper
