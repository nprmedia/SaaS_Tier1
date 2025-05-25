'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  image: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
};

export default function FramedScreenshot({ image }: Props) {
  if (!image?.url) return null;

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto z-10"
      style={{ perspective: 1000 }}
      whileHover={{ rotateX: -3, rotateY: 3, scale: 1.03 }}
    >
      {/* Glow ring behind */}
      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl scale-110 z-[-1]" />

      {/* Image itself */}
      <Image
        src={image.url}
        alt={image.alt || 'Hero screenshot'}
        width={image.width || 600}
        height={image.height || 600}
        priority
        className="object-contain w-full h-auto drop-shadow-xl rounded-xl"
      />
    </motion.div>
  );
}
