import React, { useState } from 'react';

const Careers = () => {
  const companyName = "Skyntar";
  
  // State to handle the selected job for the form
  const [selectedRole, setSelectedRole] = useState('');

  // Jobs Data
  const jobs = [
    {
      id: 1,
      title: "Senior AI Research Engineer",
      type: "Remote / Hybrid",
      department: "AI Research",
      description: "We are looking for an expert in Diffusion Models and Transformers to lead our core generative video engine.",
      tags: ["Python", "PyTorch", "CUDA", "Generative AI"]
    },
    {
      id: 2,
      title: "Founding Full-Stack Engineer",
      type: "Jaipur, India",
      department: "Engineering",
      description: "Build the scalable infrastructure and intuitive frontend that powers our video creation studio.",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      id: 3,
      title: "Product Designer (UI/UX)",
      type: "Remote",
      department: "Design",
      description: "Shape the visual identity of Skyntar. You will design interfaces that make complex AI tools feel like magic.",
      tags: ["Figma", "Prototyping", "Design Systems"]
    },
    {
      id: 4,
      title: "Growth & Community Manager",
      type: "Remote",
      department: "Marketing",
      description: "Build and nurture our community of early adopters, creators, and AI enthusiasts.",
      tags: ["Social Media", "Community Building", "Content Strategy"]
    }
  ];

  // Function to handle "Apply Now" click
  const handleApplyClick = (jobTitle) => {
    setSelectedRole(jobTitle);
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle "View Positions" click
  const handleScrollToJobs = (e) => {
    e.preventDefault();
    const jobSection = document.getElementById('open-positions');
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* --- Section 1: Hero --- */}
      <section className="relative bg-fuchsia-50 py-34 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-fuchsia-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-fuchsia-200 text-fuchsia-600 text-sm font-bold mb-6 tracking-wide shadow-sm">
            WE ARE HIRING 🚀
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Build the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-600">
              Generative AI
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            At {companyName}, we aren't just writing code; we're teaching machines to imagine. 
            Join our team of dreamers and builders in Jaipur and across the world.
          </p>
          
          {/* Smooth Scroll Button */}
          <button 
            onClick={handleScrollToJobs}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            View Open Positions
            <ArrowDownIcon className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* --- Section 2: Why Join Us? (Perks) --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Join {companyName}?</h2>
            <p className="text-slate-500 mt-2">More than just a job - it's a mission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PerkCard 
              icon={<RocketIcon className="w-6 h-6" />} 
              color="purple"
              title="High Impact Work" 
              desc="Work on cutting-edge diffusion models. Your code will directly impact how thousands of creators generate content."
            />
            <PerkCard 
              icon={<ChartIcon className="w-6 h-6" />} 
              color="green"
              title="Competitive Equity" 
              desc="We believe in shared ownership. Every early team member gets meaningful stock options in the company."
            />
            <PerkCard 
              icon={<GlobeIcon className="w-6 h-6" />} 
              color="blue"
              title="Flexible Culture" 
              desc="Whether you're in Jaipur or remote, we prioritize output over hours. Work when you feel most creative."
            />
          </div>
        </div>
      </section>

      {/* --- Section 3: Open Positions --- */}
      <section id="open-positions" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Open Positions</h2>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">
              {jobs.length} roles available
            </span>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="group bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-fuchsia-400 transition-all hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  
                  {/* Job Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-fuchsia-600 transition-colors">
                        {job.title}
                      </h3>
                      {job.id === 1 && (
                        <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                          Hot
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1"><BriefcaseIcon className="w-3 h-3" /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPinIcon className="w-3 h-3" /> {job.type}</span>
                    </div>

                    <p className="text-slate-600 mb-4 text-sm leading-relaxed max-w-2xl">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button - Now Scrolls to Form */}
                  <div className="mt-4 md:mt-0 md:self-center">
                    <button 
                      onClick={() => handleApplyClick(job.title)}
                      className="inline-block w-full md:w-auto text-center px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Application Form (NEW) --- */}
      <section id="application-form" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Join the Team</h2>
            <p className="text-slate-500 mt-2">Submit your application below.</p>
          </div>

          <div className="bg-white border-2 border-slate-900 rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Application Sent! (Simulated)"); }}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 transition-all"/>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 transition-all"/>
                </div>
              </div>

              {/* Role Selection (Pre-filled) */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Applying For</label>
                <div className="relative">
                  <select 
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg appearance-none focus:outline-none focus:border-fuchsia-500 transition-all text-slate-600"
                  >
                    <option value="">Select a Role...</option>
                    {jobs.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                    <option value="General Application">General Application</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <ArrowDownIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Portfolio / LinkedIn / GitHub</label>
                <input type="text" placeholder="https://..." className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 transition-all"/>
              </div>


              <div className="pt-4">
                <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

// --- Sub-components & Icons ---

const PerkCard = ({ icon, color, title, desc }) => {
  const bgColors = {
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600"
  };
  
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bgColors[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

const ArrowDownIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>;
const RocketIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
const ChartIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>;
const GlobeIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
const BriefcaseIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const MapPinIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;

export default Careers;