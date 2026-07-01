import { motion } from "framer-motion";
import { experience } from "../lib/data";
import { Reveal, DiamondDivider } from "./ui";

export default function Experience() {
  const [a, b, c, d] = experience.images;
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* dark royal backdrop for contrast against neighbouring sections */}
      <div className="absolute inset-0 damask" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow mb-4">{experience.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-medium leading-[1.05] text-[clamp(2rem,4.5vw,3.4rem)] text-cream">
              {experience.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <DiamondDivider className="mt-6 justify-start" />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md font-body text-[15px] font-light leading-relaxed text-cream/70">
              {experience.body}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["70+", "Seats across sections"],
                ["Till 12AM", "Kitchen open daily"],
                ["Family", "Dedicated section"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl gold-text">{n}</div>
                  <div className="mt-0.5 font-body text-[11px] uppercase tracking-widest2 text-cream/50">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Photo mosaic */}
        <div className="order-1 grid grid-cols-2 gap-3 md:gap-4 lg:order-2">
          <Reveal className="space-y-3 md:space-y-4" y={40}>
            <Tile src={a} className="h-44 md:h-56" alt="Booth seating beneath the arches" />
            <Tile src={c} className="h-56 md:h-72" alt="Arched dining hall" />
          </Reveal>
          <Reveal className="space-y-3 pt-8 md:space-y-4" delay={0.12} y={40}>
            <Tile src={b} className="h-56 md:h-72" alt="Private dining corner" />
            <Tile src={d} className="h-44 md:h-56" alt="The main hall ceiling" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Tile({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className={`group relative w-full overflow-hidden rounded-2xl border border-gold/15 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-royal-900/10 transition-colors group-hover:bg-transparent" />
    </motion.div>
  );
}
