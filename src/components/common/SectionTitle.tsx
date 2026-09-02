interface SectionTitleProps {
  tag?: string
  title: string | React.ReactNode
  subtitle?: string
  centered?: boolean
  className?: string
  inverted?: boolean
}

export default function SectionTitle({
  tag,
  title,
  subtitle,
  centered = true,
  className = '',
  inverted = false,
}: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center mx-auto' : 'text-left'} max-w-2xl ${className}`}>
      {tag && (
        <span
          className={`text-xs font-extrabold uppercase tracking-[0.28em] ${
            inverted ? 'text-[#39a1d6]' : 'text-[#0d55c8]'
          }`}
        >
          {tag}
        </span>
      )}

      <h2
        className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
          inverted ? 'text-white' : 'text-[#072b58]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${inverted ? 'text-[#edf5fd]' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
