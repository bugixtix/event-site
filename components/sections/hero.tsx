"use client";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/aceternity/spotlight";
import { MovingBorder } from "@/components/aceternity/moving-border";
import { Button } from "@heroui/react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#7c3aed" />
      <Spotlight className="top-10 right-0 md:top-20 md:right-40" fill="#ec4899" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <MovingBorder containerClassName="text-xs">
            <span className="text-neutral-300">September 19–21, 2026 · Lisbon, Portugal</span>
          </MovingBorder>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight"
        >
          The future of
          <br />
          <span className="text-gradient italic pr-2">AI & design</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-8 max-w-xl text-lg text-neutral-400"
        >
          Three days. Forty speakers. One question — what do we build when machines become collaborators?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button as="a" href="#tickets" radius="full" size="lg" className="px-8 py-2 bg-white/70 text-black font-medium hover:bg-white" endContent={<ArrowRight className="h-4 w-4" />}>
            Reserve your seat
          </Button>
          <Button as="a" href="#schedule" radius="full" size="lg" variant="bordered" className="px-8 py-2 border-white bg-[#ec4899]/50 transition-all duration-1000 hover:bg-[#ec4899] text-black font-medium">
            View schedule
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-neutral-500"
        >
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 3 days · 24 talks · 12 workshops</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Centro Cultural de Belém</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05050a] to-transparent" />
    </section>
  );
}
