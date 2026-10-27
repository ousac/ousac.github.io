import Link from 'next/link';
import type { Metadata } from 'next';
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button';
import { CURRENT_CONFERENCE, SITE_CONTENT } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

const { year, date, location } = CURRENT_CONFERENCE;

export const metadata: Metadata = pageMetadata({
  title: `OUSAC ${year} — Save the Date`,
  description: `OUSAC ${year} takes place ${date} in ${location}. Registration opening soon.`,
  path: '/register',
});

export default function RegisterPage() {
  return (
    <div className="bg-linear-to-b from-white to-blue-50 pt-20 pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-xl shadow-blue-900/5 sm:p-12">
          <span className="text-ousac-blue mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            Registration Opening Soon
          </span>

          <h1 className="font-display text-ousac-black mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Save the Date: {date}
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-700">
            OUSAC {year} is heading to {location}. Follow us on Instagram
            @ousacsportsanalytics for registration updates.
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Questions can still be sent to{' '}
            <a
              href="mailto:info.ousac@gmail.com"
              className="text-ousac-blue font-semibold hover:underline"
            >
              info.ousac@gmail.com
            </a>
            .
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AnimatedShinyButton url={SITE_CONTENT.socials.instagram}>
              Follow on Instagram
            </AnimatedShinyButton>
            <Link
              href="/past-conferences"
              className="text-ousac-black hover:border-ousac-blue hover:text-ousac-blue inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-3 text-sm font-bold tracking-wider uppercase transition-colors hover:bg-gray-50"
            >
              Past Conferences
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
