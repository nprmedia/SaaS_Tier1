// src/app/(legal)/terms/page.tsx
export default function TermsOfServicePage() {
    return (
      <section className="px-6 py-20 md:px-12 lg:px-32 max-w-4xl mx-auto space-y-10 text-sm text-gray-700">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-2 text-gray-500">Effective Date: April 2025</p>
        </div>
  
        <div className="space-y-6">
          <p>
            By using our website or services, you agree to the following terms. Please read them carefully.
          </p>
  
          <div>
            <h2 className="text-lg font-semibold">1. Use of Services</h2>
            <p>You may use our services only for lawful purposes. Unauthorized use, reverse engineering, or abuse may result in suspension.</p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold">2. Payment & Billing</h2>
            <p>All pricing and billing terms are provided before engagement. Late payments may result in service delays.</p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold">3. Intellectual Property</h2>
            <p>All content, code, and designs are owned by NPR Media unless otherwise agreed in writing.</p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold">4. Liability</h2>
            <p>NPR Media is not liable for indirect or consequential damages arising from use of the site or services.</p>
          </div>
  
          <p className="text-xs text-gray-400">Questions? Email us at team@npr-media.com.</p>
        </div>
      </section>
    );
  }
  