import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, ShieldCheck, Zap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40">
      {/* Animated Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-brand-blue/15 via-transparent to-transparent" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/0 via-[#080808]/50 to-[#080808]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/10 text-brand-cyan text-[10px] font-mono uppercase tracking-[0.3em] mb-8 animate-pulse">
               <Zap className="w-3 h-3 fill-brand-cyan" />
               Realtime Social Navigation
            </div>
            
            <h1 className="text-5xl md:text-9xl font-bold font-display leading-[0.85] tracking-tighter mb-8 px-4">
              Realtime Human <br />
              <span className="text-brand-blue text-glow relative inline-block">
                Connection
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="absolute bottom-2 md:bottom-4 left-0 h-1 bg-brand-blue/40 -z-10 blur-sm"
                />
              </span> on a <br />
              <span className="italic font-light opacity-80 decoration-brand-blue/20">Living Map.</span>
            </h1>
            
            <p className="text-base md:text-2xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed font-light px-6">
              MapMates Ecosystem is a futuristic social navigation platform designed to bridge digital distance 
              through absolute live interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-24 px-6 w-full sm:w-auto"
          >
            <button 
              onClick={() => document.getElementById('demo-map')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-5 bg-brand-blue text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 neon-glow text-sm md:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative flex items-center justify-center gap-3">
                Explore Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a
              href="https://mapmateshub.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 glass-panel hover:bg-white/[0.05] text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 border-white/5 text-sm md:text-base backdrop-blur-xl"
            >
              Open Platform <ExternalLink className="w-5 h-5 opacity-40" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 pt-12 border-t border-white/5 w-full max-w-4xl px-6"
          >
            <HeroStat icon={Users} label="Active Mates" value="12k+" />
            <HeroStat icon={ShieldCheck} label="Safety Nodes" value="2.4k" />
            <HeroStat icon={Zap} label="Sync Latency" value="1.2ms" className="hidden md:flex" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -track-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-blue to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em] font-mono text-white/30 transform rotate-90 origin-left mt-8">Scroll</span>
      </motion.div>
    </section>
  );
}

function HeroStat({ icon: Icon, label, value, className = '' }: { icon: any, label: string, value: string, className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className="p-2 rounded-lg bg-white/5 mb-2">
        <Icon className="w-4 h-4 text-brand-blue/60" />
      </div>
      <div className="text-2xl font-bold font-display tracking-tight leading-none">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-white/30 font-mono">{label}</div>
    </div>
  );
}
