import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`rounded-3xl border border-white/10 bg-white/5 ${className}`}
    />
  );
}