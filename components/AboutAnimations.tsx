'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutAnimationsProps {
  children: ReactNode;
}

export default function AboutAnimations({ children }: AboutAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      const header = containerRef.current?.querySelector('[data-animate="header"]');
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
      }

      // Stats cards animation
      const statsSection = containerRef.current?.querySelector('[data-animate="stats"]');
      if (statsSection) {
        gsap.fromTo(
          statsSection.querySelectorAll('.stat-card'),
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: statsSection,
              start: 'top 80%',
            },
          }
        );
      }

      // Values cards animation
      const valuesSection = containerRef.current?.querySelector('[data-animate="values"]');
      if (valuesSection) {
        gsap.fromTo(
          valuesSection.querySelectorAll('.value-card'),
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: valuesSection,
              start: 'top 80%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}