import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Mail, MapPin, Home, Cpu, PlayCircle, User, 
  Briefcase, FileCode, Shield, FileText, AlertTriangle, 
  Cookie, HelpCircle, Send 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/', icon: <Home size={16} /> },
    { name: 'Technology', path: '/technology', icon: <Cpu size={16} /> },
    { name: 'Demo', path: '/demo', icon: <PlayCircle size={16} /> },
    { name: 'About', path: '/about', icon: <User size={16} /> },
    { name: 'Careers', path: '/careers', icon: <Briefcase size={16} /> },
    { name: 'API Docs', path: '/docs', icon: <FileCode size={16} /> },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy', icon: <Shield size={16} /> },
    // { name: 'Terms & Conditions', path: '/terms', icon: <FileText size={16} /> },
    // { name: 'Disclaimer', path: '/disclaimer', icon: <AlertTriangle size={16} /> },
    // { name: 'Cookies Policy', path: '/cookies', icon: <Cookie size={16} /> },
    // { name: 'FAQs', path: '/faqs', icon: <HelpCircle size={16} /> },
    { name: 'Contact', path: '/contact', icon: <Send size={16} /> },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- Main Grid Content (Glass Cards) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Company Info */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/15 transition-colors duration-300">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4 bg-white/90 w-fit px-4 py-2 rounded-full">
                <Sparkles className="text-purple-600" size={20} />
                <span className="text-xl font-bold text-gray-900 tracking-tight">SKYNTAR</span>
              </div>
              
              <p className="text-white/90 font-bold mb-4 italic">
                "Turn Ideas Into Motion."
              </p>
              
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                SKYNTAR TECHNOLOGY PRIVATE LIMITED is a next-generation AI platform that converts text prompts into cinematic-quality videos using advanced generative models.
              </p>
            </div>

            <div className="space-y-3">
              <a href="mailto:support@skyntar.in" className="flex items-center gap-3 text-sm hover:text-pink-300 transition-colors">
                <Mail size={18} className="shrink-0" />
                <span>support@skyntar.in</span>
              </a>
              
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="shrink-0 mt-1" />
                <span className="leading-relaxed opacity-90">
                  12251, Anaj Mandi Road, Surajpole Gate, <br />
                  Jaipur City, Jaipur, Rajasthan, India, 302003
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Quick Links */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300">
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-3 text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Legal */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300">
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">
              Legal
            </h3>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-3 text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- Copyright Bottom Bar --- */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/60">
            &copy; {currentYear} SKYNTAR TECHNOLOGY PRIVATE LIMITED. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;