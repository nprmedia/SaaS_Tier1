import { Reveal } from './Reveal';

export default function MissionBlock({
  missionHeadline,
  missionSubheadline,
  missionPrinciples,
  missionBannerText
}: any) {
  return (
    <Reveal>
      <div className="max-w-3xl mx-auto text-center space-y-10 px-2 sm:px-0">
        {/* Big bold headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-black">
          {missionHeadline}
        </h1>

        {/* Subheadline with clarity and space */}
        <p className="text-lg sm:text-xl text-[#444] font-medium leading-relaxed">
          {missionSubheadline}
        </p>

        {/* Framed principles section */}
        <div className="mt-10 bg-[#f0f9ff] border border-[#dbeafe] rounded-xl px-6 py-6 space-y-4 text-left shadow-sm">
          {missionPrinciples.map((item: string, idx: number) => (
            <div
              key={idx}
              className="relative pl-6 text-base text-black leading-relaxed"
            >
              <span className="absolute left-0 top-1 text-blue-500">✔</span>
              {item}
            </div>
          ))}
        </div>

        {/* Microtrust banner */}
        <p className="text-sm text-neutral-500 italic mt-6">{missionBannerText}</p>
      </div>
    </Reveal>
  );
}
