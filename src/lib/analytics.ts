// src/lib/analytics.ts

/**
 * track()
 * Sends page or event data to an analytics platform (Plausible-ready).
 */
export function track(event: string, props?: Record<string, any>) {
    if (typeof window === 'undefined') return;
  
    try {
      (window as any).plausible?.(event, { props });
    } catch (e) {
      console.warn('Analytics tracking failed:', e);
    }
  }
  