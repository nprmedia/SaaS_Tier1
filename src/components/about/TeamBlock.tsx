import { Reveal } from './Reveal';

export default function TeamBlock({ teamHeadline, teamMembers }: any) {
  return (
    <Reveal>
      <section className="space-y-16 text-center">
        {/* Headline */}
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{teamHeadline}</h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            We’re product people, not just startup founders. We’ve lived the chaos of scaling services
            and built this platform to solve the pain we personally experienced.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member: any, i: number) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-2xl shadow-md p-6 text-left flex flex-col h-full"
            >
              <div className="flex items-center gap-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover border border-neutral-300"
                />
                <div>
                  <p className="font-semibold text-lg text-black">
                    {member.name} <span className="text-sm">{member.emoji}</span>
                  </p>
                  <p className="text-sm text-neutral-500">{member.title}</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-sm text-neutral-700 leading-relaxed">
                <p className="italic">“{member.quote}”</p>
                <p className="text-xs text-neutral-500">{member.bio}</p>
              </div>

              {/* Socials */}
              <div className="mt-4 text-xs text-blue-600 underline flex gap-4">
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
