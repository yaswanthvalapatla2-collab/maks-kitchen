import { Star, Quote } from "lucide-react";
import { reviews, restaurant } from "../lib/data";
import { SectionHeading, Reveal } from "./ui";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < n ? "fill-gold text-gold" : "text-cream/20"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Loved by Guests"
          title={<>What our&nbsp;diners&nbsp;say</>}
        />

        {/* Rating summary */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-gold/15 bg-white/[0.02] px-8 py-6 sm:flex-row sm:justify-center sm:gap-6">
            <div className="text-center">
              <div className="font-display text-5xl leading-none gold-text">
                {restaurant.rating}
              </div>
              <div className="mt-2 flex justify-center">
                <Stars n={4} />
              </div>
            </div>
            <div className="hidden h-14 w-px bg-gold/20 sm:block" />
            <div className="text-center sm:text-left">
              <div className="font-body text-sm text-cream/80">
                Rated on Google
              </div>
              <div className="font-display text-xl text-cream">
                {restaurant.reviewCount} reviews
              </div>
            </div>
          </div>
        </Reveal>

        {/* Review cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.06}>
              <figure className="group relative flex h-full flex-col rounded-2xl border border-gold/12 bg-white/[0.02] p-6 transition-colors duration-500 hover:border-gold/30">
                <Quote
                  size={26}
                  className="mb-4 text-gold/40 transition-colors group-hover:text-gold/70"
                />
                <blockquote className="flex-1 font-body text-[15px] font-light leading-relaxed text-cream/75">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-gold/10 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 font-display text-sm text-gold">
                      {r.name.charAt(0)}
                    </span>
                    <span className="font-body text-sm text-cream/90">{r.name}</span>
                  </div>
                  <Stars n={r.stars} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center font-body text-[11px] italic text-cream/35">
            Review excerpts are illustrative for this demo; the {restaurant.rating}★
            rating and {restaurant.reviewCount} review count reflect Google.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
