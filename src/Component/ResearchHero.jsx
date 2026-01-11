import React from 'react';
import { motion } from 'framer-motion';
import { FileText, FlaskConical, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResearchHero = () => {
  const navigate = useNavigate();

  // Generate random particles for the background
  const particles = Array.from({ length: 15 });

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-[#FFF0F5] overflow-hidden pt-40">
      
      {/* =========================================
          BACKGROUND NETWORK ANIMATION (Science Effect)
      ========================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.3
            }}
            animate={{ 
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, // Slow floating
              repeat: Infinity,
              ease: "linear",
              repeatType: "mirror"
            }}
            className="absolute w-2 h-2 bg-pink-400 rounded-full blur-[1px]"
          />
        ))}
        
        {/* SVG for connecting lines (Static representation for performance) */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
           <defs>
             <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
               <path d="M 100 0 L 0 0 0 100" fill="none" stroke="purple" strokeWidth="0.5"/>
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#grid)" />
           
           {/* Decorative big lines */}
           <motion.path 
             d="M0,100 Q400,300 800,100 T1600,200"
             fill="none"
             stroke="url(#gradient)"
             strokeWidth="2"
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 0.4 }}
             transition={{ duration: 3, ease: "easeInOut" }}
           />
           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="#ec4899" />
             <stop offset="100%" stopColor="#8b5cf6" />
           </linearGradient>
        </svg>
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Animated Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6 text-gray-900"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Advancing the Science
          </span>
          <br />
          <span className="text-gray-900">of Generative Motion.</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-700 text-lg md:text-xl max-w-4xl mb-12 leading-relaxed font-medium"
        >
          At <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED</span>, we're pushing the boundaries of AI-driven video generation through applied research in diffusion models, motion coherence, and scalable inference systems.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-5 w-full justify-center"
        >
          

          {/* Button 2: Explore Experiments */}
          <button 
            onClick={() => navigate('/demo')}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-50 transition-all duration-300 bg-[#FFF0F5]"
          >
            <FlaskConical size={20} className="text-gray-700" />
            <span>Explore Experiments</span>
          </button>

        </motion.div>
      </div>
    </section>
  );
};

export default ResearchHero;