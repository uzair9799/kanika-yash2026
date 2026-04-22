import { motion } from 'motion/react';
import { Calendar, Clock, Heart, Music, Users, Utensils } from 'lucide-react';

const events = [
  {
    date: '26 April 2026',
    items: [
      { time: '03:00 PM', title: 'Sangeet', icon: <Music className="text-gold" />, desc: 'A night of music, dance, and celebration.' },
      { time: '07:00 PM', title: 'Stage Ceremony', icon: <Users className="text-gold" />, desc: 'Celebratory stage moments.' },
      { time: '07:30 PM', title: 'Dinner', icon: <Utensils className="text-gold" />, desc: 'A grand feast for our loved ones.' },
    ]
  }
];

export default function Timeline() {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-xl border-[8px] border-double border-gold bg-cream p-8 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] md:p-12"
        >
          <div className="mb-12 border-b border-royal/10 pb-8 text-center">
            <h2 className="font-serif text-3xl uppercase tracking-[2px] text-ink">Wedding Programme</h2>
            <p className="mt-2 font-serif text-sm italic text-royal/60">The Sacred Schedule</p>
          </div>

          <div className="space-y-12">
            {events.map((section, sIndex) => (
              <div key={sIndex} className="day-section">
                <div className="mb-6 border-l-[3px] border-gold pl-4">
                  <span className="font-serif text-lg font-bold text-royal">{section.date}</span>
                </div>

                <div className="space-y-4">
                  {section.items.map((item, iIndex) => (
                    <motion.div
                      key={iIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: iIndex * 0.1 }}
                      className="flex items-center justify-between border-b border-dotted border-royal/20 pb-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-royal/40">{item.icon}</span>
                        <span className="font-serif text-sm font-semibold text-ink">{item.title}</span>
                      </div>
                      <span className="font-mono text-xs text-royal/60">{item.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-serif text-sm italic text-royal/60">
              Family & Friends RSVP by April 26th
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
