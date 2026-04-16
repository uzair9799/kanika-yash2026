import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-[#222] p-12 text-center shadow-2xl"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold text-gold shadow-lg">
            <MapPin size={32} />
          </div>
          
          <h2 className="mb-2 font-serif text-xl text-gold">Shrihit Kunj Farm House</h2>
          <p className="mb-8 font-serif text-xs leading-relaxed opacity-60">
            Near JDA Farm House Leelo Ki Dhani,<br />
            Jaisinghpura Bhankrota, Jaipur
          </p>

          <div className="mb-12 w-full overflow-hidden rounded-lg border border-gold/20 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.803725660528!2d75.70059177543719!3d26.84619437668688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzQ2LjMiTiA3NcKwNDInMTEuNCJF!5e0!3m2!1sen!2sin!4v1776350332075!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://maps.app.goo.gl/QEeYjVhtsqKNiYKm8?g_st=iw"
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
