import React from 'react';
import { TICKET_CONTENT, STRIPE_PAYMENT_LINKS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | OUSAC 2026',
  description:
    'Register for the 2nd annual OUSAC Conference on March 14, 2026 at the University of Toronto.',
};

export default function Register() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Page Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="text-ousac-purple mb-2 block text-xs font-bold uppercase tracking-widest">
            Registration
          </span>
          <h1 className="font-display text-ousac-black mb-6 text-4xl font-bold sm:text-5xl">
            2026 OUSAC Conference Registration
          </h1>
          <div className="rounded-xl border border-blue-200 bg-white p-8 text-left shadow-sm">
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              Please fill out this form to register for the 2nd annual OUSAC
              Conference! The conference will take place on{' '}
              <strong>Saturday, March 14, 2026 from 9 AM - 5 PM</strong> at the{' '}
              <strong>University of Toronto</strong>.
            </p>
            <p className="mb-4 text-gray-600">
              There will be a series of invited talks, a panel discussion,
              student presentations, and data challenge showcases. Registration
              is limited.
            </p>
            <p className="mb-4 text-gray-600">
              Questions and suggestions can be sent to{' '}
              <a
                href="mailto:info.ousac@gmail.com"
                className="text-ousac-blue font-semibold hover:underline"
              >
                info.ousac@gmail.com
              </a>
              .
            </p>
            <div className="rounded-lg bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">
                ⏰ The deadline for in-person registration is{' '}
                <strong>Wednesday, March 11 at 11:59 PM ET</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Ticket Selection Section */}
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-8 text-center text-3xl font-bold text-gray-900">
            Select Your Ticket
          </h2>

          {/* Ticket Cards Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Professional Ticket Card */}
            <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all duration-300 hover:border-ousac-blue hover:shadow-xl">
              <div className="bg-gray-50 p-6 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Professional Ticket
                </p>
                <p className="text-5xl font-bold text-ousac-blue">
                  $10 <span className="text-lg text-gray-500">CAD</span>
                </p>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-3">
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
                <a
                  href={STRIPE_PAYMENT_LINKS.regularTicket}
                  className="block w-full rounded-lg bg-ousac-blue py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-ousac-blue/90 hover:shadow-md"
                >
                  Register as Professional
                </a>
              </div>
            </div>

            {/* Student Ticket Card */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-ousac-gold bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-4 right-4 z-10 rounded-full bg-ousac-gold px-4 py-1.5">
                <span className="text-xs font-bold uppercase text-white">
                  50% Off
                </span>
              </div>
              <div className="bg-gradient-to-br from-ousac-gold/10 to-ousac-gold/5 p-6 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Student Ticket
                </p>
                <p className="text-5xl font-bold text-ousac-blue">
                  $5 <span className="text-lg text-gray-500">CAD</span>
                </p>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-3">
                  {TICKET_CONTENT.studentTicket.features.map((feature, idx) => (
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
                <a
                  href={STRIPE_PAYMENT_LINKS.studentTicket}
                  className="block w-full rounded-lg bg-ousac-blue py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-ousac-blue/90 hover:shadow-md"
                >
                  Register as Student
                </a>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="rounded-xl border border-blue-200 bg-white p-6 text-center">
            <p className="text-sm text-gray-600">
              After clicking your ticket type, you'll be redirected to a secure
              checkout page where you'll provide your information and complete
              registration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
