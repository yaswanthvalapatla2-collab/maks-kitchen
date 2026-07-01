import { motion } from "framer-motion";
import { DiamondDivider } from "./ui";

export default function Loader({ done }: { done: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ pointerEvents: done ? "none" : "auto" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
    >
      <div className="damask absolute inset-0 opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative text-center"
      >
        <p className="eyebrow mb-3">Multi-Cuisine Restaurant</p>
        <h1 className="font-script text-6xl md:text-7xl gold-text leading-none">
          Mak&apos;s Kitchen
        </h1>
        <DiamondDivider className="mt-5" />
      </motion.div>

      <div className="relative mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: done ? "0%" : "-8%" }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
          className="h-full w-full bg-gradient-to-r from-gold-deep via-gold-light to-gold"
        />
      </div>
      <p className="relative mt-4 font-body text-[11px] uppercase tracking-widest2 text-sand/70">
        Setting the table
      </p>
    </motion.div>
  );
}
