import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const details = [
  {
    icon: "Calendar",
    label: "Дата и время",
    title: "26 июня 2026",
    description: "Церемония начинается в 15:00. Пожалуйста, прибудьте немного заранее.",
    color: "#A8A9AD",
  },
  {
    icon: "MapPin",
    label: "Место",
    title: "Усадьба «Берёзовая роща»",
    description: "г. Москва, Рублёво-Успенское шоссе, 42. Банкетный зал «Белый зал».",
    color: "#FFD1DC",
  },
  {
    icon: "Car",
    label: "Как добраться",
    title: "Транспорт и парковка",
    description: "Бесплатная парковка на территории. От м. Молодёжная — автобус №591 до остановки «Усадьба».",
    color: "#A8A9AD",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Карта */}
        <motion.div
          className="mt-10 rounded-2xl overflow-hidden border border-border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.5!2d37.3!3d55.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzAwLjAiTiAzN8KwMTgnMDAuMCJF!5e0!3m2!1sru!2sru!4v1600000000000!5m2!1sru!2sru"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Место проведения"
          />
        </motion.div>
      </div>
    </section>
  )
}