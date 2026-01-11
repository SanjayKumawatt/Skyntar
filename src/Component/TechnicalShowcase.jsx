import React from 'react';
import { Zap, Film, Sun, Cloud, Code, Sliders, CheckCircle, Cpu, Layers, Server, Microchip } from 'lucide-react';

const TechnicalShowcase = () => {

    // Data for the Top Grid (6 Cards)
    const features = [

        {
            icon: <Film size={24} />,
            title: "High-Fidelity Motion",
            desc: "Smooth, realistic physics engine that brings static prompts to life."
        },
        {
            icon: <Sun size={24} />,
            title: "Lighting Consistency",
            desc: "Ray-traced quality lighting maintained across every generated frame."
        },
        {
            icon: <Cloud size={24} />,
            title: "Cloud Scalability",
            desc: "Generate unlimited videos with our enterprise-grade elastic infrastructure."
        },
        {
            icon: <Code size={24} />,
            title: "API Integration",
            desc: "Seamlessly integrate our generative engine into your app workflow."
        },
        {
            icon: <Sliders size={24} />,
            title: "Advanced Controls",
            desc: "Fine-tune camera angles, motion blur, and style parameters instantly."
        }
    ];

    return (
        <section className="py-20 px-4 bg-[#F0F4F8]">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* =========================================================
            SECTION 1: GRID FEATURES (Fast. Scalable. Cinematic.)
           ========================================================= */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Fast. Scalable. Cinematic.
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our infrastructure is built for speed and quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feat, index) => (
                            <div
                                key={index}
                                className="bg-[#FFF0F5] border border-gray-900 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                                    {feat.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* =========================================================
            SECTION 2: SPLIT FEATURE (Automation meets Excellence)
           ========================================================= */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Side: Text Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Creative automation meets <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                                technical excellence.
                            </span>
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            <span className="font-bold">SKYNTAR TECHNOLOGY PRIVATE LIMITED</span> is built for creators and professionals who demand both quality and efficiency. Our technology is designed to integrate seamlessly into your workflow.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                "Seamless Integration with existing pipelines",
                                "Real-time visual feedback and adjustments",
                                "Advanced AI models for superior results",
                                "Dedicated support for all enterprise users"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-purple-600 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Abstract Cube Visual (CSS Only - No Image needed) */}
                    <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                            {/* Creating a CSS Grid of Blocks to simulate the image's "Cube Cluster" 
                */}
                            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 transform rotate-12 hover:rotate-6 transition-transform duration-700">
                                {[...Array(16)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`bg-gradient-to-br from-blue-400/40 to-purple-500/40 border border-blue-300/50 backdrop-blur-sm rounded-md shadow-sm
                            ${i % 2 === 0 ? 'translate-y-4' : '-translate-y-4'}
                            ${i % 3 === 0 ? 'opacity-60' : 'opacity-90'}
                            `}
                                        style={{
                                            animation: `pulse 4s infinite ${i * 0.2}s`
                                        }}
                                    ></div>
                                ))}
                                {/* Glowing Core */}
                                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full z-[-1]"></div>
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    {/* Background Decoration for Nvidia Section */}
                    <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-purple-200/30 to-transparent pointer-events-none"></div>

                </div>

            </div>
        </section>
    );
};

export default TechnicalShowcase;