'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export default function StepByStepPage() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.step-card',
        { opacity: 0, x: -100, rotationY: -20 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.process-image-card',
        { opacity: 0, scale: 0.8, rotation: 5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 70%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
            Step by <span className="text-emerald-400">Step Process</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A detailed breakdown of how we bring your construction projects to life
          </p>
        </div>
      </section>

      <section className="steps-container py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-600 text-sm font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>COMPLETE HOUSE BUILDING</p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
              House Building Process
            </h2>
          </div>

          <div className="space-y-16">
            <div className="step-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="process-image-card relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                  alt="Site preparation"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>1</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  Site Preparation & Groundwork
                </h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  The foundation of every successful build starts with thorough site preparation. Our team assesses the land, clears vegetation, and prepares the ground for construction.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Site survey and assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Vegetation clearing and debris removal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Ground leveling and excavation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Soil testing and stabilization</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="step-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  Foundations & Substructure
                </h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Strong foundations are critical for the longevity and safety of any building. We use industry-leading techniques to ensure structural integrity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Trench excavation for footings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Concrete pouring and reinforcement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Damp-proof coursing installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Substructure wall construction</span>
                  </li>
                </ul>
              </div>
              <div className="process-image-card relative h-80 rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
                  alt="Foundations"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 right-6 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>2</span>
                </div>
              </div>
            </div>

            <div className="step-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="process-image-card relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                  alt="Superstructure"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>3</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  Superstructure & Roofing
                </h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  The superstructure brings your vision to life. We build the main structure and install a weatherproof roofing system.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Load-bearing wall construction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Floor joist and beam installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Roof truss erection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Tiles, felt, and insulation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="step-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  MEP Works & Services
                </h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Our certified professionals install all mechanical, electrical, and plumbing systems to the highest standards.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Electrical wiring and fittings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Plumbing and drainage systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Heating and ventilation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Gas supply and safety checks</span>
                  </li>
                </ul>
              </div>
              <div className="process-image-card relative h-80 rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                  alt="MEP works"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 right-6 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>4</span>
                </div>
              </div>
            </div>

            <div className="step-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="process-image-card relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
                  alt="Internal finishes"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>5</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  Internal & External Finishes
                </h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  The finishing touches transform a structure into a beautiful, functional home. Attention to detail is paramount.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Plastering and drywalling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Flooring installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Painting and decorating</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">External rendering and cladding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="steps-container py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-600 text-sm font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>DRIVEWAYS & PATIOS</p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
              Driveway & Patio Installation
            </h2>
          </div>

          <div className="space-y-16">
            <div className="step-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="process-image-card relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
                  alt="Planning and design"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>1</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  Planning & Design
                </h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  We work closely with you to design a driveway or patio that complements your property and meets your functional needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Site measurement and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Material selection consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Drainage planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">3D visualization (where applicable)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="step-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  Excavation & Sub-base
                </h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Proper ground preparation is essential for a durable driveway or patio. We excavate to the correct depth and install a stable sub-base.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Excavation to required depth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Geotextile membrane installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">MOT Type 1 sub-base compaction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Edge restraint installation</span>
                  </li>
                </ul>
              </div>
              <div className="process-image-card relative h-80 rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                  alt="Excavation"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 right-6 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>2</span>
                </div>
              </div>
            </div>

            <div className="step-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="process-image-card relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg"
                  alt="Surface installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>3</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  Surface Installation
                </h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  We install your chosen surface material with precision, ensuring a flawless finish that will last for years.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Sharp sand bedding layer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Block paving / tarmac / resin laying</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Cutting and fitting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Plate compaction</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="step-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  Finishing & Sealing
                </h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  The final stage protects your investment and ensures longevity. We apply sealants and perform final checks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Kiln-dried sand jointing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Sealant application</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Final compaction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Site cleanup and inspection</span>
                  </li>
                </ul>
              </div>
              <div className="process-image-card relative h-80 rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
                  alt="Finishing"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 right-6 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and get a detailed quote
          </p>
          <Link href="/contact">
            <button className="group relative bg-white text-emerald-600 px-10 py-5 text-lg font-black overflow-hidden" style={{ fontFamily: 'RF Dewi Extended, sans-serif', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8% 100%)' }}>
              <span className="relative z-10">Get Your Free Quote</span>
              <div className="absolute inset-0 bg-slate-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
