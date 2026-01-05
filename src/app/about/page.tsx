import React from 'react';
import { TICKET_CONTENT, STRIPE_PAYMENT_LINKS } from '@/lib/constants';

export default function About() {
  return (
    <>
      <div className="bg-white pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-ousac-blue mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
              About OUSAC
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Established in 2024, the Ontario Universities Sports Analytics
              Coalition (OUSAC) is a consortium of sports analytics clubs from
              post-secondary institutions across Ontario.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-ousac-black mb-6 text-3xl font-bold">
                  Our Objectives
                </h2>
                <ul className="space-y-4">
                  {[
                    'Facilitate collaboration on projects and teams for hackathons and competitions',
                    'Share resources for tutorials and workshops to enhance our breadth of data science applications to sport',
                    'Attend seminars from respected members of the sports analytics community',
                    'Present research at and attend conferences',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="bg-ousac-gold flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                <h2 className="font-display text-ousac-black mb-6 text-3xl font-bold">
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  Organizing this conference is one of the ways that we can
                  fulfill these objectives, under our vision to jointly grow the
                  quantitative analysis and applications of analytics to sports
                  in the province.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Purchase Section */}
      <div
        id="tickets"
        className="bg-gradient-to-b from-white to-blue-50 pt-24 pb-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-ousac-purple mb-2 block text-xs font-bold tracking-widest uppercase">
              Registration
            </span>
            <h2 className="font-display text-ousac-black mb-4 text-4xl font-bold sm:text-5xl">
              {TICKET_CONTENT.section.title}
            </h2>
            <p className="text-xl text-gray-600">
              {TICKET_CONTENT.section.subtitle}
            </p>
            <p className="mt-4 text-gray-500">
              {TICKET_CONTENT.section.description}
            </p>
          </div>

          {/* Pricing Information Card */}
          <div className="mx-auto mb-12 max-w-3xl rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
            <div className="mb-8 text-center">
              <h3 className="font-display mb-6 text-3xl font-bold text-gray-900">
                Ticket Pricing
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Regular Price */}
                <div className="rounded-xl bg-gray-50 p-6">
                  <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    Regular Ticket
                  </p>
                  <p className="text-ousac-blue text-4xl font-bold">
                    $10 <span className="text-lg text-gray-500">CAD</span>
                  </p>
                </div>

                {/* Student Price */}
                <div className="from-ousac-gold/10 to-ousac-gold/5 relative overflow-hidden rounded-xl bg-gradient-to-br p-6">
                  <div className="bg-ousac-gold absolute top-2 right-2 rounded-full px-3 py-1">
                    <span className="text-xs font-bold text-white uppercase">
                      Student
                    </span>
                  </div>
                  <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    Student Ticket
                  </p>
                  <p className="text-ousac-blue text-4xl font-bold">
                    $5 <span className="text-lg text-gray-500">CAD</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8">
              <p className="mb-4 text-center text-sm font-semibold tracking-wider text-gray-500 uppercase">
                All tickets include
              </p>
              <ul className="grid gap-3 md:grid-cols-2">
                {TICKET_CONTENT.regularTicket.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href={STRIPE_PAYMENT_LINKS.regularTicket}
                className="bg-ousac-blue hover:bg-ousac-blue/90 inline-block w-full rounded-lg px-12 py-4 text-lg font-bold tracking-wider text-white uppercase transition-all hover:shadow-lg md:w-auto"
              >
                Get Tickets
              </a>
              <p className="mt-4 text-xs text-gray-500">
                Choose your ticket type at checkout
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-blue-200 bg-white p-6 text-center">
            <p className="text-sm text-gray-600">
              Questions about registration?{' '}
              <a
                href="mailto:contact@ousac.ca"
                className="text-ousac-blue font-semibold hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
