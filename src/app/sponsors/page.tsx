import React from 'react';
import Image from 'next/image';
import { SPONSORS } from '@/lib/constants';
import { Mail } from 'lucide-react';

/**
 * Sponsors Page Component
 *
 * Displays logos of conference sponsors organized by tier.
 * Tiers: Platinum (Large), Gold (Medium), Silver (Small), Partner (Featured).
 */
export default function Sponsors() {
  // Filter sponsors by tier for organized display
  const platinum = SPONSORS.filter((s) => s.tier === 'Platinum');
  const gold = SPONSORS.filter((s) => s.tier === 'Gold');
  const silver = SPONSORS.filter((s) => s.tier === 'Silver');
  const datasetPartner = SPONSORS.find((s) => s.tier === 'Dataset Partner');

  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      <div className="mx-auto mb-16 max-w-4xl px-6 text-center">
        <h1 className="font-display mb-4 text-4xl font-bold text-gray-900">
          Partners
        </h1>
        <p className="mx-auto max-w-lg text-gray-500">
          Proudly supported by organizations driving innovation in sports
          technology.
        </p>
      </div>

      <div className="mx-auto max-w-7xl space-y-20 px-6">
        {/* Platinum Tier Section */}
        {platinum.length > 0 && (
          <div className="text-center">
            <span className="mb-8 block text-xs font-bold tracking-widest text-gray-400 uppercase">
              Platinum
            </span>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {platinum.map((s) => (
                <div key={s.id} className="relative h-32 w-64 md:h-40 md:w-80">
                  <Image
                    src={s.logoPath}
                    alt={s.name}
                    fill
                    className="object-contain opacity-80 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gold Tier Section */}
        {gold.length > 0 && (
          <div className="text-center">
            <span className="mb-8 block text-xs font-bold tracking-widest text-gray-400 uppercase">
              Gold
            </span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
              {gold.map((s) => (
                <div key={s.id} className="relative h-20 w-48 md:h-24 md:w-56">
                  <Image
                    src={s.logoPath}
                    alt={s.name}
                    fill
                    className="object-contain opacity-80 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Silver Tier Section */}
        {silver.length > 0 && (
          <div className="text-center">
            <span className="mb-8 block text-xs font-bold tracking-widest text-gray-400 uppercase">
              Silver
            </span>
            <div className="mx-auto grid max-w-4xl grid-cols-2 items-center gap-8 md:grid-cols-4">
              {silver.map((s) => (
                <div
                  key={s.id}
                  className="relative flex h-14 w-32 justify-center md:h-16 md:w-40"
                >
                  <Image
                    src={s.logoPath}
                    alt={s.name}
                    fill
                    className="object-contain opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 
          Dataset Partner Tier Section 
          Conditional rendering: Only appears if a partner is defined.
        */}
        {datasetPartner && (
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-8 rounded-2xl border border-gray-100 bg-gray-50 p-8 md:flex-row md:gap-16 md:p-12">
              <div className="flex w-full flex-col items-center justify-center border-b border-gray-200 pb-6 md:w-1/3 md:border-r md:border-b-0 md:pr-10 md:pb-0">
                <div className="relative mb-4 h-28 w-56">
                  <Image
                    src={datasetPartner.logoPath}
                    alt={datasetPartner.name}
                    fill
                    className="object-contain transition-all"
                  />
                </div>
                <span className="text-ousac-blue text-[10px] font-bold tracking-widest uppercase">
                  Dataset Partner
                </span>
              </div>
              <div className="w-full text-center md:w-2/3 md:text-left">
                <p className="font-display mb-3 text-xl font-bold text-gray-900 md:text-2xl">
                  {datasetPartner.name}
                </p>
                <p className="mb-6 leading-relaxed font-light text-gray-600">
                  {datasetPartner.description} Not exclusive access, but instead
                  allows students to engage with what the SPL does through live
                  datasets.
                </p>
                <a
                  href={datasetPartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ousac-blue hover:border-ousac-blue inline-block border-b border-gray-900 pb-1 text-sm font-bold text-gray-900 transition-colors"
                >
                  Visit Link
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Sponsorship Inquiry CTA */}
        <div className="mx-auto max-w-3xl pt-8 text-center">
          <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">
            Interested in partnering with us?
          </h2>
          <p className="mb-8 font-light text-gray-500">
            Connect with the top analytics talent from Ontario&apos;s leading
            universities.
          </p>
          <a
            href="mailto:info.ousac@gmail.com"
            className="bg-ousac-black inline-flex items-center gap-2 rounded px-8 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl"
          >
            <Mail className="h-4 w-4" />
            Become a Sponsor
          </a>
        </div>
      </div>
    </div>
  );
}
