import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Layers, Zap, Image as ImageIcon, Film, 
  Server, Shield, Code, PenTool, TrendingUp, 
  Clock, CheckCircle2, FileText, Activity 
} from 'lucide-react';

const TechnologyDetails = () => {
  // Animation variants for Staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-4 bg-[#FFF0F5]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              From Imagination to Motion
            </span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED</span>, we're reimagining how video is created. Our deep generative intelligence makes it possible for anyone to produce expressive, dynamic video just by describing an idea.
          </p>
        </div>

        {/* --- Bento Grid Layout --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {/* 1. Core Architecture (Full Width) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3 bg-white border border-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-gray-900 text-white rounded-lg"><Cpu size={20}/></div>
               <h3 className="text-xl font-bold text-gray-900">Core Architecture</h3>
            </div>
            <p className="text-gray-600 text-sm mb-8 max-w-3xl">
              Our generative AI stack blends text understanding, visual synthesis, and motion intelligence to produce expressive, dynamic video.
            </p>
            
            {/* Process Flow Icons */}
            <div className="flex flex-wrap justify-between items-center gap-4 relative">
              {/* Connecting Line (hidden on mobile) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
              
              {[
                { name: "Text Encoder", icon: <FileText size={20} /> },
                { name: "Diffusion Gen", icon: <Activity size={20} /> },
                { name: "Motion Logic", icon: <Film size={20} /> },
                { name: "Accelerator", icon: <Zap size={20} /> },
                { name: "Rendering", icon: <ImageIcon size={20} /> },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 bg-white px-2">
                   <div className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center bg-white text-gray-900 font-bold z-10 shadow-sm">
                      {step.icon}
                   </div>
                   <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{step.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2. Key Technology Features (Large) */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2 bg-white border border-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-pink-100 text-pink-600 rounded-lg"><Layers size={20}/></div>
               <h3 className="text-xl font-bold text-gray-900">Key Technology Features</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { title: "Hybrid Generative Architecture", desc: "Combines diffusion and transformer networks for coherent video synthesis." },
                 { title: "GPU-Accelerated Inference", desc: "Fast rendering and real-time performance optimization." },
                 { title: "Frame Interpolation Engine", desc: "Ensures smooth and stable motion between generated keyframes." },
                 { title: "Adaptive Lighting Model", desc: "Dynamic tone mapping and consistent lighting correction." }
               ].map((feat, i) => (
                 <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{feat.title}</h4>
                    <p className="text-xs text-gray-500">{feat.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* 3. Research & Development */}
          <motion.div variants={itemVariants} className="col-span-1 bg-white border border-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><PenTool size={20}/></div>
               <h3 className="text-xl font-bold text-gray-900">R&D Focus</h3>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              Pioneering the frontier of generative video intelligence with a focus on stability.
            </p>
            <ul className="space-y-4">
               {[
                 "Video Diffusion Stability", 
                 "Scene Coherence Models", 
                 "Context-Aware Generation"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                    <CheckCircle2 size={16} className="text-purple-500" /> {item}
                 </li>
               ))}
            </ul>
          </motion.div>

          {/* 4. Performance Benchmarks */}
          <motion.div variants={itemVariants} className="col-span-1 bg-white border border-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><TrendingUp size={20}/></div>
               <h3 className="text-xl font-bold text-gray-900">Benchmarks</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Base Diffusion", val: "~10s/sec", status: "Good" },
                { label: "Adv. Transformer", val: "~6s/sec", status: "Excellent" },
                { label: "Studio Engine", val: "~3s/sec", status: "Cinematic" }
              ].map((bench, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2 last:border-0">
                  <span className="font-medium text-gray-700">{bench.label}</span>
                  <div className="text-right">
                    <span className="block font-bold text-gray-900">{bench.val}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wide">{bench.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Infrastructure */}
                    {/* 6. Responsible AI */}
          <motion.div variants={itemVariants} className="col-span-1 bg-white border border-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-green-100 text-green-600 rounded-lg"><Shield size={20}/></div>
               <h3 className="text-xl font-bold text-gray-900">Responsible AI</h3>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              We are committed to ethical AI development and safe content generation.
            </p>
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 px-3 py-1.5 rounded-full w-fit">
                    <Shield size={12}/> No deepfake misuse
                </div>
                <div className="flex items-center gap-2 text-xs text-green-700 bg-green-50 px-3 py-1.5 rounded-full w-fit">
                    <CheckCircle2 size={12}/> Safe dataset curation
                </div>
            </div>
          </motion.div>

          {/* 7. Technology Stack */}
          <motion.div variants={itemVariants} className="col-span-1 bg-white border border-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Code size={20}/></div>
               <h3 className="text-xl font-bold text-gray-900">Tech Stack</h3>
            </div>
            <div className="space-y-4">
                <div>
                    <span className="text-xs font-bold text-gray-400 uppercase">Frameworks</span>
                    <p className="text-sm font-semibold text-gray-900">PyTorch • TensorFlow</p>
                </div>
                <div>
                    <span className="text-xs font-bold text-gray-400 uppercase">Backend</span>
                    <p className="text-sm font-semibold text-gray-900">Python • FastAPI • K8s</p>
                </div>
                <div>
                    <span className="text-xs font-bold text-gray-400 uppercase">Frontend</span>
                    <p className="text-sm font-semibold text-gray-900">React • Tailwind • Vite</p>
                </div>
            </div>
          </motion.div>

          {/* 8. Future Roadmap (Wide) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-white border border-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-gray-900 text-white rounded-lg"><Clock size={20}/></div>
               <h3 className="text-xl font-bold text-gray-900">Future Roadmap</h3>
            </div>
            
            <div className="space-y-6 relative">
                 {/* Vertical Line */}
                <div className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-gray-200"></div>

                {[
                    { q: "Q4 2025", title: "Real-time Streaming", desc: "Instant prompt-to-video streaming with low latency." },
                    { q: "Q2 2026", title: "Multi-modal Input", desc: "Generate video from Image + Text combinations." },
                    { q: "Q4 2026", title: "Developer SDK", desc: "Public API release for enterprise integration." }
                ].map((road, i) => (
                    <div key={i} className="flex gap-4 relative">
                        {/* Dot */}
                        <div className="w-4 h-4 rounded-full bg-white border-4 border-gray-900 z-10 shrink-0"></div>
                        <div>
                            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md">{road.q}</span>
                            <h4 className="text-sm font-bold text-gray-900 mt-1">{road.title}</h4>
                            <p className="text-xs text-gray-500">{road.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyDetails;