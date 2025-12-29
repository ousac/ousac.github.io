'use client'; // Error components must be Client Components

import React, { useEffect } from 'react';
import { RefreshCcw, AlertCircle } from 'lucide-react';
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 rounded-full bg-red-50 p-4 dark:bg-red-900/20">
        <AlertCircle size={48} className="text-red-500 dark:text-red-400" />
      </div>
      <h2 className="font-display mb-3 text-3xl font-bold text-gray-900 dark:text-white">
        Something went wrong
      </h2>
      <p className="mb-8 max-w-md text-gray-600 dark:text-gray-400">
        We encountered an unexpected error while loading this page. Our team has
        been notified.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
        >
          <RefreshCcw size={18} />
          Try Again
        </button>
        <AnimatedShinyButton url="/" className="rounded-full !px-8 !py-3">
          Go Home
        </AnimatedShinyButton>
      </div>
    </div>
  );
}
