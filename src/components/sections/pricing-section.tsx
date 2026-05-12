import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function PricingSection() {
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
            <Icon name="Gift" size={26} style={{ color: "#A8A9AD" }} />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-sans mb-4">подарки</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5">О подарках</h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed mb-6">
            Ваш приход — уже лучший подарок для нас! Но если захотите порадовать нас чем-то особенным, 
            мы будем рады денежному подарку на наш новый ремонт в квартире.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/70 rounded-xl px-6 py-4 border border-white/80">
            <Icon name="CreditCard" size={18} style={{ color: "#A8A9AD" }} />
            <span className="font-sans text-foreground/70 text-sm">Номер карты: <strong className="text-foreground">2202 2053 9022 0983</strong></span>
          </div>
        </motion.div>


      </div>
    </section>
  )
}