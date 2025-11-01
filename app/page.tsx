'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Plus, Minus } from 'lucide-react';
import LazySection from '@/components/LazySection';

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
];

const processImages = [
  '/images/home/home-1.jpg',
  '/images/home/home-2.jpg',
  '/images/home/home-3.jpg',
  '/images/home/home-4.jpg',
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.faq-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.faq-section',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: 'How long does a typical house building project take?',
      answer: 'A typical house building project takes between 12-18 months depending on the size and complexity. We provide detailed timelines during our initial consultation and keep you updated throughout every phase.'
    },
    {
      question: 'Do you handle all necessary permits and regulations?',
      answer: 'Yes, we manage all permits, building regulations, and compliance requirements. Our team has extensive experience navigating planning permissions and ensuring all work meets UK building standards.'
    },
    {
      question: 'What is included in your driveway and patio services?',
      answer: 'Our driveway and patio services include site survey, excavation, sub-base preparation, drainage installation, material laying, and sealing. We offer various materials including block paving, tarmac, resin, and natural stone.'
    },
    {
      question: 'Do you provide warranties on your work?',
      answer: 'Yes, all our work comes with comprehensive warranties. Structural work includes a 10-year warranty, while other services have warranties ranging from 2-5 years depending on the type of work completed.'
    },
    {
      question: 'Can I make changes to the project once it has started?',
      answer: 'Yes, changes can be made during the project. We will assess the impact on timeline and budget, then provide you with updated quotations. We always maintain clear communication about any variations.'
    },
    {
      question: 'What payment terms do you offer?',
      answer: 'We typically work on a staged payment basis, with payments tied to project milestones. An initial deposit secures your booking, with subsequent payments due at key completion stages. Full details are provided in your contract.'
    }
  ];

  const services = [
    { title: 'Driveways &\nPatios', number: '01', image: '/images/images/image-5.jpg' },
    { title: 'Carpentry &\nBespoke Joinery', number: '02', image: '/images/images/image-5.jpg' },
    { title: 'New\nBuilds', number: '03', image: '/images/images/image-3.jpg' },
    { title: 'Loft\nConversions', number: '04', image: '/images/images/image-3.jpg' },
    { title: 'Plastering', number: '05', image: '/images/images/image-5.jpg' },
    { title: 'Electrical', number: '06', image: '/images/images/image-3.jpg' }
  ];

  return (
    <div className="pt-20 bg-gray-50">
      <section ref={heroRef} className="relative py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 z-10">
              <h1
                ref={titleRef}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 leading-none"
                style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}
              >
                Building
                <span className="block text-emerald-600">Quality</span>
                <span className="block">From Ground</span>
                <span className="block">to Finish</span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-lg md:text-xl text-slate-700 mb-8 max-w-xl leading-relaxed"
                style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}
              >
                Professional construction services for residential and commercial projects
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
                      Read More
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
                    alt={`Construction site ${index + 1}`}
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
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LazySection delay={100}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-16">
              <p className="text-amber-600 text-sm font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>OUR SERVICES</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                What Can We<br />Offer?
              </h2>
              <p className="text-lg text-slate-600 mt-4 max-w-2xl">
                We provide a wide range of construction and renovation services, including:
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
                To see all projects we undertake checkout our gallery
              </p>
              <Link href="/gallery">
                <button className="group relative bg-emerald-600 text-white px-8 py-4 text-lg font-bold overflow-hidden" style={{ fontFamily: 'RF Dewi Extended, sans-serif', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8% 100%)' }}>
                  <span className="relative z-10 flex items-center justify-center">
                    View Gallery
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-emerald-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection delay={200}>
        <section className="process-section py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                <span className="text-white">We've made it</span>
                <br />
                <span className="text-emerald-500">even easier</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((num, idx) => (
                <div key={num} className="process-step text-center">
                  <div className="process-image relative w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-xl">
                    <Image
                      src={processImages[idx]}
                      alt={`Process step ${num}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl font-black" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>{num}</span>
                    </div>
                  </div>
                  <h3 className="text-emerald-500 text-2xl font-black mb-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                    {['The Enquiry', 'The Quote', 'The Work', 'The Review'][idx]}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {[
                      'Simply give us a call, email or fill in the enquiry box below to find out more and get the quote you need for your job.',
                      "We'll have a meeting to work out your needs and give you a quote within the next 24 hours ensuring your project is a priority.",
                      'Our award-winning workforce gets to work, ensuring the highest quality and correct PPE is always in place across the job.',
                      'Once the job is complete, one of our site managers will review the work with you and ensure smooth completion, everytime.'
                    ][idx]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection delay={300}>
        <section className="testimonials-section py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                But don't take
                <br />
                <span className="text-emerald-600">our word for it</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="testimonial-card bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-emerald-500 fill-emerald-500" size={20} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  I have a large driveway that was completely wrecked by flooding and the WH Groundworks team quoted reasonable, and have done a fantastic job. As well as doing a great job, we were most pleased with their communication.
                </p>
                <p className="text-emerald-600 font-black text-lg" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  Cyril Lucas
                </p>
              </div>

              <div className="testimonial-card bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-emerald-500 fill-emerald-500" size={20} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  We hired them for a complete loft conversion and couldn't be happier with the results. The craftsmanship is outstanding and they completed everything on time and within budget. Highly professional team from start to finish.
                </p>
                <p className="text-emerald-600 font-black text-lg" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  Sarah Mitchell
                </p>
              </div>

              <div className="testimonial-card bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-emerald-500 fill-emerald-500" size={20} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Exceptional service throughout our new build project. The attention to detail and quality of workmanship exceeded our expectations. They handled everything professionally and kept us informed every step of the way.
                </p>
                <p className="text-emerald-600 font-black text-lg" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                  James Patterson
                </p>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection delay={400}>
        <section className="faq-section py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                Frequently Asked
                <br />
                <span className="text-emerald-600">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item bg-gray-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-emerald-600 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-bold text-slate-900 pr-4" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      {openFaqIndex === index ? (
                        <Minus className="text-white" size={20} />
                      ) : (
                        <Plus className="text-white" size={20} />
                      )}
                    </div>
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-8 pb-6">
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection delay={500}>
        <section className="py-20 bg-emerald-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let's bring your vision to life.
            </p>
            <Link href="/contact">
              <button className="group relative bg-white text-emerald-600 px-10 py-5 text-lg font-black overflow-hidden" style={{ fontFamily: 'RF Dewi Extended, sans-serif', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8% 100%)' }}>
                <span className="relative z-10">Request a Quote</span>
                <div className="absolute inset-0 bg-slate-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </Link>
          </div>
        </section>
      </LazySection>
    </div>
  );
}