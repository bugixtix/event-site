"use client";
import { motion } from "framer-motion";
import { Card, Button } from "@heroui/react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Day Pass",
    price: "€290",
    desc: "Pick one day. All talks, all stages.",
    perks: ["Single-day access", "Coffee & lunch", "Recordings after the event"],
  },
  {
    name: "Full Conference",
    price: "€690",
    desc: "Three days. Every talk. Every party.",
    perks: ["All 3 days", "All workshops (subject to capacity)", "Welcome, rooftop & closing parties", "Speaker dinner lottery"],
    featured: true,
  },
  {
    name: "Studio Table",
    price: "€4,200",
    desc: "Bring your team of six.",
    perks: ["6 full passes", "Reserved seating", "Private workshop slot", "Logo on team page"],
  },
];

export function Tickets() {
  return (
    <section id="tickets" className="relative py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Tickets</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight">
            Pick your <span className="italic text-gradient pr-2">altitude</span>.
          </h2>
          <p className="mt-4 text-neutral-500">Early-bird prices end July 14.</p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className={`relative h-full p-4 md:p-8 border ${t.featured ? "border-white/30 bg-white/[0.04]" : "border-white/5 bg-white/[0.02]"}`}>
                {t.featured && (
                  <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] bg-white text-black px-3 py-1 rounded-br-md font-bold rounded-bl-md">
                    Most popular
                  </div>
                )}
                <h3 className="font-display text-3xl">{t.name}</h3>
                <p className="text-sm text-neutral-500 mt-2 min-h-[40px]">{t.desc}</p>
                <div className="mt-6 font-display text-6xl">{t.price}</div>
                <ul className="mt-8 space-y-3 text-sm">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-3 text-neutral-300">
                      <Check className="h-5 w-5 flex-shrink-0 text-gradient" /> {p}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`mt-8 w-full transition-all duration-300 text-sm p-2 ${t.featured ? "bg-white/70 hover:bg-white text-black" : "bg-white/20 hover:bg-white/10 text-white"}`}
                  radius="full"
                  size="lg"
                >
                  Buy {t.name}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
