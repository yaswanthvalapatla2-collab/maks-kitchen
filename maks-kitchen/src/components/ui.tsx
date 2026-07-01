import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

/* The ◆◇◆◇◆ divider lifted straight from Mak's printed menu — the site's
   signature connective thread back to the physical restaurant. */
export function DiamondDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/60" />
      <span className="text-gold/90 text-sm tracking-[0.4em] select-none">
        &#9670;&#9671;&#9670;&#9671;&#9670;
      </span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`font-display font-medium leading-[1.05] text-[clamp(2rem,5vw,3.6rem)] ${
            light ? "text-royal-deep" : "text-cream"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <DiamondDivider className={`mt-6 ${isCenter ? "" : "justify-start"}`} />
      </Reveal>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Global SVG defs: the Mughal-arch clip path used to frame images. */
export function SvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden className="absolute">
      <defs>
        <clipPath id="archClip" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.30 C0,0.08 0.22,0 0.5,0 C0.78,0 1,0.08 1,0.30 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
