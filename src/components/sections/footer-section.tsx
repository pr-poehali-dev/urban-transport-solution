import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function FooterSection() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Свадьба Анны и Максима",
        text: "Мы приглашаем вас на наш самый счастливый день!",
        url: shareUrl,
      })
    } else {
      await navigator.clipboard.writeText(shareUrl)
      alert("Ссылка скопирована!")
    }
  }

  return (
    <footer className="relative px-6 py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #FFF9F0 0%, #FFE4EC 100%)" }}>
      {/* Декоративный блик */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none">
        <div
          className="absolute inset-0 opacity-30 blur-3xl rounded-full"
          style={{ background: "radial-gradient(circle, #D4AF37 0%, #FFD1DC 60%, transparent 100%)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Кольца */}
        <motion.div
          className="flex justify-center gap-[-8px] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-primary -mr-3 shadow-sm" style={{ borderColor: "#D4AF37" }} />
          <div className="w-10 h-10 rounded-full border-2 border-accent shadow-sm" style={{ borderColor: "#FFD1DC" }} />
        </motion.div>

        <motion.h2
          className="text-5xl md:text-7xl font-serif text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Мария & Максим
        </motion.h2>

        <motion.p
          className="text-lg font-serif italic text-foreground/60 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          14 июня 2025 · Ждём вас с радостью!
        </motion.p>

        {/* Контакты */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 text-muted-foreground font-sans text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="mailto:anna.maksim2025@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors" data-clickable>
            <Icon name="Mail" size={16} />
            anna.maksim2025@gmail.com
          </a>
          <span className="hidden md:block text-border">|</span>
          <a href="tel:+79001234567" className="flex items-center gap-2 hover:text-foreground transition-colors" data-clickable>
            <Icon name="Phone" size={16} />
            +7 (900) 123-45-67
          </a>
        </motion.div>

        {/* Кнопка поделиться */}
        <motion.button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-white/60 hover:bg-white/90 text-foreground font-sans text-sm transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-clickable
        >
          <Icon name="Share2" size={16} />
          Поделиться приглашением
        </motion.button>

        <motion.div
          className="mt-16 pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground text-xs font-sans">© 2025 Мария & Максим · Сделано с любовью</p>
        </motion.div>
      </div>
    </footer>
  )
}