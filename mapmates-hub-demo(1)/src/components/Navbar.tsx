import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleDetailView = (e: any) => setHidden(e.detail.open);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('detailViewToggle', handleDetailView);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('detailViewToggle', handleDetailView);
    };
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500 py-4`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`rounded-full px-6 md:px-8 py-3 flex items-center justify-between transition-all duration-500 border border-white/5 shadow-2xl bg-black/80 backdrop-blur-3xl`}>
          <div className="flex items-center gap-3">
            <motion.div 
               whileHover={{ rotate: 15, scale: 1.1 }}
               className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center neon-glow cursor-pointer"
            >
              <Send className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold tracking-tighter uppercase font-display hidden xs:block">
               MapMates <span className="text-brand-blue text-glow">Ecosystem</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <NavLink href="#demo-map">Realtime Map</NavLink>
            <NavLink href="#features">Ecosystem</NavLink>
            <NavLink href="#founder">The Vision</NavLink>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://mapmateshub.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-brand-blue text-white font-bold rounded-full text-[10px] uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
            >
              Launch System
            </motion.a>
          </div>

          <button className="md:hidden p-3 text-white/60 bg-white/5 rounded-xl border border-white/5" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Upgrade */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 inset-x-4 glass-panel !bg-black/90 p-8 rounded-[2.5rem] md:hidden z-50 border-white/10 backdrop-blur-3xl"
          >
            <div className="flex flex-col gap-8 text-center">
              <NavLink href="#demo-map" onClick={() => setIsOpen(false)}>Realtime Map</NavLink>
              <NavLink href="#features" onClick={() => setIsOpen(false)}>Ecosystem</NavLink>
              <NavLink href="#founder" onClick={() => setIsOpen(false)}>The Vision</NavLink>
              <button 
                onClick={() => window.open('https://mapmateshub.netlify.app', '_blank')}
                className="w-full py-5 bg-brand-blue text-white font-bold rounded-2xl uppercase tracking-[0.3em] text-[10px] neon-glow"
              >
                Launch System
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const target = document.querySelector(href);
      if (target) {
        const rect = target.getBoundingClientRect();
        setIsActive(rect.top <= 250 && rect.bottom >= 150);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);

  return (
    <motion.a 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      href={href} 
      onClick={onClick}
      className={`relative px-5 py-2.5 transition-all duration-300 uppercase tracking-[0.25em] text-[10px] font-mono font-extrabold rounded-full border flex items-center gap-1.5 ${
        isActive 
          ? 'text-white border-brand-blue/60 bg-[#0d2a5c]/25 shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
          : 'text-white/50 border-transparent hover:text-white hover:bg-white/[0.03]'
      }`}
    >
      {isActive && (
        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
      )}
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.div 
          layoutId="nav-glow-pill"
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 rounded-full -z-10 border border-brand-blue/40"
        >
          <div className="absolute inset-0 bg-brand-blue/5 rounded-full blur-[6px]" />
        </motion.div>
      )}
    </motion.a>
  );
}
