'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { HeroProps } from '@/content/homepage/hero';

export default function HeroSection({ headline, subheadline, ctaText, ctaLink, image }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      aria-label="Hero Section"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-bgStart via-primary to-bgEnd text-textDark"
    >
      <div className="max-w-7xl w-full mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="mr-2">🚀</span>{headline}
          </h1>
          {subheadline && (
            <p className="text-lg md:text-xl text-textLight mb-6">{subheadline}</p>
          )}
          {ctaText && ctaLink && (
            <Link
              href={{ pathname: ctaLink }}
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-full bg-primary text-white hover:bg-opacity-90 transition"
            >
              {ctaText}
            </Link>
          )}
        </div>

        {image?.url && (
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src={image.url}
              alt={image.alt || 'Hero image'}
              width={image.width || 600}
              height={image.height || 600}
              priority
              className="object-contain w-full h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
}
