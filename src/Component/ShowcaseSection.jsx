import React from 'react';
import { Play } from 'lucide-react';
import img1 from "../assets/ma.avif";
import img2 from "../assets/mars.jpg";
import img3 from "../assets/maa.webp";


const ShowcaseSection = () => {
  const showcases = [
    {
      id: 1,
      image: img1, // Cyberpunk City
      prompt: "Neon-lit cyberpunk street with rain reflections",
      category: "Sci-Fi"
    },
    {
      id: 2,
      image: img2, // Astronaut/Mars
      prompt: "An astronaut planting a tree on Mars surface",
      category: "Surrealism"
    },
    {
      id: 3,
      image: img3, // Forest
      prompt: "Mystical forest with morning sunbeams",
      category: "Nature"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            From Text to <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Living Reality</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
            See what’s possible with <span className="font-bold text-gray-900">SKYNTAR TECHNOLOGY PRIVATE LIMITED</span>. 
            Our generative engine understands complex prompts to deliver photorealistic motion.
          </p>
        </div>

        {/* --- Video/Image Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Image (Simulating Video Thumbnail) */}
              <img 
                src={item.image} 
                alt={item.prompt} 
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              

              {/* Content: Prompt Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-white bg-purple-600/80 rounded-full backdrop-blur-md">
                    {item.category}
                </span>
                
                {/* Prompt Text */}
                <p className="text-white font-medium text-lg leading-snug">
                  “{item.prompt}”
                </p>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ShowcaseSection;