import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoSrc from '../../imports/Subnet_Society_white_teal.png';

export const Navbar = () => {
  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const navItems = ['Learn', 'Resources', 'Community'];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 max-w-7xl mx-auto w-full min-h-[96px]">
      {/* Top Left: Subnet Society Text */}
      <div className="flex items-center z-20">
        <span className="font-bold text-xl md:text-2xl tracking-tight text-white">
          Subnet <span className="text-[#00A0A0]">Society</span>
        </span>
      </div>

      {/* Top Center: Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 w-max">
        <ImageWithFallback 
          src={logoSrc} 
          alt="Subnet Society Logo" 
          className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,150,136,0.3)]"
        />
      </div>
      
      {/* Top Right: Navigation & Mobile Menu */}
      <div className="flex items-center gap-8 relative z-20">
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <a 
              key={item}
              href="#" 
              onClick={handleDisabledClick}
              className="group relative flex items-center justify-center h-6 cursor-default min-w-[80px]"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                {item}
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-[#009688] font-bold text-[10px] uppercase tracking-widest whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Coming Soon
              </span>
            </a>
          ))}
        </div>
        
        {/* Mobile menu button (visual only) */}
        <button className="md:hidden text-slate-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
