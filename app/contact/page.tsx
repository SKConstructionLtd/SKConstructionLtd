import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactAnimations from '@/components/ContactAnimations';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactAnimations>
        <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/home/home-2.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="contact-header relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-emerald-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your construction project? Contact us for a free consultation
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="contact-card bg-slate-50 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Mon-Fri from 8am to 6pm</p>
                <a href="tel:+447800909182" className="text-emerald-600 font-semibold text-lg hover:text-emerald-700">
                  +44 7800 909182
                </a>
              </div>

              <div className="contact-card bg-slate-50 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
                <a
                  href="mailto:skdevelopmentandconstruction@gmail.com"
                  className="text-emerald-600 font-semibold hover:text-emerald-700 break-all"
                >
                  skdevelopmentandconstruction@gmail.com
                </a>
              </div>

              <div className="contact-card bg-slate-50 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Serving clients across the UK</p>
                <p className="text-emerald-600 font-semibold">United Kingdom</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Request a Consultation</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours. Let us know
                  your preferred method of contact and the best time to reach you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-slate-900">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-container">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </ContactAnimations>
    </div>
  );
}