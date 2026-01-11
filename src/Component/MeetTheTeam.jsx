import React from 'react';

const MeetTheTeam = () => {
  // Team Data Array - Yahan se details edit kar lena future mein
  const teamMembers = [
    {
      name: "Vikas Atal",
      role: "Director",
      description: "Strategic operations, AI adoption, and business development.",
    },
    {
      name: "Narendra Atal",
      role: "Director",
      description: "Technology leadership and enterprise partnership growth.",
    },
    {
      name: "Ajay Kumar",
      role: "Founder & Product Lead",
      description: "AI system design, diffusion model R&D, and product innovation.",
    },
    {
      name: "Manish Kumar",
      role: "Lead UI/UX Designer",
      description: "Crafting intuitive and beautiful user interfaces for creative AI tools.",
    },
    
  ];

  return (
    <section className="bg-slate-50 py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Meet the Team</h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-fuchsia-50 border border-fuchsia-100 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar Icon */}
              <div className="mb-6 bg-white p-4 rounded-full border border-fuchsia-100 shadow-sm">
                <UserIcon className="w-10 h-10 text-slate-800" />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-indigo-600 font-semibold text-sm mb-4 uppercase tracking-wide">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Icon Component (User Icon) ---
const UserIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default MeetTheTeam;