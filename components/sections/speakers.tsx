"use client";
import { motion } from "framer-motion";
import { Card } from "@heroui/react";

const speakers = [
  { name: "Yuki Tanaka", role: "Principal AI Researcher · DeepMind", hue: "from-violet-500 to-pink-500" },
  { name: "Amara Okonkwo", role: "Design Director · Linear", hue: "from-pink-500 to-amber-400" },
  { name: "Léo Marchetti", role: "Creative Technologist · Active Theory", hue: "from-cyan-400 to-violet-500" },
  { name: "Priya Raman", role: "Founder · Hyperplane", hue: "from-emerald-400 to-cyan-400" },
  { name: "Magnus Holm", role: "Type Designer · Klim", hue: "from-amber-400 to-pink-500" },
  { name: "Isabela Cruz", role: "Head of Product · Figma", hue: "from-violet-500 to-cyan-400" },
];

export function Speakers() {
  return (
    <section id="speakers" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">The lineup</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl">
            Forty voices reshaping <span className="text-gradient leading-snug"> how we make things </span>.
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Card className="group relative overflow-hidden bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-500 aspect-[4/5]">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.hue} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl leading-tight">{s.name}</h3>
                    <p className="text-sm text-white/80 mt-2">{s.role}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass flex items-center justify-center text-xs">
                  0{i + 1}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-neutral-500">+ 34 more speakers to be announced</div>
      </div>
    </section>
  );
}
