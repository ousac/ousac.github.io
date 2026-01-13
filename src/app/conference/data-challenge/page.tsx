'use client';

import React from 'react';
import Image from 'next/image';
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button';
import { Trophy, Database, Users, ExternalLink } from 'lucide-react';

// Local constants for this page
const CHALLENGE_DATA = {
  title: 'MLSE UofTSPAN Data Challenge 2026',
  host: 'MLSE Sport Performance Lab',
  kaggleLink:
    'https://www.kaggle.com/competitions/spl-utspan-data-challenge-2026/overview',
  description: `Welcome to the 2026 edition of the University of Toronto Sports Analytics Group Data Challenge in partnership with the Sport Performance Lab from Maple Leaf Sports & Entertainment (MLSE)!`,
  details: {
    goal: 'Build a model to predict basketball shot outcome (angle, depth, and left/right) values from biomechanical movement data.',
    data: 'Markerless motion capture data from 458 basketball free throws completed by 5 participants of varying experience levels.',
    keypoints:
      'X, Y, and Z position of 71 keypoints on the participant body for each trial.',
  },
  timeline: [
    { date: 'January 6, 2026', event: 'Competition Opens', completed: true },
    { date: 'February 21, 2026', event: 'Submissions Close' },
    { date: 'February 28, 2026', event: 'Finalists Announced' },
    {
      date: 'March 14, 2026',
      event: 'Presentations at OUSAC',
      highlight: true,
    },
  ],
};

export default function DataChallengePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 
        HERO SECTION 
        - Reduced padding for mobile (py-12 vs py-24)
        - Added Logos
        - Improved visual hierarchy
      */}
      <div className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
                <span className="mr-2 flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                Live Competition
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {CHALLENGE_DATA.title}
            </h1>

            {/* Logos */}
            <div className="mt-8 mb-6 flex items-center justify-center gap-6 opacity-90 grayscale transition-all hover:grayscale-0 sm:gap-8">
              <div className="relative h-10 w-28 sm:h-14 sm:w-36">
                <Image
                  src="/img/mlse_logo.png"
                  alt="MLSE Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="relative h-10 w-28 sm:h-14 sm:w-36">
                <Image
                  src="/img/universities/university_of_toronto.png"
                  alt="University of Toronto Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Analyze markerless motion capture data from the{' '}
              <span className="font-semibold text-gray-900">
                {CHALLENGE_DATA.host}
              </span>
              . Compete for a chance to present your work to industry
              professionals.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6">
              <a
                href={CHALLENGE_DATA.kaggleLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedShinyButton className="rounded-full px-8 py-3 text-white shadow-lg transition-all hover:bg-blue-700">
                  <span className="flex items-center gap-2">
                    Enter Competition
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </AnimatedShinyButton>
              </a>
              <a
                href="#details"
                className="text-sm leading-6 font-semibold text-gray-900 hover:text-blue-600"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Grid - Better Cards */}
      <div
        id="details"
        className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Goal */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="font-display mb-2 text-xl font-bold text-gray-900">
              The Goal
            </h3>
            <p className="leading-relaxed text-gray-600">
              {CHALLENGE_DATA.details.goal}
            </p>
          </div>

          {/* Data */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="font-display mb-2 text-xl font-bold text-gray-900">
              The Data
            </h3>
            <p className="leading-relaxed text-gray-600">
              {CHALLENGE_DATA.details.data}
            </p>
          </div>

          {/* Eligibility */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-display mb-2 text-xl font-bold text-gray-900">
              Eligibility
            </h3>
            <p className="leading-relaxed text-gray-600">
              Open to students at Canadian universities. Register with your
              university email address.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section - Clean Design */}
      <div className="bg-gray-50/50 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Competition Timeline
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Key dates for submissions and presentations.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-16">
            <div className="relative space-y-8 pl-8 before:absolute before:top-2 before:left-3.5 before:h-[calc(100%-2rem)] before:w-0.5 before:bg-gray-200">
              {CHALLENGE_DATA.timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Dot */}
                  <span
                    className={`absolute top-1.5 -left-[29px] flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-white ${
                      item.highlight
                        ? 'bg-blue-600'
                        : item.completed
                          ? 'bg-gray-900'
                          : 'bg-gray-300'
                    }`}
                  >
                    {item.completed && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </span>

                  {/* Content */}
                  <div
                    className={`${
                      item.highlight
                        ? 'rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5'
                        : 'py-1.5'
                    }`}
                  >
                    <time className="mb-1 block text-sm leading-6 font-medium text-gray-500">
                      {item.date}
                    </time>
                    <h3
                      className={`font-display text-lg font-bold ${item.highlight ? 'text-blue-600' : 'text-gray-900'}`}
                    >
                      {item.event}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final Call to Action - Consistent with Home Page style */}
      <div className="bg-white py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900 px-6 py-12 shadow-2xl sm:px-16 sm:py-16 md:pt-24 lg:px-24 lg:pt-24">
            {/* Background decoration */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#gradient-id)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="gradient-id">
                  <stop stopColor="#004aad" />
                  <stop offset={1} stopColor="#6740b4" />
                </radialGradient>
              </defs>
            </svg>

            <div className="mx-auto max-w-md text-center lg:max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to compete?
                <br />
                Download the data today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Top 3 submissions will be invited to present their improved
                models to MLSE and academic experts at the conference.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-y-4 sm:mt-8 sm:flex-row sm:gap-x-6">
                <a
                  href={CHALLENGE_DATA.kaggleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Go to Kaggle
                </a>
                <a
                  href="/conference/schedule"
                  className="text-sm leading-6 font-semibold text-white hover:text-gray-200"
                >
                  View Conference Schedule <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
