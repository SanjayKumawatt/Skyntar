import React from 'react';
import { 
  FlaskConical, ArrowRight, Layers, Cpu, CheckCircle2, 
  Database, Users, Lock, ShieldCheck, Mail 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchExperimentsAndJoin = () => {
  return (
    <section className="pb-20 px-4 bg-[#FFF0F5]">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* =========================================
            SECTION 1: RECENT EXPERIMENTS (3 Cards)
           ========================================= */}
        <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Recent Experiments</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        title: "Diffusion Temporal Smoothing",
                        goal: "Reduce flicker in long video sequences.",
                        result: "23% improvement in frame coherence."
                    },
                    {
                        title: "Prompt Embedding Control",
                        goal: "Achieve better control over motion intensity.",
                        result: "Enabled adjustable 'scene lure' parameters."
                    },
                    {
                        title: "Latent Space Compression",
                        goal: "Reduce compute load without quality loss.",
                        result: "40% faster inference using optimized encoding."
                    }
                ].map((exp, i) => (
                    <div key={i} className="bg-white border border-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <h4 className="font-bold text-gray-900 mb-4">{exp.title}</h4>
                        <div className="space-y-3 text-sm">
                            <div>
                                <span className="font-bold text-gray-500 block text-xs uppercase">Goal:</span>
                                <p className="text-gray-700">{exp.goal}</p>
                            </div>
                            <div>
                                <span className="font-bold text-purple-600 block text-xs uppercase">Result:</span>
                                <p className="text-gray-900 font-medium">{exp.result}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


        {/* =========================================
            SECTION 2: INSIGHTS & STACK (Grid)
           ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left: Insights from Our Lab (Span 2) */}
            <div className="lg:col-span-2 bg-white border border-gray-900 rounded-xl p-8 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Insights from Our Lab</h3>
                    <div className="space-y-4">
                        {[
                            { title: "How Diffusion Models Learn Motion Patterns", sub: "Exploring techniques for fluid and realistic motion generation." },
                            { title: "Optimizing Frame Interpolation", sub: "Methods for seamless transitions in AI-generated videos." },
                            { title: "Quantization for Faster Inference", sub: "Speeding up inference times without sacrificing quality." }
                        ].map((insight, i) => (
                            <div key={i} className="bg-[#FFF0F5] border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors cursor-pointer group">
                                <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{insight.title}</h4>
                                <p className="text-xs text-gray-600 mt-1">{insight.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                
            </div>

            {/* Right: Our Research Stack (Span 1) */}
            <div className="bg-white border border-gray-900 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Research Stack</h3>
                <div className="space-y-5">
                    {[
                        { icon: <Layers size={18}/>, label: "Frameworks", val: "PyTorch, TensorFlow" },
                        { icon: <Cpu size={18}/>, label: "Optimization", val: "Quantization, Pruning" },
                        { icon: <CheckCircle2 size={18}/>, label: "Evaluation", val: "FVD, SSIM, LPIPS" },
                        { icon: <Database size={18}/>, label: "Infrastructure", val: "Multi-GPU (A100), Docker" },
                        { icon: <Users size={18}/>, label: "Collaboration", val: "GitHub, Weights & Biases" }
                    ].map((stack, i) => (
                        <div key={i} className="flex gap-3">
                            <div className="mt-0.5 text-gray-400">{stack.icon}</div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase">{stack.label}</p>
                                <p className="text-sm font-semibold text-gray-900">{stack.val}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>


        {/* =========================================
            SECTION 3: OPEN RESEARCH & ETHICS
           ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Open Research Areas */}
            <div className="bg-white border border-gray-900 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Open Research Areas</h3>
                <p className="text-sm text-gray-600 mb-6">
                    We plan to open-source datasets and models, welcoming collaboration with academic labs and developers.
                </p>
                <ul className="space-y-3">
                    {[
                        "Video Diffusion Model Benchmarking",
                        "Cross-modal Learning (Text + Audio)",
                        "Real-time Generative Rendering",
                        "AI Safety and Responsible Content"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-800">
                            <FlaskConical size={16} className="text-purple-600"/> {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Ethics & Responsible AI */}
            <div className="bg-white border border-gray-900 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ethics & Responsible AI</h3>
                <p className="text-sm text-gray-600 mb-6">
                    Building the future of video responsibly is our core principle. We are committed to ethical development and safeguards against misuse.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                     {[
                        "No deepfake or identity misuse",
                        "Ethical dataset sourcing",
                        "Watermarking of AI-generated media",
                        "Prohibition of harmful content",
                        "Transparent model behavior"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-800 list-none">
                            <ShieldCheck size={16} className="text-green-600"/> {item}
                        </li>
                     ))}
                </div>
            </div>

        </div>


        {/* =========================================
            SECTION 4: SUMMARY & JOIN JOURNEY
           ========================================= */}
        <div className="text-center pt-16 max-w-3xl mx-auto">
            
            {/* Summary */}
            <div className="mb-20">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                    Summary: Building the Future of Motion
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Our research is not just academic - it's the engine driving our product. Every insight, optimization, and breakthrough is a step toward making AI-driven video creation more powerful, accessible, and intuitive for everyone.
                </p>
            </div>

            {/* Join Journey CTA */}
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Join Our Research Journey.
                </h2>
                <p className="text-gray-500 mb-8">
                    Interested in collaborating or have a novel idea in generative video? We'd love to connect. Reach out to our research team.
                </p>
                
                <div className="flex flex-col items-center gap-4">
                    <a href="mailto:research@skyntar.in" className="flex items-center gap-2 text-gray-900 font-bold hover:text-purple-600 transition-colors">
                        <Mail size={18} /> research@skyntar.in
                    </a>
                    
                    <Link to={"/contact"} className="px-8 py-3 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all shadow-md mt-2">
                        Contact Research Team
                    </Link>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default ResearchExperimentsAndJoin;