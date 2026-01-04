import React from 'react';
import Link from 'next/link';
import { CheckCircle, Calendar, MapPin, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Successful | OUSAC 2026',
  description: 'Your OUSAC 2026 Conference registration is confirmed.',
  robots: 'noindex, nofollow',
};

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="font-display text-ousac-blue mb-4 text-4xl font-bold sm:text-5xl">
            Payment Successful!
          </h1>
          <p className="mb-12 text-xl text-gray-600">
            Thank you for registering for OUSAC 2026. We're excited to see you
            there!
          </p>

          {/* Confirmation Details Card */}
          <div className="mb-12 rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-lg">
            <h2 className="font-display mb-6 text-2xl font-bold text-gray-900">
              What's Next?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-100 p-2 text-ousac-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Check Your Email
                  </p>
                  <p className="text-sm text-gray-600">
                    You'll receive a confirmation email from Stripe with your
                    receipt and ticket details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-100 p-2 text-ousac-blue">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Save the Date</p>
                  <p className="text-sm text-gray-600">
                    March 14, 2026 - Mark your calendar for an incredible day
                    of sports analytics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-100 p-2 text-ousac-blue">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Location Details
                  </p>
                  <p className="text-sm text-gray-600">
                    Bahen Centre, University of Toronto - 40 St. George St,
                    Toronto, ON
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/conference/schedule"
              className="inline-flex items-center justify-center rounded-lg bg-ousac-blue px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-ousac-blue/90"
            >
              View Schedule
            </Link>
            <Link
              href="/conference/speakers"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-ousac-blue transition-colors hover:border-ousac-blue"
            >
              Meet the Speakers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
