import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Globe, Cpu } from 'lucide-react';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [percent, setPercent] = useState(0);
  const [stage, setStage] = useState(0); // 0: Logo, 1: Founder, 2: Loading, 3: Exit

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 40);

    const s1 = setTimeout(() => setStage(1), 800);
    const s2 = setTimeout(() => setStage(2), 2200);
    const s3 = setTimeout(() => setStage(3), 4800);
    const sComplete = setTimeout(onComplete, 5800);

    return () => {
      clearInterval(interval);
      clearTimeout(s1);
      clearTimeout(s2);
      clearTimeout(s3);
      clearTimeout(sComplete);
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {stage < 3 && (
        <motion.div
          key="splash-main"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(30px)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Animated Background Tissue */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <motion.div 
               animate={{ 
                 opacity: [0.05, 0.15, 0.05],
                 scale: [1, 1.1, 1],
                 rotate: [0, 5, 0]
               }}
               transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
               className="absolute inset-x-[-10%] inset-y-[-10%] bg-radial-[circle_at_50%_50%] from-brand-blue/20 via-transparent to-transparent" 
            />
            
            <motion.div 
              animate={{ top: ['-20%', '120%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)] opacity-30"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-2xl w-full px-6">
            
            {/* Logo Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center mb-12"
            >
              <motion.div 
                animate={{ 
                  y: [0, -5, 0],
                  filter: ['drop-shadow(0 0 10px rgba(59,130,246,0.3))', 'drop-shadow(0 0 25px rgba(59,130,246,0.6))', 'drop-shadow(0 0 10px rgba(59,130,246,0.3))']
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-16 h-16 md:w-24 md:h-24 bg-brand-blue rounded-3xl flex items-center justify-center neon-glow mb-10 rotate-3"
              >
                <Send className="w-8 h-8 md:w-12 md:h-12 text-white rotate-12" />
              </motion.div>
              
              <h1 className="text-4xl md:text-7xl font-bold tracking-[0.4em] font-display uppercase text-white mb-4 text-center text-glow">
                MAPMATES <span className="text-brand-blue font-light">HUB</span>
              </h1>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50" 
              />
            </motion.div>

            {/* Stages Section */}
            <div className="h-24 relative w-full flex justify-center">
              <AnimatePresence mode="wait">
                {stage === 1 && (
                  <motion.div
                    key="step-founder"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute text-center"
                  >
                    <p className="text-white/20 text-[10px] uppercase tracking-[0.6em] font-mono mb-2">Developed from the room of</p>
                    <h3 className="text-2xl font-display font-medium tracking-tight text-white/80">Faizan Zeeshan</h3>
                  </motion.div>
                )}

                {stage === 2 && (
                  <motion.div
                    key="step-loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute w-full max-w-sm flex flex-col items-center gap-6"
                  >
                    <div className="flex items-center gap-4 text-brand-blue">
                      <Globe className="w-4 h-4 animate-spin-slow" />
                      <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Connecting Realtime Infrastructure</span>
                    </div>
                    
                    <div className="w-full h-px bg-white/5 rounded-full overflow-hidden relative">
                      <motion.div 
                        className="absolute inset-y-0 left-0 bg-brand-blue shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${percent}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between w-full text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">
                      <span>Node Latency: 12ms</span>
                      <span>{percent}% Complete</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Aesthetic UI Accents */}
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <Cpu className="w-4 h-4 text-brand-blue/60" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">Core Engine</span>
              <span className="text-[10px] font-mono text-white uppercase font-bold">Stable v4.2 Final</span>
            </div>
          </div>
          
          <div className="absolute top-10 right-10 md:top-16 md:right-16 text-right hidden sm:block">
            <div className="text-[9px] font-mono text-white/10 uppercase tracking-[0.3em] mb-2">Location Context</div>
            <div className="flex items-center gap-3 justify-end">
              <span className="text-[10px] font-mono text-white/40 uppercase font-bold">31.5204° N, 74.3587° E</span>
              <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
