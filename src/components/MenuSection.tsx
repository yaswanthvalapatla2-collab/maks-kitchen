import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Star, Flame, Leaf } from "lucide-react";
import { menu, type MenuItem } from "../lib/data";
import { SectionHeading } from "./ui";

type Filter = "all" | (typeof menu)[number]["id"];

export default function MenuSection() {
  const [active, setActive] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);

  const q = query.trim().toLowerCase();

  const categories = useMemo(() => {
    return menu
      .filter((c) => active === "all" || c.id === active)
      .map((c) => ({
        ...c,
        items: c.items.filter((it: MenuItem) => {
          if (vegOnly && !it.veg) return false;
          if (!q) return true;
          return (
            it.name.toLowerCase().includes(q) ||
            (it.desc?.toLowerCase().includes(q) ?? false)
          );
        }),
      }))
      .filter((c) => c.items.length > 0);
  }, [active, q, vegOnly]);

  const total = categories.reduce((n, c) => n + c.items.length, 0);

  return (
    <section id="menu" className="damask relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Menu"
          title={<>Every dish, exactly as we serve&nbsp;it</>}
        />

        {/* Controls */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="relative w-full md:max-w-xs">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold/70"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes…"
                className="w-full rounded-full border border-gold/20 bg-white/[0.03] py-3 pl-11 pr-4 font-body text-sm text-cream placeholder:text-sand/50 outline-none transition focus:border-gold/60"
              />
            </div>
            <button
              onClick={() => setVegOnly((v) => !v)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 font-body text-xs uppercase tracking-[0.14em] transition ${
                vegOnly
                  ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-300"
                  : "border-gold/25 text-cream/70 hover:text-cream"
              }`}
            >
              <Leaf size={14} /> Veg only
            </button>
          </div>

          {/* Category chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Chip label="All" activeState={active === "all"} onClick={() => setActive("all")} />
            {menu.map((c) => (
              <Chip
                key={c.id}
                label={c.title}
                activeState={active === c.id}
                onClick={() => setActive(c.id)}
              />
            ))}
          </div>
        </div>

        {/* Menu grid */}
        <div className="mx-auto mt-14 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active + q + String(vegOnly)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {total === 0 && (
                <p className="py-16 text-center font-display text-2xl text-cream/50">
                  Nothing matches &ldquo;{query}&rdquo; — try another dish.
                </p>
              )}

              {categories.map((cat) => (
                <div key={cat.id} className="mb-14">
                  <div className="mb-6 flex items-baseline gap-4">
                    <div>
                      <p className="eyebrow">{cat.sub}</p>
                      <h3 className="font-display text-3xl text-cream md:text-4xl">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="hairline h-px flex-1" />
                  </div>

                  <div className="grid gap-x-10 gap-y-1 md:grid-cols-2">
                    {cat.items.map((it, i) => (
                      <motion.div
                        key={it.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(i * 0.02, 0.3) }}
                        className="group flex items-start justify-between gap-3 border-b border-white/5 py-3.5"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-body text-[15px] font-medium text-cream/90 transition-colors group-hover:text-gold">
                              {it.name}
                            </h4>
                            {it.star && (
                              <Star size={12} className="fill-gold text-gold" aria-label="Popular" />
                            )}
                            {it.spicy && (
                              <Flame size={12} className="text-ember" aria-label="Spicy" />
                            )}
                            {it.veg ? (
                              <VegDot veg />
                            ) : (
                              <VegDot />
                            )}
                          </div>
                          {it.desc && (
                            <p className="mt-0.5 max-w-sm font-body text-xs font-light leading-relaxed text-cream/45">
                              {it.desc}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 pt-0.5">
                          <span className="hidden h-px w-6 bg-gold/25 sm:block" />
                          <span className="whitespace-nowrap font-display text-lg text-gold-light">
                            {it.price === "MRP" ? "MRP" : `₹${it.price}`}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="mt-4 text-center font-body text-[11px] uppercase tracking-widest2 text-sand/50">
            Prices in ₹ · exclusive of taxes
          </p>
        </div>
      </div>
    </section>
  );
}

function Chip({
  label,
  activeState,
  onClick,
}: {
  label: string;
  activeState: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 font-body text-xs uppercase tracking-[0.12em] transition-all ${
        activeState
          ? "border-gold bg-gold text-ink"
          : "border-gold/20 text-cream/65 hover:border-gold/50 hover:text-cream"
      }`}
    >
      {label}
    </button>
  );
}

function VegDot({ veg = false }: { veg?: boolean }) {
  return (
    <span
      className={`inline-flex h-3.5 w-3.5 items-center justify-center rounded-[3px] border ${
        veg ? "border-emerald-500" : "border-red-500"
      }`}
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${veg ? "bg-emerald-500" : "bg-red-500"}`} />
    </span>
  );
}
