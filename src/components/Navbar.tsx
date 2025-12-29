'use client';

import React from 'react';
import {
  Navbar as MotionNavbar,
  NavBody,
  NavItems,
  NavDropdown,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/motion-navbar';
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button';
import { Calendar, Users, MapPin, Mic, Handshake } from 'lucide-react';
import { GOOGLE_FORM_REGISTRATION } from '@/lib/constants';

const Navbar: React.FC = () => {
  const conferenceItems = [
    { label: 'Schedule', href: '/schedule', icon: Calendar },
    { label: 'Speakers', href: '/speakers', icon: Mic },
    { label: 'Venue', href: '/venue', icon: MapPin },
  ];

  const communityItems = [
    { label: 'Members', href: '/members', icon: Users },
    { label: 'Sponsors', href: '/sponsors', icon: Handshake },
  ];

  const mainNavItems = [
    { label: 'About', href: '/about' },
    { label: 'Archive', href: '/past-conferences' },
  ];

  return (
    <div className="relative w-full">
      <div className="fixed top-0 right-0 left-0 z-50">
        <MotionNavbar className="border-b border-gray-100 bg-white text-black dark:border-gray-800 dark:bg-black dark:text-white">
          <NavbarLogo className="text-black dark:text-white" />

          <NavBody>
            <NavItems items={mainNavItems} />
            <NavDropdown label="Conference" items={conferenceItems} />
            <NavDropdown label="Community" items={communityItems} />
            <div className="ml-2 hidden items-center md:flex">
              <AnimatedShinyButton
                url={GOOGLE_FORM_REGISTRATION}
                className="rounded-full !px-6 !py-2"
              >
                Register
              </AnimatedShinyButton>
            </div>
          </NavBody>

          {/* Toggle Button outside MobileNav for visibility */}
          <MobileNavToggle className="ml-auto md:hidden" />

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo className="text-black dark:text-white" />
            </MobileNavHeader>
            <MobileNavMenu>
              {mainNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-ousac-orange block border-b border-gray-100 py-2 font-medium transition-colors dark:border-gray-800"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 py-2 text-sm font-medium text-gray-500 uppercase">
                Conference
              </div>
              {conferenceItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-ousac-orange flex items-center gap-2 py-2 pl-4 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 py-2 text-sm font-medium text-gray-500 uppercase">
                Community
              </div>
              {communityItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-ousac-orange flex items-center gap-2 py-2 pl-4 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-8">
                <AnimatedShinyButton
                  url={GOOGLE_FORM_REGISTRATION}
                  className="w-full justify-center rounded-full !px-8 !py-3"
                >
                  Register
                </AnimatedShinyButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </MotionNavbar>
      </div>
    </div>
  );
};

export default Navbar;
