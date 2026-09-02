import { CheckCircle2, HardHat, Award, ArrowRight } from 'lucide-react'
import { useModal } from '../../hooks/useModal'
import foundationImg from '../../assets/images/civil-engineering-foundation.jpg'

export default function EngineeringStandards() {
  const { openQuote } = useModal()

  const standards = [
    {
      title: 'BIM 4D Modeling & Clash Detection',
      desc: 'Full digital twin pre-construction modeling to eliminate MEP collisions and schedule delays before ground is broken.',
    },
    {
      title: 'Seismic Zone Compliant Shear Cores',
      desc: 'High-ductility reinforced concrete cores engineered to withstand severe seismic and wind lateral load forces.',
    },
    {
      title: 'Robotic Total Stations & Laser Screeding',
      desc: 'Millimeter-precise surveying and laser screeding ensuring dead-level industrial floor flatness exceeding FM2 specs.',
    },
    {
      title: 'In-House Quality Testing Laboratory',
      desc: 'Continuous 7-day and 28-day cube crushing compressive strength tests, ultrasonic rebar testing, and soil compaction logs.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#072b58] text-white relative overflow-hidden">
      {/* Background architectural grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#8fe3ff] mb-4">
              <HardHat className="h-3.5 w-3.5 text-[#39a1d6]" />
              <span>Technical Edge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Engineering Rigor That Outlasts Generations
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              At RAM Construction, commercial projects are managed with aerospace precision. Our certified civil engineers oversee every phase from geotechnical pile load testing to automated curtain wall installation.
            </p>

            <div className="mt-8 space-y-4">
              {standards.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0d55c8] text-white mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openQuote({ type: 'Structural Consultation' })}
                className="inline-flex items-center gap-2 rounded-full bg-[#0d55c8] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[rgb(13_85_200/0.4)] hover:bg-[#145290] transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Consult Our Chief Structural Engineer</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual & Badges */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <img
                src={foundationImg}
                alt="RAM Construction Civil Engineering Foundation Rigor"
                className="h-[460px] sm:h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072b58]/90 via-transparent to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950 font-black">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">
                      100% Structural Defect Liability Guarantee
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Backed by comprehensive structural stability certification.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
