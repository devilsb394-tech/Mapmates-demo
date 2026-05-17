import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Twitter, Instagram, Send, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-brand-blue/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center neon-glow">
                <Send className="w-6 h-6 text-white rotate-12" />
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase font-display">
                MapMates <span className="text-brand-blue">Hub</span>
              </span>
            </div>
            <p className="text-white/40 text-lg leading-relaxed font-light">
              Designing the future of human connection, one coordinate at a time. Built with passion in Lahore.
            </p>
            <div className="flex gap-4">
               <SocialIcon Icon={Twitter} />
               <SocialIcon Icon={Instagram} />
               <SocialIcon Icon={Mail} />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-white/20">Navigation</h4>
            <div className="flex flex-col gap-4">
              <FooterLink href="#demo-map">Interactive Map</FooterLink>
              <FooterLink href="#">Vision 2026</FooterLink>
              <FooterLink href="#">Safety Hub</FooterLink>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-white/20">Founder</h4>
            <div className="flex flex-col gap-4">
              <FooterLink href="#">Faizan Zeeshan</FooterLink>
              <FooterLink href="#">Personal Story</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-white/20">Connect</h4>
            <a
              href="https://mapmateshub.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-panel p-6 rounded-[2rem] border-brand-blue/20 hover:bg-brand-blue/5 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold group-hover:text-brand-blue transition-colors">Launch Platform</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Live in Lahore • v1.0</div>
                </div>
                <ExternalLink className="w-6 h-6 text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:items-start items-center">
            <p className="text-white/20 text-[10px] uppercase font-mono tracking-[0.4em]">
              Designed & Developed from <span className="text-white/40">Street Ladu Ki Gali</span>
            </p>
          </div>
          <p className="text-white/10 text-[10px] uppercase tracking-[0.5em]">
            © 2024 MAPMATES HUB — BEYOND GEOGRAPHY.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-white/40 hover:text-brand-blue transition-all uppercase tracking-widest text-[10px] font-mono leading-none"
    >
      {children}
    </a>
  );
}

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <a href="#" className="w-10 h-10 rounded-xl glass-panel hover:bg-brand-blue hover:text-black transition-all flex items-center justify-center border-white/5">
      <Icon className="w-4 h-4" />
    </a>
  );
}
