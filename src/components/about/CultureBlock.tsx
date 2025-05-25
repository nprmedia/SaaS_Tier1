import { Reveal } from './Reveal';

export default function CultureBlock({ cultureHeadline, cultureValues }: any) {
  return (
    <Reveal>
      <section className="space-y-14 text-center">
        {/* Headline */}
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{cultureHeadline}</h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            These aren’t just posters in our Notion. These are the filters we hire through,
            design by, and gut-check decisions against.
          </p>
        </div>

        {/* Value badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cultureValues.map((v: any, i: number) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-xl shadow-sm px-6 py-8 flex flex-col items-center text-center space-y-4 hover:shadow-md transition"
            >
              <div className="text-3xl">{v.emoji}</div>
              <p className="font-semibold text-lg text-black">{v.title}</p>
              <p className="text-sm text-neutral-600 leading-normal">
                {/* Optional value meaning layer */}
                {getDefaultMeaning(v.title)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

// Optional inline meanings — customize or remove if you prefer all-CMS
function getDefaultMeaning(title: string): string {
  switch (title) {
    case 'Customer-Obsessed':
      return 'We don’t build for vanity. We build what unlocks customer outcomes.';
    case 'Automate the Boring Stuff':
      return 'Anything you do twice is a candidate for automation.';
    case 'Clarity > Complexity':
      return 'We choose simple, scalable solutions—even if they’re harder to build.';
    default:
      return 'We lead with principle, not process.';
  }
}
