"use client";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@heroui/react";

const faqs = [
  { q: "Will the talks be recorded?", a: "Yes. Every talk is recorded and shared with attendees within two weeks. Selected talks are released publicly six months later." },
  { q: "Is there a code of conduct?", a: "Yes — a strict one. By attending, you agree to our code of conduct, which is enforced by an independent ombudsperson present on-site for all three days." },
  { q: "Can I get a refund?", a: "Full refund up to 60 days before the event. 50% refund up to 30 days before. Tickets are transferable any time before May 1." },
  { q: "Do you offer scholarships?", a: "We reserve 80 free tickets each year for students, career-switchers and people from underrepresented backgrounds. Applications open in January." },
  { q: "Where should I stay?", a: "We've blocked rooms at Memmo Alfama, The Lumiares and a handful of guesthouses near Belém. Booking links go out with your ticket confirmation." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Questions</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight">
            Good <span className="italic text-gradient pr-2">answers</span>.
          </h2>
        </motion.div>
        <Accordion
          variant="splitted"
          className=""
          itemClasses={{
            base: "flex flex-wrap flex-row justify-between w-full border border-white/5 mb-3 rounded-2xl",
            title: "font-display text-xl",
            content: "text-neutral-400 pb-6",
          }}
        >
          {faqs.map((f, i) => (
            <AccordionItem className="" classNames={{
              base:"flex flex-col items-start justify-between w-full px-0 py-2",
              content:"p-2 flex flex-row justify-between",
              heading:"w-full flex flex-row justify-between",
              trigger:" bg-[linear-gradient(135deg,#7c3aed_0%,#ec4899_40%,#22d3ee_100%)] hover:bg-[linear-gradient(135deg,#7c3aed_0%,#ec4899_40%,#22d3ee_100%)] bg-[length:200%_200%] bg-left hover:bg-right transition-[background-position] duration-1000 flex flex-row justify-between p-5 w-full",
              
            }} key={i} title={f.q}>{f.a}</AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
