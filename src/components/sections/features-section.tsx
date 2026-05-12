import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const details = [
  {
    icon: "Calendar",
    label: "Дата и время",
    title: "26 июня 2026",
    description: "Церемония начинается в 14:00. Пожалуйста, прибудьте немного заранее.",
    color: "#A8A9AD",
  },
  {
    icon: "MapPin",
    label: "Место",
    title: "ЗАГС по Ленинскому району",
    description: "г. Саратов, ул. Гвардейская, д. 13В",
    color: "#FFD1DC",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-sans mb-4">детали</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Детали мероприятия</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {details.map((item, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-2xl p-8 min-h-[280px] flex flex-col border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: item.color + "30" }}
              >
                <Icon name={item.icon as "Calendar"} size={24} style={{ color: item.color }} />
              </div>
              <p className="text-xs uppercase tracking-widest font-sans mb-2" style={{ color: item.color }}>
                {item.label}
              </p>
              <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.description}</p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}