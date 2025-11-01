'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/step-by-step', label: 'Step by Step' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-sm'
          : 'bg-gradient-to-r from-white via-emerald-50/30 to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src="/images/logo/logo.png"
                alt="SK Construction Ltd Logo"
                fill
                className="object-contain"
              />
            </div>
            <span
              className="text-slate-900 font-bold text-lg sm:text-xl"
              style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}
            >
              SK Construction
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <span
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-emerald-600'
                      : 'text-slate-900 group-hover:text-emerald-600'
                  }`}
                  style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
                    isActive(link.href)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded transition-colors duration-200 font-medium ${
                  isActive(link.href)
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'text-slate-900 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
                style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
