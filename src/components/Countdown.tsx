import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Countdown() {
  const targetDate = new Date('2026-04-26T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="mb-2 flex h-16 w-16 flex-col items-center justify-center rounded-sm border border-gold/30 bg-black/30 p-2 shadow-lg md:h-24 md:w-24 md:p-4">
        <span className="font-serif text-xl font-bold text-gold md:text-3xl">
          {value.toString().padStart(2, '0')}
        </span>
        <span className="text-[7px] uppercase tracking-[1px] text-cream/60 md:text-[9px] md:tracking-[2px]">
          {label}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section className="py-10">
      <div className="container mx-auto px-2 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-4 text-[10px] uppercase tracking-[2px] text-cream/60"
        >
          Counting Down To Forever
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-nowrap justify-center gap-2 md:gap-4"
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hrs" />
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <TimeUnit value={timeLeft.seconds} label="Sec" />
        </motion.div>
      </div>
    </section>
  );
}
