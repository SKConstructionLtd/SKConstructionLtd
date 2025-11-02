import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazySection from '@/components/LazySection';
import ServicesAnimations from '@/components/ServicesAnimations';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/services-1.jpg"
            alt="London construction services"
            fill
            className="object-cover"
          />
        </div>
        <ServicesAnimations>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Premier London <span className="text-emerald-400">Construction Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert builders serving Greater London with comprehensive construction solutions from groundwork to final handover. Trusted across Westminster, Kensington, Chelsea, and beyond.
            </p>
          </div>
        </ServicesAnimations>
      </section>

      <div className="services-container">
        <LazySection delay={100}>
          <section className="service-section py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                    New Build House Construction in London
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    We manage every phase of residential construction projects across London, from initial groundwork to final completion. Our experienced team of London builders ensures Building Regulations compliance and exceptional quality throughout your new build project.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                        <CheckCircle className="mr-2" size={24} />
                        Site Preparation & Groundwork Services London
                      </h3>
                      <p className="text-gray-600 ml-8">
                        Professional site clearance, excavation, and groundwork preparation. We handle complex London site conditions including basement excavations, underpinning, and foundation work for all types of construction projects.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                        <CheckCircle className="mr-2" size={24} />
                        Foundations & Structural Work
                      </h3>
                      <p className="text-gray-600 ml-8">
                        Expert foundation construction using steel reinforcement, concrete piling, and underpinning techniques. Our structural engineers ensure compliance with London Building Control requirements for all residential and commercial developments.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                        <CheckCircle className="mr-2" size={24} />
                        Superstructure Build & Roofing London
                      </h3>
                      <p className="text-gray-600 ml-8">
                        Complete brickwork, blockwork, carpentry, and roofing services. We specialize in period property construction, modern extensions, and loft conversions throughout Central London and surrounding boroughs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/services-1.jpg"
                    alt="London house construction and building services"
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
                    alt="London masonry and brickwork services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                    Professional Masonry & Property Refurbishment London
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Premium finishing services for residential and commercial properties across London. Our craftsmen specialize in period restoration, modern renovations, and high-end property refurbishment projects in prestigious London postcodes.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                        <CheckCircle className="mr-2" size={24} />
                        Brickwork & External Rendering London
                      </h3>
                      <p className="text-gray-600 ml-8">
                        Expert brickwork, pointing, stonework restoration, and external rendering for London properties. We work with traditional London stock bricks and modern materials for extensions, boundary walls, and facade refurbishment.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                        <CheckCircle className="mr-2" size={24} />
                        Mechanical, Electrical & Plumbing (MEP) Services
                      </h3>
                      <p className="text-gray-600 ml-8">
                        Complete MEP installations by Gas Safe registered engineers and NICEIC approved electricians. We handle heating systems, rewiring, plumbing upgrades, and smart home installations for London properties.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                        <CheckCircle className="mr-2" size={24} />
                        Interior Finishing & Plastering Services
                      </h3>
                      <p className="text-gray-600 ml-8">
                        Professional plastering, decorating, flooring installation, and joinery work. Specializing in high-specification finishes for luxury London homes, basement conversions, and commercial fit-outs.
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
                  London Driveways, Patios & Landscaping Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Transform your London property's outdoor areas with expertly constructed driveways, patios, and hard landscaping. Serving residential and commercial clients across all London boroughs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">Driveway Design & Planning Permission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Expert consultation for London driveways including dropped kerb applications, planning permission assistance, and designs that complement period and contemporary properties. We ensure compliance with London drainage regulations.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">Excavation & Site Clearance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Professional excavation services for London properties with restricted access. We handle basement dig-outs, garden clearance, and prepare sites for block paving, resin driveways, and patio installations.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">Sub-base & MOT Type 1 Installation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Professional preparation using MOT Type 1 aggregate, proper compaction with vibrating plates, and installation of edge restraints. Essential groundwork for durable London driveways and patios that withstand heavy use.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">Drainage & Soakaway Systems</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Installation of SuDS compliant drainage, soakaways, and channel drains to meet London's strict surface water drainage requirements. We ensure permeable paving solutions for sustainable urban drainage.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">Block Paving, Tarmac & Resin Driveways</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Premium surface installation including Marshall's block paving, porcelain paving, tarmac resurfacing, resin bound driveways, and natural stone. Trusted driveway contractors serving London homes and businesses.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-emerald-600/30 hover:border-emerald-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">Patio Installation & Garden Landscaping</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Expert patio laying with Indian sandstone, porcelain tiles, and natural stone. We create beautiful outdoor living spaces for London gardens including raised patios, steps, and integrated garden lighting.
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
                    Building Control Sign-Off & Project Completion
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Our commitment extends beyond construction completion. We ensure full compliance with London Building Regulations, provide comprehensive documentation, and deliver exceptional aftercare for all construction projects.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">
                        Full Building Regulations compliance inspection and certification from London Building Control or approved inspectors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">
                        Comprehensive warranties including structural guarantees, NHBC warranty, and building insurance documentation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">
                        Complete compliance certificates including electrical safety certificates, gas safety certificates, and energy performance certificates (EPC)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">
                        Detailed project handover with maintenance schedules, supplier contacts, and operational instructions for London homeowners
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">
                        Ongoing support and snagging resolution - we stand behind our London construction work with comprehensive aftercare
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/services-3.jpg"
                    alt="Completed London construction project with building control approval"
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
              Ready to Start Your London Construction Project?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Contact our expert team today for a free consultation and detailed quote. Trusted builders serving all London boroughs including Westminster, Camden, Islington, Hackney, Kensington & Chelsea, and beyond.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Get Your Free London Construction Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </section>
      </LazySection>
    </div>
  );
}