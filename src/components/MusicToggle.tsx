import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicToggle({ isPlaying, onToggle }: MusicToggleProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(() => {
        // Handle autoplay block
        console.log('Autoplay blocked');
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed right-6 top-6 z-50">
      <audio
        ref={audioRef}
        src="https://raw.githubusercontent.com/uzair9799/kanika-yash2026/main/src/lib/music2.mp3"
        loop
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition-all hover:bg-gold/90"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
            >
              <Volume2 size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
            >
              <VolumeX size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
