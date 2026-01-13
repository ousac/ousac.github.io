/**
 * Type Definitions for OUSAC 2026 Website
 *
 * This file contains all the TypeScript interfaces used across the application.
 * Centralizing types here ensures consistency in data structures for Speakers,
 * Schedule items, Sponsors, etc.
 */

/**
 * Represents a speaker at the conference.
 * Used in the Speakers page and linked in Schedule items.
 */
export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  organization: string;
  bio: string;
  imagePath: string; // URL or local path to the speaker's headshot
  companyLogo?: string; // Optional logo of their organization
  category: 'Keynote' | 'Featured' | 'Student'; // Categorization for display
  isKeynote: boolean; // Determines if they appear in the Home page carousel
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

/**
 * Represents a single event slot in the conference timeline.
 */
export interface ScheduleItem {
  id: string;
  startTime: string; // Display string (e.g., "12:00 PM")
  endTime: string; // Display string (e.g., "12:30 PM")
  title: string;
  type:
    | 'Keynote'
    | 'Panel'
    | 'Workshop'
    | 'Networking'
    | 'Break'
    | 'Competition';
  track?: 'Technical' | 'Business'; // Optional track for filtering
  location: string;
  description?: string;
  speakerIds: string[]; // Foreign keys linking to Speaker.id
}

/**
 * Represents a conference sponsor.
 * The 'tier' property determines the size and placement of the logo.
 */
export interface Sponsor {
  id: string;
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Partner' | 'Dataset Partner';
  logoPath: string;
  website: string;
  description?: string; // Optional description, primarily for the 'Partner' tier
}

/**
 * Represents a student analytics club that is part of the coalition.
 */
export interface MemberClub {
  id: string;
  name: string;
  university: string;
  logoPath: string;
  universityLogo: string;
  description: string;
  linktreeUrl: string; // External link to the club's resources
}
