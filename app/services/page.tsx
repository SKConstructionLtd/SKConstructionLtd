'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazySection from '@/components/LazySection';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.service-section',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-container',
            start: 'top 80%',
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
            src="/images/services/services-1.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div ref={headerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-emerald-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction solutions from ground preparation to final handover
          </p>
        </div>
      </section>

      <div className="services-container">
        <LazySection delay={100}>
          <section className="service-section py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Complete House Building
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We manage every phase of residential construction, from breaking ground to handing
                  over the keys. Our comprehensive service ensures quality and consistency throughout.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                      <CheckCircle className="mr-2" size={24} />
                      Site Preparation & Groundwork
                    </h3>
                    <p className="text-gray-600 ml-8">
                      Thorough site assessment, clearing, and preparation to ensure a solid foundation
                      for your construction project.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                      <CheckCircle className="mr-2" size={24} />
                      Foundations & Substructure
                    </h3>
                    <p className="text-gray-600 ml-8">
                      Expert foundation work using industry-leading techniques to ensure structural
                      integrity and longevity.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                      <CheckCircle className="mr-2" size={24} />
                      Superstructure & Roofing
                    </h3>
                    <p className="text-gray-600 ml-8">
                      Building the main structure and roof system with precision, quality materials,
                      and attention to weatherproofing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/services-1.jpg"
                  alt="House construction site"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </section>
        </LazySection>

        <LazySection delay={200}>
          <section className="service-section py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image
                  src="/images/services/services-2.jpg"
                  alt="Masonry work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Masonry & Finishes
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Professional finishing work that brings your property to life with exceptional
                  craftsmanship and attention to detail.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                      <CheckCircle className="mr-2" size={24} />
                      Masonry & External Finishes
                    </h3>
                    <p className="text-gray-600 ml-8">
                      High-quality brickwork, stonework, and external cladding that enhances both
                      aesthetics and durability.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                      <CheckCircle className="mr-2" size={24} />
                      MEP Works
                    </h3>
                    <p className="text-gray-600 ml-8">
                      Complete mechanical, electrical, and plumbing installations by certified
                      professionals meeting all regulations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                      <CheckCircle className="mr-2" size={24} />
                      Internal Finishes
                    </h3>
                    <p className="text-gray-600 ml-8">
                      Plastering, painting, flooring, and final touches that transform spaces into
                      beautiful, livable homes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </LazySection>

        <LazySection delay={300}>
          <section className="service-section py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Driveways & Patios
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your outdoor spaces with expertly constructed driveways and patios
                built to last
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Planning & Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  Expert consultation to understand your vision, assess site conditions, and create
                  a design that complements your property.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Site Preparation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Thorough site clearing and excavation to the correct depth, ensuring proper
                  drainage and a stable base.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Sub-base Installation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional preparation of the sub-base layer with proper compaction and edge
                  restraints for long-term stability.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Drainage Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Installation of effective drainage systems to prevent water accumulation and
                  ensure longevity of your driveway or patio.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Surface Laying</h3>
                <p className="text-gray-300 leading-relaxed">
                  Precision installation of your chosen surface material - block paving, tarmac,
                  concrete, or natural stone.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Finishing Touches</h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional jointing, compaction, and sealing to ensure a flawless finish and
                  maximum durability.
                </p>
              </div>
            </div>
          </div>
        </section>
        </LazySection>

        <LazySection delay={400}>
          <section className="service-section py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Final Inspection & Handover
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our commitment to quality doesn't end with construction. We conduct thorough
                  inspections and provide comprehensive handover documentation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">
                      Comprehensive quality checks across all aspects of the project
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">
                      Detailed documentation including warranties and maintenance guidelines
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">
                      Full compliance certification with building regulations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">
                      Walkthrough with client to ensure complete satisfaction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">
                      Ongoing support and aftercare services
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/services-3.jpg"
                  alt="Completed construction project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        </LazySection>
      </div>

      <LazySection delay={500}>
        <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Contact us today for a detailed consultation and free quote tailored to your needs
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Get Your Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
      </LazySection>
    </div>
  );
}
