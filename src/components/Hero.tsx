import { motion } from 'motion/react';
import { Hand } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12 text-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-[10%] top-[15%] h-96 w-96 rounded-full bg-gold blur-3xl text-gold" />
        <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-gold/20 blur-3xl text-gold" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl rounded-sm border border-gold bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-16"
      >
        {/* Sanskrit Text at top of box */}
        <!-- <div className="absolute inset-x-0 top-6 flex items-center justify-center gap-8 font-serif text-[9px] text-gold md:text-[11px]">
          <span>|| श्रीहित हरिवंश चंद्रो जयति ||</span>
          <span>|| श्री राधा वल्लभो जयति ||</span>
        </div>-->

        <div className="mt-4">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '8px' }}
            whileInView={{ opacity: 1, letterSpacing: '4px' }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 text-[11px] font-medium uppercase text-gold/80"
          >
            WITH THE GRACE OF SHREE MORI WALEN HANUMAN JI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="mb-8 font-serif text-5xl italic text-gold md:text-8xl"
          >
            25th Wedding Anniversary of
            <div className="mt-4 block text-cream not-italic">Mr. Rajeev & Mrs. Malka</div>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mx-auto mb-8 h-px bg-gold"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="font-serif text-sm tracking-[4px] text-cream/90"
          >
            Mrs. Nirmala & Mr. Radha Ballabh Tiwari request the honour of your presence
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-2 font-serif text-[10px] uppercase tracking-[2px] text-gold/60"
          >
            At the 25th wedding anniversary of their beloved
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold"
        >
          <Hand size={20} className="rotate-180" />
        </motion.div>
        
        <span className="font-serif text-[9px] uppercase tracking-[4px] text-gold/80">
          Scroll Down to Explore
        </span>
      </motion.div>
    </section>
  );
}
