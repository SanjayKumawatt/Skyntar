import React from 'react';
import { FileText, Cpu, Film, Video, ArrowRight, Mail, Globe, MapPin, User } from 'lucide-react';

const DemoDetailsAndContact = () => {
  return (
    <section className="py-20 px-4 bg-[#FFF0F5]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* =========================================
            SECTION 1: HOW SKYNTAR CREATES MOTION (Process)
           ========================================= */}
        <div className="w-full bg-white border border-gray-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                How SKYNTAR Creates Motion.
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                Our proprietary model learns context, lighting, and camera dynamics from text to render motion sequences.
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                {/* Connecting Line (Desktop Only) */}
                <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                {[
                    { icon: <FileText size={24}/>, label: "Text Input" },
                    { icon: <Cpu size={24}/>, label: "AI Engine" },
                    { icon: <Film size={24}/>, label: "Frame Generator" },
                    { icon: <Video size={24}/>, label: "Render Output" }
                ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center bg-white px-4">
                        <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center bg-white text-gray-900 mb-3 shadow-sm hover:scale-110 transition-transform duration-300">
                            {step.icon}
                        </div>
                        <span className="text-sm font-bold text-gray-900">{step.label}</span>
                    </div>
                ))}
            </div>
        </div>


        {/* =========================================
            SECTION 2: PERFORMANCE TABLE & TESTIMONIALS (Grid)
           ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left: Performance Table (Span 2) */}
            <div className="lg:col-span-2 bg-white border border-gray-900 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Performance at Every Frame.</h3>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-xs font-bold text-gray-500 uppercase border-b border-gray-100">
                                <th className="py-3 pr-4">Version</th>
                                <th className="py-3 pr-4">Speed</th>
                                <th className="py-3 pr-4">Resolution</th>
                                <th className="py-3">Quality</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-gray-50 group hover:bg-gray-50 transition-colors">
                                <td className="py-4 font-semibold text-gray-900">v1.0 (Beta)</td>
                                <td className="py-4 text-gray-600">8 sec per sec of video</td>
                                <td className="py-4 text-gray-600">720p</td>
                                <td className="py-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">High</span></td>
                            </tr>
                            <tr className="border-b border-gray-50 group hover:bg-gray-50 transition-colors">
                                <td className="py-4 font-semibold text-gray-900">v1.2 (Optimized)</td>
                                <td className="py-4 text-gray-600">5 sec per sec</td>
                                <td className="py-4 text-gray-600">1080p</td>
                                <td className="py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Very High</span></td>
                            </tr>
                            <tr className="group hover:bg-gray-50 transition-colors">
                                <td className="py-4 font-semibold text-gray-900">v2.0 (Studio Build)</td>
                                <td className="py-4 text-gray-600">3 sec per sec</td>
                                <td className="py-4 text-gray-600">4K HDR</td>
                                <td className="py-4"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">Cinematic</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Right: Testimonials (Span 1) */}
            <div className="flex flex-col gap-6">
                {/* Testimonial 1 */}
                <div className="bg-white border border-gray-900 rounded-2xl p-6 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-700 italic mb-4">
                        “This is the closest thing to describing a movie and watching it appear in real time.”
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-full"><User size={16}/></div>
                        <div>
                            <p className="text-xs font-bold text-gray-900">Early Beta User</p>
                            <p className="text-[10px] text-gray-500">Filmmaker</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white border border-gray-900 rounded-2xl p-6 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-700 italic mb-4">
                        “Incredible coherence — every frame feels like part of a story.”
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-full"><User size={16}/></div>
                        <div>
                            <p className="text-xs font-bold text-gray-900">AI Researcher</p>
                            <p className="text-[10px] text-gray-500">India</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        {/* =========================================
            SECTION 3: CTA & CONTACT
           ========================================= */}
        <div className="text-center pt-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
                Be Among the First to Create.
            </h2>
            <p className="text-gray-600 mb-8">
                We're inviting early adopters to test our beta. Request access to get started.
            </p>
            
            <button className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-purple-600 transition-colors mb-16">
                Join Beta Access <ArrowRight size={16} />
            </button>

            {/* Contact Box */}
            <div className="w-full bg-white border border-gray-900 rounded-2xl p-8 flex flex-col items-center justify-center gap-6 md:flex-row md:justify-around">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-gray-900">Contact the Demo Team.</h3>
                    <p className="text-sm text-gray-500 mt-1">Need help or custom integration? Let's collaborate.</p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                        <Mail size={16} className="text-gray-400"/> demo@skyntar.in
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe size={16} className="text-gray-400"/> www.skyntar.in
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400"/> Jaipur, Rajasthan, India
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DemoDetailsAndContact;