// 📁 /src/hooks/useMagneticEffect.ts
import { useEffect, useRef } from 'react';

export function useMagneticEffect<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      node.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };

    const reset = () => {
      node.style.transform = 'translate(0px, 0px)';
    };

    node.addEventListener('mousemove', handleMouseMove);
    node.addEventListener('mouseleave', reset);

    return () => {
      node.removeEventListener('mousemove', handleMouseMove);
      node.removeEventListener('mouseleave', reset);
    };
  }, []);

  return ref;
}
