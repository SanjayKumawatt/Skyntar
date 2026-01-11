import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center bg-[#FFF0F5] overflow-hidden pt-40">
      
      {/* =========================================
          BACKGROUND ROTATING SPHERE ANIMATION
          (Consistent Dotted Sphere Theme)
      ========================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="relative flex items-center justify-center animate-[spin_50s_linear_infinite]">
            {/* Core Glow */}
            <div className="absolute w-[250px] h-[250px] bg-purple-400/30 blur-[100px] rounded-full"></div>
            
            {/* Outer Rings */}
            <div className="absolute w-[800px] h-[800px] rounded-full border border-dotted border-purple-400/50"></div>
            <div className="absolute w-[700px] h-[700px] rounded-full border border-dashed border-pink-400/40 transform rotate-[45deg] scale-y-90"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border border-dotted border-indigo-400/40 transform rotate-[-45deg] scale-y-95"></div>
            
            {/* Latitude Lines */}
            <div className="absolute w-[750px] h-[300px] rounded-[100%] border-t border-b border-dotted border-purple-500/30 transform rotate-[10deg]"></div>
        </div>
         {/* Noise Overlay */}
         <div className="absolute inset-0 bg-[radial-gradient(#d8b4fe_1px,transparent_1px)] [background-size:28px_28px] opacity-30"></div>
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Animated Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-gray-900"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            We Are Innovators
          </span>
          <br />
          <span className="text-gray-900">Building the Future of</span>
          <br />
          <span className="text-gray-900">Creation.</span>
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-700 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed font-medium"
        >
          <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED</span> is a team of researchers, engineers, and designers passionate about making AI a powerful creative tool for everyone.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center"
        >
          

          {/* Button 3: Join Us (Careers) */}
          <button 
            onClick={() => navigate('/careers')}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-900 text-gray-900 font-bold hover:bg-white hover:shadow-md hover:border-purple-500 transition-all duration-300 bg-transparent"
          >
            <Briefcase size={18} />
            <span>Join Us</span>
          </button>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;