export interface HeroProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  tooltipText: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  gamifiedBadge?: string;
}

export const hero: HeroProps = {
  headline: 'Automate Reporting. Save 12+ Hours Weekly.',
  subheadline: 'Built for SaaS teams who want cleaner dashboards and less spreadsheet chaos. Try it free — no card required.',
  ctaLabel: 'Start Free Trial',
  ctaHref: '/signup',
  tooltipText: 'No credit card needed',
  image: {
    url: '/hero-preview.webp',
    alt: 'Product demo screenshot',
    width: 800,
    height: 600,
  },
  gamifiedBadge: '🔥 Most Popular SaaS Tool 2025',
};
