import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import AnimatedHeader from '@/components/AnimatedHeader';
import AnimatedStepCard from '@/components/AnimatedStepCard';

export default function StepByStepPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/setting-out/setting-out-1.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <AnimatedHeader />
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
            <AnimatedStepCard
              imageSrc="/images/setting-out/setting-out-1.jpg"
              imageAlt="Site preparation"
              stepNumber={1}
              imagePosition="left"
              title="Site Preparation & Groundwork"
              description="The foundation of every successful build starts with thorough site preparation. Our team assesses the land, clears vegetation, and prepares the ground for construction."
              features={[
                'Site survey and assessment',
                'Vegetation clearing and debris removal',
                'Ground leveling and excavation',
                'Soil testing and stabilization'
              ]}
            />

            <AnimatedStepCard
              imageSrc="/images/step-by-step/step-by-step-2.jpg"
              imageAlt="Foundations"
              stepNumber={2}
              imagePosition="right"
              title="Foundations & Substructure"
              description="Strong foundations are critical for the longevity and safety of any building. We use industry-leading techniques to ensure structural integrity."
              features={[
                'Trench excavation for footings',
                'Concrete pouring and reinforcement',
                'Damp-proof coursing installation',
                'Substructure wall construction'
              ]}
            />

            <AnimatedStepCard
              imageSrc="/images/roofing/roofing-9.jpg"
              imageAlt="Superstructure"
              stepNumber={3}
              imagePosition="left"
              title="Superstructure & Roofing"
              description="The superstructure brings your vision to life. We build the main structure and install a weatherproof roofing system."
              features={[
                'Load-bearing wall construction',
                'Floor joist and beam installation',
                'Roof truss erection',
                'Tiles, felt, and insulation'
              ]}
            />

            <AnimatedStepCard
              imageSrc="/images/step-by-step/step-by-step-4.jpg"
              imageAlt="MEP works"
              stepNumber={4}
              imagePosition="right"
              title="MEP Works & Services"
              description="Our certified professionals install all mechanical, electrical, and plumbing systems to the highest standards."
              features={[
                'Electrical wiring and fittings',
                'Plumbing and drainage systems',
                'Heating and ventilation',
                'Gas supply and safety checks'
              ]}
            />

            <AnimatedStepCard
              imageSrc="/images/step-by-step/step-by-step-5.jpg"
              imageAlt="Internal finishes"
              stepNumber={5}
              imagePosition="left"
              title="Internal & External Finishes"
              description="The finishing touches transform a structure into a beautiful, functional home. Attention to detail is paramount."
              features={[
                'Plastering and drywalling',
                'Flooring installation',
                'Painting and decorating',
                'External rendering and cladding'
              ]}
            />
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
            <AnimatedStepCard
              imageSrc="/images/step-by-step/step-by-step-6.jpg"
              imageAlt="Planning and design"
              stepNumber={1}
              imagePosition="left"
              title="Planning & Design"
              description="We work closely with you to design a driveway or patio that complements your property and meets your functional needs."
              features={[
                'Site measurement and analysis',
                'Material selection consultation',
                'Drainage planning',
                '3D visualization (where applicable)'
              ]}
            />

            <AnimatedStepCard
              imageSrc="/images/step-by-step/step-by-step-7.jpg"
              imageAlt="Excavation"
              stepNumber={2}
              imagePosition="right"
              title="Excavation & Sub-base"
              description="Proper ground preparation is essential for a durable driveway or patio. We excavate to the correct depth and install a stable sub-base."
              features={[
                'Excavation to required depth',
                'Geotextile membrane installation',
                'MOT Type 1 sub-base compaction',
                'Edge restraint installation'
              ]}
            />

            <AnimatedStepCard
              imageSrc="/images/step-by-step/step-by-step-8.jpg"
              imageAlt="Surface installation"
              stepNumber={3}
              imagePosition="left"
              title="Surface Installation"
              description="We install your chosen surface material with precision, ensuring a flawless finish that will last for years."
              features={[
                'Sharp sand bedding layer',
                'Block paving / tarmac / resin laying',
                'Cutting and fitting',
                'Plate compaction'
              ]}
            />

            <AnimatedStepCard
              imageSrc="/images/step-by-step/step-by-step-9.jpg"
              imageAlt="Finishing"
              stepNumber={4}
              imagePosition="right"
              title="Finishing & Sealing"
              description="The final stage protects your investment and ensures longevity. We apply sealants and perform final checks."
              features={[
                'Kiln-dried sand jointing',
                'Sealant application',
                'Final compaction',
                'Site cleanup and inspection'
              ]}
            />
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