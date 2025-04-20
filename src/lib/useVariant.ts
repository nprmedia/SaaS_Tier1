// lib/useVariant.ts

declare global {
  interface Window {
    __variantMetrics?: any[];
  }
}

const VARIANT_STORAGE_PREFIX = 'v_' as const;

export const variants = {
  hero: {
    A: {
      headline: 'Launch Faster. Scale Smarter.',
      subheadline: 'The ultimate platform for founders who move fast.',
      ctaLabel: 'Get Started Free'
    },
    B: {
      headline: 'Your Growth Engine Starts Here',
      subheadline: 'Accelerate your business with tools used by top startups.',
      ctaLabel: 'Start My Trial'
    }
  }
} as const;

export type VariantKey = keyof typeof variants;
export type VariantGroup<K extends VariantKey> = typeof variants[K];
export type VariantName<K extends VariantKey> = keyof VariantGroup<K> & string;
export type VariantMap<K extends VariantKey> = VariantGroup<K>[VariantName<K>];

function getExtendedMetrics() {
  const nav = navigator;
  const screen = window.screen;
  const perf = performance;
  const now = Date.now();

  const navigation = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  const lcpEntry = perf.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry | undefined;
  const fcpEntry = perf.getEntriesByType('paint').find(e => e.name === 'first-contentful-paint') as PerformanceEntry | undefined;

  return {
    sessionId: localStorage.getItem('sessionId') || undefined,
    testGroup: localStorage.getItem('abTestGroup') || undefined,
    browser: nav.userAgent,
    os: nav.userAgent,
    deviceType: /Mobi|Android/i.test(nav.userAgent) ? 'mobile' : 'desktop',
    screenWidth: screen.width,
    screenHeight: screen.height,
    language: nav.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    platform: nav.userAgent,
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    experimentVersion: localStorage.getItem('experimentVersion') || undefined,
    buildId: localStorage.getItem('buildId') || undefined,
    nodeEnv: process.env.NODE_ENV,
    isMobile: /Mobi|Android/i.test(nav.userAgent),
    cookieConsent: localStorage.getItem('cookieConsent') === 'true',
    darkModeEnabled: window.matchMedia('(prefers-color-scheme: dark)').matches,
    latencyMs: perf.now(),
    pageId: document.body?.dataset?.pageId || undefined,
    componentId: undefined,
    experimentId: undefined,
    sessionStart: parseInt(localStorage.getItem('sessionStart') || `${now}`),
    visitCount: parseInt(localStorage.getItem('visitCount') || '1'),
    pageViewCount: parseInt(localStorage.getItem('pageViewCount') || '1'),
    isReturningVisitor: !!localStorage.getItem('hasVisited'),
    touchEnabled: 'ontouchstart' in window,
    pointerType: nav.maxTouchPoints ? 'touch' : 'mouse',
    batteryLevel: undefined,
    networkSpeed: (nav as any)?.connection?.effectiveType,
    ttfbMs: navigation?.responseStart || 0,
    fcpMs: fcpEntry?.startTime || 0,
    lcpMs: lcpEntry?.startTime || 0,
    cls: 0,
    fidMs: 0,
    gdprRegion: undefined,
    privacyMode: nav.doNotTrack === '1',
    cartValue: parseFloat(localStorage.getItem('cartValue') || '0'),
    pricingTierSeen: localStorage.getItem('pricingTier') || undefined,
    leadScore: parseInt(localStorage.getItem('leadScore') || '0'),
    triggeredBy: undefined,
    isControl: localStorage.getItem('abIsControl') === 'true',
    abVersion: localStorage.getItem('abVersion') || undefined,
    country: undefined,
    region: undefined,
    city: undefined
  };
}

function logVariantEvent(event: string, key: string, variant: string) {
  const payload = {
    event,
    key,
    variant,
    timestamp: Date.now(),
    pathname: window.location.pathname,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    ...getExtendedMetrics()
  };

  if (!window.__variantMetrics) window.__variantMetrics = [];
  window.__variantMetrics.push(payload);

  window.dispatchEvent(new CustomEvent(`variant:${event}`, { detail: payload }));
  console.debug(`[VARIANT/${event.toUpperCase()}]`, payload);

  fetch('/api/variant-track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(() => {});
}

export function useVariant<K extends VariantKey>(key: K): VariantMap<K> {
  const win = typeof window !== 'undefined' ? window : undefined;
  const stored = win?.localStorage.getItem(`${VARIANT_STORAGE_PREFIX}${key}`) as VariantName<K> | null;
  const variant: VariantName<K> = stored && variants[key][stored]
    ? stored
    : (Math.random() < 0.5 ? 'A' : 'B') as VariantName<K>;

  if (!stored && win) {
    win.localStorage.setItem(`${VARIANT_STORAGE_PREFIX}${key}`, variant);
  }

  if (typeof window !== 'undefined') {
    logVariantEvent('seen', key, variant);
  }

  return variants[key][variant];
}

export function trackVariantClick<K extends VariantKey>(key: K) {
  if (typeof window !== 'undefined') {
    const variant = localStorage.getItem(`${VARIANT_STORAGE_PREFIX}${key}`);
    if (variant) logVariantEvent('clicked', key, variant);
  }
}

export function trackVariantConversion<K extends VariantKey>(key: K) {
  if (typeof window !== 'undefined') {
    const variant = localStorage.getItem(`${VARIANT_STORAGE_PREFIX}${key}`);
    if (variant) logVariantEvent('converted', key, variant);
  }
}
