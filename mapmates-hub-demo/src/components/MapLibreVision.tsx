import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { motion } from 'motion/react';
import { Box, Globe, ShieldAlert as Shield, Zap, Layers, Cpu } from 'lucide-react';

export default function MapLibreVision() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'osm': {
            type: 'raster',
            tiles: [
              'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            ],
            tileSize: 256,
            attribution: '&copy; Esri'
          }
        },
        layers: [
          {
            id: 'osm',
            type: 'raster',
            source: 'osm',
          }
        ]
      },
      center: [74.3587, 31.5204],
      zoom: 16,
      pitch: 65,
      bearing: -30,
    });

    map.current.on('load', () => {
        if (!map.current) return;
        map.current.setFog({
            'range': [0.5, 10],
            'color': '#3b82f6',
            'high-color': '#0066ff',
            'space-color': '#000000',
            'horizon-blend': 0.1
        });
    });

    return () => map.current?.remove();
  }, []);

  return (
    <section id="vision" className="py-40 relative overflow-hidden bg-[#0a0a0a] scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-[circle_at_50%_50%] from-brand-blue/5 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/5 text-brand-blue mb-10"
          >
            <Globe className="w-4 h-4" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Spatial Mesh Vision 2026</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.9] font-display italic">
            The World is <br /> <span className="text-glow text-brand-blue non-italic font-bold">Infinite.</span>
          </h2>
          <p className="text-white/40 text-2xl leading-relaxed font-light">
            My vision didn't stop at flat maps. I'm building a high-fidelity 3D digital twin of our world where social interaction is spatially aware, immersive, and truly alive.
          </p>
        </div>

        <div className="relative group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-full aspect-video rounded-[4rem] overflow-hidden glass-panel border-white/5 relative z-10"
          >
            <div ref={mapContainer} className="w-full h-full grayscale-[0.5] contrast-[1.2]" />
            {/* Hologram Effects */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20" />
          </motion.div>

          {/* Futuristic Overlay Modules */}
          <div className="absolute -top-12 -right-12 hidden xl:block z-20">
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-panel !bg-graphite/40 p-8 rounded-[2.5rem] w-80 space-y-6 shadow-[0_30px_60px_rgba(59,130,246,0.15)] border-brand-blue/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                   <Box className="w-5 h-5" />
                </div>
                <span className="font-bold tracking-tight">Spatial Mesh v4.0</span>
              </div>
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest">
                  <span>Rendering Depth</span>
                  <span className="text-brand-blue">92%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                 <div className="p-3 bg-white/5 rounded-xl">
                    <div className="text-[8px] font-mono text-white/20 uppercase mb-1">Polygons</div>
                    <div className="text-sm font-bold">4.2M</div>
                 </div>
                 <div className="p-3 bg-white/5 rounded-xl">
                    <div className="text-[8px] font-mono text-white/20 uppercase mb-1">FPS</div>
                    <div className="text-sm font-bold">120</div>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-[40%] -left-16 hidden xl:block z-20">
            <motion.div 
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-panel !bg-graphite/40 p-6 rounded-[2rem] border-white/5 space-y-4"
            >
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Live Node Feed</span>
               </div>
               <div className="space-y-2">
                  <div className="w-40 h-1 bg-white/5 rounded-full" />
                  <div className="w-32 h-1 bg-white/5 rounded-full" />
                  <div className="w-48 h-1 bg-brand-blue/20 rounded-full" />
               </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
           {[
             { icon: Cpu, title: 'Neural Engine', desc: 'Predictive movement patterns that adapt to the heartbeat of your city.' },
             { icon: Layers, title: 'Multi-Layer Reality', desc: 'The physical world, the social world, and the game world in one view.' },
             { icon: Shield, title: 'Zero-Knowledge Privacy', desc: 'Your data is encrypted by default. You are invisible when you want to be.' }
           ].map((item, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] glass-panel border-white/5 relative group bg-graphite/20"
             >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-black group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-500">
                   <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold mb-4 font-display tracking-tight">{item.title}</h4>
                <p className="text-white/40 leading-relaxed text-lg font-light">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
