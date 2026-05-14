import React from 'react';
import { motion } from 'motion/react';
import { NetworkBackground } from './NetworkBackground';
import { Navbar } from './Navbar';
import { Network, Server, Shield, Database, ArrowRight, Mail } from 'lucide-react';

const cards = [
  { id: 'routing', label: 'Routing', icon: Network },
  { id: 'switching', label: 'Switching', icon: Server },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'infra', label: 'Infrastructure', icon: Database }
];

export const Hero = () => {
  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen bg-[#0A1F44] text-white overflow-hidden font-sans flex flex-col">
      <NetworkBackground />
      <Navbar />
      
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-24 text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto flex flex-col items-center mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
          >
            Networking Made Clear.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Learn networking through real explanations, visual learning, and practical concepts without unnecessary complexity.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="https://www.instagram.com/subnetsociety/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#009688] hover:bg-[#008276] text-white font-semibold text-base transition-all duration-300 shadow-[0_0_20px_rgba(0,150,136,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              Join the Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Glassmorphism Cards Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-20 w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4"
        >
          {cards.map((card, index) => (
            <motion.a
              key={card.id}
              href="#"
              onClick={handleDisabledClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center gap-4 overflow-hidden group cursor-default shadow-xl"
            >
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-[#009688]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                 <span className="text-white font-bold tracking-widest uppercase text-xs translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                   Coming Soon
                 </span>
              </div>

              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/0 to-teal-500/5 transition-colors duration-500" />
              
              <div className="relative p-3 rounded-xl bg-white/5 border border-white/10 text-[#009688] transition-colors duration-300">
                <card.icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-slate-200 relative">
                {card.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </main>

      {/* Footer Contact */}
      <footer className="relative z-10 w-full py-6 text-center text-slate-400 border-t border-white/5 bg-[#0A1F44]/50 backdrop-blur-md">
        <p className="text-sm flex items-center justify-center gap-2">
          <Mail className="w-4 h-4 opacity-70" />
          Contact us at{' '}
          <a href="mailto:ssagar@subnetsociety.com" className="text-teal-400 hover:text-teal-300 transition-colors ml-1 font-medium">
            ssagar@subnetsociety.com
          </a>
        </p>
      </footer>
    </div>
  );
};
