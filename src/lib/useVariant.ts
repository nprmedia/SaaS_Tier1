// lib/useVariant.ts

const VARIANT_STORAGE_PREFIX = 'v_' as const;

export const variants = {
  hero: {
    A: {
      headline: 'Start Scaling Smarter',
      subheadline: 'Build momentum with automation.',
      ctaLabel: 'Get Started'
    },
    B: {
      headline: 'Unlock Your Growth Potential',
      subheadline: 'Tools to help you go faster.',
      ctaLabel: 'Launch Free Trial'
    }
  }
} as const;

type VariantKey = keyof typeof variants;
type VariantGroup<K extends VariantKey> = typeof variants[K];
type VariantName<K extends VariantKey> = keyof VariantGroup<K> & string;
type VariantMap<K extends VariantKey> = VariantGroup<K>[VariantName<K>];

export function useVariant<K extends VariantKey>(key: K): VariantMap<K> {
  const win = typeof window !== 'undefined' ? window : undefined;
  const stored = win?.localStorage.getItem(`${VARIANT_STORAGE_PREFIX}${key}`) as VariantName<K> | null;
  const variant: VariantName<K> = stored && variants[key][stored] ? stored : (Math.random() < 0.5 ? 'A' : 'B') as VariantName<K>;

  if (!stored && win) {
    win.localStorage.setItem(`${VARIANT_STORAGE_PREFIX}${key}`, variant);
  }

  return variants[key][variant];
}
