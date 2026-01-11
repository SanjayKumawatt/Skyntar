import React from 'react';
import { Sparkles, Film, Zap, Wand2 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      title: "AI-Core Intelligence",
      description: "Advanced generative neural networks craft breathtaking visuals directly from your raw text inputs."
    },
    {
      icon: <Film size={32} strokeWidth={1.5} />,
      title: "Studio-Grade Cinema",
      description: "Achieve professional lighting, camera composition, and motion without needing a physical set."
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: "Instant Rendering",
      description: "Generate high-definition video sequences in seconds, not hours. Speed meets creativity."
    },
    {
      icon: <Wand2 size={32} strokeWidth={1.5} />,
      title: "Seamless Workflow",
      description: "An intuitive interface designed for storytellers to create videos effortlessly and enjoyably."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            The Next Generation of Video Production - <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Powered by Intelligence.
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED</span> empowers creators, filmmakers, and educators to produce short, high-fidelity videos simply by typing prompts.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-[#FFF5F7] border border-gray-900 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-6 p-3 rounded-full bg-white border border-gray-200 text-gray-900 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;