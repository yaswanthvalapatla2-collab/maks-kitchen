import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "../lib/data";
import { SectionHeading, Reveal } from "./ui";

function spanClass(span?: string) {
  if (span === "wide") return "sm:col-span-2";
  if (span === "tall") return "row-span-2";
  return "";
}

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const go = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, go]);

  return (
    <section id="gallery" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Gallery"
          title={<>A table set for&nbsp;the&nbsp;senses</>}
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <Reveal
              key={g.src}
              delay={(i % 4) * 0.05}
              className={spanClass(g.span)}
            >
              <button
                onClick={() => setActive(i)}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-gold/15"
                aria-label={`View ${g.label}`}
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left font-body text-xs uppercase tracking-widest2 text-cream/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md"
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 rounded-full border border-gold/30 p-2 text-cream/80 transition hover:border-gold hover:text-gold"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/25 p-2 text-cream/70 transition hover:border-gold hover:text-gold md:left-8"
              aria-label="Previous"
            >
              <ChevronLeft size={26} />
            </button>

            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="mx-4 max-h-[82vh] max-w-5xl"
            >
              <img
                src={gallery[active].src}
                alt={gallery[active].label}
                className="max-h-[74vh] w-auto rounded-2xl border border-gold/20 object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center font-display text-lg text-cream/80">
                {gallery[active].label}
              </figcaption>
            </motion.figure>

            <button
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/25 p-2 text-cream/70 transition hover:border-gold hover:text-gold md:right-8"
              aria-label="Next"
            >
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
