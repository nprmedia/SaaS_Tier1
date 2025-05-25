// src/hooks/useScroll.ts

import { useEffect, useState } from 'react';

interface ScrollState {
  y: number;
  direction: 'up' | 'down';
}

/**
 * useScroll()
 * Tracks scroll position and scroll direction.
 */
export function useScroll(): ScrollState {
  const [scroll, setScroll] = useState<ScrollState>({ y: 0, direction: 'down' });

  useEffect(() => {
    let lastY = window.scrollY;

    const update = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastY ? 'down' : 'up';
      setScroll({ y: currentY, direction });
      lastY = currentY;
    };

    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return scroll;
}
