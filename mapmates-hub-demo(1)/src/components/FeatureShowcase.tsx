import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { FEATURES, type Feature } from '../constants/features';

export default function FeatureShowcase() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <section id="features" className="py-24 md:py-40 space-y-24 md:space-y-40 bg-[#050505] relative z-10 scroll-mt-24">
      <div className="container mx-auto px-6 text-center mb-16 md:mb-32 pt-20">
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
          className="text-5xl md:text-8xl font-bold mb-8 tracking-tight font-display leading-[1.1]"
        >
          Engineered for <br /><span className="text-brand-blue font-light italic">Human Presence.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 max-w-2xl mx-auto text-lg md:text-xl font-light px-4"
        >
          Every feature was born from a desire to make the digital world feel as tangible as the street you live on.
        </motion.p>
      </div>

      <div className="space-y-24 md:space-y-48">
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
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-32 items-center`}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex-1 w-full relative"
        >
          <div className="relative aspect-video lg:aspect-square group cursor-pointer" onClick={onLearnMore}>
            <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
            
            <div className="w-full h-full glass-panel rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 overflow-hidden relative z-10 border-white/5 transition-transform duration-700 group-hover:scale-[1.02] shadow-2xl bg-black/40">
               <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover rounded-[2rem] opacity-30 mix-blend-luminosity group-hover:opacity-60 transition-all duration-700 group-hover:mix-blend-normal"
               />
               
               <div className="absolute inset-x-8 top-8 flex justify-between items-center z-20">
                  <div className="flex gap-2">
                    <div className="w-8 h-2 rounded-full bg-brand-blue" />
                    <div className="w-4 h-2 rounded-full bg-white/20" />
                  </div>
                  <div className="px-3 py-1 rounded-full glass-panel text-[8px] font-mono tracking-widest uppercase border-white/10 bg-black/40">
                    Protocol 0{index + 1}
                  </div>
               </div>

               <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="glass-panel p-6 rounded-2xl border-white/10 backdrop-blur-3xl bg-black/60 shadow-xl">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center text-white">
                           {IconComponent && <IconComponent className="w-5 h-5" />}
                        </div>
                        <div>
                           <div className="text-[10px] font-bold font-mono tracking-[0.3em] uppercase text-brand-blue/80 mb-1">Module Active</div>
                           <div className="text-xl font-bold font-display tracking-tight text-white/90">{feature.title}</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

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
             <span className="font-mono text-xs uppercase tracking-[0.5em] font-bold">Node Identity 0{index + 1}</span>
          </div>
          <h3 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none font-display">
            {feature.title}
          </h3>
          <p className="text-xl md:text-2xl text-white/70 font-light italic leading-snug">
            "{feature.description}"
          </p>
          <p className="text-white/40 text-lg md:text-xl leading-relaxed font-light">
            {feature.longDescription}
          </p>
          <div className="pt-4 md:pt-8">
            <button 
              onClick={onLearnMore}
              className="flex items-center gap-4 px-8 py-4 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl hover:bg-brand-blue hover:text-white transition-all group scale-100 hover:scale-105"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-white transition-colors">Vision Interface</span>
              <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ImageCarousel({ images, captions }: { images: string[], captions?: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img 
            src={images[index]} 
            className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110" 
            alt={`Slide ${index + 1}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
          
          {captions?.[index] && (
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="absolute bottom-10 left-10 right-10 z-30"
            >
              <div className="glass-panel p-4 rounded-xl border-white/5 bg-black/40 backdrop-blur-md">
                 <p className="text-white/80 text-sm font-light italic leading-relaxed text-center">
                   {captions[index]}
                 </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between z-40 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={prev} className="p-3 rounded-full glass-panel border-white/10 hover:bg-brand-blue hover:text-white transition-all">
          <Icons.ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="p-3 rounded-full glass-panel border-white/10 hover:bg-brand-blue hover:text-white transition-all">
          <Icons.ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)}
            className={`w-12 h-1 rounded-full transition-all ${i === index ? 'bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}

function FeatureModal({ feature, onClose }: { feature: Feature; onClose: () => void }) {
  const IconComponent = (Icons as any)[feature.icon];

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('detailViewToggle', { detail: { open: true } }));
    return () => window.dispatchEvent(new CustomEvent('detailViewToggle', { detail: { open: false } }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050505]/98 backdrop-blur-3xl" onClick={onClose} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 30 }}
        className="w-full max-w-7xl glass-panel !bg-[#080808]/80 border-white/5 rounded-[3rem] p-6 md:p-12 lg:p-20 relative z-10 overflow-y-auto max-h-[95vh] scrollbar-hide shadow-[0_50px_100px_rgba(0,0,0,1)]"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-10 md:right-10 p-4 md:p-5 rounded-full glass-panel bg-black/50 backdrop-blur-xl hover:bg-brand-blue group transition-all text-white/60 hover:text-white z-[210] border-white/10 shadow-lg"
        >
          <Icons.X className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-90 transition-transform" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-12 pr-0 lg:pr-8">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2.5rem] bg-brand-blue shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center text-white border border-brand-blue/20">
                  {IconComponent && <IconComponent className="w-8 h-8 md:w-10 md:h-10" />}
               </div>
               <div>
                  <h2 className="text-3xl md:text-6xl font-bold font-display tracking-tighter leading-none text-white/95">{feature.title}</h2>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                    <p className="text-brand-blue font-mono text-[10px] uppercase tracking-[0.5em] font-bold">Priority Context Alpha</p>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h4 className="text-white/20 text-[10px] uppercase tracking-[0.6em] font-mono font-bold">The Human Logic</h4>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                  {feature.longDescription}
                </p>
              </div>

              {feature.story && (
                <div className="space-y-6 p-10 glass-panel rounded-[3rem] border-brand-blue/20 bg-brand-blue/[0.03] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Icons.Shield className="w-20 h-20 text-brand-blue" />
                  </div>
                  <h4 className="text-brand-blue/50 text-[10px] uppercase tracking-[0.6em] font-mono font-bold flex items-center gap-3">
                    <Icons.Cpu className="w-4 h-4" />
                    Founder Protocol
                  </h4>
                  <p className="text-xl text-white/40 italic font-light leading-relaxed relative z-10">
                    "{feature.story}"
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-10 h-1bg-brand-blue/20" />
                    <p className="text-[10px] font-mono text-brand-blue uppercase tracking-[0.5em] font-bold">Faizan Zeeshan</p>
                  </div>
                </div>
              )}

              {feature.vision && (
                <div className="space-y-6">
                  <h4 className="text-white/20 text-[10px] uppercase tracking-[0.6em] font-mono font-bold">Social Evolution</h4>
                  <p className="text-2xl text-brand-blue italic font-light leading-snug border-l-2 border-brand-blue/20 pl-8">
                    "{feature.vision}"
                  </p>
                </div>
              )}

              {feature.stats && (
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="glass-panel p-8 rounded-[2.5rem] border-white/5 bg-white/[0.02]">
                      <div className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-mono mb-3 font-bold">{stat.label}</div>
                      <div className="text-3xl md:text-4xl font-bold font-display tracking-tighter text-white/90">{stat.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="relative group lg:sticky lg:top-0 h-full min-h-[500px]">
             <div className="rounded-[3rem] md:rounded-[4rem] overflow-hidden glass-panel border-white/5 aspect-[4/5] relative shadow-2xl bg-black">
                {feature.images ? (
                  <ImageCarousel images={feature.images} captions={feature.imageCaptions} />
                ) : (
                  <img src={feature.image} className="w-full h-full object-cover opacity-50" alt={feature.title} />
                )}
                
                {/* HUD Overlay */}
                <div className="absolute inset-10 pointer-events-none flex flex-col justify-between border border-white/5 rounded-[3rem] p-8 opacity-30 z-20">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                       <div className="w-12 h-1 bg-brand-blue" />
                       <div className="w-8 h-1 bg-white/20" />
                    </div>
                    <div className="text-[9px] font-mono text-white/40 uppercase tracking-[0.6em]">Sector: Social_Core</div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="text-[9px] font-mono text-white/40 uppercase tracking-[0.6em]">Data Stream Active</div>
                    <div className="flex gap-1 items-end">
                      {[15, 35, 10, 50, 25].map((h, i) => (
                        <div key={i} className="w-1.5 bg-brand-blue/40" style={{ height: `${h}px` }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10 z-30 flex flex-col gap-4 pointer-events-none">
                   <div className="px-6 py-3 glass-panel border-white/10 rounded-full inline-flex items-center gap-3 bg-black/60 backdrop-blur-2xl self-start">
                      <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/80 font-bold">Scenario Visualizer v2</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
