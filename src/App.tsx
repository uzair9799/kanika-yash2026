/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Preloader from './components/Preloader';
import MusicToggle from './components/MusicToggle';
import Hero from './components/Hero';
import ScratchCard from './components/ScratchCard';
import Countdown from './components/Countdown';
import Carousel from './components/Carousel';
import Timeline from './components/Timeline';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

export default function App() {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handlePreloaderComplete = () => {
    setIsPreloaderComplete(true);
    setIsMusicPlaying(true); // Start music after preloader
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {!isPreloaderComplete && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {isPreloaderComplete && (
        <>
          <MusicToggle
            isPlaying={isMusicPlaying}
            onToggle={() => setIsMusicPlaying(!isMusicPlaying)}
          />
          
          <main className="animate-in fade-in duration-1000">
            <div className="mx-auto max-w-7xl px-4 py-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr_280px]">
                {/* Left Column */}
                <div className="flex flex-col gap-8">
                  <Hero />
                  <ScratchCard />
                </div>

                {/* Middle Column */}
                <div className="flex flex-col gap-8">
                  <Carousel />
                  <Timeline />
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-8">
                  <Countdown />
                  <MapSection />
                  <Footer />
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

