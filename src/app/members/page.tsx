'use client';

import React from 'react';
import Image from 'next/image';
import { MEMBER_CLUBS } from '@/lib/constants';
import { ExternalLink, ArrowRight } from 'lucide-react';

/**
 * Members Page Component
 *
 * Displays the list of university clubs that form the coalition.
 * Redesigned for a premium, modern aesthetic with glassmorphism and smooth interactions.
 */
export default function Members() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 pt-32 pb-32">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute top-0 right-0 -mt-64 -mr-64 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 -mb-64 -ml-64 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-yellow-100 to-orange-100 opacity-50 blur-3xl"></div>

      <div className="relative container mx-auto px-6">
        {/* Header Section */}
        <div className="animate-fade-in-up mx-auto mb-24 max-w-3xl text-center">
          <span className="bg-ousac-blue/10 text-ousac-blue mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            The Coalition
          </span>
          <h1 className="font-display text-ousac-black mb-8 text-5xl font-bold tracking-tight md:text-7xl">
            Built by students, <br />
            <span className="from-ousac-blue to-ousac-purple bg-gradient-to-r bg-clip-text text-transparent">
              for students.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-light text-gray-600">
            OUSAC is driven by a province-wide network of passionate analytics
            organizations. Meet the clubs shaping the future of sports data.
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MEMBER_CLUBS.map((club, idx) => (
            <div
              key={club.id}
              className="group animate-fade-in-up relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/50 bg-white/60 p-8 shadow-xl shadow-gray-200/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Hover Gradient Overlay */}
              <div className="via-ousac-blue/5 absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between">
                  {/* Logo Container */}
                  <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white/80 shadow-sm backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={club.logoPath}
                      alt={`${club.name} Logo`}
                      fill
                      className="object-contain p-3"
                    />
                  </div>

                  {/* External Link Icon */}
                  <a
                    href={club.linktreeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-colors hover:bg-gray-50 hover:text-black"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="mb-4">
                  <h3 className="font-display text-ousac-black mb-1 text-2xl font-bold">
                    {club.name}
                  </h3>
                  <p className="text-ousac-purple/80 text-xs font-bold tracking-widest uppercase">
                    {club.university}
                  </p>
                </div>

                <p className="mb-8 text-base leading-relaxed text-gray-600">
                  {club.description}
                </p>
              </div>

              {/* Call to Action */}
              <div className="relative z-10 mt-auto border-t border-gray-100/50 pt-6">
                <a
                  href={club.linktreeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link flex items-center justify-between text-sm font-bold text-gray-900"
                >
                  <span>Visit Profile</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
