// src/hooks/useOutsideClick.ts

import { useEffect } from 'react';

/**
 * useOutsideClick()
 * Detects clicks outside a referenced element and calls the handler.
 *
 * @param ref - React ref to the target element
 * @param handler - Function to run on outside click
 */
export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void
): void {
  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, handler]);
}
