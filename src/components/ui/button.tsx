"use client";

import { cn } from "@/lib/utils";
import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "bg-primary hover:bg-primary/90 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-none px-16 py-1.5 text-[20px] font-bold tracking-wide text-white shadow-[2px_2px_10px_var(--color-secondary))] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[2px_4px_12px_var(--color-secondary)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
