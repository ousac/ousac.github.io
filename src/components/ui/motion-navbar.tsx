'use client';

import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavbarLogoProps {
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface NavItemsProps {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

type IconType = LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface NavDropdownProps {
  label: string;
  items: {
    label: string;
    href: string;
    icon?: IconType;
  }[];
  className?: string;
  index?: number;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const MobileMenuContext = createContext<{
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}>({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
});

export const Navbar = ({ children, className }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <MobileMenuContext.Provider
      value={{ isMobileMenuOpen, setIsMobileMenuOpen }}
    >
      <nav
        className={cn(
          'fixed top-0 right-0 left-0 z-50 px-4 py-2 md:px-6 md:py-4',
          className
        )}
      >
        <motion.div
          className={cn(
            'mx-auto flex h-24 max-w-7xl items-center justify-between'
          )}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </nav>
    </MobileMenuContext.Provider>
  );
};

export const NavBody = ({ children, className }: NavBodyProps) => {
  return (
    <motion.div
      className={cn(
        'hidden items-center gap-6 rounded-full border border-gray-100 bg-white/95 px-8 py-3 shadow-sm backdrop-blur-md lg:flex',
        className
      )}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export const NavDropdown = ({
  label,
  items,
  className,
  index = 0,
}: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        className={cn(
          'hover:text-ousac-blue relative flex items-center gap-1 px-3 py-2 text-base font-semibold text-gray-800 transition-colors',
          className
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 * index }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${label} dropdown`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={2.5}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="shadow-card absolute top-full left-0 mt-4 min-w-[220px] rounded-xl border border-gray-100 bg-white p-2"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-ousac-blue flex items-center justify-between rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-gray-50"
                  aria-label={item.label}
                >
                  <span className="text-sm font-medium">{item.label}</span>
                  {Icon && (
                    <Icon
                      size={16}
                      className="group-hover:text-ousac-blue text-gray-400"
                    />
                  )}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  return (
    <>
      {items.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          onClick={onItemClick}
          className={cn(
            'hover:text-ousac-blue relative px-3 py-2 text-base font-semibold text-gray-800 transition-colors',
            className
          )}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          aria-label={item.label}
        >
          {item.label}
        </motion.a>
      ))}
    </>
  );
};

export const MobileNav = ({
  children,
  className,
}: Omit<MobileNavProps, 'isOpen'>) => {
  const { isMobileMenuOpen } = useContext(MobileMenuContext);

  return (
    <motion.div
      className={cn(
        'fixed inset-0 z-[60] border-l border-gray-200 bg-white text-black shadow-xl lg:hidden',
        className
      )}
      initial={false}
      animate={{
        x: isMobileMenuOpen ? '0%' : '100%',
        display: isMobileMenuOpen ? 'block' : 'none',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >
      <div className="flex h-full flex-col overflow-y-auto">{children}</div>
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between border-b border-gray-100 px-6 py-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
}: Omit<MobileNavMenuProps, 'isOpen' | 'onClose'>) => {
  return (
    <div className={cn('flex flex-col space-y-4 p-6 text-xl', className)}>
      {children}
    </div>
  );
};

export const MobileNavLink = ({
  href,
  children,
  className,
}: MobileNavLinkProps) => {
  const { setIsMobileMenuOpen } = useContext(MobileMenuContext);

  return (
    <Link
      href={href}
      onClick={() => setIsMobileMenuOpen(false)}
      className={className}
    >
      {children}
    </Link>
  );
};

export const MobileNavToggle = ({ className }: { className?: string }) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } =
    useContext(MobileMenuContext);

  const handleClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={cn(
        'relative z-[70] flex items-center justify-center rounded-full p-3 text-black transition-colors hover:bg-gray-100 lg:hidden',
        className
      )}
      aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMobileMenuOpen}
    >
      <AnimatePresence mode="wait">
        {isMobileMenuOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <X size={40} />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Menu size={40} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export const NavbarLogo = ({ className }: NavbarLogoProps) => {
  return (
    <motion.a
      href="/"
      className={cn('relative z-50 flex h-full items-center gap-3', className)}
      aria-label="Home"
    >
      <Image
        src="/img/ousac_logo.png"
        alt="OUSAC Logo"
        width={180}
        height={80}
        className="h-24 w-auto object-contain"
        priority
      />
      <span
        className={cn(
          'font-display text-4xl font-bold tracking-tight text-black',
          className
        )}
      >
        <span className="md:hidden lg:inline">OUSAC</span>
        <span className="hidden md:inline lg:hidden">OUSAC</span>
      </span>
    </motion.a>
  );
};

export const NavbarDivider = () => {
  return <div className="mx-2 h-6 w-px bg-gray-300" />;
};
