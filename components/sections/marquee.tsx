"use client";
import { motion } from "framer-motion";

const sponsors = ["Vercel", "Linear", "Figma", "Anthropic", "OpenAI", "Raycast", "Arc", "Notion", "Stripe", "Framer"];

export function Marquee() {
  return (
    <section className="border-y border-white/5 py-10 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">In partnership with</p>
      <div className="relative">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...sponsors, ...sponsors, ...sponsors].map((s, i) => (
            <span key={i} className="font-display text-3xl text-neutral-600 hover:text-white transition-colors">{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
