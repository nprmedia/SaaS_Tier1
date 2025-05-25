"use client";

import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white text-black px-4 py-16 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div>
          <h3 className="text-lg font-semibold mb-4">Authority Platform</h3>
          <p className="text-sm text-neutral-600">
            Built to help SaaS teams automate reporting and save time.
          </p>
          <p className="mt-4 text-xs text-neutral-400">© {new Date().getFullYear()} Authority Platform. All rights reserved.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Company</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Product</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/signup">Start Free Trial</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
