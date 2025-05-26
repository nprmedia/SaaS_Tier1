import { Metadata } from 'next';
import StickyHeader from '@/components/global/StickyHeader';

export const metadata: Metadata = {
  title: 'Terms of Service | Your SaaS Name',
  description: 'Review the terms and conditions for using our platform.',
};

export default function TermsPage() {
  return (
    <div className="dark:bg-white dark:text-black">
      <StickyHeader/>
      <main className="max-w-3xl pt-20 px-6 py-16 mx-auto text-sm leading-7 text-black">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">Effective Date: [Month Day, Year]</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you may not use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">2. Use of the Service</h2>
          <p>
            You may use the service only for lawful purposes and in accordance with these terms. You are responsible for your conduct, account activity, and any data submitted through your account.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">3. Account Registration</h2>
          <p>
            You must provide accurate and complete information during registration and keep your account information up to date. You are responsible for safeguarding your account credentials.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">4. Subscriptions & Payments</h2>
          <p>
            Some features require a paid subscription. By subscribing, you agree to pay all applicable fees and authorize us to charge your payment method on a recurring basis unless cancelled.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">5. Cancellation & Refunds</h2>
          <p>
            You may cancel your subscription at any time. Refunds are not provided for partial billing periods unless required by law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property on the platform remain the property of [Your Company Name] or its licensors. You may not copy, distribute, or modify our content without permission.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
          <p>
            We may suspend or terminate your access to the service at any time for violating these terms or engaging in prohibited conduct.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">8. Disclaimers</h2>
          <p>
            The service is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of [Your State/Country], without regard to its conflict of law principles.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">11. Changes to These Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the service after changes means you accept the new terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">12. Contact</h2>
          <p>
            For any questions about these terms, please contact us at <a href="mailto:support@yourdomain.com" className="underline text-blue-600">support@yourdomain.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
