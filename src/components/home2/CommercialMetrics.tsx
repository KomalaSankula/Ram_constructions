import { TrendingUp, Building, Award, Users2, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function CommercialMetrics() {
  const stats = [
    {
      value: '$85M+',
      label: 'Delivered Value',
      subtext: 'Combined commercial asset value successfully handed over to developers and enterprises.',
      icon: TrendingUp,
      accent: 'text-[#0d55c8]',
      highlight: true,
    },
    {
      value: '2.8M+',
      label: 'Square Feet Built',
      subtext: 'Precision-engineered high-rises, IT hubs, and pre-engineered steel warehouses.',
      icon: Building,
      accent: 'text-[#072b58]',
    },
    {
      value: '150+',
      label: 'Landmark Projects',
      subtext: 'Across Hyderabad, Telangana, and regional industrial corridors.',
      icon: Award,
      accent: 'text-[#072b58]',
    },
    {
      value: '99.8%',
      label: 'Safety Compliance',
      subtext: 'Zero lost-time safety incidents across 3.4M cumulative man-hours.',
      icon: ShieldCheck,
      accent: 'text-[#0d55c8]',
    },
  ]

  return (
    <section className="relative py-20 bg-white border-y border-slate-200/80 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#edf5fd] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#edf5fd] blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#edf5fd] px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#0d55c8] mb-3">
            <Users2 className="h-3.5 w-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072b58] tracking-tight">
            Numbers That Define Our <span className="text-[#0d55c8]">Industrial Impact</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Our disciplined execution model, institutional capital accountability, and structural standards deliver unmatched real-world performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  stat.highlight
                    ? 'bg-gradient-to-b from-[#072b58] to-[#0a3a75] text-white shadow-xl ring-2 ring-[#0d55c8]/40'
                    : 'bg-[#f8fafc] text-slate-800 ring-1 ring-slate-200/80 hover:shadow-card hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      stat.highlight
                        ? 'bg-white/10 text-white'
                        : 'bg-white text-[#0d55c8] shadow-sm'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  {stat.highlight && (
                    <span className="rounded-full bg-[#f59e0b] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-slate-950">
                      Key Metric
                    </span>
                  )}
                </div>

                <div className={`text-4xl sm:text-5xl font-black tracking-tight ${stat.highlight ? 'text-white' : stat.accent}`}>
                  {stat.value}
                </div>
                <div className={`mt-2 text-base font-bold ${stat.highlight ? 'text-slate-100' : 'text-[#072b58]'}`}>
                  {stat.label}
                </div>
                <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${stat.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                  {stat.subtext}
                </p>
              </div>
            )
          })}
        </div>

        {/* Assurance Banner */}
        <div className="mt-14 rounded-2xl bg-[#edf5fd] border border-[#0d55c8]/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0d55c8] text-white shadow-sm">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#072b58]">
                ISO 9001:2015 & OHSAS 18001 Certified Construction
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Every project is audited by independent third-party structural laboratories before handover.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#072b58] shadow-sm">
              Zero Failure Record
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
