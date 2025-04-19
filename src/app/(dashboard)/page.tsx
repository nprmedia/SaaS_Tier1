// src/app/(dashboard)/page.tsx
'use client';

import { useEffect, useState } from 'react';

export default function DashboardHome() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Simulate user fetch (replace with real auth/user data)
    setUser({ name: 'Founder' });
  }, []);

  return (
    <section className="space-y-10">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back{user ? `, ${user.name}` : ''} 👋</h1>
        <p className="mt-2 text-sm text-gray-600">
          This is your growth dashboard. Use it to track, manage, and evolve your digital system.
        </p>
      </div>

      {/* Quickstart / CTA Card */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Quickstart Actions</h2>
        <p className="mt-1 text-sm text-gray-600">Jump into your next action step:</p>
        <ul className="mt-4 list-disc list-inside text-sm text-gray-700">
          <li>View performance analytics</li>
          <li>Update brand assets or copy</li>
          <li>Launch a new service page</li>
        </ul>
      </div>

      {/* Placeholder Analytics (future-ready) */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-500">
        KPI widgets coming soon. This space will display real-time engagement, traffic, and lead performance.
      </div>
    </section>
  );
}
