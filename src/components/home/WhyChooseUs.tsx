import { ShieldCheck, Clock, Layers, ThumbsUp, CheckCircle } from 'lucide-react'
import { whyChooseUsData } from '../../data/contact'
import civilFoundation from '../../assets/images/civil-engineering-foundation.jpg'

export default function WhyChooseUs() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="h-6 w-6 text-[#1ea6dc]" />
      case 1:
        return <Clock className="h-6 w-6 text-[#1ea6dc]" />
      case 2:
        return <Layers className="h-6 w-6 text-[#1ea6dc]" />
      case 3:
        return <ThumbsUp className="h-6 w-6 text-[#1ea6dc]" />
      default:
        return <CheckCircle className="h-6 w-6 text-[#1ea6dc]" />
    }
  }

  return (
    <section id="why-us" className="site-section bg-white overflow-hidden">
      {/* Civil Foundation Architectural Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none opacity-25 md:opacity-30 mix-blend-multiply">
        <img
          src={civilFoundation}
          alt=""
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1ea6dc]">
              {whyChooseUsData.subtitle}
            </span>

            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#072b58] leading-tight">
              {whyChooseUsData.title}
            </h2>

            <div className="mt-7 space-y-3.5 sm:space-y-4">
              {whyChooseUsData.points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50/90 p-4 shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:bg-white hover:shadow-md hover:ring-[#1ea6dc]/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f9ff]">
                    {getIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#072b58]">{point.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-snug">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-[32px] shadow-2xl ring-1 ring-slate-200">
              <img
                src={whyChooseUsData.image}
                alt="RAM Construction Site Engineer"
                className="h-[400px] sm:h-[480px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 gap-2.5 sm:gap-3.5 sm:absolute sm:mt-0 sm:top-1/2 sm:-translate-y-1/2 sm:-right-4 lg:-right-6 z-10">
              {whyChooseUsData.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 sm:px-5 sm:py-3.5 shadow-lg backdrop-blur-md ring-1 ring-slate-200/80 transition-all duration-300 hover:scale-105 hover:bg-white"
                >
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-[#1ea6dc] text-white font-bold text-sm">
                    {i === 0 ? '🏆' : i === 1 ? '⏱️' : '👷'}
                  </div>
                  <div>
                    <div className="text-base sm:text-xl font-bold text-[#072b58] leading-none">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] sm:text-[11px] font-semibold text-slate-600 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
