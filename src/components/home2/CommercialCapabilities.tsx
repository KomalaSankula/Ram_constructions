import { Building2, Landmark, Factory, Hospital, ArrowRight, ShieldCheck, Cpu } from 'lucide-react'
import { useModal } from '../../hooks/useModal'

export default function CommercialCapabilities() {
  const { openQuote } = useModal()

  const capabilities = [
    {
      id: 'high-rise',
      icon: Building2,
      title: 'High-Rise & Mixed-Use Towers',
      tagline: 'Vertical Engineering Excellence',
      description:
        'End-to-end design & construction of multi-story corporate towers, premium penthouses, and mixed-use commercial developments built to international seismic standards.',
      features: [
        'Seismic Zone compliant RCC shear walls',
        'Energy-efficient glass curtain wall facades',
        'Smart BMS & high-speed elevator shafts',
      ],
      badge: 'Tier-1 Engineering',
    },
    {
      id: 'corporate-it',
      icon: Landmark,
      title: 'Corporate Offices & IT Campuses',
      tagline: 'Modern Enterprise Spaces',
      description:
        'Grade-A workplace developments featuring column-free floor plates, integrated MEP services, and flexible modern floor layouts for global technology enterprises.',
      features: [
        'Post-tensioned expansive floor spans',
        'Centralized HVAC & thermal insulation',
        'LEED Gold sustainability certifications',
      ],
      badge: 'Grade-A Standards',
    },
    {
      id: 'industrial-peb',
      icon: Factory,
      title: 'Industrial & Logistics Parks',
      tagline: 'Heavy-Duty Infrastructure',
      description:
        'Pre-Engineered Building (PEB) structural steel warehousing, manufacturing facilities, and automated distribution hubs engineered for maximum operational efficiency.',
      features: [
        'Heavy-duty laser screed industrial flooring',
        'High-span steel truss engineering',
        'Dock leveler & automated loading integration',
      ],
      badge: 'Fast-Track Execution',
    },
    {
      id: 'institutional',
      icon: Hospital,
      title: 'Institutional & Healthcare Facilities',
      tagline: 'Mission-Critical Construction',
      description:
        'Specialized construction of hospitals, university campuses, and biomedical centers with zero-vibration foundations and medical-grade utility infrastructure.',
      features: [
        'Cleanroom & sterile HVAC air systems',
        'Redundant power & emergency utility routing',
        'Fire safety & life safety automation',
      ],
      badge: 'Certified Safety',
    },
  ]

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#edf5fd] px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#0d55c8] mb-3">
              <Cpu className="h-3.5 w-3.5" />
              <span>Commercial & Industrial Sectors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072b58] tracking-tight leading-tight">
              Enterprise-Scale <span className="text-[#0d55c8]">Construction Capabilities</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From high-density urban office towers to heavy industrial hubs, we engineer resilient infrastructure that scales your business vision.
            </p>
          </div>

          <button
            onClick={() => openQuote({ type: 'Enterprise Commercial RFP' })}
            className="inline-flex items-center gap-2 rounded-full bg-[#072b58] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#0d55c8] transition hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
          >
            <span>Submit an RFP</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-white p-8 sm:p-10 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf5fd] text-[#0d55c8] group-hover:bg-[#0d55c8] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#072b58] group-hover:bg-[#edf5fd] group-hover:text-[#0d55c8] transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0d55c8]">
                    {item.tagline}
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-[#072b58] group-hover:text-[#0d55c8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                        <ShieldCheck className="h-4 w-4 text-[#0d55c8] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openQuote({ type: item.title })}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0d55c8] hover:text-[#072b58] transition cursor-pointer"
                  >
                    <span>Inquire for {item.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-xs font-semibold text-slate-400">EPC Turnkey</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
