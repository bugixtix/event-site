"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = Array.from({ length: 12 });
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 696 316" fill="none">
        {paths.map((_, i) => (
          <motion.path
            key={i}
            d={`M-${380 - i * 8} ${189 + i * 8}C-${380 - i * 8} ${189 + i * 8} -${312 - i * 5} ${216 + i * 8} ${152 + i * 6} ${343 - i * 8}C${616 + i * 7} ${470 - i * 8} ${684 + i * 6} ${497 - i * 8} ${684 + i * 6} ${497 - i * 8}`}
            stroke="url(#beam-grad)"
            strokeOpacity={0.4}
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
        <defs>
          <linearGradient id="beam-grad" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ec4899" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
