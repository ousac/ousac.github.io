'use client';

import React from 'react';
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button';
import { GOOGLE_FORM_ABSTRACT } from '@/lib/constants';
import { BadgeCheck, FileText, Mic, Trophy } from 'lucide-react';

export default function StudentCompetition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-ousac-black text-4xl font-bold tracking-tight sm:text-6xl">
              Student Competition
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The premier platform for student sports analytics research in
              Ontario. Submit your abstract, present to industry leaders, and
              showcase your work.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={GOOGLE_FORM_ABSTRACT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedShinyButton className="bg-ousac-blue rounded-full px-8 py-3 text-white shadow-lg transition-all hover:bg-blue-700">
                  Submit Abstract
                </AnimatedShinyButton>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Rules / Info */}
          <div>
            <h2 className="font-display text-ousac-black mb-6 text-3xl font-bold">
              Call for Abstracts
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Please fill out this form if you&apos;d like to provide a
                13-minute in-person presentation on your sports analytics
                research at the 2nd annual OUSAC Conference, taking place on
                Saturday, March 14, 2026 at the University of Toronto. This
                could include presenting on a submission from a past data
                competition or another research project you may have worked on.
                Outstanding presentations will be recognized at the conference.
              </p>
              <p>
                Presentation slots are limited, and abstract submissions are due
                February 13, 2026. Late submissions may not be evaluated. If
                selected as a presenter, you will be contacted by February 19
                with further details.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-blue-100 p-1 text-blue-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <span>
                    <strong>Submission:</strong> Submit a 1-page abstract
                    outlining your research question, methodology, and
                    preliminary results.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-purple-100 p-1 text-purple-600">
                    <Mic className="h-5 w-5" />
                  </div>
                  <span>
                    <strong>Presentation:</strong> Finalists will give a
                    13-minute presentation followed by Q&A with our industry
                    panel.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gold-100 mt-1 rounded-full p-1 text-yellow-600">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <span>
                    <strong>Awards:</strong> Outstanding presentations will be
                    recognized.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <span>
                    <strong>Publication:</strong> Winning papers may be featured
                    on the OUSAC website and partner publications.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bios Placeholder */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <h3 className="font-display mb-4 text-2xl font-bold text-gray-900">
              Selected Presenters
            </h3>
            <p className="mb-6 text-gray-500">
              Finalists will be announced in February 2026. Check back soon for
              student bios and project summaries.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex animate-pulse items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 opacity-60"
                >
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-3/4 rounded bg-gray-200"></div>
                    <div className="h-2 w-1/2 rounded bg-gray-200"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
