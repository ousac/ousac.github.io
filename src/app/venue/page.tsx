import React from 'react';
import { MapPin, Car, Train } from 'lucide-react';

/**
 * Venue Page Component
 *
 * Displays location logistics.
 * Layout: Split screen (50% info, 50% map) on desktop, stacked on mobile.
 */
export default function Venue() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid h-[calc(100vh-80px)] md:grid-cols-2">
        {/* Left Column: Logistics Info */}
        <div className="order-2 flex flex-col justify-center bg-gray-50 p-8 md:order-1 md:p-16">
          <h1 className="font-display mb-6 text-4xl font-bold text-gray-900">
            Venue & Logistics
          </h1>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="text-ousac-blue mt-1 h-fit rounded-full bg-blue-100 p-2">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  University of Toronto
                </h3>
                <p className="text-gray-600">
                  Bahen Centre for Information Technology
                </p>
                <p className="text-sm text-gray-500">
                  40 St. George St, Toronto, ON M5S 2E4
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 h-fit rounded-full bg-green-100 p-2 text-green-700">
                <Train className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Public Transit (TTC)
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>
                    <strong>Line 1:</strong> Queen&apos;s Park Station (10 min
                    walk)
                  </li>
                  <li>
                    <strong>Line 2:</strong> St. George Station (8 min walk)
                  </li>
                  <li>
                    <strong>Streetcar:</strong> 510 Spadina / 506 College
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 h-fit rounded-full bg-gray-200 p-2 text-gray-700">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Parking</h3>
                <p className="mb-2 text-gray-600">
                  Limited street parking available.
                </p>
                <div className="rounded border border-gray-200 bg-white p-3 text-sm text-gray-500">
                  <p className="font-semibold text-green-600">Green P Lot 58</p>
                  <p>203 College Street (Underground)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Google Map */}
        <div className="relative order-1 h-[300px] w-full bg-gray-200 md:order-2 md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.435738676228!2d-79.39869682348564!3d43.65989505198424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c7c8c3c277%3A0x6295240245084931!2sBahen%20Centre%20for%20Information%20Technology!5e0!3m2!1sen!2sca!4v1709420000000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="U of T Map"
            // CSS filters used to desaturate map to match site aesthetic
            className="absolute inset-0 opacity-90 contrast-125 grayscale transition-all duration-500 hover:grayscale-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
