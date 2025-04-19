// src/app/(dashboard)/settings/page.tsx
'use client';

export default function SettingsPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
        <p className="mt-2 text-sm text-gray-600">
          Manage your profile, email preferences, and connected tools.
        </p>
      </div>

      {/* Profile Settings */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">Profile</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-gray-700">
            Full Name
            <input
              type="text"
              placeholder="Jane Doe"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </label>

          <label className="text-sm font-medium text-gray-700">
            Email Address
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </label>
        </div>

        <button className="mt-6 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition">
          Save Changes
        </button>
      </div>

      {/* Notification Preferences */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />
          Email me updates about new features
        </label>
        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />
          Email me about service outages or downtime
        </label>
      </div>
    </section>
  );
}
