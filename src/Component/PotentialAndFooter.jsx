import React from 'react';
import { Users, Building2, Briefcase, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

const PotentialAndFooter = () => {
  return (
    <section className="pt-20 pb-10 px-4 bg-[#FFF5F7]">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* =========================================
            SECTION 1: LIMITLESS CREATIVE POTENTIAL
           ========================================= */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
            Limitless Creative Potential
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Creators */}
            <div className="bg-white border border-gray-900 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-full border border-gray-200 group-hover:scale-110 transition-transform">
                  <Users size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Creators</h3>
              </div>
              <ul className="space-y-3">
                {['Generate content for social media', 'Bring your stories to life', 'No technical skills required', 'Export in multiple formats'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Studios */}
            <div className="bg-white border border-gray-900 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-100 rounded-full border border-gray-200 group-hover:scale-110 transition-transform">
                  <Building2 size={24} className="text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Studios</h3>
              </div>
              <ul className="space-y-3">
                {['Rapid prototyping & storyboarding', 'Pre-visualization tools', 'Collaborative workflows', 'Enterprise-grade support'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Enterprises */}
            <div className="bg-white border border-gray-900 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-full border border-gray-200 group-hover:scale-110 transition-transform">
                  <Briefcase size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Enterprises</h3>
              </div>
              <ul className="space-y-3">
                {['Custom API integration', 'Branded content at scale', 'Dedicated infrastructure', 'Advanced security features'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        {/* =========================================
            SECTION 2: MISSION STATEMENT (QUOTE)
           ========================================= */}
        <div className="w-full max-w-4xl mx-auto bg-white border border-gray-900 rounded-2xl p-10 md:p-16 text-center shadow-sm relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

          <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            “We believe storytelling should be as easy as typing a sentence.”
          </h3>

          <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
            Founded with a bold vision, <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED</span> is building the future of visual creativity through cutting-edge research in generative video synthesis and scalable AI systems.
          </p>
        </div>


        {/* =========================================
            SECTION 3: BETA ACCESS (NEWSLETTER)
           ========================================= */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Be Among the First to Experience Skyntar.
          </h2>
          <p className="text-gray-600 mb-8">
            Join our early-access program and help shape the future of text-to-video creation.
          </p>

          
        </div>




      </div>
    </section>
  );
};

export default PotentialAndFooter;