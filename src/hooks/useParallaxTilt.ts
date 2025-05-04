// 📁 /src/hooks/useParallaxTilt.ts
import { useEffect } from 'react';
import { useMotionValue } from 'framer-motion';

export function useParallaxTilt(containerRef: React.RefObject<HTMLElement>) {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const scrollVelocity = useMotionValue(0);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      scrollVelocity.set(Math.abs(currentY - lastY));
      lastY = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollVelocity]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      const intensity = Math.min(1 + scrollVelocity.get() * 0.01, 2);
      tiltX.set(y * 10 * intensity);
      tiltY.set(-x * 10 * intensity);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [tiltX, tiltY, containerRef, scrollVelocity]);

  return { tiltX, tiltY };
}
