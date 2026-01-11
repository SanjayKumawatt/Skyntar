import React from 'react';
import { motion } from 'framer-motion';
import { 
  Waves, Zap, Box, Layers, Cpu, 
  Lightbulb, Code, BarChart, RefreshCw, Rocket 
} from 'lucide-react';

const ResearchDetails = () => {
  return (
    <section className="py-20 px-4 bg-[#FFF0F5]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* =========================================
            SECTION 1: WHERE IMAGINATION MEETS SCIENCE
           ========================================= */}
        <div className="w-full bg-white border border-gray-900 rounded-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Content */}
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Where Imagination <br/> Meets Science.
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED's</span> research team focuses on bridging creativity and computation - developing models that understand human imagination and translate it into lifelike motion.
                </p>
                
                <div className="border-t-2 border-gray-900 pt-6">
                    <p className="text-xl font-bold text-gray-900 italic font-serif">
                        “Our goal isn't just to generate video - it's to understand how stories move.”
                    </p>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 bg-gray-100 h-[300px] md:h-auto relative">
                <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop" 
                    alt="AI Research Robots" 
                    className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
            </div>
        </div>


        {/* =========================================
            SECTION 2: CURRENT RESEARCH FOCUS
           ========================================= */}
        <div className="bg-white border border-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
                Current Research Focus
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {[
                    { icon: <Waves size={24}/>, title: "Video Diffusion Stability", desc: "Improving temporal consistency and reducing flicker." },
                    { icon: <Zap size={24}/>, title: "Motion-Aware Transformers", desc: "Incorporating trajectory modeling into diffusion layers." },
                    { icon: <Box size={24}/>, title: "Scene Coherence Models", desc: "Maintaining consistent lighting, texture, and depth." },
                    { icon: <Layers size={24}/>, title: "Multimodal Generation", desc: "Integrating text, audio, and image cues for context." },
                    { icon: <Cpu size={24}/>, title: "Compute Optimization", desc: "Reducing inference latency with model quantization." }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full border border-gray-900 flex items-center justify-center bg-[#FFF0F5] text-gray-900 mb-4 group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
                            {item.icon}
                        </div>
                        <h4 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-snug">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>


        {/* =========================================
            SECTION 3: HOW WE EXPERIMENT (Zig-Zag Flow)
           ========================================= */}
        <div className="bg-white border border-gray-900 rounded-2xl p-8 md:p-16">
            <div className="text-center mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">How We Experiment</h3>
                <p className="text-gray-500 text-sm">Our R&D approach is iterative, data-driven, and open to collaboration.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Center Line (Hidden on mobile) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

                <div className="space-y-12">
                    {[
                        { num: "1", title: "Concept & Hypothesis", desc: "Formulating testable hypotheses and defining clear research questions.", icon: <Lightbulb size={20}/> },
                        { num: "2", title: "Prototype Training", desc: "Rapidly developing and training initial prototypes on custom datasets.", icon: <Code size={20}/> },
                        { num: "3", title: "Rigorous Evaluation", desc: "Conducting extensive tests and analyzing performance metrics.", icon: <BarChart size={20}/> },
                        { num: "4", title: "Iterative Optimization", desc: "Refining and fine-tuning models based on evaluation insights.", icon: <RefreshCw size={20}/> },
                        { num: "5", title: "Deployment", desc: "Ensuring scalability, integration, and real-world impact.", icon: <Rocket size={20}/> }
                    ].map((step, i) => (
                        <div key={i} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            
                            {/* Text Box */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="w-full md:w-[45%] bg-[#FFF0F5] border border-gray-900 rounded-xl p-6 relative hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {step.num}
                                    </div>
                                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                                </div>
                                <p className="text-sm text-gray-600 pl-11">{step.desc}</p>
                            </motion.div>

                            {/* Connector Dot (Desktop) */}
                            <div className="hidden md:flex w-4 h-4 bg-gray-900 rounded-full border-4 border-white z-10 relative"></div>

                            {/* Empty Space for Balance */}
                            <div className="hidden md:block w-[45%]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ResearchDetails;