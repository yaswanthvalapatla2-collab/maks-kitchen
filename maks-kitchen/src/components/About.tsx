import { CheckCircle2 } from "lucide-react";
import { about } from "../lib/data";
import { SectionHeading, Reveal } from "./ui";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Arched image stack */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="arch-clip aspect-[3/4] overflow-hidden border border-gold/25">
              <img
                src="/images/interior/alcove.webp"
                alt="Carved alcove seating at Mak's Kitchen"
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-40 overflow-hidden rounded-xl border-2 border-ink shadow-card sm:block md:w-52">
              <img
                src="/images/dishes/zafrani-biryani.webp"
                alt="Mutton Zafrani Biryani"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass absolute -left-4 top-8 rounded-xl px-4 py-3 text-center">
              <p className="font-display text-3xl gold-text leading-none">4.2</p>
              <p className="mt-1 font-body text-[10px] uppercase tracking-widest2 text-sand">
                3,171 reviews
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} align="left" />
          <div className="mt-7 space-y-5">
            {about.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="max-w-xl font-body text-[15px] font-light leading-relaxed text-cream/70">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {about.pillars.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-gold" />
                  <span className="font-body text-sm text-cream/85">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
