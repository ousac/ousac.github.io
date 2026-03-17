import React from 'react';
import Image from 'next/image';
import { SITE_CONTENT } from '@/lib/constants';

export const metadata = {
  title: 'Data Challenge Finalists | OUSAC',
  description:
    'Highlights from the MLSE x UofTSPAN Data Challenge at OUSAC 2026.',
};

export default function DataChallengePage() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Logos Section */}
        <div className="mb-10 flex flex-col items-center justify-center gap-6 sm:mb-12 sm:flex-row sm:gap-8">
          <Image
            src="/img/sponsors/mlse_logo.png"
            alt="MLSE Sport Performance Lab"
            width={160}
            height={80}
            className="object-contain"
          />
          <span className="hidden text-3xl text-gray-300 sm:block">×</span>
          <Image
            src="/img/clubs/utspan_logo.webp"
            alt="UofTSPAN"
            width={140}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Header Section */}
        <h2 className="text-sm leading-7 font-semibold tracking-wide text-indigo-600 uppercase sm:text-base">
          Data Challenge 2026
        </h2>
        <h1 className="font-display mt-2 mb-6 text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:mt-4 sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
          The Finalists Present
        </h1>

        <p className="mb-10 px-2 text-lg leading-relaxed text-gray-600 sm:mb-12 sm:px-0 sm:text-xl sm:leading-8">
          The MLSE x UofTSPAN Data Challenge submission period has ended. Thank
          you to everyone who participated in analyzing our markerless motion
          capture data for basketball shot outcomes!
        </p>

        {/* Simple Call to Action Container */}
        <div className="mb-10 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:mb-12 sm:p-12">
          <h3 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl">
            OUSAC 2026 is over!
          </h3>
          <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-gray-600 sm:mb-8 sm:text-base">
            Thanks to everyone who joined us to watch the finalists present
            live. Follow us on Instagram @ousacsportsanalytics to stay tuned for
            OUSAC 2027.
          </p>

          <a
            href={SITE_CONTENT.socials.instagram}
            className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
          >
            Follow @ousacsportsanalytics
          </a>
          <p className="mt-4 px-2 text-xs text-gray-500 sm:px-0 sm:text-sm">
            We&apos;ll post OUSAC 2027 updates there first.
          </p>
        </div>
      </div>
    </div>
  );
}
