import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "flex flex-col gap-4 mb-12 md:mb-20",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )} 
      {...props}
    >
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
