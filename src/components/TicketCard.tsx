'use client';

import React, { useState } from 'react';
import { Check, GraduationCap } from 'lucide-react';

interface TicketCardProps {
  name: string;
  price: string;
  features: string[];
  paymentLink: string;
  badge?: string;
  honorSystemNote?: string;
  isStudent?: boolean;
}

export function TicketCard({
  name,
  price,
  features,
  paymentLink,
  badge,
  honorSystemNote,
  isStudent = false,
}: TicketCardProps) {
  const [agreedToHonorSystem, setAgreedToHonorSystem] = useState(false);

  const handlePurchase = () => {
    if (isStudent && !agreedToHonorSystem) {
      return; // Prevent purchase if checkbox not checked
    }
    window.location.href = paymentLink;
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
        isStudent
          ? 'border-ousac-gold'
          : 'hover:border-ousac-blue border-gray-200'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="bg-ousac-gold absolute top-0 right-0 rounded-bl-2xl px-4 py-2">
          <span className="flex items-center gap-1 text-xs font-bold tracking-wider text-white uppercase">
            <GraduationCap className="h-4 w-4" />
            {badge}
          </span>
        </div>
      )}

      {/* Ticket Name */}
      <h3 className="font-display mb-2 text-2xl font-bold text-gray-900">
        {name}
      </h3>

      {/* Price */}
      <div className="mb-6">
        <span className="text-ousac-blue text-5xl font-bold">{price}</span>
        <span className="ml-2 text-gray-500">CAD</span>
      </div>

      {/* Features List */}
      <ul className="mb-8 space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                <Check className="h-3 w-3 text-green-600" />
              </div>
            </div>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Honor System Checkbox (Student Only) */}
      {isStudent && honorSystemNote && (
        <div className="mb-6 rounded-lg bg-blue-50 p-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={agreedToHonorSystem}
              onChange={(e) => setAgreedToHonorSystem(e.target.checked)}
              className="text-ousac-blue focus:ring-ousac-blue mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 focus:ring-2"
            />
            <span className="text-xs text-gray-600">
              I confirm I am a student. {honorSystemNote}
            </span>
          </label>
        </div>
      )}

      {/* Purchase Button */}
      <button
        onClick={handlePurchase}
        disabled={isStudent && !agreedToHonorSystem}
        className={`w-full rounded-lg py-4 text-sm font-bold tracking-wider uppercase transition-all ${
          isStudent && !agreedToHonorSystem
            ? 'cursor-not-allowed bg-gray-200 text-gray-400'
            : 'bg-ousac-blue hover:bg-ousac-blue/90 text-white hover:shadow-md'
        }`}
      >
        {isStudent && !agreedToHonorSystem
          ? 'Please confirm student status'
          : 'Purchase Ticket'}
      </button>
    </div>
  );
}
