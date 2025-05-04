// 📁 /src/hooks/useIdleShimmer.tsx
import { useReducedMotion } from 'framer-motion';

export function useIdleShimmer(): React.ReactNode | null {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 animate-pulse bg-gradient-to-tr from-primary/5 to-muted/5" />
  );
}
