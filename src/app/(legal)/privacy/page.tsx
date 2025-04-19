// src/app/(legal)/privacy/page.tsx
export default function PrivacyPolicyPage() {
    return (
      <section className="px-6 py-20 md:px-12 lg:px-32 max-w-4xl mx-auto space-y-10 text-sm text-gray-700">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-gray-500">Effective Date: April 2025</p>
        </div>
  
        <div className="space-y-6">
          <p>
            NPR Media is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your personal data.
          </p>
  
          <div>
            <h2 className="text-lg font-semibold">1. Information We Collect</h2>
            <p>We collect information you provide directly (like email), technical data (like browser/device), and usage data (like page interactions).</p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold">2. How We Use Your Information</h2>
            <p>Your data helps us operate, improve our services, and communicate effectively with you.</p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold">3. Data Sharing & Retention</h2>
            <p>We never sell your data. We only share with trusted tools used to run our platform. We retain data only as long as necessary.</p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold">4. Your Rights</h2>
            <p>You can request access, correction, or deletion of your data at any time by contacting us at team@npr-media.com.</p>
          </div>
  
          <p className="text-xs text-gray-400">Questions? Reach us at team@npr-media.com.</p>
        </div>
      </section>
    );
  }
  