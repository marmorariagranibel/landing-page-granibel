import { cn } from "@/lib/utils"

interface GlowProps {
  className?: string
}

export function Glow({ className }: GlowProps) {
  return (
    <div
      className={cn(
        "absolute -z-10 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] opacity-40 mix-blend-screen pointer-events-none",
        "animate-pulse duration-[4s]",
        className
      )}
    />
  )
}
