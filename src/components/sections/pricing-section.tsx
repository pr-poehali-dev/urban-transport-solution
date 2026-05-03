import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

export function PricingSection() {
  const [form, setForm] = useState({
    name: "",
    count: "1",
    attendance: "yes",
    comment: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Блок подарков */}
        <motion.div
          className="rounded-2xl p-8 md:p-12 mb-16 text-center border border-border"
          style={{ background: "linear-gradient(135deg, #FFF9F0, #FFE4EC)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-14 h-14 rounded-full bg-white/60 flex items-center justify-center mx-auto mb-6">
            <Icon name="Gift" size={26} style={{ color: "#D4AF37" }} />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-sans mb-4">подарки</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5">О подарках</h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed mb-6">
            Ваш приход — уже лучший подарок для нас! Но если захотите порадовать нас чем-то особенным, 
            мы будем рады денежному подарку на нашу совместную мечту — путешествие в Японию.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/70 rounded-xl px-6 py-4 border border-white/80">
            <Icon name="CreditCard" size={18} style={{ color: "#D4AF37" }} />
            <span className="font-sans text-foreground/70 text-sm">Номер карты: <strong className="text-foreground">4276 •••• •••• 8842</strong></span>
          </div>
        </motion.div>

        {/* RSVP форма */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-sans mb-4">RSVP</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground">Подтвердите участие</h2>
            <p className="text-muted-foreground mt-4 font-sans">Пожалуйста, ответьте до 1 мая 2025 года.</p>
          </div>

          <div className="max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-6">
                    <Icon name="Heart" size={36} style={{ color: "#D4AF37" }} />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">Спасибо!</h3>
                  <p className="text-muted-foreground font-sans">Мы получили ваш ответ и очень ждём вас!</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <label className="block text-sm font-sans text-foreground/70 mb-2">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Имя и фамилия"
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans text-foreground/70 mb-2">Количество гостей *</label>
                    <select
                      value={form.count}
                      onChange={(e) => setForm({ ...form, count: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-sans"
                    >
                      {["1", "2", "3", "4"].map((n) => (
                        <option key={n} value={n}>{n} {n === "1" ? "гость" : n === "2" || n === "3" || n === "4" ? "гостя" : "гостей"}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-sans text-foreground/70 mb-3">Вы придёте? *</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "yes", label: "Приду с радостью!", icon: "Check" },
                        { value: "no", label: "Не смогу прийти", icon: "X" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setForm({ ...form, attendance: opt.value })}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border font-sans text-sm transition-all ${
                            form.attendance === opt.value
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border bg-secondary text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          <Icon name={opt.icon as "Check"} size={16} />
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-sans text-foreground/70 mb-2">Пожелания и комментарии</label>
                    <textarea
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      placeholder="Диетические ограничения, особые пожелания..."
                      rows={3}
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-sans resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-sans font-medium text-white transition-all"
                    style={{ background: "linear-gradient(135deg, #D4AF37, #C49B2F)" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-clickable
                  >
                    Отправить ответ
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
