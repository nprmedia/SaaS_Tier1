import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12 bg-gray-50 text-neutral-900 antialiased">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
        {children}
      </div>
    </main>
  );
}
