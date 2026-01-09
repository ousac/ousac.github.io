'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, ChevronRight } from 'lucide-react';
import {
  SPEAKERS,
  SITE_CONTENT,
  MEMBER_CLUBS,
  SHOW_SPEAKERS,
} from '@/lib/constants';
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button';

/**
 * Home Page Component
 *
 * The landing page for the conference.
 * Features:
 * - Animated Hero Section with gradient backgrounds.
 * - Event details summary (Date, Location).
 * - "Registration Open" status indicator.
 * - Auto-rotating Keynote Speaker carousel.
 */
export default function Home() {
  // Filter only keynote speakers for the preview carousel
  const keynoteSpeakers = SPEAKERS.filter((s) => s.isKeynote).slice(0, 4);

  // State to track the currently displayed speaker index
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);

  // EFFECT: Set up an interval to auto-rotate the speaker carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeakerIndex((prev) => (prev + 1) % keynoteSpeakers.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [keynoteSpeakers.length]);

  return (
    <div className="flex min-h-screen flex-col pt-20">
      {/* 
        HERO SECTION
        Uses absolute positioning for decorative blur blobs (gradients) behind the content.
      */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24 lg:pt-32 lg:pb-36">
        {/* Decorative Background Gradients */}
        <div className="absolute inset-0 z-0 bg-white">
          <div className="bg-ousac-blue/5 absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full blur-3xl"></div>
          <div className="bg-ousac-purple/5 absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/4 translate-y-1/3 rounded-full blur-3xl"></div>
        </div>

        <div className="animate-fade-in-up relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            {/* Status Badge */}
            <div className="text-ousac-blue mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="bg-ousac-blue relative inline-flex h-2 w-2 rounded-full"></span>
              </span>
              {SITE_CONTENT.hero.statusBadge}
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-ousac-black mb-8 text-6xl leading-[0.9] font-bold tracking-tight sm:text-7xl lg:text-8xl">
              {SITE_CONTENT.hero.headlinePrefix} <br />
              <span className="from-ousac-blue to-ousac-purple bg-gradient-to-r bg-clip-text text-transparent">
                {SITE_CONTENT.hero.headlineSuffix}
              </span>
            </h1>

            <p className="mb-10 max-w-lg text-lg leading-relaxed font-light text-gray-600 md:text-xl">
              {SITE_CONTENT.hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <AnimatedShinyButton url="/register">
                {SITE_CONTENT.hero.ctaMain}
              </AnimatedShinyButton>
              <Link
                href="/conference/schedule"
                className="text-ousac-black hover:border-ousac-blue hover:text-ousac-blue inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-3 text-sm font-bold tracking-wider uppercase transition-colors"
                // Adjusted padding/rounded to match the Shiny button roughly if needed,
                // but kept similar specific styles.
                // Note: Shiny button has specific padding/rounded.
              >
                {SITE_CONTENT.hero.ctaSecondary}
              </Link>
            </div>

            {/* Quick Details - Emphasized */}
            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-3 shadow-sm">
                <div className="text-ousac-purple rounded-lg bg-white p-2 shadow-sm">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                    Date
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    March 14, 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-3 shadow-sm">
                <div className="text-ousac-purple rounded-lg bg-white p-2 shadow-sm">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                    Location
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    University of Toronto
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual - School Logos Grid */}
          <div className="relative flex h-[450px] items-center justify-center overflow-hidden rounded-3xl bg-white p-8 shadow-2xl shadow-blue-900/10 lg:h-[550px]">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px] opacity-5"></div>

            <div className="relative z-10 w-full">
              <p className="mb-12 text-center text-sm font-bold tracking-widest text-gray-400 uppercase">
                Participating Universities
              </p>
              <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3">
                {MEMBER_CLUBS.map((club) => (
                  <div
                    key={club.id}
                    className="relative h-24 w-24 opacity-80 grayscale transition-transform duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0 md:h-32 md:w-32"
                  >
                    <Image
                      src={club.logoPath}
                      alt={club.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text / Value Prop */}
      <section className="bg-ousac-blue/5 px-6 py-24">
        <div className="animate-fade-in-up mx-auto max-w-3xl text-center delay-200">
          <h2 className="font-display text-ousac-black mb-6 text-4xl font-bold">
            {SITE_CONTENT.valueProp.title}
          </h2>
          <p className="text-xl leading-relaxed font-light text-gray-600">
            {SITE_CONTENT.valueProp.text}
          </p>
        </div>
      </section>

      {/* Featured Speakers Preview (Carousel) */}
      {SHOW_SPEAKERS && (
        <section className="border-t border-gray-100 bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <span className="text-ousac-purple mb-2 block text-xs font-bold tracking-widest uppercase">
                  {SITE_CONTENT.speakers.label}
                </span>
                <h2 className="font-display text-ousac-black text-4xl font-bold">
                  {SITE_CONTENT.speakers.title}
                </h2>
              </div>
              <Link
                href="/conference/speakers"
                className="text-ousac-black hover:text-ousac-blue group hidden items-center gap-2 text-sm font-bold transition-colors sm:flex"
              >
                {SITE_CONTENT.speakers.link}{' '}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="shadow-card animate-fade-in-up grid gap-0 overflow-hidden rounded-2xl border border-gray-100 lg:grid-cols-2">
              {/* Carousel Image Side */}
              <div className="relative h-[400px] overflow-hidden bg-gray-200 lg:h-auto">
                <Image
                  key={currentSpeakerIndex}
                  src={keynoteSpeakers[currentSpeakerIndex].imagePath}
                  alt="Speaker"
                  fill
                  className="animate-fade-in object-cover"
                />
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-ousac-black rounded bg-white/90 px-3 py-1 text-[10px] font-bold tracking-wider uppercase shadow-sm backdrop-blur">
                    Keynote
                  </span>
                </div>
              </div>

              {/* Carousel Content Side */}
              <div className="relative flex flex-col justify-center bg-white p-10 lg:p-16">
                <div className="flex-grow">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-ousac-black animate-fade-in mb-2 text-3xl font-bold md:text-4xl">
                        {keynoteSpeakers[currentSpeakerIndex].firstName}{' '}
                        {keynoteSpeakers[currentSpeakerIndex].lastName}
                      </h3>
                      <p className="text-ousac-blue animate-fade-in text-lg font-medium delay-100">
                        {keynoteSpeakers[currentSpeakerIndex].role},{' '}
                        {keynoteSpeakers[currentSpeakerIndex].organization}
                      </p>
                    </div>

                    {keynoteSpeakers[currentSpeakerIndex].companyLogo && (
                      <div className="relative h-16 w-16 flex-shrink-0 rounded-lg bg-white p-2 shadow-sm md:h-20 md:w-20">
                        <Image
                          src={
                            keynoteSpeakers[currentSpeakerIndex].companyLogo!
                          }
                          alt={
                            keynoteSpeakers[currentSpeakerIndex].organization
                          }
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <p className="animate-fade-in mb-8 leading-relaxed text-gray-500 delay-200">
                    {keynoteSpeakers[currentSpeakerIndex].bio}
                  </p>
                </div>

                {/* Carousel Indicators */}
                <div className="flex gap-2">
                  {keynoteSpeakers.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSpeakerIndex(idx)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === currentSpeakerIndex
                          ? 'bg-ousac-black w-12'
                          : 'w-4 bg-gray-200 hover:bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile "View All" Link */}
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/conference/speakers"
                className="text-ousac-black inline-flex items-center text-sm font-bold"
              >
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
