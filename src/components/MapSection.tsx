import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-[#222] p-12 text-center shadow-2xl"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold text-gold shadow-lg">
            <MapPin size={32} />
          </div>
          
          <h2 className="mb-2 font-serif text-xl text-gold">James Marriage Garden</h2>
          <p className="mb-8 font-serif text-xs leading-relaxed opacity-60">
            AGRA RD,NEW KHANDELWAL NAGAR, PREM NAGAR, JAIPUR
          </p>

          <div className="mb-12 w-full overflow-hidden rounded-lg border border-gold/20 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.495283600152!2d75.88502319999999!3d26.887772199999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7712c5db97b%3A0xbf98cf49a6158712!2sJems%20Garden!5e0!3m2!1sen!2sin!4v1776887923454!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://maps.app.goo.gl/uFCJLJ6MMCBn5Uzm9"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold px-8 py-2 text-[10px] uppercase tracking-[2px] text-gold transition-all hover:bg-gold hover:text-royal"
          >
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
