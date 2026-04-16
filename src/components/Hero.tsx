import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-maroon blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative w-full max-w-lg rounded-sm border border-gold bg-white/5 px-6 py-16 shadow-2xl backdrop-blur-sm"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 text-[10px] font-medium uppercase tracking-[3px] text-cream/80"
        >
          Wedding of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="mb-6 font-serif text-4xl italic text-gold md:text-6xl"
        >
          Kanika & Yash
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto mb-8 h-px bg-gold/50"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-[10px] font-medium uppercase tracking-[3px] text-cream/80"
        >
          April 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12"
        >
          <div className="inline-block border-y border-gold/20 px-8 py-4">
            <p className="font-serif text-2xl font-bold tracking-[0.2em] text-gold">
              20 . 04 . 2026
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <span className="mb-2 font-garamond text-xs uppercase tracking-widest text-gold">
          Scroll
        </span>
        <div className="h-12 w-px bg-gold/50" />
      </motion.div>
    </section>
  );
}
