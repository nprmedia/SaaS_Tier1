// src/hooks/useFeatureFlag.ts

import { useEffect, useState } from 'react';

/**
 * useFeatureFlag()
 * Enables toggling experimental features based on key, env, or localStorage.
 *
 * @param key - A unique flag key string (e.g. 'betaDashboard')
 * @param fallback - Optional fallback boolean (defaults to false)
 */
export function useFeatureFlag(key: string, fallback = false): boolean {
  const [enabled, setEnabled] = useState(fallback);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`feature:${key}`);
      if (stored !== null) {
        setEnabled(stored === 'true');
      }
    } catch {
      setEnabled(fallback);
    }
  }, [key, fallback]);

  return enabled;
}
