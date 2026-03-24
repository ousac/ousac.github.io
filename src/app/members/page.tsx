'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MEMBER_CLUBS } from '@/lib/constants';

export default function Members() {
  return (
    <main className="bg-background pt-[72px]">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-[#000a1e] py-16">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/4 translate-y-1/2 rounded-full bg-[#f2f3ff] blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
          <span className="mb-4 block font-sans font-bold tracking-widest text-blue-700 uppercase">
            The Coalition
          </span>
          <h1 className="font-display mb-8 text-5xl leading-tight font-black text-white md:text-7xl">
            Built by students, <br />
            <span className="text-blue-700">for students.</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-xl leading-relaxed text-slate-300">
            OUSAC is driven by a province-wide network of passionate analytics
            organizations. Meet the clubs shaping the future of sports data.
          </p>
        </div>
      </section>

      {/* Clubs Grid Section */}
      <section className="bg-[#f2f3ff] py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {MEMBER_CLUBS.map((club) => (
              <div
                key={club.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:border-blue-700/30 hover:shadow-2xl"
              >
                {/* Decorative Hover Gradient */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-50 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10 flex-grow">
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-[#f2f3ff] p-4">
                      <Image
                        src={club.logoPath}
                        alt={`${club.name} Logo`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <a
                      href={club.linktreeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors group-hover:bg-blue-700 group-hover:text-white"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="font-display mb-2 text-2xl font-bold text-[#000a1e]">
                    {club.name}
                  </h3>
                  <span className="mb-4 block font-sans text-xs font-bold tracking-widest text-blue-700 uppercase">
                    {club.university}
                  </span>

                  <p className="mb-8 font-sans leading-relaxed text-slate-600">
                    {club.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto border-t border-slate-100 pt-6">
                  <a
                    href={club.linktreeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display group/link flex items-center justify-between text-sm font-bold text-[#000a1e] uppercase"
                  >
                    Visit Profile
                    <ArrowRight className="h-4 w-4 transform text-blue-700 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-white/10 bg-[#000a1e] py-16">
        <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
          <h2 className="font-display mb-6 text-4xl font-extrabold text-white">
            Want your university represented?
          </h2>
          <p className="mb-10 font-sans text-lg text-slate-300">
            We&apos;re constantly expanding the coalition. Reach out to learn
            more about starting a chapter or onboarding your existing club.
          </p>
          <a
            href="https://linktr.ee/ousac"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display inline-block rounded-full bg-blue-700 px-10 py-5 font-bold tracking-tight text-white uppercase shadow-lg shadow-blue-700/20 transition-colors hover:bg-blue-800"
          >
            Get Involved
          </a>
        </div>
      </section>
    </main>
  );
}
