'use client';

import { useState } from 'react';

export default function PricingToggle({ isAnnual, setIsAnnual }: { isAnnual: boolean; setIsAnnual: (val: boolean) => void }) {

  return (
    <div className="inline-flex items-center gap-4 justify-center bg-gray-100 p-2 rounded-full shadow-inner">
      <button
        onClick={() => setIsAnnual(false)}
        className={`px-4 py-2 text-sm font-medium rounded-full transition ${
          !isAnnual ? 'bg-black text-white shadow' : 'text-gray-600 hover:bg-white/70'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setIsAnnual(true)}
        className={`px-4 py-2 text-sm font-medium rounded-full transition ${
          isAnnual ? 'bg-black text-white shadow' : 'text-gray-600 hover:bg-white/70'
        }`}
      >
        Annual <span className="ml-1 text-xs text-green-600 font-semibold">(Save 20%)</span>
      </button>
    </div>
  );
}
