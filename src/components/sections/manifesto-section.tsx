import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0.2, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center bg-background px-6 py-32"
    >
      {/* Декоративная линия */}
      <motion.div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-accent to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-5xl mx-auto relative text-center">
        <motion.p
          className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-sans mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          наша история
        </motion.p>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground/10">
          Мы встретились случайно.
          <br />
          Остались навсегда.
        </h2>

        <motion.h2
          className="absolute inset-0 text-3xl md:text-5xl lg:text-6xl font-serif leading-tight"
          style={{
            clipPath,
            background: "linear-gradient(135deg, #D4AF37 0%, #FFD1DC 50%, #D4AF37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Мы встретились случайно.
          <br />
          Остались навсегда.
        </motion.h2>

        <motion.p
          className="mt-16 text-base md:text-lg font-sans text-foreground/60 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Это был обычный летний вечер, когда судьба свела нас вместе. 
          Мы и не подозревали, что эта встреча изменит всё. 
          Три года вместе — и мы готовы сказать «да» на всю жизнь.
        </motion.p>
      </div>

      {/* Декоративная линия снизу */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </section>
  )
}
