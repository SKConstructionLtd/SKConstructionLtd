'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-white text-xl font-bold mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>SK Construction Ltd</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional construction services from ground preparation to final handover.
              Building quality homes and properties with excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                <a href="tel:+123456789" className="hover:text-emerald-400 transition-colors duration-200">
                  +12 3456789
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                <a href="mailto:info@skconstructionltd.co.uk" className="hover:text-emerald-400 transition-colors duration-200 break-all">
                  info@skconstructionltd.co.uk
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} SK Construction Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
