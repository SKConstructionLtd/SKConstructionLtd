import Image from 'next/image';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import LazySection from '@/components/LazySection';
import AboutAnimations from '@/components/AboutAnimations';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutAnimations>
        <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/our-story/our-story-1.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div data-animate="header" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-emerald-400">SK Construction</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building excellence since our foundation, we've established ourselves as a trusted
              name in construction, delivering quality projects across the UK.
            </p>
          </div>
        </section>

        <LazySection delay={100}>
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      SK Construction Ltd was founded with a vision to deliver exceptional construction
                      services that exceed client expectations. From our humble beginnings, we've grown
                      into a comprehensive construction company capable of handling projects of any scale.
                    </p>
                    <p>
                      Our expertise spans from initial site preparation through to the final handover,
                      ensuring every phase of your construction project is executed with precision and care.
                      We specialize in residential construction, including complete house builds, as well
                      as driveways, patios, and external works.
                    </p>
                    <p>
                      What sets us apart is our commitment to quality craftsmanship, transparent communication,
                      and building lasting relationships with our clients. Every project, regardless of size,
                      receives the same level of dedication and attention to detail.
                    </p>
                  </div>
                </div>
                <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/our-story/our-story-1.jpg"
                    alt="Construction team at work"
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
          <section data-animate="stats" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
                Our Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="stat-card bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">300+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="stat-card bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">200+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="stat-card bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="stat-card bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection delay={300}>
          <section data-animate="values" className="values-section py-20 bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="value-card bg-slate-800 p-8 rounded-lg border border-emerald-600/30">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Quality First</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We never compromise on quality. Every material we use and every technique we employ
                    meets the highest industry standards. Our reputation is built on delivering excellence.
                  </p>
                </div>
                <div className="value-card bg-slate-800 p-8 rounded-lg border border-emerald-600/30">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Integrity & Trust</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Transparency and honesty guide everything we do. We provide accurate quotes, realistic
                    timelines, and keep you informed throughout the entire project lifecycle.
                  </p>
                </div>
                <div className="value-card bg-slate-800 p-8 rounded-lg border border-emerald-600/30">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Safety Priority</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Safety is paramount on all our sites. We maintain rigorous safety protocols and ensure
                    all team members are properly trained and equipped to work safely.
                  </p>
                </div>
                <div className="value-card bg-slate-800 p-8 rounded-lg border border-emerald-600/30">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Customer Focused</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your vision drives our work. We listen carefully to your needs, provide expert guidance,
                    and work collaboratively to bring your construction project to life.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection delay={400}>
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1">
                  <Image
                    src="/images/floor-refurbishment-belgravia/floor-refurbishment-belgravia-6.jpg"
                    alt="Modern construction site"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                    Why Work With Us
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Choosing the right construction partner is crucial for the success of your project.
                      When you work with SK Construction, you're not just hiring contractors – you're
                      gaining a dedicated team committed to realizing your vision.
                    </p>
                    <p>
                      Our experienced professionals bring together technical expertise, creative problem-solving,
                      and meticulous attention to detail. We use the latest construction techniques and
                      quality materials to ensure your project stands the test of time.
                    </p>
                    <p>
                      From the initial consultation through to project completion and beyond, we're here
                      to support you every step of the way. Our comprehensive approach ensures nothing
                      is overlooked, and you can have complete confidence in the final result.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </LazySection>
      </AboutAnimations>
    </div>
  );
}