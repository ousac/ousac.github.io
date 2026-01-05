'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SPEAKERS, SHOW_SPEAKERS } from '@/lib/constants';
import { Linkedin, Twitter, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Speaker } from '@/types/types';

// ... SpeakerCard and Section components ...

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
  // ... existing code ...
  <div className="group flex flex-col">
    {/* Image Container - Aspect Ratio 4:5 */}
    <div className="relative mb-6 aspect-square overflow-hidden rounded-sm bg-gray-100 md:aspect-[4/5]">
      <Image
        src={speaker.imagePath}
        alt={`${speaker.firstName} ${speaker.lastName}`}
        fill
        className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
      />

      {/* Socials Overlay - Slides up on group hover */}
      <div className="from-ousac-black/80 absolute inset-0 flex items-end bg-gradient-to-t via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex translate-y-4 gap-4 transition-transform duration-300 group-hover:translate-y-0">
          {speaker.socials.linkedin && (
            <a
              href={speaker.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ousac-gold text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
            </a>
          )}
          {speaker.socials.twitter && (
            <a
              href={speaker.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ousac-gold text-white transition-colors"
            >
              <Twitter className="h-5 w-5" strokeWidth={1.5} />
            </a>
          )}
          {speaker.socials.website && (
            <a
              href={speaker.socials.website}
              target="_blank"
              rel="noopener noreferrer"
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
);

const Section = ({
  title,
  speakers,
  defaultOpen = true,
  isComingSoon = false,
}: {
  title: string;
  speakers: Speaker[];
  defaultOpen?: boolean;
  isComingSoon?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!isComingSoon && speakers.length === 0) return null;

  return (
    <div className="mb-12 border-b border-gray-200 pb-12 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
      >
        <h2 className="font-display text-ousac-black text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        <div className="rounded-full bg-gray-50 p-2 transition-colors hover:bg-gray-100">
          {isOpen ? (
            <ChevronUp className="h-6 w-6 text-gray-400" />
          ) : (
            <ChevronDown className="h-6 w-6 text-gray-400" />
          )}
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          {isComingSoon ? (
            <div className="py-8">
              <div className="inline-block rounded-lg border border-gray-100 bg-gray-50 px-6 py-3">
                <span className="text-ousac-blue text-sm font-bold tracking-widest uppercase">
                  Coming Soon
                </span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 pt-8 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
              {speakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Speakers() {
  const keynoteSpeakers = SPEAKERS.filter((s) => s.category === 'Keynote');
  const featuredSpeakers = SPEAKERS.filter((s) => s.category === 'Featured');
  const studentSpeakers = SPEAKERS.filter((s) => s.category === 'Student');

  return (
    <div className="min-h-screen bg-white pt-24 pb-24">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-7xl px-6">
        <h1 className="font-display text-ousac-black mb-6 text-5xl font-bold md:text-6xl">
          Speakers
        </h1>
        <p className="max-w-2xl text-xl font-light text-gray-500">
          Industry pioneers and academic leaders shaping the future of sports
          analytics.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Section
          title="Keynote Speakers"
          speakers={keynoteSpeakers}
          isComingSoon={!SHOW_SPEAKERS}
        />
        <Section
          title="Featured Speakers & Panelists"
          speakers={featuredSpeakers}
          isComingSoon={!SHOW_SPEAKERS}
        />
        <Section
          title="Student Presenters"
          speakers={studentSpeakers}
          isComingSoon={!SHOW_SPEAKERS}
        />
      </div>
    </div>
  );
}
