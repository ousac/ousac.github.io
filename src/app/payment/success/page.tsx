import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_CONTENT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Conference Update | OUSAC',
  description:
    'OUSAC 2026 has wrapped. Follow @ousacsportsanalytics for updates on OUSAC 2027.',
  robots: 'noindex, nofollow',
};

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-blue-100 bg-white p-10 text-center shadow-xl shadow-blue-900/5">
          <span className="text-ousac-blue mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            Conference Update
          </span>

          <h1 className="font-display text-ousac-blue mb-4 text-4xl font-bold sm:text-5xl">
            OUSAC 2026 is over!
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600">
            Follow us on Instagram @ousacsportsanalytics to stay tuned for OUSAC
            2027.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={SITE_CONTENT.socials.instagram}
              className="bg-ousac-blue hover:bg-ousac-blue/90 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors"
            >
              Follow on Instagram
            </a>
            <Link
              href="/conference/schedule"
              className="text-ousac-blue hover:border-ousac-blue inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-3 text-sm font-bold tracking-wider uppercase transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
