import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const images = [
  "https://cdn.poehali.dev/projects/0126b553-d189-4e7e-bdb7-1004483f6d96/bucket/e51cfd62-d4a0-4508-ad3c-37d09c23c178.jpg",
  "https://cdn.poehali.dev/projects/0126b553-d189-4e7e-bdb7-1004483f6d96/bucket/4abcd54d-6ce5-4d6e-87ca-5b18b98e64e5.jpg",
  "https://cdn.poehali.dev/projects/0126b553-d189-4e7e-bdb7-1004483f6d96/bucket/b301defc-0930-49c0-942d-6f5f5fa57063.jpg",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const rotate1 = useTransform(scrollYProgress, [0, 1], [-6, -20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [6, 20])
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
      {/* Декоративные лепестки */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-5 rounded-full opacity-20"
            style={{
              background: i % 2 === 0 ? "#FFD1DC" : "#A8A9AD",
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 20}%`,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Стопка фотографий */}
      <div className="relative flex items-center justify-center w-[340px] md:w-[460px]">
        <motion.div
          className="absolute w-[180px] md:w-[220px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate1, x: x1, y, zIndex: 1, left: "0px" }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[0]}
            alt="Анна и Максим"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />
        </motion.div>

        <motion.div
          className="relative w-[180px] md:w-[220px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mx-auto"
          style={{ rotate: rotate2, y, zIndex: 2 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[1]}
            alt="Анна и Максим"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />
        </motion.div>

        <motion.div
          className="absolute w-[180px] md:w-[220px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate3, x: x3, y, zIndex: 1, right: "0px" }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[2]}
            alt="Анна и Максим"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />
        </motion.div>
      </div>

      {/* Заголовок */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-between pointer-events-none z-10 py-16 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 font-sans text-center">
          приглашаем на нашу свадьбу
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center text-foreground mix-blend-multiply">
          Максим <span style={{ color: "#A8A9AD" }}>&</span> Мария
        </h1>
        <p className="text-xl md:text-2xl font-serif italic text-foreground/70 text-center">
          26 июня 2026
        </p>
      </motion.div>

      {/* Кнопка вниз */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto z-10 flex flex-col items-center gap-2 text-foreground/50 hover:text-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToNext}
        data-clickable
      >
        <span className="text-xs uppercase tracking-widest font-sans">Подробнее</span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.button>
    </section>
  )
}