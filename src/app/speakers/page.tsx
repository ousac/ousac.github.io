import React from 'react';
import Image from 'next/image';
import { SPEAKERS } from '@/lib/constants';
import { Linkedin, Twitter, Globe } from 'lucide-react';

/**
 * Speakers Page Component
 *
 * Displays the grid of all confirmed speakers.
 * Design uses a minimalist card style with image-led hierarchy.
 * Social links appear on hover via an overlay.
 */
export default function Speakers() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24">
      {/* Header */}
      <div className="mx-auto mb-20 max-w-7xl px-6">
        <h1 className="font-display text-ousac-black mb-6 text-5xl font-bold md:text-6xl">
          Speakers
        </h1>
        <p className="max-w-2xl text-xl font-light text-gray-500">
          Industry pioneers and academic leaders shaping the future of sports
          analytics.
        </p>
      </div>

      {/* Speaker Grid */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((speaker, idx) => (
            <div
              key={speaker.id}
              className="group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container - Aspect Ratio 4:5 */}
              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
                <Image
                  src={speaker.imagePath}
                  alt={`${speaker.firstName} ${speaker.lastName}`}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Keynote Badge - Absolute positioning */}
                {speaker.isKeynote && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-ousac-black px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                      Keynote
                    </span>
                  </div>
                )}

                {/* Socials Overlay - Slides up on group hover */}
                <div className="from-ousac-black/80 absolute inset-0 flex items-end bg-gradient-to-t via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex translate-y-4 gap-4 transition-transform duration-300 group-hover:translate-y-0">
                    {speaker.socials.linkedin && (
                      <a
                        href={speaker.socials.linkedin}
                        className="hover:text-ousac-gold text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                      </a>
                    )}
                    {speaker.socials.twitter && (
                      <a
                        href={speaker.socials.twitter}
                        className="hover:text-ousac-gold text-white transition-colors"
                      >
                        <Twitter className="h-5 w-5" strokeWidth={1.5} />
                      </a>
                    )}
                    {speaker.socials.website && (
                      <a
                        href={speaker.socials.website}
                        className="hover:text-ousac-gold text-white transition-colors"
                      >
                        <Globe className="h-5 w-5" strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="flex flex-col">
                <h3 className="font-display text-ousac-black group-hover:text-ousac-blue mb-1 text-2xl font-bold transition-colors duration-300">
                  {speaker.firstName} {speaker.lastName}
                </h3>
                <p className="text-ousac-purple mb-4 text-sm font-medium">
                  {speaker.role}, {speaker.organization}
                </p>
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-900">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
