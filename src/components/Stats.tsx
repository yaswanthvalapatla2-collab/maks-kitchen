import { stats } from "../lib/data";
import { useCounter } from "../hooks/useCounter";
import { Reveal } from "./ui";

function StatCard({
  value,
  suffix,
  label,
  decimals = 0,
  raw = false,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  raw?: boolean;
  delay?: number;
}) {
  const { ref, value: current } = useCounter(value, decimals);
  const display = raw ? value : decimals ? current.toFixed(decimals) : Math.round(current);

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="glass rounded-2xl px-6 py-9 text-center transition-transform duration-500 hover:-translate-y-1"
      >
        <div className="font-display text-[clamp(2.4rem,5vw,3.4rem)] font-medium leading-none">
          <span className="gold-text">{display}</span>
          <span className="gold-text text-[0.55em] align-top">{suffix}</span>
        </div>
        <div className="mt-3 font-body text-[11px] uppercase tracking-widest2 text-cream/60 md:text-xs">
          {label}
        </div>
      </div>
    </Reveal>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              decimals={(s as { decimals?: number }).decimals}
              raw={(s as { raw?: boolean }).raw}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
