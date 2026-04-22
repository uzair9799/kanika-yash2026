import { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';

export default function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Fill with cover color (Light Golden gradient)
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#D4AF37');
    gradient.addColorStop(0.25, '#F9F4E8');
    gradient.addColorStop(0.5, '#D4AF37');
    gradient.addColorStop(0.75, '#F9F4E8');
    gradient.addColorStop(1, '#D4AF37');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add some texture/text to the cover
    ctx.fillStyle = '#404472'; // Royal for contrast
    ctx.font = 'italic 16px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch Here', canvas.width / 2, canvas.height / 2 + 6);

    // Add decorative border
    ctx.strokeStyle = 'rgba(64, 68, 114, 0.2)'; // Royal border
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
  }, []);

  const getPos = (e: any) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    
    // Prevent default scrolling behavior on touch
    if (e.touches) {
      // e.preventDefault(); // This can be tricky in React, touch-action: none is better
    }

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const scratch = (e: any) => {
    if (!isDrawing || isRevealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const { x, y } = getPos(e);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    checkReveal();
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) transparentPixels++;
    }

    const percent = (transparentPixels / (canvas.width * canvas.height)) * 100;
    if (percent > 40 && !isRevealed) {
      setIsRevealed(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#404472', '#F9F4E8']
      });
    }
  };

  return (
    <section className="py-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-md px-4"
      >
        <h2 className="mb-2 font-serif text-sm uppercase tracking-[2px] text-gold">Scratch to Reveal Date</h2>
        <div className="scratch-container overflow-hidden rounded-lg shadow-2xl ring-1 ring-gold/30">
          {/* Revealed Content */}
          <div className="flex h-full w-full flex-col items-center justify-center bg-cream p-4 text-center">
            <p className="font-serif text-xs uppercase tracking-widest text-royal/60">Wedding Date</p>
            <p className="font-serif text-3xl font-bold text-royal">26 April 2026</p>
            <p className="mt-2 font-cursive text-xl text-gold">Save the Date!</p>
          </div>

          {/* Scratch Canvas */}
          <canvas
            ref={canvasRef}
            onMouseDown={() => setIsDrawing(true)}
            onMouseUp={() => setIsDrawing(false)}
            onMouseLeave={() => setIsDrawing(false)}
            onMouseMove={scratch}
            onTouchStart={() => setIsDrawing(true)}
            onTouchEnd={() => setIsDrawing(false)}
            onTouchMove={scratch}
            style={{ touchAction: 'none' }}
            className={`transition-opacity duration-1000 ${isRevealed ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
          />
        </div>
        <div className="mt-8 rounded-lg border-l-2 border-gold bg-white/5 p-4 text-left">
          <p className="font-serif text-sm italic text-cream/70">
            "25 years of love, laughter, and the promise of many more years to come"
          </p>
        </div>
      </motion.div>
    </section>
  );
}
