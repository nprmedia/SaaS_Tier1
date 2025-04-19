// src/lib/cms.ts

import { navLinks } from '@/content/nav-links';
import { homepageFeatures } from '@/content/homepage/features';
import { pricingTiers } from '@/content/homepage/pricing';
import { templatePreviews } from '@/content/homepage/testimonials';

import fs from 'fs/promises';
import path from 'path';

// -- NAVIGATION
export function getNavLinks() {
  return navLinks;
}

// -- HOMEPAGE
export function getHomepageFeatures() {
  return homepageFeatures;
}

export function getPricingTiers() {
  return pricingTiers;
}

export function getTemplatePreviews() {
  return templatePreviews;
}

// -- LEGAL MARKDOWN
async function loadMarkdown(fileName: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'src', 'content', 'legal', fileName);
  return await fs.readFile(filePath, 'utf-8');
}

export async function getPrivacyPolicy(): Promise<string> {
  return loadMarkdown('privacy.md');
}

export async function getTermsOfService(): Promise<string> {
  return loadMarkdown('terms.md');
}
