// src/app/(dashboard)/analytics/page.tsx
'use client';

export default function AnalyticsPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Site Analytics</h1>
        <p className="mt-2 text-sm text-gray-600">
          Track key performance indicators across traffic, engagement, and conversions.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {['Traffic', 'Engagement', 'Leads'].map((metric) => (
          <div
            key={metric}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-800">{metric}</h2>
            <p className="mt-2 text-sm text-gray-500">Analytics integration coming soon</p>
            <div className="mt-4 h-20 rounded-lg bg-gray-100" />
          </div>
        ))}
      </div>

      {/* Timeline Section Placeholder */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-800">Traffic Over Time</h2>
        <div className="mt-4 h-48 w-full rounded-lg bg-gray-100" />
        <p className="mt-2 text-xs text-gray-400">Graph will render daily visitors (last 30 days).</p>
      </div>
    </section>
  );
}
