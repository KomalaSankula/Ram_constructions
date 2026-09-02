import PageBanner from '../../components/common/PageBanner'
import ProcessSection from '../../components/home/ProcessSection'
import { servicesData } from '../../data/services'
import { Home, Building2, Palette, Key, CheckCircle2, Calculator } from 'lucide-react'
import { useModal } from '../../hooks/useModal'
import constructionSiteBlueprint from '../../assets/images/construction-site-blueprint.jpg'

export default function Services() {
  const { openQuote, openCalculator } = useModal()

  return (
    <div>
      <PageBanner
        title="Comprehensive Construction Solutions"
        subtitle="End-to-end architectural engineering, custom turnkey construction, and interior styling tailored to your budget."
        breadcrumbLabel="Services"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid matching Panel 13 */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-[28px] bg-white p-7 shadow-card ring-1 ring-slate-200/80 flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edfaff] text-[#1a6db2]">
                  {service.iconName === 'home' && <Home className="h-7 w-7" />}
                  {service.iconName === 'building' && <Building2 className="h-7 w-7" />}
                  {service.iconName === 'palette' && <Palette className="h-7 w-7" />}
                  {service.iconName === 'key' && <Key className="h-7 w-7" />}
                </div>

                <h3 className="text-xl font-black text-[#123d66]">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.shortDesc}</p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Deliverables
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#1a6db2] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1a6db2]">{service.priceRange}</span>
                <button
                  onClick={() => openQuote({ type: service.title })}
                  className="rounded-full bg-[#1a6db2] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#145290] transition"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Calculator Callout */}
        <div className="mt-16 relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#123d66] to-[#1a6db2] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Construction Blueprint Layer */}
          <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none opacity-15 mix-blend-overlay">
            <img
              src={constructionSiteBlueprint}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8fe3ff]">
              Interactive Estimation Tool
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black leading-tight">
              Calculate Your Project Budget in Seconds
            </h2>
            <p className="mt-2 text-sm text-[#edfaff] max-w-xl">
              Get an instant, itemized estimate covering foundation, civil structure, electrical & plumbing MEP, and finishes for your exact square footage.
            </p>
          </div>
          <button
            onClick={openCalculator}
            className="relative z-10 flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#123d66] shadow-lg hover:bg-[#edfaff] transition hover:scale-105 active:scale-95"
          >
            <Calculator className="h-4 w-4 text-[#1a6db2]" />
            <span>Launch Cost Estimator</span>
          </button>
        </div>
      </div>

      <ProcessSection />
    </div>
  )
}
