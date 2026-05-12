import { motion } from "framer-motion"

const photos = [
  "https://cdn.poehali.dev/projects/0126b553-d189-4e7e-bdb7-1004483f6d96/bucket/2fababaa-a7ed-4ee6-a3ce-484ba4bf549a.jpg",
  "https://cdn.poehali.dev/projects/0126b553-d189-4e7e-bdb7-1004483f6d96/bucket/8f57aaff-0c17-43b5-ad9b-283995f297d5.jpg",
  "https://cdn.poehali.dev/projects/0126b553-d189-4e7e-bdb7-1004483f6d96/bucket/57921327-8ac3-4727-b22c-795d9843af29.jpg",
  "https://cdn.poehali.dev/projects/0126b553-d189-4e7e-bdb7-1004483f6d96/bucket/f74b9dff-90f5-462b-8107-6bb1d9b7f9f2.jpg",
  "https://cdn.poehali.dev/projects/0126b553-d189-4e7e-bdb7-1004483f6d96/bucket/a97a878e-c1c9-45eb-ac95-9c8162147229.jpg",
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
                  alt="Наша история"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}