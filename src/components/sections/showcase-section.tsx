import { motion } from "framer-motion"

const timeline = [
  {
    time: "13:30",
    event: "Сбор гостей",
    description: "Добро пожаловать на нашу роспись, проведите время с пользой и познакомьтесь с другими гостями.",
  },
  {
    time: "14:00",
    event: "Церемония бракосочетания",
    description: "Торжественная регистрация молодых, слезы радости и образование нового правового института \"Семья\".",
  },
  {
    time: "14:30",
    event: "Фотосессия",
    description: "Искренние эмоции близких и родных не заменить ничем, и для того чтобы этот момент оставить навсегда предлагаем запечатлеть его вместе на фото.",
  },
  {
    time: "16:30",
    event: "Торжественный банкет",
    description: "Природа, красивая атмосфера, праздничный ужин — это все сделает вечер незабываемым.",
  },
  {
    time: "21:00",
    event: "Завершение банкета",
    description: "Хорошие моменты всегда подходят к концу, но навсегда останутся у нас в сердце.",
  },
]

export function ShowcaseSection() {
  return (
    <section className="bg-background px-6 py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-sans mb-4">расписание</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Программа дня</h2>
        </motion.div>

        <div className="relative">
          {/* Вертикальная линия */}
          <motion.div
            className="absolute left-[60px] md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, #FFD1DC, #D4AF37, #FFD1DC, transparent)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Время (мобиль) */}
                <div className="flex-shrink-0 w-[60px] md:hidden text-right">
                  <span className="text-sm font-sans font-bold" style={{ color: "#A8A9AD" }}>
                    {item.time}
                  </span>
                </div>

                {/* Точка на линии */}
                <div className="absolute left-[52px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background flex-shrink-0 mt-1" />

                {/* Контент */}
                <div className={`ml-[88px] md:ml-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                  <span
                    className="hidden md:block text-sm font-sans font-bold mb-1"
                    style={{ color: "#A8A9AD" }}
                  >
                    {item.time}
                  </span>
                  <h3 className="font-serif text-xl text-foreground">{item.event}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}