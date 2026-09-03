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
          className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
            inverted ? 'text-[#38bdf8]' : 'text-[#1ea6dc]'
          }`}
        >
          {tag}
        </span>
      )}

      <h2
        className={`mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight ${
          inverted ? 'text-white' : 'text-[#072b58]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base ${inverted ? 'text-[#f0f9ff]' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
