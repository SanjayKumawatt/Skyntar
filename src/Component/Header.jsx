import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Cpu, PlayCircle, FlaskConical, User, Mail, Sparkles } from 'lucide-react';

const Header = () => {
  // Icon size slightly increased for better proportion
  const iconSize = 20;

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={iconSize} /> },
    { name: 'Technology', path: '/technology', icon: <Cpu size={iconSize} /> },
    { name: 'Demo', path: '/demo', icon: <PlayCircle size={iconSize} /> },
    { name: 'Research', path: '/research', icon: <FlaskConical size={iconSize} /> },
    { name: 'About', path: '/about', icon: <User size={iconSize} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={iconSize} /> },
  ];

  return (
    // Added more top padding (pt-8) so it sits lower and looks bigger overall
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-4 pointer-events-none">
      {/* Main Pill Container */}
      {/* CHANGES MADE:
         1. max-w-[1280px]: Thoda chauda kiya.
         2. bg-[#FFF0F5]/85: Background color wahi hai par 85% opacity ke sath (transparent).
         3. backdrop-blur-md: Peeche ka content blur dikhega (frosted glass effect).
         4. px-8 py-4: Padding badha di taaki header "bada" aur "filled" lage.
         5. pointer-events-auto: Parent pe none kiya tha taaki side click ho sake, yahan wapas auto kiya.
      */}
      <nav className="flex items-center justify-between w-full max-w-[1280px] bg-[#FFF0F5]/85 backdrop-blur-md border border-gray-900 rounded-full px-8 py-4 shadow-md pointer-events-auto transition-all duration-300 ease-in-out hover:shadow-lg">
        
        {/* Left Side: Logo */}
        <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
                {/* Logo Icon Bigger */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl text-white shadow-sm">
                    <Sparkles size={24} />
                </div>
                <div className="flex flex-col">
                    {/* Font size increased to 2xl */}
                    <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 font-sans tracking-wide leading-tight">
                        SKYNTAR
                    </span>
                    <span className="text-[0.6rem] text-gray-600 font-semibold tracking-wider uppercase">
                        Technology Pvt. Ltd.
                    </span>
                </div>
            </Link>
        </div>

        {/* Center: Navigation Links */}
        {/* Gap increased, font size made text-base (bigger than text-sm) */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-2.5 text-base font-semibold text-gray-800 hover:text-purple-700 transition-colors duration-200 group"
            >
              <span className="text-gray-600 group-hover:text-purple-700 transition-colors">
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        {/* Button padding and font size increased */}
        

      </nav>
    </div>
  );
};

export default Header;