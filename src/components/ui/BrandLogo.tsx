import logoTransparent from '../../assets/logos/ram-logo-transparent.png'
import logoInverted from '../../assets/logos/ram-logo-inverted.png'

interface BrandLogoProps {
  compact?: boolean
  inverted?: boolean
  className?: string
  imgClassName?: string
}

export default function BrandLogo({
  compact = false,
  inverted = false,
  className = '',
  imgClassName = '',
}: BrandLogoProps) {
  const logoSrc = inverted ? logoInverted : logoTransparent

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="RAM Construction Logo"
        className={`object-contain transition-transform duration-300 hover:scale-105 ${
          imgClassName || (compact ? 'h-14 sm:h-16 w-auto' : 'h-16 sm:h-20 md:h-24 w-auto max-w-[240px] sm:max-w-[280px] md:max-w-[320px]')
        }`}
        loading="eager"
      />
    </div>
  )
}
