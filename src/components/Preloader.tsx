import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleStart = () => {
    setIsVisible(false);
    setTimeout(onComplete, 1500); // Sync with curtain duration
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://picsum.photos/seed/radha-krishna/1920/1080"
              alt="Radha Krishna"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Sanskrit Mantra at Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute top-8 z-20 w-full text-center flex flex-col items-center justify-center gap-2"
          >
            <img 
              src="https://raw.githubusercontent.com/uzair9799/kanika-yash2026/main/src/lib/ganeshji.png" 
              alt="Lord Ganesha" 
              className="w-16 h-16 md:w-20 md:h-20"
              referrerPolicy="no-referrer"
            />
            <p className="font-serif text-lg font-medium text-gold md:text-2xl">
              ॥ श्री गणेशाय नमः ॥
            </p>
          </motion.div>

          {/* Curtains */}
          <motion.div
            initial={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
            style={{ 
              originX: 0,
              background: 'linear-gradient(to right, #051650, #123499)'
            }}
            className="absolute inset-y-0 left-0 w-1/2 shadow-2xl"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 h-full w-1 bg-[#a52a2a]" 
            />
            {/* Curtain Flap Detail */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.2) 41px)' }} />
          </motion.div>
          <motion.div
            initial={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
            style={{ 
              originX: 1,
              background: 'linear-gradient(to left, #051650, #123499)'
            }}
            className="absolute inset-y-0 right-0 w-1/2 shadow-2xl"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 h-full w-1 bg-[#a52a2a]" 
            />
            {/* Curtain Flap Detail */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.2) 41px)' }} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 text-center"
          >
            <h2 className="mb-4 font-serif text-sm uppercase tracking-[4px] text-gold md:text-base">
              The Wedding Anniversary
            </h2>
            <h1 className="mb-8 font-serif text-5xl italic text-cream md:text-8xl">
              Mr Rajeev & Mrs Malka
            </h1>
            <button
              onClick={handleStart}
              className="group relative overflow-hidden rounded-sm border border-gold px-10 py-4 font-serif text-sm uppercase tracking-[2px] text-gold transition-all hover:bg-gold hover:text-royal"
            >
              <span className="relative z-10">Open Invitation</span>
              <motion.div
                className="absolute inset-0 bg-gold"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
