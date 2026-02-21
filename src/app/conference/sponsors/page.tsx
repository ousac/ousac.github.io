import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { SPONSORS, SHOW_SPONSORS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sponsors | OUSAC 2026',
  description:
    'Meet the sponsors and partners supporting the 2nd annual Ontario University Sports Analytics Conference.',
};

const SPONSORSHIP_PACKAGE_URL =
  'https://drive.google.com/file/d/1CsZQhmkIYqIUHuJ_nr6anJXY_E_kW_rq/view?usp=sharing';

// Controls display order and logo sizing per tier
const TIER_CONFIG = {
  Platinum: 'h-56 w-112 md:h-72 md:w-144',
  Gold: 'h-36 w-72  md:h-44 md:w-96',
  Silver: 'h-20 w-44  md:h-24 md:w-52',
  Bronze: 'h-16 w-36  md:h-20 md:w-44',
  'In-Kind': 'h-16 w-36  md:h-20 md:w-44',
} as const;

export default function Sponsors() {
  const tiers = (Object.keys(TIER_CONFIG) as (keyof typeof TIER_CONFIG)[])
    .map((tier) => ({ tier, items: SPONSORS.filter((s) => s.tier === tier) }))
    .filter(({ items }) => items.length > 0);

  return (
    <div className="min-h-[70vh] bg-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl space-y-8 px-6">
        {/* Sponsor tiers */}
        {SHOW_SPONSORS &&
          tiers.map(({ tier, items }) => (
            <div key={tier} className="text-center">
              <span className="mb-4 block text-xs font-bold tracking-widest text-gray-400 uppercase">
                {tier}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {items.map((s) => (
                  <a
                    key={s.id}
                    href={s.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${s.name} website`}
                    className={cn(
                      'group relative block transition-transform duration-300 ease-out hover:scale-105',
                      TIER_CONFIG[s.tier],
                      s.darkBackground && 'rounded-xl bg-gray-900 p-4'
                    )}
                  >
                    <Image
                      src={s.logoPath}
                      alt={s.name}
                      fill
                      className="object-contain transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:opacity-75 md:grayscale"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}

        {/* CTA */}
        <div className="mx-auto max-w-3xl pt-12 text-center">
          <h2 className="font-display mb-3 text-lg font-bold text-gray-900 md:text-2xl">
            Interested in partnering with us?
          </h2>
          <p className="mb-6 text-sm font-light text-gray-500 md:text-base">
            Connect with the top analytics talent from Ontario&apos;s leading
            universities.
          </p>
          <a
            href={SPONSORSHIP_PACKAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download OUSAC sponsorship package"
            className="bg-ousac-black inline-flex items-center gap-2 rounded px-8 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Sponsorship Package
          </a>
        </div>
      </div>
    </div>
  );
}
