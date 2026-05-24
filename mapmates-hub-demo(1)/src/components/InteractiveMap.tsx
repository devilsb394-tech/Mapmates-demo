import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion, AnimatePresence } from 'motion/react';
import { Map as MapIcon, Layers, Maximize, Play, Pause, Users, Zap } from 'lucide-react';

const MOCK_USERS = [
  { id: 1, name: 'Faizan', pos: [31.5204, 74.3587] as [number, number], color: '#3b82f6', online: true },
  ...Array.from({ length: 19 }, (_, i) => ({
    id: i + 2,
    name: `Mate_${Math.floor(Math.random() * 1000)}`,
    pos: [31.5204 + (Math.random() - 0.5) * 0.02, 74.3587 + (Math.random() - 0.5) * 0.02] as [number, number],
    color: ['#3b82f6', '#60a5fa', '#34d399', '#f87171'][Math.floor(Math.random() * 4)],
    online: Math.random() > 0.3
  }))
];

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');
  const [isLive, setIsLive] = useState(true);
  const markersRef = useRef<{ [key: number]: L.Marker }>({});

  useEffect(() => {
    if (!mapRef.current) return;

    mapInstance.current = L.map(mapRef.current, {
      center: [31.5204, 74.3587],
      zoom: 14,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
    }).addTo(mapInstance.current);

    MOCK_USERS.forEach((user) => {
      const icon = L.divIcon({
        className: 'custom-div-icon',
        html: `
          <div class="profile-marker">
            <div class="marker-label">${user.name}</div>
            <div class="profile-image-container" style="border-color: ${user.color}">
               <div class="text-[10px] font-bold opacity-40">${user.name.substring(0,2).toUpperCase()}</div>
            </div>
            <div class="marker-status ${user.online ? 'status-online' : 'status-offline'}"></div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      const marker = L.marker(user.pos, { icon }).addTo(mapInstance.current!);
      marker.bindPopup(`
        <div class="p-4 bg-graphite text-white rounded-[1.5rem] border border-white/5 min-w-[200px] shadow-2xl backdrop-blur-3xl bg-opacity-80">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center font-bold text-brand-blue border border-brand-blue/20">${user.name.charAt(0)}</div>
            <div>
              <div class="text-sm font-bold tracking-tight">${user.name}</div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full ${user.online ? 'bg-brand-blue animate-pulse' : 'bg-white/20'}"></div>
                <div class="text-[9px] uppercase tracking-widest text-white/40 font-bold">${user.online ? 'Live Presence' : 'Last seen 2m ago'}</div>
              </div>
            </div>
          </div>
          <div class="space-y-2 pt-3 border-t border-white/5">
             <div class="flex justify-between items-center text-[9px] font-mono text-white/20 uppercase">
                <span>Distance</span>
                <span class="text-white/40">1.2km</span>
             </div>
             <div class="flex justify-between items-center text-[9px] font-mono text-white/20 uppercase">
                <span>Mate ID</span>
                <span class="text-white/40">MMH-${user.id}</span>
             </div>
          </div>
        </div>
      `, {
        className: 'custom-popup',
        maxWidth: 280,
        minWidth: 200
      });
      markersRef.current[user.id] = marker;
    });

    return () => {
      mapInstance.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!mapInstance.current) return;
    const roadmapUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    const satelliteUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    
    mapInstance.current.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        mapInstance.current?.removeLayer(layer);
      }
    });

    L.tileLayer(mapType === 'roadmap' ? roadmapUrl : satelliteUrl).addTo(mapInstance.current);
  }, [mapType]);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      Object.keys(markersRef.current).forEach((id) => {
        const marker = markersRef.current[Number(id)];
        const user = MOCK_USERS.find(u => u.id === Number(id));
        if (!user || !user.online) return;
        
        const currentPos = marker.getLatLng();
        const nextPos = L.latLng(
          currentPos.lat + (Math.random() - 0.5) * 0.0003,
          currentPos.lng + (Math.random() - 0.5) * 0.0003
        );
        marker.setLatLng(nextPos);
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <section id="demo-map" className="py-40 bg-[#080808] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-10"
          >
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 text-brand-blue px-3 py-1 rounded-full bg-brand-blue/10 font-mono text-[10px] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                Live Network Engine
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight font-display leading-[0.9]">
                The World <br /> <span className="text-brand-blue italic font-light">is Alive.</span>
              </h2>
            </div>
            
            <p className="text-white/40 text-xl leading-relaxed font-light">
              I wanted a map that didn't just show roads, but showed humanity. Experience 24/7 realtime position streaming for all your mates.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <MapTypeButton 
                active={mapType === 'roadmap'} 
                onClick={() => setMapType('roadmap')}
                icon={MapIcon}
                label="Roadmap"
              />
              <MapTypeButton 
                active={mapType === 'satellite'} 
                onClick={() => setMapType('satellite')}
                icon={Layers}
                label="Satellite"
              />
            </div>

            <div className="glass-panel p-6 rounded-3xl space-y-4">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <Users className="w-5 h-5 text-brand-blue/60" />
                   <span className="font-bold">Mates in Sector</span>
                 </div>
                 <span className="text-brand-blue font-mono font-bold">20</span>
               </div>
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <Zap className="w-5 h-5 text-brand-blue/60" />
                   <span className="font-bold">Network Ping</span>
                 </div>
                 <span className="text-brand-blue font-mono font-bold">12ms</span>
               </div>
               <button 
                onClick={() => setIsLive(!isLive)}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${isLive ? 'bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
               >
                 {isLive ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                 {isLive ? 'Pause Stream' : 'Resume Stream'}
               </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-2/3 w-full aspect-square md:aspect-video rounded-[3rem] overflow-hidden glass-panel relative group border-white/5 shadow-3xl shadow-brand-blue/5"
          >
            <div ref={mapRef} className="w-full h-full" />
            
            <div className="absolute top-6 right-6 flex flex-col gap-3 z-[1000]">
               <button className="p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-black/60 transition-all">
                  <Maximize className="w-5 h-5" />
               </button>
            </div>

            <div className="absolute bottom-8 left-8 z-[1000]">
               <div className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-80">Sync status: Encrypted • 20 Nodes</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MapTypeButton({ active, onClick, icon: Icon, label }: { active: boolean, onClick: () => void, icon: any, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-4 group ${active ? 'border-brand-blue/30 bg-brand-blue/10 text-brand-blue' : 'border-white/5 bg-white/5 text-white/40 hover:bg-white/[0.08]'}`}
    >
      <Icon className={`w-8 h-8 transition-transform group-hover:scale-110 ${active ? 'opacity-100' : 'opacity-40'}`} />
      <span className="text-xs font-bold tracking-widest uppercase font-mono">{label}</span>
    </button>
  );
}
