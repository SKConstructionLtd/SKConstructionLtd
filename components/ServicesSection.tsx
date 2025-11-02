'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  number: string;
  image: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 60, rotationY: -15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <p className="text-amber-600 text-sm font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>LONDON CONSTRUCTION SERVICES</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
            Expert London Builders<br />Offering Premium Services
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl">
            We provide comprehensive building and construction services across London, including house extensions, new builds, loft conversions, driveways, and complete renovations.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="service-card relative group">
              <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg bg-gradient-to-br from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/80 text-xs font-bold mb-2" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>{service.number}</p>
                  <h3 className="text-white text-2xl font-black whitespace-pre-line" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                    {service.title}
                  </h3>
                </div>
                <div className="absolute top-8 right-8 text-white/10 text-9xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  {service.number}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-700 text-lg mb-6" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
            View our portfolio of completed London building projects in our gallery
          </p>
          <Link href="/gallery">
            <button className="group relative bg-emerald-600 text-white px-8 py-4 text-lg font-bold overflow-hidden" style={{ fontFamily: 'RF Dewi Extended, sans-serif', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8% 100%)' }}>
              <span className="relative z-10 flex items-center justify-center">
                View London Projects
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </span>
              <div className="absolute inset-0 bg-emerald-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}