'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Code, Mic, BarChart } from 'lucide-react';

export default function About() {
  return (
    <main className="bg-background pt-[72px]">
      {/* Hero Section: Editorial Style */}
      <section className="bg-primary relative flex min-h-[500px] items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcGyuch4_fexJ6pvAvI2PAzuG2nXe-QFrULZ9Ql2wa40CthrlJTq5pN6PvKXdmnvAv8VEfFU1c1VV3n_qZV53oTkswtvSPxw-4KD8nfwtdtJCQvOlJdGP88r3lZ0AMnFz7iSvSxkCom2rS1ssEOK0RILDElPrQLNQLRPqq0Rw6VtsLlk7eceLBtD7zvclBUK4wppBYlrFF4Gg3hKiMvd7uQ13EPSmWtnL_V2vgMjgTPPfVviFIvIdLeIX4aN_xkswmMotdH1xt33Z"
            alt="dramatic wide shot of a modern basketball arena with technical light beams and data overlay patterns"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000a1e] via-[#000a1e]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-3xl">
            <span className="mb-4 block font-sans font-bold tracking-widest text-blue-700 uppercase">
              Established 2024
            </span>
            <h1 className="font-display mb-8 text-5xl leading-tight font-black text-white md:text-7xl">
              The Hub of Ontario <br />
              <span className="text-blue-700">Sports Analytics</span>
            </h1>
            <p className="max-w-2xl font-sans text-xl leading-relaxed text-slate-300">
              Established in 2024, the Ontario Universities Sports Analytics
              Coalition (OUSAC) is a consortium of sports analytics clubs from
              post-secondary institutions across Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section: Asymmetric Layout */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-display mb-8 border-l-8 border-blue-700 pl-6 text-4xl font-extrabold text-[#000a1e]">
                Our Vision
              </h2>
              <p className="mb-6 font-sans text-xl leading-relaxed text-slate-700">
                While we host a flagship conference annually, our commitment
                extends deep into supporting club-wide missions year-round.
              </p>
              <p className="font-sans text-xl leading-relaxed text-slate-700">
                Organizing this conference is one of the ways that we can
                fulfill our objectives, under our vision to{' '}
                <span className="font-bold text-blue-700">
                  jointly grow the quantitative analysis
                </span>{' '}
                and applications of analytics to sports in the province.
              </p>
            </div>
            <div className="relative md:col-span-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#dae2fd] shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7FLvdIeht4ivHZSQUHpIQz26gX5AoNds6vltLnC6EU0rP8toT4qef0wWFTp6OCyoltHoLauoabaDmfeHJ5O2s2c7aHtYs_qJM64GKbtmt5VNIUVAlh5phykFEGewBP8MR9PgZFg6AzBdR6Oes_BWlqVrJopHM2J9P2PsfvjghuXYZN9sSEe9keyUo5gMIRRMlo4tEPbYmgmzwoiyOi2hvI9-Mu2xyPzVLzpk1_0W8NYiyAvAq_ISq_vbRiT5u9_Yw1C0OxIw3ei-K"
                  alt="close-up of complex data visualization on high resolution screen with blue and white scatter plots"
                  fill
                  className="object-cover opacity-80 mix-blend-multiply"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -left-6 max-w-[200px] rounded-xl bg-blue-700 p-8 shadow-xl">
                <p className="font-display text-lg font-bold text-white">
                  Pioneering the Field
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives: Bento Grid / Analytics Cards */}
      <section className="bg-[#f2f3ff] py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="font-sans text-sm font-bold tracking-[0.2em] text-blue-700 uppercase">
                Framework
              </span>
              <h2 className="font-display mt-2 text-4xl font-extrabold text-[#000a1e]">
                Strategic Objectives
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Objective 1 */}
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#dae2fd]">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-display mb-4 text-xl font-bold text-[#000a1e]">
                Collaborative Projects
              </h3>
              <p className="font-sans leading-relaxed text-slate-600">
                Facilitate collaboration on projects and teams for hackathons
                and competitions.
              </p>
            </div>

            {/* Objective 2 */}
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#dae2fd]">
                <Code className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-display mb-4 text-xl font-bold text-[#000a1e]">
                Resource Sharing
              </h3>
              <p className="font-sans leading-relaxed text-slate-600">
                Share resources for tutorials and workshops to enhance our
                breadth of data science applications to sport.
              </p>
            </div>

            {/* Objective 3 */}
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#dae2fd]">
                <Mic className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-display mb-4 text-xl font-bold text-[#000a1e]">
                Expert Seminars
              </h3>
              <p className="font-sans leading-relaxed text-slate-600">
                Attend seminars from respected members of the sports analytics
                community.
              </p>
            </div>

            {/* Objective 4 */}
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#dae2fd]">
                <BarChart className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-display mb-4 text-xl font-bold text-[#000a1e]">
                Research &amp; Conferences
              </h3>
              <p className="font-sans leading-relaxed text-slate-600">
                Present research at and attend conferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
