import { motion } from "framer-motion";
import { signatureDishes } from "../lib/data";
import { SectionHeading, Reveal } from "./ui";

export default function Signatures() {
  const [feature, ...rest] = signatureDishes;
  return (
    <section id="signatures" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Chef's Signatures"
          title={<>The plates people come&nbsp;back&nbsp;for</>}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Feature card */}
          <Reveal className="lg:row-span-2">
            <motion.article
              whileHover="hover"
              className="group relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-gold/20"
            >
              <motion.img
                variants={{ hover: { scale: 1.06 } }}
                transition={{ duration: 0.7 }}
                src={feature.img}
                alt={feature.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              {feature.tag && (
                <span className="absolute left-5 top-5 rounded-full border border-gold/40 bg-ink/50 px-3 py-1 font-body text-[10px] uppercase tracking-widest2 text-gold backdrop-blur">
                  {feature.tag}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-display text-3xl leading-tight text-cream">
                    {feature.name}
                  </h3>
                  <span className="whitespace-nowrap font-display text-2xl gold-text">
                    ₹{feature.price}
                  </span>
                </div>
                <p className="mt-2 max-w-md font-body text-sm font-light text-cream/70">
                  {feature.desc}
                </p>
              </div>
            </motion.article>
          </Reveal>

          {/* Smaller cards */}
          {rest.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05}>
              <motion.article
                whileHover="hover"
                className="group relative flex gap-4 overflow-hidden rounded-2xl border border-gold/12 bg-white/[0.02] p-3"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <motion.img
                    variants={{ hover: { scale: 1.1 } }}
                    transition={{ duration: 0.6 }}
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center pr-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="truncate font-display text-xl text-cream">{d.name}</h3>
                    <span className="shrink-0 font-body text-sm font-medium text-gold">
                      ₹{d.price}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 font-body text-xs font-light leading-relaxed text-cream/55">
                    {d.desc}
                  </p>
                  {d.tag && (
                    <span className="mt-1.5 font-body text-[10px] uppercase tracking-widest2 text-ember/90">
                      {d.tag}
                    </span>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
