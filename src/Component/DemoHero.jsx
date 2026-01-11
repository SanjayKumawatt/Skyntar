import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Type, Video, Rocket } from 'lucide-react';

const DemoHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#FFF0F5] overflow-hidden pt-40">
      
      {/* =========================================
          BACKGROUND ROTATING SPHERE ANIMATION
          (Consistent with Home Page but slightly larger for immersion)
      ========================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="relative flex items-center justify-center animate-[spin_40s_linear_infinite]">
            {/* Core Glow */}
            <div className="absolute w-[300px] h-[300px] bg-purple-400/30 blur-[120px] rounded-full"></div>
            
            {/* Outer Rings */}
            <div className="absolute w-[850px] h-[850px] rounded-full border border-dotted border-purple-400/50"></div>
            <div className="absolute w-[750px] h-[750px] rounded-full border border-dashed border-pink-400/40 transform rotate-[30deg] scale-y-90"></div>
            <div className="absolute w-[650px] h-[650px] rounded-full border border-dotted border-indigo-400/40 transform rotate-[-30deg] scale-y-95"></div>
            
            {/* Latitude Lines */}
            <div className="absolute w-[800px] h-[350px] rounded-[100%] border-t border-b border-dotted border-purple-500/30 transform rotate-[15deg]"></div>
        </div>
         {/* Noise Overlay */}
         <div className="absolute inset-0 bg-[radial-gradient(#d8b4fe_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Animated Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-gray-900"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            Experience Text-to-Video
          </span>
          <br />
          <span className="text-gray-900">in Action.</span>
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-700 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-medium"
        >
          Type a sentence. Watch it turn into cinematic motion. <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED's</span> generative engine brings your imagination to life — fast, smooth, and realistic.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          
          {/* Button 1: Try a Prompt (Focus Action) */}
          <button 
            onClick={() => document.getElementById('demo-input')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm"
          >
            <Type size={18} /> 
            <span>Try a Prompt</span>
          </button>

          

          {/* Button 3: Join Beta */}
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-900 text-gray-900 font-bold hover:bg-white hover:shadow-md hover:border-purple-500 transition-all duration-300 bg-transparent"
          >
            <Rocket size={18} />
            <span>Join Beta</span>
          </button>

        </motion.div>
      </div>
    </section>
  );
};

export default DemoHero;