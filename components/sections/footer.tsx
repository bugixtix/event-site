"use client";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-7xl md:text-[12rem] leading-none tracking-tight text-gradient"
        >
          See you<br/>in Lisbon.
        </motion.h2>
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-sm text-neutral-500">
          <div>
            <div className="text-white font-medium mb-3">Nebula Conf</div>
            <p>An independent gathering on AI & design. Organized by a non-profit collective of practitioners.</p>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Contact</div>
            <p>hello@nebulaconf.events<br/>press@nebulaconf.events</p>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Follow</div>
            <p>Twitter · Bluesky · Are.na · LinkedIn</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-between text-xs text-neutral-600">
          <span>© 2026 Nebula Collective</span>
          <span>Designed in Lisbon · Built with care</span>
        </div>
      </div>
    </footer>
  );
}
