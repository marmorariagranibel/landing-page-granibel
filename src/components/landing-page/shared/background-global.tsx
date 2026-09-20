export function BackgroundGlobal() {
  return (
    <>
      {/* Fixed Background - DARK with Gold Tones */}
      <div className="fixed inset-0 -z-10 bg-[hsl(0_0%_8%)]">
        {/* Radial gradient overlay with champagne/gold tones - VIBRANT */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, hsl(46 28% 78% / 0.18) 0%, transparent 50%),
              radial-gradient(circle at 80% 60%, hsl(41 45% 65% / 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, hsl(28 22% 44% / 0.12) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(0 0% 100%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, hsl(0 0% 8% / 0.5) 100%)",
          }}
        />
      </div>
    </>
  )
}
