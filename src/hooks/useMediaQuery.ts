// src/hooks/useMediaQuery.ts

import { useEffect, useState } from 'react';

/**
 * useMediaQuery()
 * Returns true if the media query matches.
 *
 * @param query - CSS media query string (e.g., '(max-width: 768px)')
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    listener(); // set initial state
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
