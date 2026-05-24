import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Bot, 
  Cpu, 
  Globe, 
  Search, 
  EyeOff, 
  ExternalLink, 
  Volume2, 
  Youtube, 
  CloudRain, 
  Navigation, 
  ShieldAlert, 
  ShieldCheck,
  Layers, 
  MessageSquare, 
  ShoppingBag, 
  Play, 
  CheckCircle,
  Clock,
  Radio,
  Share2
} from 'lucide-react';

export default function EcosystemAI() {
  const [activeTab, setActiveTab] = useState<'ai' | 'answer'>('ai');

  return (
    <section id="ai-ecosystem" className="py-24 md:py-40 bg-[#060606] relative overflow-hidden scroll-mt-24">
      {/* Visual background atmospheric effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-white/5 text-brand-cyan text-[10px] uppercase tracking-[0.40em] mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            AI Intelligence Nodes
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold font-display tracking-tight leading-none mb-6"
          >
            MapMates <span className="text-brand-blue font-light italic text-glow">Intelligence.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-2xl mx-auto text-base md:text-xl font-light"
          >
            Step into the next evolution of knowledge. Beyond static maps, our autonomous AI sibling nodes provide active route wisdom, direct voice communication, and untraceable private search overlays.
          </motion.p>
        </div>

        {/* Dynamic Premium Navigation Tabs */}
        <div className="flex justify-center mb-12 md:mb-20">
          <div className="p-1 px-1.5 glass-panel rounded-full border-white/5 flex gap-2 relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setActiveTab('ai')}
              className={`relative px-6 py-3.5 md:px-8 md:py-4 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2.5 ${
                activeTab === 'ai' 
                  ? 'text-white' 
                  : 'text-white/40 hover:text-white/80'
              }`}
            >
              {activeTab === 'ai' && (
                <motion.div 
                  layoutId="ecosystem-tab-bg"
                  transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                  className="absolute inset-0 bg-brand-blue rounded-full -z-10 shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-brand-blue/30"
                />
              )}
              <Bot className="w-4 h-4" />
              MapMates AI
            </button>
            <button
              onClick={() => setActiveTab('answer')}
              className={`relative px-6 py-3.5 md:px-8 md:py-4 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2.5 ${
                activeTab === 'answer' 
                  ? 'text-white' 
                  : 'text-white/40 hover:text-white/80'
              }`}
            >
              {activeTab === 'answer' && (
                <motion.div 
                  layoutId="ecosystem-tab-bg"
                  transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                  className="absolute inset-0 bg-brand-blue rounded-full -z-10 shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-brand-blue/30"
                />
              )}
              <Globe className="w-4 h-4" />
              MapMates Answer
              <span className="text-[8px] tracking-[0.1em] px-1.5 py-0.5 rounded bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/20 ml-1 font-sans">SOON</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <AnimatePresence mode="wait">
          {activeTab === 'ai' ? (
            <motion.div
              key="mapmates-ai"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch"
            >
              {/* Product Info Board */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono uppercase bg-brand-blue/10 text-brand-blue border border-brand-blue/20 px-3 py-1 rounded-full font-bold tracking-widest">
                      Live Gateway
                    </span>
                    <span className="text-white/30 font-mono text-xs">
                      mapmatesai.netlify.app
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
                    The Smart Adaptive <br />
                    <span className="text-brand-blue italic font-light">Location Companion</span>
                  </h3>

                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">
                    MapMates AI integrates live location context directly with cutting-edge artificial intelligence. It functions as an active digital sibling that coordinates your travel safety and synthesizes internet-wide data on the fly.
                  </p>
                </div>

                {/* Sub-features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="glass-panel p-6 rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                      <CloudRain className="w-5 h-5" />
                    </div>
                    <h4 className="text-md font-semibold text-white/90 mb-2">Weather &amp; Route Advisor</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light">
                      Advises whether the path is safe to navigate based on severe changes. Counts isochrone MapMates members nearby for guaranteed visual context and localized offline assistance.
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                      <Volume2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-md font-semibold text-white/90 mb-2">Voice Synthesis Summaries</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light">
                      Supports direct voice conversations. Skip long messages and readouts; the system generates actual voice call digests so you can listen dynamically while walking.
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <h4 className="text-md font-semibold text-white/90 mb-2">Clean Video &amp; Web Search</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light">
                      Searches videos (like YouTube) and articles efficiently, distilling absolute essential points into custom commentary highlights without cluttering your UI with useless links or ads.
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                      <EyeOff className="w-5 h-5" />
                    </div>
                    <h4 className="text-md font-semibold text-white/90 mb-2">100% Privacy Mandate</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light">
                      Absolutely zero history logging on client or backend databases. Built for safety and utility rather than monetization. Your queries vanish the second you exit.
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://mapmatesai.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl hover:bg-brand-blue/90 hover:scale-[1.02] active:scale-[0.98] transition-all font-mono tracking-widest text-xs uppercase shadow-[0_10px_30px_rgba(59,130,246,0.3)] group"
                  >
                    <span>Explore MapMates AI Hub</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Graphic/Visual Frame */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full aspect-[4/5] glass-panel rounded-[2.5rem] border-white/5 p-8 relative flex flex-col justify-between overflow-hidden bg-black/40">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
                  
                  {/* Mock HUD Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-extrabold text-white/60">Node: Operational</span>
                    </div>
                    <span className="text-[9px] font-mono text-white/30 uppercase">Protocol: MAP_AI_v4</span>
                  </div>

                  {/* Simulated Interface Interaction */}
                  <div className="my-8 space-y-4 relative z-10 flex-grow flex flex-col justify-center">
                    <div className="glass-panel p-4 rounded-xl border-white/5 bg-white/[0.01] max-w-[85%]">
                      <p className="text-[10px] uppercase font-mono tracking-widest text-brand-blue mb-1 font-bold">Inbound Query</p>
                      <p className="text-xs text-white/80 font-light">"How is the severe weather along my route to Lahore, and are any mates nearby?"</p>
                    </div>

                    <div className="glass-panel p-4 rounded-xl border-brand-blue/20 bg-brand-blue/[0.03] max-w-[90%] self-end">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Bot className="w-3.5 h-3.5 text-brand-cyan" />
                        <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan font-bold">MapMates Core AI</span>
                      </div>
                      <p className="text-xs text-white/80 font-light mb-2">"Light rain ahead on Route 5. However, 8 Mates are active within a 1km block. Tap hear to listen to your voice recap summary."</p>
                      
                      {/* Synthesized Voice Mock */}
                      <div className="flex items-center gap-3 px-3 py-2 bg-black/40 rounded-lg border border-white/5">
                        <Play className="w-3 h-3 text-brand-blue fill-brand-blue" />
                        <div className="flex-grow flex gap-1 items-end">
                          <div className="w-1 h-3 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-1 h-5 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                          <div className="w-1 h-2 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <div className="w-1 h-6 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                          <div className="w-1 h-3 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </div>
                        <span className="text-[9px] font-mono text-brand-cyan font-bold">0:08</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[10px] font-mono text-white/30">
                    <span>GPS LOC: 31.5204° N, 74.3587° E</span>
                    <span>Mates in Radius: 12</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mapmates-answer"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch"
            >
              {/* Product Info Board */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono uppercase bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/30 px-3 py-1 rounded-full font-bold tracking-widest animate-pulse">
                      Development Initiated
                    </span>
                    <span className="text-white/30 font-mono text-xs">
                      Webcomment &amp; Global Access Node
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
                    MapMates Answer <br />
                    <span className="text-brand-cyan italic font-light">The Global Insight Engine</span>
                  </h3>

                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">
                    MapMates Answer is engineered to bypass typical ad-cluttered search models. It parses live internet streams, formats visual localized coordinate grids, authenticates news validity, and layers real-time commentaries directly onto any webpage worldwide.
                  </p>
                </div>

                {/* Sub-features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="glass-panel p-6 rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <h4 className="text-md font-semibold text-white/90 mb-2">Web Comment Overlay System</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light">
                      Enables a seamless comment layer (voice summaries + text) over any website (e.g. YouTube webs), so you know what users think about the site or product before reading or exploring.
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h4 className="text-md font-semibold text-white/90 mb-2">VPN-Free Raw Web Access</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light">
                      Allows direct raw traversal and viewing of global web services without configuring or firing up laggy, untrusted third-party VPN clients.
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <h4 className="text-md font-semibold text-white/90 mb-2">Localized Ad-Free Products</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light">
                      Queries local inventory grids to locate actual nearby hardware, tools, or clothing options matching your vector coordinates, completely blocking sponsored bloat.
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-md font-semibold text-white/90 mb-2">Headline News Fact-Checker</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light">
                      Scrapes and analyzes global news reports, compares headings dynamically, checks verification levels across sources, and generates a concrete percent score of overall truth.
                    </p>
                  </div>
                </div>

                <div className="pt-6 relative">
                  <div className="inline-flex items-center gap-3 px-6 py-4.5 bg-white/[0.02] border border-white/[0.05] text-white/40 font-bold rounded-2xl font-mono text-xs uppercase cursor-not-allowed">
                    <Clock className="w-4 h-4 text-brand-cyan animate-spin" style={{ animationDuration: '3s' }} />
                    <span>In Active Laboratory Testing</span>
                  </div>
                </div>
              </div>

              {/* Graphic/Visual Frame */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full aspect-[4/5] glass-panel rounded-[2.5rem] border-white/5 p-8 relative flex flex-col justify-between overflow-hidden bg-black/40">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 via-transparent to-brand-blue/5 pointer-events-none" />
                  
                  {/* Mock HUD Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-brand-cyan animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-extrabold text-brand-cyan">Alpha Sandbox</span>
                    </div>
                    <span className="text-[9px] font-mono text-white/30 uppercase">Protocol: ANSWER_v1</span>
                  </div>

                  {/* Fact checking & commentary simulation */}
                  <div className="my-8 space-y-6 relative z-10 flex-grow flex flex-col justify-center">
                    {/* Simulated Fact Check Display */}
                    <div className="glass-panel p-5 rounded-2xl border-white/5 bg-black/30">
                      <p className="text-[9px] uppercase font-mono tracking-widest text-[#60a5fa] mb-1 font-bold">News Authenticator</p>
                      <h5 className="text-xs font-bold text-white mb-2">"Is the local highway link to Rawalpindi fully operational today?"</h5>
                      
                      <div className="flex items-center gap-4 bg-[#60a5fa]/5 border border-[#60a5fa]/20 rounded-xl p-3">
                        <div className="text-center">
                          <span className="text-2xl font-display font-extrabold text-brand-cyan">94%</span>
                          <span className="block text-[8px] font-mono text-white/40 tracking-widest">VERIFIED</span>
                        </div>
                        <div className="text-[10px] text-white/60 font-light leading-relaxed">
                          Analyzed 12 live reports &amp; highway authority feeds. Match level is close to perfect. Minor construction alert declared in Sector 3.
                        </div>
                      </div>
                    </div>

                    {/* Simulated Web Commentary Overlay */}
                    <div className="glass-panel p-4 rounded-xl border-white/5 bg-white/[0.01] max-w-[90%] left-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Layers className="w-3.5 h-3.5 text-pink-500" />
                        <span className="text-[10px] uppercase font-mono tracking-widest text-pink-500 font-bold">Web Commentary Layer</span>
                      </div>
                      <p className="text-[11px] text-white/40 font-mono italic">"Displaying active user reviews on top of 'Youtube.com/watch?v=road_conditions'..."</p>
                      <div className="mt-2 text-xs text-white/80 font-light border-l border-white/10 pl-3">
                        "The actual road has potholes but the views are incredible. Travel safely at night!"
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[10px] font-mono text-white/30">
                    <span>VPN Status: Proxied Raw Link</span>
                    <span>No DB Logs Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
