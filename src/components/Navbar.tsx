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
  NavItems,
} from '@/components/ui/motion-navbar';
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button';

const Navbar: React.FC = () => {
  const MAIN_NAV_ITEMS = [
    { label: 'About', href: '/about' },
    { label: 'Members', href: '/members' },
    { label: 'Past Conferences', href: '/past-conferences' },
  ];

  return (
    <div className="relative w-full">
      <div className="fixed top-0 right-0 left-0 z-50">
        <MotionNavbar className="border-b border-gray-100 bg-white text-black">
          <NavbarLogo className="text-black" />

          <NavBody>
            <div className="hidden items-center lg:flex">
              <NavItems items={MAIN_NAV_ITEMS} />
              <div className="ml-4">
                <AnimatedShinyButton
                  url="https://linktr.ee/ousac"
                  className="rounded-full !px-6 !py-2"
                >
                  Get Involved
                </AnimatedShinyButton>
              </div>
            </div>
          </NavBody>

          <MobileNavToggle className="ml-auto lg:hidden" />

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo className="text-black" />
            </MobileNavHeader>
            <MobileNavMenu>
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
                  url="https://linktr.ee/ousac"
                  className="w-full justify-center rounded-full !px-8 !py-3"
                >
                  Get Involved
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
