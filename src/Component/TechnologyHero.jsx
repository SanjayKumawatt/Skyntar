import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Navigation hook added
import { FileText, Search, PlayCircle } from 'lucide-react';

const TechnologyHero = () => {
  const navigate = useNavigate(); // Hook initialize kiya

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#FFF0F5] overflow-hidden pt-40">
      
      {/* =========================================
          BACKGROUND ANIMATED WIREFRAME
      ========================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="relative w-[500px] h-[500px] md:w-[650px] md:h-[650px]"
        >
           {/* Ring 1 */}
           <div className="absolute inset-0 border-[1px] border-pink-400/30 rounded-[50%] transform rotate-45 scale-y-50 blur-[1px]"></div>
           <div className="absolute inset-0 border-[2px] border-dotted border-pink-500/40 rounded-[50%] transform rotate-45 scale-y-50"></div>
           
           {/* Ring 2 */}
           <div className="absolute inset-0 border-[1px] border-purple-400/30 rounded-[50%] transform -rotate-45 scale-y-50 blur-[1px]"></div>
           <div className="absolute inset-0 border-[2px] border-dashed border-purple-500/40 rounded-[50%] transform -rotate-45 scale-y-50"></div>

           {/* Ring 3 */}
           <div className="absolute inset-[20%] border-[1px] border-pink-600/20 rounded-full border-dashed animate-pulse"></div>
           
           {/* Particles */}
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-[50px]"
           />
        </motion.div>
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.2] mb-6 text-gray-900"
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Intelligence</span> <br />
          Behind Motion.
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-700 text-base md:text-lg max-w-2xl mb-8 leading-relaxed font-medium"
        >
          <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED</span> uses a fusion of diffusion models, transformer architectures, and GPU-accelerated inference pipelines to turn text into cinematic-quality motion video.
        </motion.p>

        {/* Tech Badges */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3 mb-8 justify-center"
        >
            {["Diffusion Models", "Transformer Arch", "TensorRT"].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/50 border border-purple-200 rounded-full text-[10px] md:text-xs font-semibold text-purple-700 backdrop-blur-sm">
                    {tech}
                </span>
            ))}
        </motion.div>

        {/* Action Buttons (CLICKABLE NOW) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          
          {/* Button 1: Read Architecture -> Goes to Research Page */}
          <button 
            onClick={() => navigate('/research')}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-900 text-gray-900 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            <FileText size={16} /> 
            <span>Read Architecture</span>
          </button>

          {/* Button 2: View Research -> Goes to Research Page */}
          <button 
            onClick={() => navigate('/research')}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-900 text-gray-900 text-sm font-semibold hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all duration-300 bg-transparent"
          >
            <Search size={16} />
            <span>View Research</span>
          </button>

          {/* Button 3: Try Demo -> Goes to Demo Page */}
          <button 
            onClick={() => navigate('/demo')}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-900 text-gray-900 text-sm font-semibold hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-300 bg-transparent"
          >
            <PlayCircle size={16} />
            <span>Try the Demo</span>
          </button>

        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyHero;