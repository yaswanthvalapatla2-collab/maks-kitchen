import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, UtensilsCrossed, CalendarCheck, ShoppingBag } from "lucide-react";
import { restaurant } from "../lib/data";
import { DiamondDivider } from "./ui";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* Parallax background photo (real interior of Mak's Kitchen) */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="Mak's Kitchen dining room with warm chandeliers and carved arches"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,10,12,0.7)_100%)]" />
      </motion.div>

      {/* Floating dish photos */}
      <motion.img
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
        src="/images/dishes/thread-chicken.webp"
        alt=""
        aria-hidden
        className="absolute right-[6%] top-[16%] hidden w-40 rounded-2xl border border-gold/20 object-cover shadow-card animate-float lg:block xl:w-52"
      />
      <motion.img
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]) }}
        src="/images/dishes/tandoori-platter.webp"
        alt=""
        aria-hidden
        className="absolute left-[5%] bottom-[14%] hidden w-36 rounded-2xl border border-gold/20 object-cover shadow-card animate-floatSlow lg:block xl:w-44"
      />

      <motion.div
        style={{ y: yText, opacity: fade }}
        className="container-x relative z-10 flex h-full flex-col items-center justify-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="eyebrow"
        >
          Authentic Hyderabadi · Since Mehdipatnam
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display font-medium leading-[0.95] text-[clamp(3rem,10vw,7.5rem)] text-cream"
        >
          Mak&apos;s Kitchen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="mt-1 font-display text-[clamp(1.6rem,4vw,2.6rem)] text-gold-light/90"
          lang="te"
        >
          {restaurant.nameTelugu}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.9 }}
        >
          <DiamondDivider className="mt-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-6 max-w-xl font-display italic text-[clamp(1.15rem,2.6vw,1.6rem)] text-cream/85"
        >
          &ldquo;{restaurant.hook}&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-sm font-medium uppercase tracking-[0.14em] text-ink transition-all hover:shadow-gold"
          >
            <UtensilsCrossed size={17} /> View Menu
          </a>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 font-body text-sm uppercase tracking-[0.14em] text-cream transition-all hover:border-gold hover:text-gold"
          >
            <CalendarCheck size={17} /> Reserve Table
          </a>
          <a
            href={restaurant.mapsPlace}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 font-body text-sm uppercase tracking-[0.14em] text-cream transition-all hover:border-gold hover:text-gold"
          >
            <ShoppingBag size={17} /> Order Online
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-sand/70"
        aria-label="Scroll to explore"
      >
        <span className="font-body text-[10px] uppercase tracking-widest2">Explore</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-gold" />
        </motion.span>
      </motion.a>
    </section>
  );
}
