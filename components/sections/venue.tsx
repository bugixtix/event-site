"use client";
import { motion } from "framer-motion";
import { TextGenerate } from "@/components/aceternity/text-generate";
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import Image from "next/image"
// import LisabonImage from ""

export function Venue() {
  return (
    <section id="venue" className="relative py-32 px-6 overflow-hidden border-t border-white/5">
      <BackgroundBeams />
      <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden glass"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#7c3aed_0%,#ec4899_40%,#22d3ee_100%)] opacity-40 z-50" />
          {/* Image */}
      <div className="absolute w-full h-full bg-blue-900">
        <Image 
          src="https://images.pexels.com/photos/1548024/pexels-photo-1548024.jpeg" 
          alt="Lisbon"
          fill
          className="object-cover z-40" // Sorgt dafür, dass das Bild schön skaliert
        />
      </div>
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute bottom-6 left-6 right-6 z-50 font-semibold">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60 mb-2">Lisbon</div>
            <div className="font-display text-xl md:text-4xl">38.6953° N<br/>9.2076° W</div>
          </div>
        </motion.div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">The place</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-8">
            Centro Cultural <span className=" text-gradient">de Belém</span>
          </h2>
          <TextGenerate
            className="text-lg"
            words="A brutalist monument on the river, ten minutes from the Tower of Belém. Three auditoriums, a sculpture garden, and rooftops with views all the way to the Atlantic. We've taken over every room."
          />
          <div className="mt-10 grid grid-cols-3 gap-2 text-center">
            {[
              { k: "1,200", v: "attendees" },
              { k: "3", v: "stages" },
              { k: "12", v: "workshops" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl text-gradient">{s.k}</div>
                <div className="text-sm text-neutral-500 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
