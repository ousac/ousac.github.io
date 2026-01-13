import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { SITE_CONTENT } from '@/lib/constants';

/**
 * Footer Component
 *
 * Displays at the bottom of every page.
 * Includes:
 * - Brief "About" text
 * - Social Media icons (LinkedIn, Instagram, Email)
 * - Legal links (Code of Conduct, Privacy Policy)
 * - Copyright info
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-ousac-blue py-6 text-white md:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="mb-6 grid gap-8 border-b border-gray-800 pb-6 md:mb-8 md:grid-cols-4 md:gap-12 md:pb-8">
          {/* Brand & Mission Statement */}
          <div className="col-span-1 md:col-span-2">
            <span className="font-display mb-6 block text-2xl font-bold tracking-tight">
              OUSAC
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              The central hub for sports analytics research in Ontario.
              Connecting students from across the province with professional
              industry leaders.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-wider text-gray-200 uppercase">
              Connect
            </h4>
            <div className="flex space-x-6">
              <a
                href={SITE_CONTENT.socials.instagram}
                className="text-gray-500 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONTENT.socials.linkedin}
                className="text-gray-500 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info.ousac@gmail.com"
                className="text-gray-500 transition-colors hover:text-white"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Legal / Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-wider text-gray-200 uppercase">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  href="/code-of-conduct"
                  className="transition-colors hover:text-white"
                >
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="flex flex-col items-center justify-center text-xs text-gray-600 md:flex-row">
          <p>© 2026 Ontario Universities Sports Analytics Coalition.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
