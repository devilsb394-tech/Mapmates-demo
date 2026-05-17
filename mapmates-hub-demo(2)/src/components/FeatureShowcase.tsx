import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { FEATURES, type Feature } from '../constants/features';

export default function FeatureShowcase() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <section className="py-40 space-y-40 bg-[#080808]">
      <div className="container mx-auto px-6 text-center mb-32">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-[10px] text-brand-blue font-bold tracking-[0.2em] uppercase mb-8"
        >
          Product Ecosystem
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-bold mb-8 tracking-tight font-display leading-[1.1]"
        >
          Engineered for <br /><span className="text-brand-blue font-light italic">Human Presence.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 max-w-2xl mx-auto text-xl font-light"
        >
          Every feature was born from a desire to make the digital world feel as tangible as the street you live on.
        </motion.p>
      </div>

      <div className="space-y-40">
        {FEATURES.map((feature, index) => (
          <FeatureItem 
            key={feature.id} 
            feature={feature} 
            index={index} 
            onLearnMore={() => setSelectedFeature(feature)} 
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <FeatureModal 
            feature={selectedFeature} 
            onClose={() => setSelectedFeature(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

interface FeatureItemProps {
  feature: Feature;
  index: number;
  onLearnMore: () => void;
  key?: string | number;
}

function FeatureItem({ feature, index, onLearnMore }: FeatureItemProps) {
  const isEven = index % 2 === 0;
  const IconComponent = (Icons as any)[feature.icon];

  return (
    <div className="container mx-auto px-6">
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex-1 w-full relative"
        >
          {/* Futuristic Visual Mockup Container */}
          <div className="relative aspect-video lg:aspect-square group cursor-pointer" onClick={onLearnMore}>
            <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
            
            <div className="w-full h-full glass-panel rounded-[3rem] p-8 overflow-hidden relative z-10 border-white/5 transition-transform duration-700 group-hover:scale-[1.02]">
               <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover rounded-[2rem] opacity-40 mix-blend-luminosity group-hover:opacity-70 transition-all duration-700 group-hover:mix-blend-normal"
               />
               
               {/* UI Overlay Elements */}
               <div className="absolute inset-x-8 top-8 flex justify-between items-center z-20">
                  <div className="flex gap-2">
                    <div className="w-8 h-2 rounded-full bg-brand-blue" />
                    <div className="w-4 h-2 rounded-full bg-white/20" />
                  </div>
                  <div className="px-3 py-1 rounded-full glass-panel text-[8px] font-mono tracking-widest uppercase">
                    Module v4.2
                  </div>
               </div>

               <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="glass-panel p-6 rounded-2xl border-brand-blue/20 backdrop-blur-3xl">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                           {IconComponent && <IconComponent className="w-5 h-5" />}
                        </div>
                        <div>
                           <div className="text-xs font-bold font-mono tracking-widest uppercase text-brand-blue/60">System Ready</div>
                           <div className="text-lg font-bold">{feature.title}</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Background elements */}
            <div className={`absolute -inset-4 border border-brand-blue/10 rounded-[3.5rem] -z-10 transition-transform duration-700 ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex-1 space-y-8"
        >
          <div className="flex items-center gap-4 text-brand-blue mb-4">
             <div className="w-12 h-px bg-brand-blue/30" />
             <span className="font-mono text-xs uppercase tracking-[0.5em] font-bold">Feature 0{index + 1}</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-none font-display">
            {feature.title}
          </h3>
          <p className="text-2xl text-white/80 font-light italic leading-tight">
            "{feature.description}"
          </p>
          <p className="text-white/40 text-xl leading-relaxed font-light">
            {feature.longDescription}
          </p>
          <div className="pt-8">
            <button 
              onClick={onLearnMore}
              className="flex items-center gap-4 px-8 py-4 glass-panel border-white/10 rounded-2xl hover:border-brand-blue/30 transition-all group"
            >
              <span className="text-sm font-bold uppercase tracking-widest group-hover:text-brand-blue transition-colors">See Future Vision</span>
              <Icons.Plus className="w-5 h-5 text-brand-blue group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureModal({ feature, onClose }: { feature: Feature; onClose: () => void }) {
  const IconComponent = (Icons as any)[feature.icon];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050505]/98 backdrop-blur-3xl" onClick={onClose} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="w-full max-w-6xl glass-panel !bg-[#0a0a0a]/60 border-white/5 rounded-[3rem] p-6 md:p-16 relative z-10 overflow-y-auto max-h-[95vh] scrollbar-hide shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
      >
        {/* Improved Close Button Position for Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 md:top-10 md:right-10 p-4 rounded-full glass-panel hover:bg-white/5 transition-all text-white/40 hover:text-white z-[110] border-white/10"
        >
          <Icons.X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="space-y-12 pr-0 lg:pr-8">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2rem] bg-brand-blue/10 flex items-center justify-center text-brand-blue shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-brand-blue/20">
                  {IconComponent && <IconComponent className="w-8 h-8 md:w-10 md:h-10" />}
               </div>
               <div>
                  <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight leading-none">{feature.title}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                    <p className="text-brand-blue font-mono text-[9px] uppercase tracking-[0.4em] font-bold">Operational Protocol v1.0</p>
                  </div>
               </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Concept & Utility</h4>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                  {feature.longDescription}
                </p>
              </div>

              {feature.story && (
                <div className="space-y-4 p-8 glass-panel rounded-[2rem] border-brand-blue/10 bg-brand-blue/[0.02]">
                  <h4 className="text-brand-blue/40 text-[10px] uppercase tracking-[0.4em] font-mono font-bold flex items-center gap-3">
                    <Icons.Quote className="w-3 h-3" />
                    Personal Mission
                  </h4>
                  <p className="text-lg text-white/50 italic font-light leading-relaxed">
                    "{feature.story}"
                  </p>
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-4">— Faizan Zeeshan</p>
                </div>
              )}
            </div>

            {feature.vision && (
              <div className="space-y-4">
                <h4 className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Social Projection</h4>
                <p className="text-xl text-brand-blue italic font-light leading-snug">
                  "{feature.vision}"
                </p>
              </div>
            )}

            {feature.stats && (
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {feature.stats.map((stat, i) => (
                  <div key={i} className="glass-panel p-6 rounded-[1.5rem] border-white/5 bg-white/[0.02]">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-mono mb-2">{stat.label}</div>
                    <div className="text-2xl md:text-3xl font-bold font-display tracking-tighter text-white/90">{stat.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative group lg:sticky lg:top-0">
            <div className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden glass-panel border-white/5 aspect-square md:aspect-[4/5] relative shadow-2xl">
              <img 
                src={feature.image} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-1000 mix-blend-luminosity hover:mix-blend-normal" 
                alt={feature.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              
              {/* Futuristic UI HUD Overlay */}
              <div className="absolute inset-8 pointer-events-none flex flex-col justify-between border border-white/5 rounded-[2rem] p-6 opacity-40">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <div className="w-12 h-1 bg-brand-blue" />
                    <div className="w-8 h-1 bg-white/20" />
                  </div>
                  <div className="text-[8px] font-mono text-white/40 uppercase tracking-[0.4em]">Sector Grid 7.4</div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="text-[8px] font-mono text-white/40 uppercase tracking-[0.4em]">Live Data Stream</div>
                  <div className="flex gap-1 items-end">
                    {[20, 40, 15, 60, 30].map((h, i) => (
                      <div key={i} className="w-1 bg-brand-blue" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                 <div className="px-5 py-2 glass-panel border-white/10 rounded-full inline-flex items-center gap-3 bg-black/40 backdrop-blur-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Module Interface Active</span>
                 </div>
                 <div className="text-xs text-white/40 font-light leading-relaxed bg-black/20 p-4 rounded-xl backdrop-blur-md">
                   Platform Vision: Fully autonomous social mesh integration. Predicted deployment cycle: Phase 4.
                 </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
