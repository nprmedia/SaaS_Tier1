'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type SessionContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hydrated, setHydrated] = useState(false); // ✅ fix for reactivity

  useEffect(() => {
    const stored = localStorage.getItem('demo_login');
    setIsLoggedIn(stored === 'true');
    setHydrated(true); // ✅ only render once fully synced
    console.log('✅ Session loaded:', stored);
  }, []);

  const login = () => {
    localStorage.setItem('demo_login', 'true');
    setIsLoggedIn(true);
    console.log('🟢 login triggered');
  };

  const logout = () => {
    localStorage.removeItem('demo_login');
    setIsLoggedIn(false);
    console.log('🔴 logout triggered');
  };

  if (!hydrated) return null; // ✅ Prevent mismatched initial render

  return (
    <SessionContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}
