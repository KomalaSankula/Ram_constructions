import { useState } from 'react'
import { ArrowRight, Play, Building2, ShieldCheck, CheckCircle2, Phone, Sparkles, Scan } from 'lucide-react'
import commercialBuildingsHero from '../../assets/images/commercial-buildings-hero.jpg'
import towerPreview from '../../assets/images/tower-preview.jpg'
import VideoModal from '../ui/VideoModal'
import { useModal } from '../../hooks/useModal'

export default function HeroSection2() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { openQuote } = useModal()

  const commercialHighlights = [
    { label: 'Turnkey EPC Commercial Contracts', icon: Building2 },
    { label: 'High-Rise Architectural Engineering', icon: ShieldCheck },
    { label: 'LEED Certified Green Developments', icon: Sparkles },
    { label: 'Precast & Steel Structural Frameworks', icon: CheckCircle2 },
    { label: 'Fast-Track Industrial Hubs', icon: Building2 },
    { label: 'ISO 9001:2015 Structural Safety', icon: ShieldCheck },
  ]

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 overflow-hidden text-white select-none isolate"
      >
        {/* Full-bleed Real Building Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={commercialBuildingsHero}
            alt="Modern Metropolis Commercial Buildings & Skyscrapers"
            className="h-full w-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle natural exposure scrim for text legibility without blacking out the buildings */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/35" />
        </div>

        {/* Architectural Layout Vertical Grid Guides (matching reference screenshot) */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 divide-x divide-white/20 z-0">
          <div className="h-full" />
          <div className="h-full" />
          <div className="h-full" />
          <div className="h-full hidden sm:block" />
          <div className="h-full hidden lg:block" />
          <div className="h-full hidden lg:block" />
        </div>

        {/* Main Hero Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto">
          {/* Top Right Architectural Viewfinder Mark (matching screenshot [A] icon) */}
          <div className="absolute -top-12 sm:-top-16 right-4 sm:right-8 hidden sm:flex items-center justify-center">
            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-xl border border-white/25 text-white shadow-2xl ring-1 ring-white/10 group cursor-pointer hover:border-[#39a1d6] hover:scale-105 transition">
              <Scan className="h-8 w-8 text-slate-200 stroke-[1.5] group-hover:text-[#39a1d6] transition-colors" />
              <span className="absolute font-mono text-xs font-black tracking-widest text-white">A</span>
            </div>
          </div>

          <div className="grid gap-12 lg:gap-14 lg:grid-cols-[1.15fr_0.85fr] items-center">
            {/* Left Hero Content */}
            <div className="flex flex-col justify-center">
              {/* Subtitle tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.26em] text-white drop-shadow-md">
                  BUILDING THE FUTURE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black tracking-tight leading-[1.02] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
                BUILT TOGETHER
              </h1>

              {/* Dual Accent Lines (matching reference screenshot) */}
              <div className="mt-4 flex items-center gap-2">
                <span className="h-1 w-14 sm:w-18 rounded-full bg-[#f59e0b] shadow-sm" />
                <span className="h-1 w-6 sm:w-8 rounded-full bg-white/70 shadow-sm" />
              </div>

              {/* Descriptive Copy */}
              <p className="mt-6 max-w-xl text-base sm:text-lg text-white/95 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                RAM Construction provides premier commercial construction and infrastructure solutions for modern enterprises and big visions.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#commercial-projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('commercial-projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0d55c8] px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-[rgb(13_85_200/0.4)] transition hover:bg-[#072b58] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <button
                  onClick={() => openQuote({ type: 'Commercial & Corporate EPC' })}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/30 backdrop-blur-md px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-white hover:text-[#072b58] hover:border-white active:scale-[0.98] cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  <span>Request Consultation</span>
                </button>
              </div>

              {/* Trust Metric Strip */}
              <div className="mt-10 pt-6 border-t border-white/20 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">150+</div>
                  <div className="text-xs font-semibold text-white/85 mt-0.5 drop-shadow-sm">Sites Handed Over</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">2.8M+</div>
                  <div className="text-xs font-semibold text-white/85 mt-0.5 drop-shadow-sm">Sq. Ft Developed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#f59e0b] drop-shadow-md">99.8%</div>
                  <div className="text-xs font-semibold text-white/85 mt-0.5 drop-shadow-sm">Safety Compliance</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Floating Glassmorphic Video Card (matching reference screenshot) */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-2xl sm:rounded-3xl bg-black/30 backdrop-blur-2xl border border-white/35 p-3.5 sm:p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/25 transition hover:border-white/50">
                {/* Visual Preview Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer bg-slate-900">
                  <img
                    src={towerPreview}
                    alt="High-Rise Architectural Skyscraper"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                  {/* Centered Pulsing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="group/btn relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-2xl transition-all duration-300 group-hover:scale-110 active:scale-95 cursor-pointer"
                      aria-label="Play commercial project video walkthrough"
                    >
                      <span className="absolute -inset-2 rounded-full bg-white/30 animate-ping" />
                      <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-slate-900 ml-1 text-slate-900" />
                    </button>
                  </div>

                  {/* Top corner live tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-white/90">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>3D Architectural View</span>
                  </div>
                </div>

                {/* Card Content Below Visual */}
                <div className="mt-4 px-1">
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight drop-shadow-sm">
                    85M+ Delivered Value
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/90 leading-relaxed font-normal drop-shadow-sm">
                    Total value delivered across residential and commercial projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Continuous Infinite Marquee Highlight Bar */}
        <div className="relative z-10 mt-12 border-t border-b border-white/15 bg-black/30 backdrop-blur-md py-4 overflow-hidden">
          <div className="pointer-events-none absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-black/40 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-black/40 to-transparent z-10" />

          {/* Marquee track */}
          <div className="animate-marquee-infinite flex items-center">
            {[...commercialHighlights, ...commercialHighlights, ...commercialHighlights].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-8 shrink-0 border-r border-white/15 select-none"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-[#8fe3ff]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap drop-shadow-sm">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoTitle="RAM Commercial & Infrastructure Engineering Showcase"
        videoSubtitle="Comprehensive structural preview: Deep foundation piling, shear-wall cores, and commercial high-rise execution."
      />
    </>
  )
}
