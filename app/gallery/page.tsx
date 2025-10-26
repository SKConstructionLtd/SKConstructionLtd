'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { X } from 'lucide-react';
import LazySection from '@/components/LazySection';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    alt: 'Construction site foundation work',
    category: 'House Building',
  },
  {
    src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    alt: 'Modern construction project',
    category: 'House Building',
  },
  {
    src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    alt: 'Completed residential property',
    category: 'Completed Projects',
  },
  {
    src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    alt: 'Construction workers on site',
    category: 'House Building',
  },
  {
    src: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg',
    alt: 'Building under construction',
    category: 'House Building',
  },
  {
    src: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
    alt: 'Modern driveway installation',
    category: 'Driveways & Patios',
  },
  {
    src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    alt: 'Exterior finishing work',
    category: 'External Finishes',
  },
  {
    src: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg',
    alt: 'Patio construction',
    category: 'Driveways & Patios',
  },
  {
    src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    alt: 'Roofing work in progress',
    category: 'Roofing',
  },
];

export default function GalleryPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'House Building', 'Driveways & Patios', 'Completed Projects', 'External Finishes', 'Roofing'];

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [filter]);

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div ref={headerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Project <span className="text-emerald-400">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects showcasing quality craftsmanship
          </p>
        </div>
      </section>

      <LazySection delay={100}>
        <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      </LazySection>

      <LazySection delay={200}>
        <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg">{image.alt}</p>
                    <p className="text-emerald-400 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </LazySection>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="text-white font-semibold text-2xl mb-2">
                {filteredImages[selectedImage].alt}
              </p>
              <p className="text-emerald-400 text-lg">
                {filteredImages[selectedImage].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
