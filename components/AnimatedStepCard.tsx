'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedStepCardProps {
  imageSrc: string;
  imageAlt: string;
  stepNumber: number;
  imagePosition: 'left' | 'right';
  title: string;
  description: string;
  features: string[];
}

export default function AnimatedStepCard({
  imageSrc,
  imageAlt,
  stepNumber,
  imagePosition,
  title,
  description,
  features
}: AnimatedStepCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: -100, rotationY: -20 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, rotation: 5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 70%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const isLeft = imagePosition === 'left';

  return (
    <div ref={cardRef} className="step-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div 
        ref={imageRef}
        className={`process-image-card relative h-80 rounded-3xl overflow-hidden shadow-2xl ${
          isLeft ? '' : 'order-1 lg:order-2'
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        <div className={`absolute top-6 ${isLeft ? 'left-6' : 'right-6'} w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center`}>
          <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>{stepNumber}</span>
        </div>
      </div>
      <div className={isLeft ? '' : 'order-2 lg:order-1'}>
        <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
          {title}
        </h3>
        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}