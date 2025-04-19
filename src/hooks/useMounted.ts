// src/hooks/useMounted.ts

import { useEffect, useState } from 'react';

/**
 * useMounted()
 * Returns true only after component has mounted on the client.
 * Useful for hydration-safe conditional logic or SSR bypass.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
