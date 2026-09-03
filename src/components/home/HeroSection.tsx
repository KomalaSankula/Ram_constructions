import { ArrowRight, Home, HardHat, ShieldCheck, UserCheck, Building2, Award, Star } from 'lucide-react'
import luxuryVilla from '../../assets/images/luxury-villa-hero.png'
import { testimonialsData } from '../../data/testimonials'

export default function HeroSection() {
  const highlights = [
    {
      icon: Home,
      title: 'Quality Materials',
      desc: 'Premium materials for lasting structures.',
      variant: 'primary',
    },
    {
      icon: HardHat,
      title: 'Expert Team',
      desc: 'Skilled professionals with proven experience.',
      variant: 'light',
    },
    {
      icon: ShieldCheck,
      title: 'Timely Delivery',
      desc: 'Projects completed on schedule.',
      variant: 'primary',
    },
    {
      icon: UserCheck,
      title: 'Vastu Compliant',
      desc: 'Built according to traditional principles.',
      variant: 'light',
    },
    {
      icon: Building2,
      title: 'Modern Architecture',
      desc: 'Contemporary design and functional spaces.',
      variant: 'primary',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      desc: 'Over 12 years of excellence in construction.',
      variant: 'light',
    },
  ]

  return (
    <section id="home" className="relative bg-white pt-24 pb-6 sm:pt-32 md:pt-36 lg:pt-40 md:pb-8 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.05fr_1.15fr] items-center">
          {/* Left Hero Content */}
          <div className="flex flex-col justify-center z-10">
            {/* Status Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f0f9ff] border border-[#1ea6dc]/40 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#1ea6dc] mb-4 w-fit shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#1ea6dc] animate-pulse" />
              <span>Premier Construction & Engineering</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.15rem] font-black tracking-[-0.025em] leading-[1.18] text-[#072b58]">
              Building <span className="text-[#1ea6dc]">Dreams,</span>
              <span className="block mt-1 sm:mt-1.5 text-[#072b58]">
                Creating <span className="text-[#1ea6dc]">Tomorrow</span>
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Delivering benchmark architectural design, turnkey residential villas, and commercial landmarks across Telangana. Built with precision engineering, 100% Vastu compliance, and uncompromising structural integrity.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1ea6dc] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#1ea6dc]/30 transition hover:bg-[#072b58] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#072b58] shadow-sm transition hover:border-[#1ea6dc] hover:bg-[#f0f9ff] hover:text-[#1ea6dc] active:scale-[0.98] cursor-pointer"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Social Proof Trust Strip */}
            <div className="mt-8 sm:mt-10 flex items-center gap-4 pt-6 border-t border-slate-100">
              <div className="flex -space-x-2.5 overflow-hidden">
                {testimonialsData.slice(0, 4).map((client) => (
                  <img
                    key={client.id}
                    src={client.avatar}
                    alt={client.name}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#1ea6dc] text-[#1ea6dc]" />
                  ))}
                  <span className="text-xs sm:text-sm font-black text-[#072b58] ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  Trusted by <span className="text-[#072b58] font-bold">120+ Homeowners & Developers</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Luxury Villa (Clean Background) */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative z-10 w-full max-w-lg sm:max-w-xl lg:max-w-none">
              <img
                src={luxuryVilla}
                alt="Modern Luxury Architectural Villa"
                className="w-full h-auto object-contain select-none transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Floating Badge 1: Top-Right (ISO Certified Safety) */}
              <div className="absolute -top-3 right-0 sm:right-4 animate-float z-20 hidden sm:flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md ring-1 ring-slate-200/80 transition-all hover:scale-105 select-none">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f9ff] text-[#1ea6dc] ring-1 ring-[#1ea6dc]/25 shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#072b58] leading-tight">ISO 9001:2015</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Certified Structural Safety</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom-Left (Delivered Sites) */}
              <div className="absolute -bottom-2 left-2 sm:-bottom-3 sm:left-4 animate-float [animation-delay:2s] z-20 flex items-center gap-2.5 sm:gap-3 rounded-2xl bg-white/95 px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-xl backdrop-blur-md ring-1 ring-slate-200/80 transition-all hover:scale-105 select-none">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f9ff] text-[#1ea6dc] ring-1 ring-[#1ea6dc]/25 shadow-sm">
                  <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-[#072b58] leading-none">150+ Delivered</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-1">Telangana Landmark Sites</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Infinite Marquee Highlight Bar matching screenshot */}
        <div className="mt-10 lg:mt-12 relative overflow-hidden rounded-2xl sm:rounded-[28px] bg-white py-5 sm:py-6 shadow-[0_15px_40px_-15px_rgba(7,43,88,0.08)] ring-1 ring-slate-100/90">
          {/* Subtle edge gradient masks for seamless fade */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Smooth GPU-accelerated Infinite Marquee Track */}
          <div className="animate-marquee-infinite flex items-center">
            {[...highlights, ...highlights].map((item, index) => {
              const Icon = item.icon
              const isPrimary = item.variant === 'primary'
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 px-8 sm:px-10 shrink-0 border-r border-slate-100 last:border-r-0 select-none group cursor-pointer"
                >
                  <div
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full shadow-sm transition duration-300 group-hover:scale-110 ${
                      isPrimary
                        ? 'bg-[#1ea6dc] text-white'
                        : 'bg-[#f0f9ff] text-[#1ea6dc]'
                    }`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div className="whitespace-nowrap">
                    <h3 className="text-sm font-bold text-[#072b58] group-hover:text-[#1ea6dc] transition-colors">{item.title}</h3>
                    <p className="mt-0.5 text-xs text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
