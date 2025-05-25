'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BeamConfig {
  angle: number; // Rotation angle in degrees
  width: number; // Width in pixels
  height: string; // Height (e.g., '100vh', '120vh')
  opacity: number; // Opacity value between 0 and 1
  delay: number; // Animation delay in seconds
}

const beams: BeamConfig[] = [
  {
    angle: -30,
    width: 20,
    height: '170vh',
    opacity: 0.1,
    delay: 0,
  },
  {
    angle: -35,
    width: 20,
    height: '170vh',
    opacity: 0.1,
    delay: 0,
  },
  {
    angle: -40,
    width: 20,
    height: '170vh',
    opacity: 0.1,
    delay: 0,
  },
  {
    angle: -45,
    width: 20,
    height: '170vh',
    opacity: 0.1,
    delay: 0.0,
  },
  {
    angle: -50,
    width: 20,
    height: '170vh',
    opacity: 0.1,
    delay: 0.0,
  },
  {
    angle: -55,
    width: 30,
    height: '170vh',
    opacity: 0.1,
    delay: 0.0,
  },
  {
    angle: -60,
    width: 30,
    height: '170vh',
    opacity: 0.1,
    delay: 0.0,
  },
  {
    angle: -65,
    width: 30,
    height: '170vh',
    opacity: 0.1,
    delay: 0.0,
  },
  {
    angle: -70,
    width: 40,
    height: '170vh',
    opacity: 0.1,
    delay: 0.0,
  },
  {
    angle: -75,
    width: 40,
    height: '170vh',
    opacity: 0.1,
    delay: 0.0,
  },
];

const BeamOfLight: React.FC = () => {
  return (
    <>
      {beams.map((beam, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute z-[50] transform"
          style={{
            transform: `translate(-50%, -50%) rotate(${beam.angle}deg)`,
            top: '6%',
            left: '49%',
            width: `${beam.width}px`,
            height: beam.height,
            transformOrigin: 'center',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent)',
            filter: 'blur(5px) brightness(1.1)',
            boxShadow: '0 0 2px 1px rgba(180,180,180,0.01)',
            mixBlendMode: 'lighten',
          }}
        />
      ))}
    </>
  );
};

export default BeamOfLight;
