'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ARCHIVE_PHOTOS } from '@/lib/constants';
import {
  PlayCircle,
  FileText,
  Image as ImageIcon,
  X,
  Maximize2,
  Download,
} from 'lucide-react';

/**
 * PastConferences Component
 *
 * An archive for previous events.
 * Features:
 * - Local image gallery with Masonry layout.
 * - Lightbox modal for full-screen image viewing.
 * - Resource downloads and video embeds.
 */
export default function PastConferences() {
  const [activeYear, setActiveYear] = useState('2025');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-32">
      {/* Header Section */}
      <div className="mx-auto mb-20 max-w-4xl px-6 text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-600 uppercase">
          Legacy
        </span>
        <h1 className="font-display mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
          Past Conferences
        </h1>
        <p className="mx-auto max-w-2xl text-xl font-light text-gray-500">
          Relive the moments that defined sports analytics in Ontario.
        </p>
      </div>

      <div className="mx-auto max-w-[1400px] px-6">
        {/* Navigation Tabs (Future proofing) */}
        <div className="mb-12 flex justify-center border-b border-gray-200">
          <button
            onClick={() => setActiveYear('2025')}
            className={`border-b-2 px-8 pb-4 text-sm font-bold tracking-widest uppercase transition-colors ${
              activeYear === '2025'
                ? 'border-ousac-blue text-ousac-blue'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            OUSAC 2025
          </button>
        </div>

        {activeYear === '2025' && (
          <div className="space-y-24">
            {/* Top Row: Resources & Video (Side by Side on Large screens) */}
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Resources Column */}
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="mb-6 flex items-center gap-3">
                    <FileText className="text-ousac-purple h-6 w-6" />
                    <h2 className="font-display text-2xl font-bold text-gray-900">
                      Digital Resources
                    </h2>
                  </div>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
                    <div className="border-b border-gray-100 p-6">
                      <h3 className="mb-2 font-bold text-gray-900">
                        Official Program
                      </h3>
                      <p className="mb-4 text-sm text-gray-500">
                        The complete guide to OUSAC 2025.
                      </p>
                      <a
                        href="https://drive.google.com/file/d/1Ly_fY27VlvTwNQ9AoSI0MTQBW80NR_XY/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-between rounded-xl border border-gray-200 p-4 transition-all hover:border-purple-200 hover:bg-purple-50"
                      >
                        <span className="text-sm font-semibold text-gray-700 group-hover/btn:text-purple-700">
                          View Program
                        </span>
                        <Download className="h-4 w-4 text-gray-400 transition-transform group-hover/btn:scale-110 group-hover/btn:text-purple-500" />
                      </a>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-2 font-bold text-gray-900">
                        Official Brochure
                      </h3>
                      <p className="mb-4 text-sm text-gray-500">
                        Learn about OUSAC 2025 sponsorship and details.
                      </p>
                      <a
                        href="https://drive.google.com/file/d/1pNafDUeILhEvajes3jKV0u-LwZgvrccy/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-between rounded-xl border border-gray-200 p-4 transition-all hover:border-purple-200 hover:bg-purple-50"
                      >
                        <span className="text-sm font-semibold text-gray-700 group-hover/btn:text-purple-700">
                          View Brochure
                        </span>
                        <Download className="h-4 w-4 text-gray-400 transition-transform group-hover/btn:scale-110 group-hover/btn:text-purple-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Column */}
              <div className="lg:col-span-8">
                <div className="mb-6 flex items-center gap-3">
                  <PlayCircle className="text-ousac-gold h-6 w-6" />
                  <h2 className="font-display text-2xl font-bold text-gray-900">
                    Recorded Sessions
                  </h2>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-gray-900/10">
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?list=PLr2OzjhD5fn9326cg0H1pAgdoJLy-NE3a"
                    title="OUSAC 2025 Sessions"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="aspect-video w-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            <section>
              <div className="mb-10 flex items-end justify-between border-b border-gray-200 pb-6">
                <div className="flex items-center gap-3">
                  <ImageIcon className="text-ousac-blue h-6 w-6" />
                  <h2 className="font-display text-3xl font-bold text-gray-900">
                    Gallery
                  </h2>
                </div>
                <p className="hidden text-sm text-gray-500 md:block">
                  {ARCHIVE_PHOTOS.length} curated moments
                </p>
              </div>

              <div className="columns-2 gap-3 space-y-3 md:columns-3 lg:columns-4">
                {ARCHIVE_PHOTOS.map((src, idx) => (
                  <div
                    key={idx}
                    className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-xl bg-gray-200"
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image
                      src={src}
                      alt={`Conference photo ${idx + 1}`}
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="scale-90 rounded-full bg-white/20 p-2 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <Maximize2 className="h-4 w-4 md:h-6 md:w-6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 z-50 rounded-full bg-white/10 p-4 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="relative h-full max-h-[90vh] w-full max-w-7xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            <Image
              src={selectedImage}
              alt="Full screen view"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
