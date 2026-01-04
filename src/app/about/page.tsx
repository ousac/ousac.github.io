import React from 'react';

export default function About() {
  return (
    <div className="bg-white pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-ousac-blue mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            About OUSAC
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Established in 2024, the Ontario Universities Sports Analytics
            Coalition (OUSAC) is a consortium of sports analytics clubs from
            post-secondary institutions across Ontario.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-ousac-black mb-6 text-3xl font-bold">
                Our Objectives
              </h2>
              <ul className="space-y-4">
                {[
                  'Facilitate collaboration on projects and teams for hackathons and competitions',
                  'Share resources for tutorials and workshops to enhance our breadth of data science applications to sport',
                  'Attend seminars from respected members of the sports analytics community',
                  'Present research at and attend conferences',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="bg-ousac-gold flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <h2 className="font-display text-ousac-black mb-6 text-3xl font-bold">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Organizing this conference is one of the ways that we can
                fulfill these objectives, under our vision to jointly grow the
                quantitative analysis and applications of analytics to sports in
                the province.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
