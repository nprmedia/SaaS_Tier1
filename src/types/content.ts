// src/types/content.ts

export type CMSPage = {
    slug: string;
    title: string;
    description?: string;
    content: string; // MDX or HTML
  };
  
  export type PricingTier = {
    name: string;
    price: string;
    features: string[];
    highlight?: boolean;
  };
  