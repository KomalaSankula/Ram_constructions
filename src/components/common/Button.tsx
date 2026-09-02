import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'light'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  icon?: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      'bg-[#0d55c8] text-white shadow-md shadow-[#0d55c8]/25 hover:bg-[#072b58] hover:shadow-lg active:scale-[0.98]',
    outline:
      'border-2 border-[#072b58] bg-transparent text-[#072b58] hover:bg-[#edf5fd] active:scale-[0.98]',
    ghost:
      'text-slate-600 hover:text-[#0d55c8] hover:bg-[#edf5fd] active:scale-[0.98]',
    light:
      'bg-white text-[#072b58] shadow-md hover:bg-[#edf5fd] active:scale-[0.98]',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-bold rounded-full',
    md: 'px-6 py-2.5 text-sm font-bold rounded-full',
    lg: 'px-8 py-3.5 text-base font-bold rounded-full',
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  )
}
