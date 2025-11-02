import Image from 'next/image';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import LazySection from '@/components/LazySection';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  const faqs = [
    {
      question: 'How long does a typical London house building project take?',
      answer: 'A typical London house building project takes between 12-18 months depending on the size, complexity, and planning permissions. We provide detailed project timelines during our initial consultation and keep you updated throughout every phase of your London construction project.'
    },
    {
      question: 'Do you handle London building regulations and planning permissions?',
      answer: 'Yes, we manage all London planning permissions, building regulations, and compliance requirements. Our team has extensive experience navigating London borough planning applications and ensuring all construction work meets strict London building control standards.'
    },
    {
      question: 'What driveway and patio services do you offer in London?',
      answer: 'Our London driveway and patio services include site survey, excavation, sub-base preparation, drainage installation compliant with London SUDS requirements, material laying, and sealing. We offer block paving, tarmac, resin bound surfaces, and natural stone installations across Greater London.'
    },
    {
      question: 'Do you provide warranties on London construction projects?',
      answer: 'Yes, all our London construction work comes with comprehensive warranties. Structural building work includes a 10-year NHBC-backed warranty, while extensions, loft conversions, and renovation services have warranties ranging from 2-5 years depending on the scope of works.'
    },
    {
      question: 'Can I make changes to my London building project once started?',
      answer: 'Yes, variations can be made during your London construction project. We will assess the impact on timeline, costs, and any planning implications, then provide updated quotations. We maintain clear communication about any project variations throughout your London build.'
    },
    {
      question: 'What are your payment terms for London construction projects?',
      answer: 'We work on a staged payment basis for all London projects, with payments tied to construction milestones. An initial deposit secures your booking, with subsequent payments due at key completion stages. Full payment terms and schedules are provided in your London building contract.'
    }
  ];

  const services = [
    { title: 'London Driveways &\nPatios', number: '01', image: '/images/images/image-5.jpg' },
    { title: 'Carpentry &\nBespoke Joinery', number: '02', image: '/images/images/image-5.jpg' },
    { title: 'London New\nBuilds', number: '03', image: '/images/images/image-3.jpg' },
    { title: 'Loft\nConversions', number: '04', image: '/images/images/image-3.jpg' },
    { title: 'Plastering &\nRendering', number: '05', image: '/images/images/image-5.jpg' },
    { title: 'Electrical\nServices', number: '06', image: '/images/images/image-3.jpg' }
  ];

  const processSteps = [
    {
      title: 'Initial Consultation',
      description: 'Contact our London builders via phone, email, or enquiry form. We discuss your construction project requirements and arrange a site visit.',
      image: '/images/home/home-1.jpg'
    },
    {
      title: 'Detailed Quote',
      description: 'Our experienced estimators assess your London property and provide a detailed, competitive quote within 24 hours, outlining all building work costs.',
      image: '/images/home/home-2.jpg'
    },
    {
      title: 'Professional Build',
      description: 'Our skilled London construction team begins work, adhering to all building regulations, using proper safety equipment, and delivering exceptional craftsmanship.',
      image: '/images/home/home-3.jpg'
    },
    {
      title: 'Final Inspection',
      description: 'A site manager conducts a thorough inspection with you, ensuring every aspect of your London building project meets our exacting quality standards.',
      image: '/images/home/home-4.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Cyril Lucas, South London',
      text: 'I hired these London builders for my large driveway that was damaged by flooding. The team provided a reasonable quote and completed fantastic work. Their communication throughout the project was exceptional.'
    },
    {
      name: 'Sarah Mitchell, West London',
      text: 'We hired these London builders for a complete loft conversion and couldn\'t be happier. The building work is outstanding and they completed everything on time within budget. Highly professional construction team.'
    },
    {
      name: 'James Patterson, North London',
      text: 'Exceptional London building service throughout our new build project. The attention to detail and quality of construction work exceeded expectations. They handled all planning permissions and kept us informed at every stage.'
    }
  ];

  return (
    <div className="pt-20 bg-gray-50">
      <HeroSection />

      <LazySection delay={100}>
        <ServicesSection services={services} />
      </LazySection>

      <LazySection delay={200}>
        <ProcessSection steps={processSteps} />
      </LazySection>

      <LazySection delay={300}>
        <TestimonialsSection testimonials={testimonials} />
      </LazySection>

      <LazySection delay={400}>
        <FAQSection faqs={faqs} />
      </LazySection>

      <LazySection delay={500}>
        <section className="py-20 bg-emerald-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ fontFamily: 'RF Dewi Extended, sans-serif' }}>
              Ready to Start Your London Building Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our expert London builders today for a free consultation and competitive quote. Let's transform your property with professional construction services.
            </p>
            <Link href="/contact">
              <button className="group relative bg-white text-emerald-600 px-10 py-5 text-lg font-black overflow-hidden" style={{ fontFamily: 'RF Dewi Extended, sans-serif', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8% 100%)' }}>
                <span className="relative z-10">Contact London Builders</span>
                <div className="absolute inset-0 bg-slate-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </Link>
          </div>
        </section>
      </LazySection>
    </div>
  );
}
