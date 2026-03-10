import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Data Challenge Finalists | OUSAC',
  description: 'Come see the MLSE UofTSPAN Data Challenge finalists present their work at OUSAC 2026.',
};

export default function DataChallengePage() {
  return (
    <div className="bg-white pt-20 pb-16 sm:pt-32 sm:pb-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Logos Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
          <Image
            src="/img/sponsors/mlse_logo.png"
            alt="MLSE Sport Performance Lab"
            width={160}
            height={80}
            className="object-contain"
          />
          <span className="text-gray-300 text-3xl hidden sm:block">×</span>
          <Image
            src="/img/clubs/utspan_logo.webp"
            alt="UofTSPAN"
            width={140}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Header Section */}
        <h2 className="text-sm sm:text-base font-semibold leading-7 text-indigo-600 tracking-wide uppercase">
          Data Challenge 2026
        </h2>
        <h1 className="mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 font-display mb-6 sm:mb-8 leading-tight">
          The Finalists Present
        </h1>
        
        <p className="text-lg sm:text-xl leading-relaxed sm:leading-8 text-gray-600 mb-10 sm:mb-12 px-2 sm:px-0">
          The MLSE x UofTSPAN Data Challenge submission period has ended. Thank you to everyone who participated in analyzing our markerless motion capture data for basketball shot outcomes!
        </p>

        {/* Simple Call to Action Container */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-12 mb-10 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Join the Audience
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
            We invite everyone to attend the OUSAC 2026 conference on March 14, 2026, to watch the top 3 finalists present their predictive models live to MLSE and academic experts.
          </p>
          
          <Link
            href="/register"
            className="inline-flex justify-center items-center rounded-full bg-indigo-600 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all w-full sm:w-auto"
          >
            Get Conference Tickets
          </Link>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 px-2 sm:px-0">
            Tickets grant access to the entire conference, including all presentations and keynotes.
          </p>
        </div>
      </div>
    </div>
  );
}
