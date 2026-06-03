"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerate = ({ words, className }: { words: string; className?: string }) => {
  const wordsArray = words.split(" ");
  return (
    <p className={cn("text-neutral-300 leading-relaxed", className)}>
      {wordsArray.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="inline-block mr-[0.25em]"
        >
          {w}
        </motion.span>
      ))}
    </p>
  );
};
