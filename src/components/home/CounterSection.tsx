import { useState, useEffect, useRef } from 'react'
import { Award, Building2, HardHat, ShieldCheck } from 'lucide-react'
import ConstructionBgPattern from '../common/ConstructionBgPattern'

interface CounterItem {
  id: string
  targetValue: number
  suffix: string
  label: string
  desc: string
  icon: typeof Award
}

const counters: CounterItem[] = [
  {
    id: 'exp',
    targetValue: 12,
    suffix: '+',
    label: 'Years of Excellence',
    desc: 'Continuous craftsmanship across Telangana',
    icon: Award,
  },
  {
    id: 'projects',
    targetValue: 150,
    suffix: '+',
    label: 'Landmark Projects',
    desc: 'Residential villas & commercial towers',
    icon: Building2,
  },
  {
    id: 'team',
    targetValue: 50,
    suffix: '+',
    label: 'Expert Professionals',
    desc: 'Senior civil engineers & architects',
    icon: HardHat,
  },
  {
    id: 'ontime',
    targetValue: 100,
    suffix: '%',
    label: 'On-Time Handover',
    desc: 'Guaranteed milestone-based escrow delivery',
    icon: ShieldCheck,
  },
]

function AnimatedNumber({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const duration = 2000 // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Ease Out Cubic: 1 - (1 - t)^3
      const easeOutProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOutProgress * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    const animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, target])

  return (
    <span className="tabular-nums">
      {count}
      <span className="text-[#1ea6dc]">{suffix}</span>
    </span>
  )
}

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="statistics"
      className="relative overflow-hidden bg-gradient-to-br from-[#061d32] via-[#072b58] to-[#0a3a78] text-white py-6 sm:py-8"
    >
      {/* Background Architectural Blueprint Pattern & Soft Ambient Glow */}
      <ConstructionBgPattern variant="blueprint" inverted opacity="opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#1ea6dc]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#1ea6dc]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {counters.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="group relative flex flex-col items-center text-center rounded-2xl sm:rounded-3xl bg-white/[0.06] p-4 sm:p-6 lg:p-8 backdrop-blur-md ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.1] hover:ring-white/25 hover:shadow-2xl"
              >
                {/* Glowing Icon Badge */}
                <div className="mb-3 sm:mb-5 flex h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 text-[#1ea6dc] shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#1ea6dc] group-hover:text-white">
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                </div>

                {/* Animated Stat Value */}
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-none">
                  <AnimatedNumber target={item.targetValue} suffix={item.suffix} isVisible={isVisible} />
                </div>

                {/* Title */}
                <h3 className="mt-2.5 text-sm sm:text-base font-bold text-white leading-snug">
                  {item.label}
                </h3>

                {/* Descriptor */}
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
