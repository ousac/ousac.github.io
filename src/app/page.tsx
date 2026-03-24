'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT, MEMBER_CLUBS } from '@/lib/constants';

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col pt-[72px]">
      {/* Hero Section */}
      <section className="bg-primary relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="from-primary via-primary/80 absolute inset-0 z-10 bg-gradient-to-r to-transparent"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6xvV5_xjPQ9GgHDergqlXjI42yicBWuhFiHytIKuS-kPx5qhNfFk03CbasiHoqgNggv35Bv4P6A-0PceHNOM8dlwB4so0oI61Cp0G-HcbQlaVJ0d5f_1Lb6Ls0w6Es9VpsSBqAMxZxLrZIvUmWOQqIQHX8XzTFx9bLNjI8PyKVn3myNfywWLyQWC6xnGBNfhVzn3FCfm-tm5OvwSa0W4nvV-cRFt4CRT0x8N5fm-hmx9nj-3983TkFjuRdXJzQDFsJF4P4oHpsy_u"
            alt="Dynamic wide-angle shot of a professional basketball arena court"
            fill
            className="object-cover opacity-40 grayscale"
            unoptimized
          />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-block rounded-full bg-blue-700 px-4 py-1 font-sans text-xs font-bold tracking-widest text-white uppercase">
              Precision in Performance
            </span>
            <h1 className="font-display mb-8 text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase md:text-7xl">
              ONTARIO UNIVERSITIES
              <br />
              <span className="text-[#4069f2]">SPORTS ANALYTICS</span>
              <br />
              COALITION.
            </h1>
            <p className="mb-10 max-w-xl font-sans text-xl leading-relaxed text-slate-300">
              The central hub for sports analytics research in Ontario.
              Connecting students from across the province with professional
              industry leaders.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={SITE_CONTENT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display rounded-full bg-blue-700 px-8 py-4 text-center font-bold tracking-tight text-white uppercase shadow-xl shadow-blue-700/20 transition-all hover:bg-blue-600"
              >
                Follow us on Instagram
              </a>
              <a
                href={SITE_CONTENT.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display rounded-full bg-[#0077b5] px-8 py-4 text-center font-bold tracking-tight text-white uppercase shadow-xl shadow-[#0077b5]/20 transition-all hover:bg-[#006097]"
              >
                Follow us on LinkedIn
              </a>
              <Link
                href="/past-conferences"
                className="font-display rounded-full border border-white/20 bg-transparent px-8 py-4 text-center font-bold tracking-tight text-white uppercase backdrop-blur-sm transition-all hover:bg-white/10"
              >
                View Past Conference
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Participating Universities */}
      <section className="bg-[#f2f3ff] py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display mb-2 text-4xl font-extrabold tracking-tight text-[#000a1e]">
                PARTICIPATING UNIVERSITIES
              </h2>
              <div className="h-1 w-20 bg-blue-700"></div>
            </div>
            <p className="font-sans text-sm font-semibold tracking-widest text-slate-600 uppercase">
              Founded on Institutional Excellence
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-5">
            {MEMBER_CLUBS.map((club) => (
              <div
                key={club.id}
                className="group relative flex h-40 items-center justify-center overflow-hidden rounded-xl bg-[#dae2fd] p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-24 w-full transform transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={club.universityLogo}
                    alt={club.name}
                    fill
                    className="object-contain drop-shadow-sm filter group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Conferences Section */}
      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="rounded-2xl border border-slate-200 bg-[#f2f3ff] p-8">
            <h4 className="font-display mb-4 text-xl font-bold text-[#000a1e]">
              Member Conferences
            </h4>
            <p className="mb-6 font-sans text-slate-600">
              Annual summits featuring leading analysts from the NBA, NHL, and
              Olympic committees.
            </p>
            <Link
              href="/past-conferences"
              className="font-display group flex items-center gap-2 text-sm font-bold text-blue-700 uppercase"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#000a1e] py-16">
        <div className="relative z-10 mx-auto max-w-7xl px-8">
          <div className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-3xl bg-white p-12 shadow-2xl md:flex-row md:p-20">
            <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="font-display mb-6 text-4xl leading-tight font-black text-[#000a1e] md:text-5xl">
                Ready to redefine the{' '}
                <span className="text-blue-700">standard</span> of excellence?
              </h2>
              <p className="font-sans text-lg text-slate-600">
                Whether you&apos;re a student, professor, or industry leader,
                the Ontario Universities Sports Analytics Coalition is your
                gateway to the future of the game.
              </p>
            </div>
            <div className="relative z-10 flex w-full flex-col gap-4 md:w-auto">
              <a
                href="https://linktr.ee/ousac"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display rounded-full bg-[#000a1e] px-10 py-5 text-center font-bold tracking-tight text-white uppercase shadow-lg transition-transform hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="mailto:info.ousac@gmail.com"
                className="font-display rounded-full border-2 border-[#000a1e] bg-white px-10 py-5 text-center font-bold tracking-tight text-[#000a1e] uppercase transition-colors hover:bg-[#000a1e]/5"
              >
                Partner Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
