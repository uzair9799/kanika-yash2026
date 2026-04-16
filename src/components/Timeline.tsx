import { motion } from 'motion/react';
import { Calendar, Clock, Heart, Music, Users, Utensils } from 'lucide-react';

const events = [
  {
    date: '18 April 2026',
    items: [
      { time: '10:00 AM', title: 'Haldi', icon: <Heart className="text-gold" />, desc: 'A splash of yellow and joy.' },
      { time: '05:00 PM', title: 'Sangeet', icon: <Music className="text-gold" />, desc: 'A night of music, dance, and celebration.' },
    ]
  },
  {
    date: '20 April 2026',
    items: [
      { time: '10:00 AM', title: 'Chaak', icon: <Calendar className="text-gold" />, desc: 'Traditional morning rituals.' },
      { time: '12:15 PM', title: 'Bhaat', icon: <Users className="text-gold" />, desc: 'Welcoming the maternal family.' },
      { time: '06:00 PM', title: 'Pratibhoj', icon: <Utensils className="text-gold" />, desc: 'A grand feast for our loved ones.' },
      { time: '08:00 PM', title: 'Swagat Barat', icon: <Heart className="text-gold" />, desc: 'The grand arrival of the Groom.' },
    ]
  }
];

export default function Timeline() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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
              Family & Friends RSVP by April 18th
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
