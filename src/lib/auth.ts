// src/lib/auth.ts

/**
 * isAuthenticated()
 * Checks for a mock auth token in localStorage (placeholder logic).
 */
export function isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('token');
  }
  
  /**
   * getUser()
   * Returns a mock user object — replace with real auth logic.
   */
  export function getUser(): { name: string } | null {
    if (!isAuthenticated()) return null;
    return { name: 'Founder' };
  }
  