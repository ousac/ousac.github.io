import Link from 'next/link';
import type { Metadata } from 'next';
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button';
import { SITE_CONTENT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'OUSAC 2026 Is Over | OUSAC',
  description:
    'OUSAC 2026 has wrapped. Follow @ousacsportsanalytics on Instagram for OUSAC 2027 updates.',
};

export default function RegisterPage() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 pt-20 pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-xl shadow-blue-900/5 sm:p-12">
          <span className="text-ousac-blue mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            Conference Update
          </span>

          <h1 className="font-display text-ousac-black mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            OUSAC 2026 is over!
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-700">
            Thanks to everyone who joined us at the University of Toronto on
            March 14, 2026. Follow us on Instagram @ousacsportsanalytics to stay
            tuned for OUSAC 2027.
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
