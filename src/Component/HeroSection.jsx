import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Play, Lightbulb, Rocket } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleDemoClick = () => navigate('/demo');
  const handleLearnMoreClick = () => navigate('/about');
  const handleBetaClick = () => navigate('/contact');

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#FFF0F5] overflow-hidden pt-20">
      
      {/* =========================================
          BACKGROUND ROTATING EARTH ANIMATION 
          (Size and opacity kept subtle to match original)
      ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="relative flex items-center justify-center opacity-40 animate-[spin_40s_linear_infinite]">
            <div className="absolute w-[200px] h-[200px] bg-purple-400/30 blur-[100px] rounded-full"></div>
            <div className="absolute w-[800px] h-[800px] rounded-full border border-dotted border-purple-300/60"></div>
             <div className="absolute w-[750px] h-[750px] rounded-full border border-dashed border-pink-300/50 transform rotate-[25deg] scale-y-90"></div>
             <div className="absolute w-[650px] h-[650px] rounded-full border border-dotted border-purple-400/40 transform rotate-[-25deg] scale-y-95"></div>
             <div className="absolute w-[780px] h-[300px] rounded-[100%] border-t border-b border-dotted border-purple-300/30 transform rotate-[10deg]"></div>
        </div>
         <div className="absolute inset-0 bg-[radial-gradient(#d8b4fe_1px,transparent_1px)] [background-size:30px_30px] opacity-30"></div>
      </div>

      {/* =========================================
          MAIN CONTENT 
      ========================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Main Heading - Text Modified but Meaning Same */}
        {/* Size wapas compact kar diya (text-5xl md:text-7xl) */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            The Revolution of Video
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Begins
          </span>{" "}
          <span className="text-gray-900">with Text.</span>
        </h1>

        {/* Subheading - Full Company Name & Modified Text */}
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-medium">
          <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED</span> turns your imagination into cinematic reality using advanced Generative AI. Produce professional-grade visuals instantly, just by typing your ideas.
        </p>

        {/* Action Buttons - Clickable & Standard Size */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          
          <button 
            onClick={handleDemoClick}
            className="group flex items-center gap-2 px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            <Play size={18} className="fill-current" /> 
            <span>Try Demo</span>
          </button>

          <button 
            onClick={handleLearnMoreClick}
            className="group flex items-center gap-2 px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-white hover:shadow-md transition-all duration-300 bg-transparent"
          >
            <Lightbulb size={18} />
            <span>How it Works</span>
          </button>

          <button 
            onClick={handleBetaClick}
            className="group flex items-center gap-2 px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-white hover:shadow-md transition-all duration-300 bg-transparent"
          >
            <Rocket size={18} />
            <span>Join Beta</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;