'use client';

import React from 'react';
import {
  Navbar as MotionNavbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileNavLink,
  NavDropdown,
  NavItems,
} from '@/components/ui/motion-navbar';
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button';
import { GOOGLE_FORM_REGISTRATION } from '@/lib/constants';
import { Calendar, Users, Handshake, MapPin, Trophy } from 'lucide-react';

const Navbar: React.FC = () => {
  const CONFERENCE_ITEMS = [
    { label: 'Schedule', href: '/conference/schedule', icon: Calendar },
    { label: 'Speakers', href: '/conference/speakers', icon: Users },
    { label: 'Sponsors', href: '/conference/sponsors', icon: Handshake },
    { label: 'Venue', href: '/conference/venue', icon: MapPin },
    {
      label: 'Student Competition',
      href: '/conference/student-competition',
      icon: Trophy,
    },
  ];

  const MAIN_NAV_ITEMS = [
    { label: 'About', href: '/about' },
    { label: 'Past Conferences', href: '/past-conferences' },
    { label: 'Members', href: '/members' },
    { label: 'Register', href: '/register' },
  ];

  return (
    <div className="relative w-full">
      <div className="fixed top-0 right-0 left-0 z-50">
        <MotionNavbar className="border-b border-gray-100 bg-white text-black">
          <NavbarLogo className="text-black" />

          <NavBody>
            <div className="hidden items-center lg:flex">
              <NavDropdown label="Conference" items={CONFERENCE_ITEMS} />
              <NavItems items={MAIN_NAV_ITEMS} />
              <div className="ml-4">
                <a
                  href={GOOGLE_FORM_REGISTRATION}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedShinyButton className="rounded-full !px-6 !py-2">
                    Register
                  </AnimatedShinyButton>
                </a>
              </div>
            </div>
          </NavBody>

          <MobileNavToggle className="ml-auto lg:hidden" />

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo className="text-black" />
            </MobileNavHeader>
            <MobileNavMenu>
              {/* Conference Section Header */}
              <div className="border-b border-gray-100 pb-2">
                <p className="mb-2 px-2 text-sm font-semibold tracking-wide text-gray-400 uppercase">
                  Conference
                </p>
                <div className="flex flex-col space-y-1 pl-2">
                  {CONFERENCE_ITEMS.map((item) => (
                    <MobileNavLink
                      key={item.label}
                      href={item.href}
                      className="hover:text-ousac-orange flex items-center justify-between rounded-lg px-2 py-2 font-medium text-gray-600 transition-colors"
                    >
                      <span>{item.label}</span>
                      <item.icon className="h-4 w-4 text-gray-400" />
                    </MobileNavLink>
                  ))}
                </div>
              </div>

              {/* Main Nav Items */}
              <div className="flex flex-col space-y-2 pt-4">
                {MAIN_NAV_ITEMS.map((item) => (
                  <MobileNavLink
                    key={item.label}
                    href={item.href}
                    className="hover:text-ousac-orange block border-b border-gray-100 py-2 font-medium transition-colors"
                  >
                    {item.label}
                  </MobileNavLink>
                ))}
              </div>

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
