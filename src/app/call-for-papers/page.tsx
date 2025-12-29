import React from 'react';
import { AlertCircle, FileText, CheckCircle } from 'lucide-react';
import { GOOGLE_FORM_ABSTRACT } from '@/lib/constants';

/**
 * CallForPapers Component
 *
 * The destination for student researchers.
 * Includes submission rules, deadlines, and an embedded Google Form.
 */
export default function CallForPapers() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Banner */}
      <div className="bg-ousac-purple px-4 py-16">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="font-display mb-4 text-4xl font-bold">
            Call for Papers
          </h1>
          <p className="text-lg text-purple-100">
            Present your research at OUSAC 2026.
          </p>
        </div>
      </div>

      <div className="mx-auto -mt-8 max-w-5xl px-4">
        {/* Rules & Guidelines Card */}
        <div className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <div className="mb-8 flex items-start gap-4">
            <div className="text-ousac-purple rounded-full bg-purple-100 p-3">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display mb-2 text-2xl font-bold text-gray-900">
                Submission Guidelines
              </h2>
              <p className="text-gray-600">
                We invite students to submit abstracts for a 13-minute in-person
                presentation on sports analytics research.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Deadlines Section */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Important Dates
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Submission Due:</span>
                  <span className="font-bold text-gray-900">Feb 13, 2026</span>
                </li>
                <li className="flex justify-between">
                  <span>Decisions Released:</span>
                  <span className="font-bold text-gray-900">Feb 19, 2026</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-red-500 italic">
                * Late submissions will not be evaluated.
              </p>
            </div>

            {/* Requirements Section */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Requirements
              </h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-gray-600">
                <li>PDF Format Only (Max 10MB)</li>
                <li>Max 500 words (1 Page)</li>
                <li>Must be available to present in Toronto</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 
          Google Form Embed 
          Wrapped in a responsive container to handle the iframe's height gracefully on mobile.
        */}
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="border-b border-gray-200 bg-gray-100 px-6 py-4">
            <h3 className="font-bold text-gray-700">Submission Form</h3>
          </div>
          <div className="relative h-[1200px] w-full md:h-[800px]">
            <iframe
              src={GOOGLE_FORM_ABSTRACT}
              className="absolute inset-0 h-full w-full border-0"
              title="Abstract Submission"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
