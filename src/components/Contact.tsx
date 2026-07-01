import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, CalendarClock, MessageSquare } from "lucide-react";
import { restaurant } from "../lib/data";
import { SectionHeading, Reveal } from "./ui";

type Tab = "reserve" | "message";

const field =
  "w-full rounded-xl border border-gold/20 bg-ink/40 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/35 outline-none transition focus:border-gold/60 focus:bg-ink/60";

export default function Contact() {
  const [tab, setTab] = useState<Tab>("reserve");
  const [sent, setSent] = useState(false);

  // Demo-only local state — nothing is actually transmitted.
  const [reserve, setReserve] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });
  const [message, setMessage] = useState({ name: "", email: "", body: "" });

  const submit = () => {
    setSent(true);
    setReserve({ name: "", phone: "", date: "", time: "", guests: "2" });
    setMessage({ name: "", email: "", body: "" });
    setTimeout(() => setSent(false), 4200);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 damask opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="container-x relative max-w-3xl">
        <SectionHeading
          eyebrow="Get in Touch"
          title={<>Reserve a table&nbsp;&amp;&nbsp;say hello</>}
        />

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-gold/20 bg-white/[0.02]">
            {/* Tabs */}
            <div className="flex border-b border-gold/15">
              {(
                [
                  ["reserve", "Reserve a Table", CalendarClock],
                  ["message", "Send a Message", MessageSquare],
                ] as const
              ).map(([id, label, Icon]) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`relative flex flex-1 items-center justify-center gap-2 px-4 py-4 font-body text-sm transition-colors ${
                    tab === id ? "text-gold" : "text-cream/50 hover:text-cream/80"
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{id === "reserve" ? "Reserve" : "Message"}</span>
                  {tab === id && (
                    <motion.span
                      layoutId="contactTab"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-gold"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="relative p-6 md:p-8">
              <AnimatePresence mode="wait">
                {tab === "reserve" ? (
                  <motion.div
                    key="reserve"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <input
                      className={field}
                      placeholder="Full name"
                      value={reserve.name}
                      onChange={(e) => setReserve({ ...reserve, name: e.target.value })}
                    />
                    <input
                      className={field}
                      placeholder="Phone number"
                      value={reserve.phone}
                      onChange={(e) => setReserve({ ...reserve, phone: e.target.value })}
                    />
                    <input
                      type="date"
                      className={field}
                      value={reserve.date}
                      onChange={(e) => setReserve({ ...reserve, date: e.target.value })}
                    />
                    <input
                      type="time"
                      className={field}
                      value={reserve.time}
                      onChange={(e) => setReserve({ ...reserve, time: e.target.value })}
                    />
                    <select
                      className={`${field} sm:col-span-2`}
                      value={reserve.guests}
                      onChange={(e) => setReserve({ ...reserve, guests: e.target.value })}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8+"].map((g) => (
                        <option key={g} value={g} className="bg-ink">
                          {g} {g === "1" ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                ) : (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <input
                      className={field}
                      placeholder="Full name"
                      value={message.name}
                      onChange={(e) => setMessage({ ...message, name: e.target.value })}
                    />
                    <input
                      className={field}
                      placeholder="Email address"
                      value={message.email}
                      onChange={(e) => setMessage({ ...message, email: e.target.value })}
                    />
                    <textarea
                      className={`${field} min-h-[120px] resize-none sm:col-span-2`}
                      placeholder="Your message…"
                      value={message.body}
                      onChange={(e) => setMessage({ ...message, body: e.target.value })}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <p className="order-2 text-center font-body text-[11px] text-cream/35 sm:order-1 sm:text-left">
                  Demo form — submissions aren't sent. Call {restaurant.phone} to book.
                </p>
                <button
                  onClick={submit}
                  className="order-1 w-full shrink-0 rounded-full bg-gradient-to-r from-gold-deep to-gold px-8 py-3 font-body text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03] sm:order-2 sm:w-auto"
                >
                  {tab === "reserve" ? "Request Table" : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 30, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-[120] flex items-center gap-3 rounded-full border border-gold/40 bg-ink/90 px-6 py-3 shadow-gold backdrop-blur"
          >
            <CheckCircle2 size={20} className="text-gold" />
            <span className="font-body text-sm text-cream">
              Thanks! We'll be in touch shortly.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
