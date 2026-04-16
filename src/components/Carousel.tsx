import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'motion/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  'https://raw.githubusercontent.com/uzair9799/kanika-yash2026/main/src/lib/img1.webp',
  'https://raw.githubusercontent.com/uzair9799/kanika-yash2026/main/src/lib/img2.webp',
  'https://raw.githubusercontent.com/uzair9799/kanika-yash2026/main/src/lib/img3.webp',
  'https://raw.githubusercontent.com/uzair9799/kanika-yash2026/main/src/lib/img4.webp',
];

export default function Carousel() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-2xl ring-8 ring-white"
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="h-[300px] w-full md:h-[400px]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <img
                    src={src}
                    alt={`Wedding Moment ${index + 1}`}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
