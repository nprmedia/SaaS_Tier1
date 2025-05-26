import { Metadata } from 'next';
import StickyHeader from '@/components/global/StickyHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy | Your SaaS Name',
  description: 'Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="dark:bg-white dark:text-black">
      <StickyHeader/>
      <main className="max-w-3xl pt-20 px-6 py-16 mx-auto text-sm leading-7 text-black">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: [Month Day, Year]</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us when signing up, including your name, email address, and payment information. We may also collect usage data such as IP addresses, browser type, and pages visited.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>
            Your data is used to provide and improve our services, process payments, communicate with you, and ensure platform security. We do not sell your personal information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">3. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">4. Cookies & Tracking</h2>
          <p>
            Our site uses cookies and similar technologies to improve user experience, analyze site traffic, and for remarketing purposes. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">5. Third-Party Services</h2>
          <p>
            We use third-party services like [e.g., Stripe, Google Analytics] to operate our business. These providers may have access to your personal data only to perform tasks on our behalf.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your data. If you wish to exercise these rights, please contact us at [email address].
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page and, if significant, notified via email.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@yourdomain.com" className="underline text-blue-600">support@yourdomain.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
