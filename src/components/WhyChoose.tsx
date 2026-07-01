import { motion } from "framer-motion";
import {
  Leaf,
  ChefHat,
  Sparkles,
  Gem,
  Timer,
  Users,
  type LucideIcon,
} from "lucide-react";
import { whyChoose } from "../lib/data";
import { SectionHeading, Reveal } from "./ui";

const icons: Record<string, LucideIcon> = {
  Leaf,
  ChefHat,
  Sparkles,
  Gem,
  Timer,
  Users,
};

export default function WhyChoose() {
  return (
    <section className="damask relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Mak's Kitchen"
          title={<>Six reasons the table&nbsp;stays&nbsp;full</>}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-gold/15 bg-white/[0.02] p-8"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />
                  <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/15 to-transparent text-gold transition-all group-hover:shadow-gold">
                    <Icon size={24} />
                  </div>
                  <h3 className="relative font-display text-2xl text-cream">{item.title}</h3>
                  <p className="relative mt-2 font-body text-sm font-light leading-relaxed text-cream/60">
                    {item.text}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
