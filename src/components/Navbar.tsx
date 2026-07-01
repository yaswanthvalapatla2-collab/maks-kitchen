import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X, Phone } from "lucide-react";
import { nav, restaurant } from "../lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
        scrolled
          ? "glass py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-script text-2xl md:text-3xl gold-text">
            Mak&apos;s Kitchen
          </span>
          <span className="mt-0.5 font-deco text-[9px] uppercase tracking-widest2 text-sand/80">
            Multi-Cuisine Restaurant
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="group relative font-body text-sm font-light uppercase tracking-[0.18em] text-cream/80 transition-colors hover:text-cream"
              >
                {n.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#visit"
            className="hidden rounded-full border border-gold/50 px-5 py-2 font-body text-xs uppercase tracking-[0.16em] text-gold transition-all hover:bg-gold hover:text-ink md:inline-block"
          >
            Reserve
          </a>
          <a
            href={`tel:${restaurant.phoneRaw}`}
            className="hidden rounded-full bg-gold p-2.5 text-ink transition-transform hover:scale-105 md:inline-flex"
            aria-label="Call the restaurant"
          >
            <Phone size={16} />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-full border border-gold/40 p-2 text-gold md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pb-5 pt-4">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-3 font-display text-2xl text-cream/90"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-gold py-3 text-center font-body text-xs uppercase tracking-[0.18em] text-ink"
              >
                Reserve a Table
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
