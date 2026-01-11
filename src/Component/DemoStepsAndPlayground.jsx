import React from 'react';
import { PenTool, Zap, Download, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DemoStepsAndPlayground = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <PenTool size={24} />,
      title: "Enter a prompt",
      desc: "Describe your idea in one sentence. Be as descriptive as you like."
    },
    {
      icon: <Zap size={24} />,
      title: "Click 'Generate'",
      desc: "Our AI interprets the text and creates the motion frames instantly."
    },
    {
      icon: <Download size={24} />,
      title: "Preview or download",
      desc: "Watch the generated video right in your browser or export it."
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop", // City
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", // Earth
    "https://images.unsplash.com/photo-1495616811223-4d98c6e9d869?q=80&w=800&auto=format&fit=crop"  // Sunset
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* =========================================
            SECTION 1: SEE HOW EASY IT IS (STEPS)
           ========================================= */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              See How Easy It Is
            </h2>
            <p className="text-gray-500 mt-2">Create your own video in just a few clicks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#FFF0F5] border border-gray-900 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gray-900">{step.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* =========================================
            SECTION 2: FEATURED EXAMPLE BOX
           ========================================= */}
        <div className="w-full bg-[#FFF0F5] border border-gray-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
            
            {/* Left: Text Prompt */}
            <div className="flex-1 text-left space-y-4">
                <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                    Example Prompt:
                </span>
                <p className="font-mono text-lg md:text-xl text-purple-700 font-medium leading-relaxed bg-white/50 p-4 rounded-lg border border-purple-100">
                    “A cyberpunk city at night with flying cars and glowing neon billboards.”
                </p>
            </div>

            {/* Right: Image Result */}
            <div className="flex-1 w-full">
                <img 
                    src="https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=800&auto=format&fit=crop" 
                    alt="Cyberpunk City" 
                    className="w-full h-[250px] object-cover rounded-lg shadow-md transform hover:scale-[1.02] transition-transform duration-500"
                />
            </div>
        </div>


        {/* =========================================
            SECTION 3: GALLERY GRID
           ========================================= */}
        <div>
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Text Prompts <span className="mx-2">→</span> Generated Videos
                </h2>
                <p className="text-gray-500 mt-2 text-sm">Real examples generated using <span className="font-bold">SKYNTAR</span> prototype engine.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImages.map((img, i) => (
                    <div key={i} className="group overflow-hidden rounded-xl border border-gray-900 relative h-48 cursor-pointer">
                        <img 
                            src={img} 
                            alt={`Example ${i}`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                ))}
            </div>
        </div>


        {/* =========================================
            SECTION 4: INTERACTIVE PLAYGROUND (Coming Soon)
            (This has the ID 'demo-input' for scrolling)
           ========================================= */}
        <div id="demo-input" className="text-center pt-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Generate Your First Clip.
            </h2>
            <p className="text-gray-600 mb-8">
                Type your idea below and see the output instantly.
            </p>

            {/* Dashed Box Placeholder */}
            <div className="max-w-3xl mx-auto bg-[#FFF0F5] border-2 border-dashed border-gray-900 rounded-xl h-48 flex flex-col items-center justify-center gap-4 relative overflow-hidden group hover:bg-[#ffe6ef] transition-colors">
                
                <Lock size={32} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                
                <p className="text-gray-500 font-medium group-hover:text-gray-700 transition-colors">
                    Interactive demo coming soon.
                </p>

                {/* Optional: Blurry background elements to make it look "active but locked" */}
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
            </div>

            {/* Beta Link */}
            <div className="mt-6">
                <button 
                    onClick={() => navigate('/contact')}
                    className="text-sm font-bold text-gray-900 hover:text-purple-600 transition-colors flex items-center justify-center gap-1 mx-auto"
                >
                    Want early access? <span className="underline">Join Beta →</span>
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DemoStepsAndPlayground;