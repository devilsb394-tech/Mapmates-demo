/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderStory from './components/FounderStory';
import FeatureShowcase from './components/FeatureShowcase';
import EcosystemAI from './components/EcosystemAI';
import InteractiveMap from './components/InteractiveMap';
import MapLibreVision from './components/MapLibreVision';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="bg-[#080808] text-white selection:bg-brand-blue/30 selection:text-white">
      <Splash onComplete={() => setShowSplash(false)} />
      
      {!showSplash && (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <Hero />
          
          <div className="relative">
            {/* Background Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com/patterns/dark-dust.png')]" />
            
            <FounderStory />
            <FeatureShowcase />
            <EcosystemAI />
            <InteractiveMap />
            <MapLibreVision />
            <Footer />
          </div>
        </div>
      )}
    </main>
  );
}
