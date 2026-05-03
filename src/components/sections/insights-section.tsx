import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const dresscodeItems = [
  {
    gender: "Для гостей",
    style: "Коктейльный / Романтичный",
    hint: "Пастельные тона, нежные оттенки — розовый, голубой, лавандовый, бежевый.",
    icon: "Sparkles",
  },
  {
    gender: "Просьба",
    style: "Без белого",
    hint: "Белый цвет оставим невесте. Яркие неоновые оттенки лучше приберечь для другого случая.",
    icon: "Heart",
  },
]

export function InsightsSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-sans mb-4">стиль</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Дресс-код</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto font-sans">
            Хотим, чтобы все гости чувствовали себя красивыми и комфортными.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {dresscodeItems.map((item, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-2xl p-8 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center mb-5">
                <Icon name={item.icon as "Sparkles"} size={22} style={{ color: "#D4AF37" }} />
              </div>
              <p className="text-xs uppercase tracking-widest font-sans text-foreground/40 mb-2">{item.gender}</p>
              <h3 className="font-serif text-2xl text-foreground mb-3">{item.style}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.hint}</p>
            </motion.div>
          ))}
        </div>

        {/* Цветовая палитра дресс-кода */}
        <motion.div
          className="bg-background rounded-2xl p-8 border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs uppercase tracking-widest font-sans text-foreground/40 mb-5 text-center">рекомендуемые цвета</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { color: "#FFD1DC", name: "Розовый" },
              { color: "#C8D8E8", name: "Голубой" },
              { color: "#E8D5F5", name: "Лавандовый" },
              { color: "#F5E6D3", name: "Бежевый" },
              { color: "#D4E8D0", name: "Мятный" },
              { color: "#D4AF37", name: "Золотой" },
            ].map((c, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div
                  className="w-12 h-12 rounded-full shadow-md border border-border"
                  style={{ backgroundColor: c.color }}
                />
                <p className="text-xs text-muted-foreground font-sans">{c.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
