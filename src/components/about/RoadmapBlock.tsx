import { Reveal } from './Reveal';

export default function RoadmapBlock({
  roadmapHeadline,
  roadmapVision,
  roadmapBullets
}: any) {
  return (
    <Reveal>
      <section className="space-y-14 text-center">
        {/* Headline + Vision */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{roadmapHeadline}</h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            {roadmapVision} Our roadmap isn’t theoretical. It’s built with customer co-design, shipped
            in rapid cycles, and aligned to help your business move faster every quarter.
          </p>
        </div>

        {/* Bullet grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {roadmapBullets.map((item: string, i: number) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-xl p-5 text-left shadow-sm hover:shadow-md transition"
            >
              <p className="text-base text-black leading-snug">{item}</p>
            </div>
          ))}
        </div>

        {/* Optional CTA or microcopy for launch */}
        <p className="text-xs text-neutral-500 italic mt-8">
          Want something not listed here? Reach out — 80% of our roadmap comes from customer requests.
        </p>
      </section>
    </Reveal>
  );
}
