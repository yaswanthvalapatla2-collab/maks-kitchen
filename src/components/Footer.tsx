import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";
import { restaurant, nav } from "../lib/data";
import { DiamondDivider } from "./ui";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15">
      <div className="absolute inset-0 damask opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/90 to-ink" />

      <div className="container-x relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-script text-4xl gold-text leading-none">
              {restaurant.name}
            </div>
            <p className="mt-1 font-deco text-[11px] uppercase tracking-widest2 text-cream/60">
              {restaurant.tagline}
            </p>
            <p className="mt-5 max-w-xs font-body text-sm font-light leading-relaxed text-cream/60">
              {restaurant.hook} Authentic Hyderabadi flavour served with quiet
              luxury in the heart of Mehdipatnam.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link (demo)"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-cream/70 transition hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-cream">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="font-body text-sm text-cream/60 transition hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="font-body text-sm text-cream/60 transition hover:text-gold"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-cream">Opening Hours</h4>
            <div className="mt-4 flex items-start gap-3">
              <Clock size={17} className="mt-0.5 shrink-0 text-gold" />
              <div className="font-body text-sm text-cream/60">
                <p className="text-cream/80">{restaurant.hoursLabel}</p>
                <p>{restaurant.hoursValue}</p>
                <p className="mt-1 text-cream/50">Take-away &amp; delivery available</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-cream">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${restaurant.phoneRaw}`}
                  className="flex items-start gap-3 font-body text-sm text-cream/60 transition hover:text-gold"
                >
                  <Phone size={17} className="mt-0.5 shrink-0 text-gold" />
                  {restaurant.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurant.email}`}
                  className="flex items-start gap-3 font-body text-sm text-cream/60 transition hover:text-gold"
                >
                  <Mail size={17} className="mt-0.5 shrink-0 text-gold" />
                  {restaurant.email}
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-cream/60">
                <MapPin size={17} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {restaurant.address.line1} {restaurant.address.line2}{" "}
                  {restaurant.address.line3} {restaurant.address.line4}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <DiamondDivider className="mt-14" />

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-body text-xs text-cream/45">
            © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/35">
            Demo website designed &amp; developed by{" "}
            <span className="text-gold/70">Valapatla Yaswanth.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
