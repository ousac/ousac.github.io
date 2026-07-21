import React from 'react';
import Link from 'next/link';

import { SITE_CONTENT } from '@/lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900 pt-16 pb-8 dark:bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 font-sans text-slate-300 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="font-display text-3xl font-black tracking-tighter text-white uppercase">
              OUSAC
            </div>
          </div>
          <p className="max-w-xs font-sans text-sm leading-relaxed text-slate-400">
            Advancing the future of sports through rigorous quantitative
            analysis and inter-university collaboration.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-sm font-bold tracking-wider text-white uppercase">
              Connect
            </h4>
            <a
              href={SITE_CONTENT.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Instagram
            </a>
            <a
              href={SITE_CONTENT.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href={SITE_CONTENT.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              X
            </a>
            <a
              href="mailto:info.ousac@gmail.com"
              className="font-sans text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Email
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-sm font-bold tracking-wider text-white uppercase">
              Policies
            </h4>
            <Link
              href="/code-of-conduct"
              className="font-sans text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Code of Conduct
            </Link>
            <Link
              href="/privacy"
              className="font-sans text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center md:items-end">
          <p className="font-sans text-sm text-slate-500">
            © 2026 OUSAC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
