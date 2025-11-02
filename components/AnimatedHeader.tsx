'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedHeader() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
        Step by <span className="text-emerald-400">Step Process</span>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        A detailed breakdown of how we bring your construction projects to life
      </p>
    </div>
  );
}