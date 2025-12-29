'use client';

import React from 'react';
import Link from 'next/link';
import FuzzyText from '@/components/FuzzyText';

export default function NotFound() {
  const enableHover = true;
  const hoverIntensity = 0.5;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <div className="mb-8">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
          fontSize="clamp(6rem, 20vw, 15rem)"
          fontWeight={900}
          color="#fff"
        >
          404
        </FuzzyText>
      </div>

      <h2 className="font-display mb-6 text-2xl font-bold text-white md:text-3xl">
        Page Not Found
      </h2>
      <p className="mx-auto mb-10 max-w-md text-gray-400">
        The play you&apos;re looking for didn&apos;t make the highlight reel.
      </p>

      <Link
        href="/"
        className="bg-ousac-gold text-ousac-black inline-flex items-center justify-center rounded px-8 py-3 text-sm font-bold tracking-wider uppercase transition-transform hover:scale-105"
      >
        Return Home
      </Link>
    </div>
  );
}
