'use client';

import MissionBlock from './MissionBlock';
import TeamBlock from './TeamBlock';
import RoadmapBlock from './RoadmapBlock';
import CultureBlock from './CultureBlock';
import CtaBlock from './CtaBlock';

export default function AboutPage(props: any) {
  return (
    <div className="relative bg-[#f8fbff] text-black w-full overflow-hidden">
      {/* Decorative Top SVG */}
      <svg
        viewBox="0 0 1440 320"
        className="absolute top-0 left-0 w-full h-[300px] text-[#e6f1ff] pointer-events-none z-0"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96V0H0Z"
        />
      </svg>

      <div className="relative z-10 w-full">
        {/* Mission: capped for readability */}
        <section className="pt-40 pb-32 bg-white rounded-2xl shadow-sm">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <MissionBlock {...props} />
          </div>
        </section>

        {/* Team: wide grid layout */}
        <section className="pt-32 pb-24 bg-[#f8fbff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <TeamBlock {...props} />
          </div>
        </section>

        {/* Roadmap: full-frame feel with wave exit */}
        <section className="pt-40 pb-40 bg-[#ecfdf5] rounded-2xl shadow-sm relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <RoadmapBlock {...props} />
          </div>
          <svg
            viewBox="0 0 1440 150"
            className="absolute bottom-0 left-0 w-full h-20 text-[#f8fbff] z-0"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,64L60,80C120,96,240,128,360,133.3C480,139,600,117,720,122.7C840,128,960,160,1080,176C1200,192,1320,192,1380,176L1440,160V320H0Z" />
          </svg>
        </section>

        {/* Culture: mid-width for clarity and focus */}
        <section className="pt-40 pb-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <CultureBlock {...props} />
          </div>
        </section>

        {/* CTA: slightly wider than usual */}
        <section className="pt-40 pb-40 bg-[#f0f9ff] rounded-2xl shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <CtaBlock {...props} />
          </div>
        </section>
      </div>
    </div>
  );
}
