import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function FounderStory() {
  return (
    <section className="py-32 md:py-48 relative bg-[#050505] overflow-hidden">
      {/* Cinematic light rays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 blur-[180px] rounded-full pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none -ml-40 -mb-40" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 w-full max-w-xl mx-auto lg:mx-0"
          >
            <div className="relative group">
              <div className="rounded-[3rem] overflow-hidden glass-panel border-white/5 relative z-10 aspect-[4/5] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20" />
                <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center p-8 md:p-12 text-center relative border border-white/5">
                   <div className="absolute inset-0 opacity-5 bg-grid pointer-events-none" />
                   <motion.div 
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="z-30 flex flex-col items-center"
                   >
                     <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border border-brand-blue/20 p-3 mb-10 bg-black/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                        <div className="w-full h-full rounded-full bg-brand-blue/10 flex items-center justify-center text-3xl md:text-5xl font-bold font-display text-white/90">
                           FZ
                        </div>
                     </div>
                     <h3 className="text-3xl md:text-4xl font-display font-medium mb-2 tracking-tight">Faizan Zeeshan</h3>
                     <p className="text-brand-blue font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 font-bold">The Visionary Founder</p>
                     
                     <div className="flex flex-col gap-3 text-white/20 text-[9px] uppercase tracking-[0.3em] font-mono pt-6 border-t border-white/5 w-full">
                        <span>Lahore, Pakistan</span>
                        <span>Baghbanpura Sector 7</span>
                     </div>
                   </motion.div>
                </div>
              </div>
              
              {/* Floating Journey Card Upgrade */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                className="absolute -bottom-10 -right-6 md:-right-10 z-40 glass-panel !bg-black/60 p-8 rounded-[2.5rem] w-80 hidden sm:block border-brand-blue/10 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              >
                <div className="text-[10px] font-mono text-brand-blue uppercase tracking-[0.4em] mb-6 font-bold pb-4 border-b border-white/5">Development Timeline</div>
                <div className="space-y-4">
                  <JourneyStep year="Phase 1 • 2021" school="Foundation & Logic" current={false} />
                  <JourneyStep year="Phase 2 • 2023" school="The Educators Sector" current={false} />
                  <JourneyStep year="Phase 3 • 2024" school="Unique Social Core" current={false} />
                  <JourneyStep year="Current State" school="Realtime Platform v1" current={true} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-12"
          >
            <div className="relative">
              <Quote className="absolute -top-16 -left-12 w-32 h-32 text-brand-blue/5 -z-10" />
              <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter leading-[0.85] font-display">
                My mission is to <br />
                <span className="text-brand-blue italic font-light">rehumanize</span> <br />
                the digital city.
              </h2>
              
              <div className="space-y-10 text-white/50 text-lg md:text-2xl leading-relaxed font-light">
                <p>
                  "I spent countless nights alone in my room, watching as we became more connected by wires but more isolated in spirit. We live blocks away from friends, yet we move through our streets like strangers."
                </p>
                <p className="text-white/70">
                  I built MapMates Hub to destroy that silence. I wanted to see my neighborhood breathe in realtime—to know where the life is, to see my squad moving, and to feel safe knowing we're all connected by a shared digital presence.
                </p>
                <p>
                  This isn't just an app; it's my heart poured into code. At 17, I'm inviting you to a future where navigation is about connection, not just destinations.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-8 px-8 py-10 glass-panel rounded-[2.5rem] border-white/5">
                   <div className="flex flex-col">
                      <span className="text-white font-bold font-display tracking-tight text-xl">Faizan Zeeshan</span>
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] mt-2">Personal Vision & Engineering</span>
                   </div>
                   <div className="hidden sm:block w-px h-12 bg-white/10" />
                   <div className="text-brand-blue font-mono font-bold tracking-widest text-sm">+92 318 0086538</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function JourneyStep({ year, school, current }: { year: string, school: string, current: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-2 h-2 rounded-full mt-1.5 ${current ? 'bg-brand-blue animate-pulse' : 'bg-white/10'}`} />
      <div className="flex flex-col">
        <span className="text-[10px] font-mono text-white/20 uppercase">{year}</span>
        <span className={`text-[11px] font-bold ${current ? 'text-white' : 'text-white/40'}`}>{school}</span>
      </div>
    </div>
  );
}
