import { MapPin, Navigation } from "lucide-react";
import { restaurant } from "../lib/data";
import { SectionHeading, Reveal } from "./ui";

export default function MapSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Find Us" title={<>On the&nbsp;map</>} />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-gold/25 shadow-card">
            {/* Stylised, brand-matched map illustration (no external API key) */}
            <div className="relative aspect-[16/9] w-full bg-[#0d1a30]">
              <svg
                viewBox="0 0 1200 675"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-label="Stylised map of Mak's Kitchen location"
              >
                {/* base blocks */}
                <rect width="1200" height="675" fill="#0d1a30" />
                <g opacity="0.5">
                  {Array.from({ length: 9 }).map((_, r) =>
                    Array.from({ length: 15 }).map((_, c) => {
                      const x = c * 82 + ((r % 2) * 14);
                      const y = r * 78;
                      return (
                        <rect
                          key={`${r}-${c}`}
                          x={x}
                          y={y}
                          width={62 + ((c * r) % 14)}
                          height={54 + ((r + c) % 18)}
                          rx="4"
                          fill="#122442"
                          stroke="#1c3357"
                          strokeWidth="1"
                        />
                      );
                    })
                  )}
                </g>

                {/* the expressway / river curve */}
                <path
                  d="M-40,470 C220,430 360,300 560,300 C760,300 900,150 1240,120"
                  fill="none"
                  stroke="#1b3a63"
                  strokeWidth="46"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <path
                  d="M-40,470 C220,430 360,300 560,300 C760,300 900,150 1240,120"
                  fill="none"
                  stroke="#274c7d"
                  strokeWidth="4"
                  strokeDasharray="14 18"
                  strokeLinecap="round"
                />

                {/* secondary roads */}
                <path
                  d="M300,-20 L360,300 L420,700"
                  fill="none"
                  stroke="#16305a"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <path
                  d="M820,-20 L760,320 L700,700"
                  fill="none"
                  stroke="#16305a"
                  strokeWidth="16"
                  strokeLinecap="round"
                />

                {/* route badge */}
                <g transform="translate(1010,150)">
                  <rect x="-26" y="-18" width="52" height="34" rx="6" fill="#c9a24b" />
                  <text
                    x="0"
                    y="5"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                    fontSize="18"
                    fontWeight="700"
                    fill="#0d1a30"
                  >
                    163
                  </text>
                </g>

                {/* soft glow under pin */}
                <ellipse cx="560" cy="300" rx="120" ry="120" fill="url(#pinGlow)" />
                <defs>
                  <radialGradient id="pinGlow">
                    <stop offset="0%" stopColor="#c9a24b" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#c9a24b" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              {/* animated pin */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
                <div className="flex flex-col items-center rounded-2xl border border-gold/30 bg-ink/80 px-4 py-2 backdrop-blur">
                  <span className="font-display text-base text-cream">
                    {restaurant.name}
                  </span>
                  <span className="font-body text-[10px] uppercase tracking-widest2 text-gold">
                    Mehdipatnam, Hyderabad
                  </span>
                </div>
                <span className="mt-2 flex h-11 w-11 animate-float items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-deep shadow-gold">
                  <MapPin size={22} className="text-ink" fill="currentColor" />
                </span>
              </div>
            </div>

            {/* action bar */}
            <div className="flex flex-col items-start justify-between gap-4 border-t border-gold/15 bg-ink/70 px-6 py-5 backdrop-blur sm:flex-row sm:items-center">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <p className="font-body text-sm font-light text-cream/70">
                  {restaurant.address.line1} {restaurant.address.line2}{" "}
                  {restaurant.address.line3} {restaurant.address.line4}
                </p>
              </div>
              <a
                href={restaurant.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep to-gold px-6 py-3 font-body text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03]"
              >
                <Navigation size={16} className="transition-transform group-hover:-translate-y-0.5" />
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
