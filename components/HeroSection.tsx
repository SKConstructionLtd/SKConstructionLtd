'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100, rotationX: -20 },
        { opacity: 1, x: 0, rotationX: 0, duration: 1.2, ease: 'power3.out' }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.2, delay: 0.3, ease: 'power3.out' }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'back.out(1.7)' }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, rotation: -5 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.2, delay: 0.4, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 z-10">
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 leading-none"
              style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}
            >
              SK
              <span className="block text-emerald-600">Builders</span>
              <span className="block">From Ground</span>
              <span className="block">to Finish</span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-slate-700 mb-8 max-w-xl leading-relaxed"
              style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}
            >
              Professional construction company serving London and surrounding areas. Expert builders specializing in residential extensions, new builds, loft conversions, and groundworks.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="group relative bg-emerald-600 text-white px-8 py-4 text-lg font-bold overflow-hidden" style={{ fontFamily: 'RF Dewi Extended, sans-serif', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8% 100%)' }}>
                  <span className="relative z-10">Get a Free Quote</span>
                  <div className="absolute inset-0 bg-emerald-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </Link>
              <Link href="/about">
                <button className="group relative border-2 border-slate-900 text-slate-900 px-8 py-4 text-lg font-bold overflow-hidden hover:text-white" style={{ fontFamily: 'RF Dewi Extended, sans-serif', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8% 100%)' }}>
                  <span className="relative z-10 flex items-center">
                    About Our Builders
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-slate-900 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </Link>
            </div>
          </div>
          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              {heroImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`London construction site ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  quality={85}
                />
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-emerald-600 w-8'
                      : 'bg-gray-400'
                  }`}
                  aria-label={`View London construction image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
