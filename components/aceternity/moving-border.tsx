"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const MovingBorder = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("relative inline-flex p-[1.5px] rounded-full overflow-hidden", containerClassName)}>
      <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#7c3aed_0%,#ec4899_50%,#22d3ee_100%)]" />
      <span className={cn("relative inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl", className)}>
        {children}
      </span>
    </div>
  );
};
