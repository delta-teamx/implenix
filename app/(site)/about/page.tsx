import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Implenix | The 10-Person AI Calling Team',
  description:
    'Meet the Implenix team — 10 specialists building AI receptionist and automated calling infrastructure for local businesses.',
  path: '/about',
});

const PLACEHOLDER_TEAM = Array.from({ length: 10 }, (_, i) => ({
  initials: `T${i + 1}`,
  name: 'PLACEHOLDER NAME',
  role: 'PLACEHOLDER ROLE',
  bio: 'PLACEHOLDER BIO — replace with one-line bio.',
}));

export default function AboutPage() {
  return (
    <>
      <section className="grid-bg">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
            [ about // implenix ]
          </span>
          <h1 className="font-heading text-4xl md:text-6xl mt-4 leading-tight max-w-4xl">
            The 10 people building the AI calling infrastructure for local
            business
          </h1>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/20">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-[1fr_2fr] gap-10">
          <h2 className="font-heading text-2xl md:text-3xl">Mission</h2>
          <p className="font-body text-white/80 leading-relaxed text-lg max-w-2xl">
            Local businesses lose deals every day to a missed phone call. We
            build, deploy, and operate the AI voice infrastructure that
            answers, qualifies, and books — every call, every hour, without
            exception. We are 10 specialists. We do one thing. We do it well.
          </p>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20">
          <h2 className="font-heading text-2xl md:text-3xl">The team</h2>
          {/* REPLACE WITH REAL TEAM PHOTOS AND BIOS */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PLACEHOLDER_TEAM.map((member, idx) => (
              <div
                key={idx}
                className="bg-black border border-brand-purple/20 p-5 flex flex-col gap-3"
              >
                <div className="w-14 h-14 bg-brand-purple text-white flex items-center justify-center font-heading text-xl rounded-sm">
                  {member.initials}
                </div>
                <div>
                  <p className="font-heading text-white">{member.name}</p>
                  <p className="font-body text-xs text-brand-cyan uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
