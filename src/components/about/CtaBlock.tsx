import { Reveal } from './Reveal';

export default function CtaBlock({
  ctaHeadline,
  ctaPrimary,
  ctaSecondary,
  ctaProof,
  contactEmail
}: any) {
  return (
    <Reveal>
      <section className="text-center max-w-3xl mx-auto space-y-8 px-4">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {ctaHeadline}
        </h2>

        {/* Subtitle / conversion hook */}
        <p className="text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
          You’ll get a guided walkthrough of the platform, how it fits your stack, and whether we’re
          the right fit — no pressure, no sales script.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="#"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-neutral-900 transition text-sm font-medium"
          >
            {ctaPrimary}
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="bg-white border border-black text-black px-6 py-3 rounded-md hover:bg-neutral-100 transition text-sm font-medium"
          >
            {ctaSecondary}
          </a>
        </div>

        {/* Microproof */}
        <p className="text-sm text-neutral-500 mt-4">{ctaProof}</p>

        {/* Contact backup */}
        <p className="text-xs text-neutral-500">
          Prefer direct email?{' '}
          <a href={`mailto:${contactEmail}`} className="underline text-blue-600">
            {contactEmail}
          </a>
        </p>
      </section>
    </Reveal>
  );
}
