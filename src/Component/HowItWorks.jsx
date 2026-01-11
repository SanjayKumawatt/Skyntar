import React from 'react';
import { FileText, BrainCircuit, Clapperboard, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText size={32} strokeWidth={1.5} />,
      title: "Script Your Vision",
      description: "Articulate your creative concepts using natural language. Detailed prompts yield the most precise results."
    },
    {
      icon: <BrainCircuit size={32} strokeWidth={1.5} />,
      title: "Neural Analysis",
      description: "Our proprietary AI engine deconstructs your text to understand context, lighting, and physics."
    },
    {
      icon: <Clapperboard size={32} strokeWidth={1.5} />,
      title: "Generative Rendering",
      description: "Watch as high-fidelity video sequences are synthesized in real-time on our cloud infrastructure."
    },
    {
      icon: <Download size={32} strokeWidth={1.5} />,
      title: "Deploy & Share",
      description: "Export your final masterpiece in 4K resolution, ready for broadcast or social media integration."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Experience the seamless workflow of <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED</span>. Four steps to transform abstract ideas into cinematic reality.
          </p>
        </div>

        {/* --- Steps Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full mb-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900 mb-6 bg-transparent group-hover:bg-[#FFF0F5] group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- Example Prompt Box --- */}
        <div className="w-full max-w-4xl bg-[#FFF0F5] border border-gray-900 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                Example Prompt
            </span>
            <p className="font-mono text-lg md:text-xl text-gray-800">
                “<span className="text-purple-600 font-semibold">A futuristic city</span> at sunset with <span className="text-pink-600 font-semibold">drones flying</span> across the skyline, cinematic lighting, 8k resolution.”
            </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;