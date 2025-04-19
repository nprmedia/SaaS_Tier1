// src/content/homepage/hero.ts

export const heroContent = {
  headline: 'Built to outperform your entire category.',
  subheadline: 'Launch faster, convert more, and scale smarter — without design bottlenecks.',
  ribbonText: 'Now booking Q2 builds',
  tooltipText: 'Backed by 20+ industry conversion studies',
  imageSrc: '/hero-preview.png',
  rating: '4.9/5 ⭐️',
  visitorCount: 128,
  trustLogos: [
    '/logos/shopify.svg',
    '/logos/notion.svg',
    '/logos/vercel.svg'
  ],
  cta: {
    label: 'Get Started',
    href: '/contact',
    icon: 'flame', // string key for runtime mapping
    secondary: {
      label: 'View Pricing',
      href: '/pricing'
    }
  },
  showForm: true
};
