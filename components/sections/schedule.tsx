"use client";
import { motion } from "framer-motion";
import { Tabs, Tab } from "@heroui/react";

const schedule = {
  "Day 1 - May 14": [
    { t: "09:00", title: "Doors & coffee", who: "Atrium" },
    { t: "10:00", title: "Opening keynote: Machines that make", who: "Yuki Tanaka" },
    { t: "11:30", title: "The new craft", who: "Amara Okonkwo" },
    { t: "14:00", title: "Workshop · Prompting for designers", who: "Priya Raman" },
    { t: "20:00", title: "Welcome party · Pensão Amor", who: "" },
  ],
  "Day 2 · May 15": [
    { t: "09:30", title: "Living interfaces", who: "Léo Marchetti" },
    { t: "11:00", title: "Type in motion", who: "Magnus Holm" },
    { t: "14:00", title: "Workshop · Agents that ship code", who: "Isabela Cruz" },
    { t: "16:30", title: "Panel · The post-Figma world", who: "" },
    { t: "21:00", title: "Rooftop dinner · LX Factory", who: "" },
  ],
  "Day 3 · May 16": [
    { t: "10:00", title: "Building with judgment", who: "Closing keynote" },
    { t: "12:00", title: "Demo day · 12 startups", who: "" },
    { t: "15:00", title: "Open studios", who: "" },
    { t: "19:00", title: "Closing party · Lux Frágil", who: "" },
  ],
};

export function Schedule() {
  return (
    <section id="schedule" className="relative py-32 px-2 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Three days</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight">
            <span className="italic text-gradient pr-1 leading-snug">A rhythm</span> of talks, work and play.
          </h2>
        </motion.div>

        <div className="mt-16">
          <Tabs
            aria-label="Schedule"
            color="primary"
            variant="underlined"
            classNames={{
              tabList: " w-full flex flex-row justify-between md:gap-8 border-b border-white/10",
              tab: "px-0 h-14 font-display text-sm md:text-xl",
              cursor: "bg-white",
              tabContent: "group-data-[selected=true]:text-white text-neutral-500",
            }}
          >
            {Object.entries(schedule).map(([day, items]) => (
              <Tab key={day} title={day}>
                <ul className="mt-10 divide-y divide-white/5">
                  {items.map((s, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_1fr] gap-6 py-6 group hover:bg-white/[0.02] px-2 -mx-2 rounded-lg transition-colors"
                    >
                      <span className="text-neutral-500 tabular-nums">{s.t}</span>
                      <span className="font-display text-2xl md:text-3xl group-hover:text-gradient transition-colors">{s.title}</span>
                      <span className="text-neutral-500 text-sm self-center md:text-right col-start-2 md:col-start-3">{s.who}</span>
                    </motion.li>
                  ))}
                </ul>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
