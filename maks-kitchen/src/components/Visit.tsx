import { MapPin, Clock, Phone, Mail, Users } from "lucide-react";
import { restaurant } from "../lib/data";
import { SectionHeading, Reveal } from "./ui";

const cards = [
  {
    icon: MapPin,
    title: "Address",
    lines: [
      restaurant.address.line1,
      restaurant.address.line2,
      restaurant.address.line3,
      restaurant.address.line4,
    ],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: [restaurant.hoursLabel, restaurant.hoursValue, "Kitchen open all week"],
  },
  {
    icon: Phone,
    title: "Reservations",
    lines: [restaurant.phone, "Walk-ins welcome", "Take-away available"],
    href: `tel:${restaurant.phoneRaw}`,
  },
];

export default function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Visit Us" title={<>Plan your&nbsp;evening</>} />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <div className="group h-full rounded-2xl border border-gold/15 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/35">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-2xl text-cream">{c.title}</h3>
                <div className="mt-3 space-y-1">
                  {c.lines.map((l) => (
                    <p
                      key={l}
                      className="font-body text-sm font-light leading-relaxed text-cream/65"
                    >
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            );
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                {c.href ? (
                  <a href={c.href} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Quick facts strip */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-gold/10 bg-white/[0.015] px-6 py-5 text-center">
            <span className="inline-flex items-center gap-2 font-body text-sm text-cream/70">
              <Users size={16} className="text-gold" /> Separate family section
            </span>
            <span className="hidden h-4 w-px bg-gold/20 sm:block" />
            <a
              href={`mailto:${restaurant.email}`}
              className="inline-flex items-center gap-2 font-body text-sm text-cream/70 transition hover:text-gold"
            >
              <Mail size={16} className="text-gold" /> {restaurant.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
