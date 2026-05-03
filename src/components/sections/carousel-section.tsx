import { motion } from "framer-motion"

const photos = [
  "/placeholder.jpg",
  "/placeholder-user.jpg",
  "/placeholder.jpg",
  "/placeholder-user.jpg",
  "/placeholder.jpg",
  "/placeholder-user.jpg",
]

const captions = [
  "Первая встреча",
  "Наше путешествие",
  "Помолвка",
  "Вместе дома",
  "Прогулка в парке",
  "Счастливые моменты",
]

export function CarouselSection() {
  const items = [...photos, ...photos]

  return (
    <section className="py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF9F0 0%, #FFE4EC 50%, #FFF9F0 100%)" }}>
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <motion.p
          className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-sans mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          наши фото
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Наша история в кадрах
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[240px] md:w-[320px] rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-[4/5]">
                <img
                  src={src}
                  alt={captions[i % photos.length]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-sans font-light">
                  {captions[i % photos.length]}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
