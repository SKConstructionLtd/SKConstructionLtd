'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-step',
        { opacity: 0, scale: 0.5, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.process-image',
        { opacity: 0, x: 100, rotation: 10 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 70%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="process-section py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
            <span className="text-white">Our Building</span>
            <br />
            <span className="text-emerald-500">Process Made Simple</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step text-center">
              <div className="process-image relative w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-xl">
                <Image
                  src={step.image}
                  alt={`London building process step ${idx + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent"></div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>{idx + 1}</span>
                </div>
              </div>
              <h3 className="text-emerald-500 text-2xl font-black mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
