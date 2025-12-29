'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SCHEDULE, SPEAKERS } from '@/lib/constants';
import { MapPin, X, ChevronRight } from 'lucide-react';
import { ScheduleItem, Speaker } from '@/types/types';

/**
 * Schedule Page Component
 *
 * Displays the event agenda.
 * Features:
 * - Filtering by track (Technical vs Business).
 * - Interactive rows that open a detailed modal.
 * - Integration with Speaker data to show avatars inline.
 */
export default function Schedule() {
  // State for the currently opened session modal (null if closed)
  const [selectedSession, setSelectedSession] = useState<ScheduleItem | null>(
    null
  );

  /**
   * Helper to retrieve full Speaker objects based on a list of IDs stored in the schedule item.
   */
  const getSpeakerDetails = (ids: string[]): Speaker[] => {
    return ids
      .map((id) => SPEAKERS.find((s) => s.id === id))
      .filter((s): s is Speaker => !!s);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Page Header */}
      <div className="animate-fade-in-up mx-auto mb-8 max-w-4xl px-6 text-center">
        <h1 className="font-display text-ousac-black mb-4 text-4xl font-bold md:text-5xl">
          Agenda
        </h1>
        <p className="text-gray-500">March 14, 2026 • University of Toronto</p>
      </div>

      {/* Schedule List */}
      <div className="animate-fade-in-up mx-auto max-w-4xl px-6 delay-200">
        <div className="space-y-4">
          {SCHEDULE.map((item) => (
            <div
              key={item.id}
              // Only open modal for actual sessions, not breaks
              onClick={() =>
                item.type !== 'Break' &&
                item.type !== 'Networking' &&
                setSelectedSession(item)
              }
              className={`group flex flex-col gap-4 rounded-2xl border p-4 transition-all duration-300 md:flex-row md:gap-6 md:p-6 ${
                item.type === 'Break' || item.type === 'Networking'
                  ? 'cursor-default border-transparent bg-gray-50'
                  : 'hover:border-ousac-purple/20 hover:shadow-card cursor-pointer border-gray-100 bg-white'
              }`}
            >
              {/* Time Column */}
              <div className="flex-shrink-0 pt-1 md:w-32">
                <div className="text-ousac-black font-mono text-sm font-bold">
                  {item.startTime}
                </div>
                <div className="mt-1 text-xs font-medium text-gray-400">
                  {item.endTime}
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-grow">
                <div className="mb-2 flex items-center gap-3">
                  {/* Render Track Badge if applicable */}
                  {item.track && (
                    <span
                      className={`rounded border px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                        item.track === 'Technical'
                          ? 'text-ousac-blue border-blue-100 bg-blue-50'
                          : 'text-ousac-purple border-purple-100 bg-purple-50'
                      }`}
                    >
                      {item.track}
                    </span>
                  )}
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                    {item.type}
                  </span>
                </div>

                <h3
                  className={`font-display mb-2 text-lg font-bold transition-colors md:text-xl ${
                    item.type === 'Break' || item.type === 'Networking'
                      ? 'text-gray-500'
                      : 'text-ousac-black group-hover:text-ousac-purple'
                  }`}
                >
                  {item.title}
                </h3>

                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{item.location}</span>
                </div>

                {/* Inline Speakers (Small Avatars) */}
                {item.speakerIds.length > 0 && (
                  <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
                    {getSpeakerDetails(item.speakerIds).map((s) => (
                      <div
                        key={s?.id}
                        className="relative flex items-center gap-2"
                      >
                        <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-200">
                          <Image
                            src={s?.imagePath || ''}
                            alt={s?.lastName || ''}
                            fill
                            className="object-cover opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                          />
                        </div>
                        <span className="text-xs font-bold text-gray-600">
                          {s?.firstName} {s?.lastName}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Icon (Chevron) - Hidden for breaks */}
              {item.type !== 'Break' && item.type !== 'Networking' && (
                <div className="group-hover:text-ousac-gold hidden flex-col justify-center text-gray-300 transition-colors md:flex">
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedSession && (
        <div
          className="bg-ousac-black/50 animate-fade-in fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedSession(null)}
        >
          <div
            className="animate-fade-in-up max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-100 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <span className="text-ousac-purple mb-2 block text-xs font-bold tracking-widest uppercase">
                    {selectedSession.type}
                  </span>
                  <h2 className="font-display text-ousac-black text-3xl font-bold">
                    {selectedSession.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedSession(null)}
                  className="rounded-full p-2 transition-colors hover:bg-gray-50"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Meta Data Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <span className="mb-1 block text-xs font-bold tracking-wider text-gray-400 uppercase">
                    Time
                  </span>
                  <div className="text-ousac-black font-mono font-bold">
                    {selectedSession.startTime} - {selectedSession.endTime}
                  </div>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <span className="mb-1 block text-xs font-bold tracking-wider text-gray-400 uppercase">
                    Location
                  </span>
                  <div className="text-ousac-black font-bold">
                    {selectedSession.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-slate prose-sm mb-10 max-w-none">
                <p className="text-base leading-relaxed text-gray-600">
                  {selectedSession.description}
                </p>
              </div>

              {/* Full Speaker Details in Modal */}
              {selectedSession.speakerIds.length > 0 && (
                <div>
                  <h4 className="text-ousac-black mb-4 border-b border-gray-100 pb-2 text-xs font-bold tracking-widest uppercase">
                    Speakers
                  </h4>
                  <div className="space-y-4">
                    {getSpeakerDetails(selectedSession.speakerIds).map((s) => (
                      <div key={s.id} className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={s.imagePath}
                            alt={s.lastName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-ousac-black font-bold">
                            {s.firstName} {s.lastName}
                          </div>
                          <div className="text-ousac-blue text-xs font-medium">
                            {s.role}, {s.organization}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
