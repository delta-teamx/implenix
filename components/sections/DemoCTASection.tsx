import { SectionHeader } from '@/components/common/SectionHeader';
import { BookingWidget } from '@/components/common/BookingWidget';
import { PhoneCTA } from '@/components/common/PhoneCTA';

export function DemoCTASection() {
  return (
    <section
      id="demo-form"
      className="bg-brand-dark border-t border-brand-purple/20"
    >
      <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="See it live"
            title="See the Implenix agent work in real time"
            description="Pick a 15-minute slot on the calendar — or call our agent right now and hear it run a live conversation. No form, no email."
          />
          <div className="mt-8 flex flex-col gap-3">
            <PhoneCTA ctaLocation="homepage-demo-phone" variant="primary" />
            <p className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
              ▸ Or pick a slot on the calendar →
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <BookingWidget
            ctaLocation="homepage-demo-calendar"
            height={680}
          />
        </div>
      </div>
    </section>
  );
}
