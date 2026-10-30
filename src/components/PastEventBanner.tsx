import React from 'react';
import Link from 'next/link';
import { CURRENT_CONFERENCE } from '@/lib/constants';

interface PastEventBannerProps {
  pastYear: number;
  label: string;
}

/**
 * Notice for pages still showing a previous year's content.
 * Remove from a page once its content is updated for the current conference.
 */
export default function PastEventBanner({
  pastYear,
  label,
}: PastEventBannerProps) {
  return (
    <p className="mx-auto mb-8 max-w-xl rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-center text-sm text-gray-700">
      This is the <strong>OUSAC {pastYear}</strong> {label}. OUSAC{' '}
      {CURRENT_CONFERENCE.year} details coming soon.{' '}
      <Link
        href="/register"
        className="text-ousac-blue font-semibold whitespace-nowrap hover:underline"
      >
        Save the date &rarr;
      </Link>
    </p>
  );
}
