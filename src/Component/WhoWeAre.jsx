import React from 'react';

const WhoWeAre = () => {
  // Maine naam hardcode kar diya hai yahan
  const companyName = "SKYNTAR TECHNOLOGY PRIVATE LIMITED"; 

  return (
    <section className="bg-slate-50 py-16 px-6 md:px-12 lg:px-20 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Section: Who We Are --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              <span className="font-semibold text-indigo-600">{companyName}</span> is a new-generation artificial intelligence startup developing generative video technology that enables users to convert written ideas into cinematic-quality motion clips.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our hybrid diffusion-transformer AI engine brings together creativity and computation - helping creators, filmmakers, educators, and brands visualize stories in seconds.
            </p>

            {/* Quote */}
            <div className="border-l-4 border-indigo-600 pl-4 py-2 bg-white shadow-sm rounded-r-lg">
              <p className="italic text-slate-700 font-medium">
                "At {companyName}, we're not just generating videos - we're redefining visual storytelling."
              </p>
            </div>
          </div>

          {/* Right Icon (Brain Illustration) */}
          <div className="flex justify-center lg:justify-end opacity-80">
            {/* SVG Brain Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-48 h-48 text-slate-400"
            >
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
              <path d="M22 12h-2" />
              <path d="M2 12h2" />
              <path d="M20 18h-2" />
              <path d="M4 18h2" />
              <path d="M20 6h-2" />
              <path d="M4 6h2" />
            </svg>
          </div>
        </div>

        {/* --- Mission & Vision Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* Mission */}
          <div className="bg-purple-50 border border-purple-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <TargetIcon className="w-8 h-8 text-slate-800" />
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              To democratize creative video production through intelligent automation - enabling anyone to transform words into cinematic motion.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-purple-50 border border-purple-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <EyeIcon className="w-8 h-8 text-slate-800" />
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              We envision a world where content creation no longer depends on cameras or studios - but on imagination and AI-driven creativity.
            </p>
          </div>
        </div>

        {/* --- What We're Building Section --- */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What We're Building</h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left max-w-5xl mx-auto mb-16">
            <FeatureItem 
              text="Advanced diffusion & transformer models for motion generation." 
              icon={<DnaIcon />} 
            />
            <FeatureItem 
              text="Improving scene coherence and realism in AI-generated video." 
              icon={<SparklesIcon />} 
            />
            <FeatureItem 
              text="Building GPU-accelerated systems for real-time rendering." 
              icon={<ZapIcon />} 
            />
            <FeatureItem 
              text="Designing ethical and secure AI pipelines for responsible creation." 
              icon={<ShieldIcon />} 
            />
          </div>

          {/* Developing Products */}
          <h4 className="text-lg font-semibold text-slate-800 mb-8">We're currently developing:</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Studio Card */}
            <div className="bg-pink-50 border border-pink-100 p-6 rounded-xl text-left hover:-translate-y-1 transition-transform duration-300 cursor-default">
              <div className="mb-3">
                <MonitorIcon className="w-6 h-6 text-slate-800" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{companyName} Studio</h3>
              <p className="text-slate-600 text-sm mt-1">A web platform for text-to-video creation.</p>
            </div>

            {/* API Card */}
            <div className="bg-pink-50 border border-pink-100 p-6 rounded-xl text-left hover:-translate-y-1 transition-transform duration-300 cursor-default">
              <div className="mb-3">
                <CloudIcon className="w-6 h-6 text-slate-800" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{companyName} API</h3>
              <p className="text-slate-600 text-sm mt-1">An enterprise integration toolkit for creative tools.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Sub-components & Icons ---

const FeatureItem = ({ text, icon }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 text-slate-500">{icon}</div>
    <p className="text-slate-600 font-medium">{text}</p>
  </div>
);

const TargetIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const EyeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
);
const DnaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/></svg>
);
const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 5h4"/><path d="M3 9h4"/></svg>
);
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const MonitorIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
);
const CloudIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"/><path d="M12 13.5v-11"/><path d="M12 2.5a5.5 5.5 0 0 1 5.5 5.5v1.656A6.5 6.5 0 0 1 12 13.5a6.5 6.5 0 0 1-5.5-3.844V8A5.5 5.5 0 0 1 12 2.5Z"/></svg>
);

export default WhoWeAre;