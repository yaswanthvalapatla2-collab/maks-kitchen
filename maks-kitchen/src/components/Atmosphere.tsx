import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Scroll progress bar + a soft gold glow that follows the cursor (desktop). */
export default function Atmosphere() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-gradient-to-r from-gold-deep via-gold-light to-ember"
      />
      {fine && (
        <div
          aria-hidden
          className="pointer-events-none fixed z-[80] hidden md:block"
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%,-50%)",
            width: 480,
            height: 480,
            background:
              "radial-gradient(circle, rgba(201,162,75,0.10) 0%, rgba(201,162,75,0) 60%)",
          }}
        />
      )}
    </>
  );
}
