import { Home, Building2, Palette, Key, ArrowRight, Calculator } from 'lucide-react'
import { servicesData } from '../../data/services'
import { useModal } from '../../hooks/useModal'
import constructionSiteBlueprint from '../../assets/images/construction-site-blueprint.jpg'

export default function ServicesPreview() {
  const { openCalculator } = useModal()

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="h-7 w-7 text-[#0d55c8] transition duration-300 group-hover:text-white" />
      case 'building':
        return <Building2 className="h-7 w-7 text-[#0d55c8] transition duration-300 group-hover:text-white" />
      case 'palette':
        return <Palette className="h-7 w-7 text-[#0d55c8] transition duration-300 group-hover:text-white" />
      case 'key':
        return <Key className="h-7 w-7 text-[#0d55c8] transition duration-300 group-hover:text-white" />
      default:
        return <Home className="h-7 w-7 text-[#0d55c8] transition duration-300 group-hover:text-white" />
    }
  }

  return (
    <section id="services" className="site-section bg-white overflow-hidden">
      {/* Structural Engineering Blueprint Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none opacity-20 md:opacity-25 mix-blend-multiply">
        <img
          src={constructionSiteBlueprint}
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#0d55c8]">
            OUR SERVICES
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072b58]">
            What We Do
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Comprehensive construction, architectural engineering, and real estate solutions tailored to your vision.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => openCalculator()}
              className="group relative flex flex-col justify-between rounded-[28px] bg-white p-7 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated hover:ring-[rgb(26_109_178/0.5)] cursor-pointer"
            >
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf5fd] ring-1 ring-[#0d55c8]/15 transition duration-300 group-hover:bg-[#0d55c8] group-hover:shadow-md group-hover:scale-105">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-black text-[#072b58] leading-snug">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0d55c8]">{service.priceRange}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf5fd] text-[#072b58] transition duration-300 group-hover:bg-[#0d55c8] group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="rounded-full bg-[#0d55c8] px-8 py-3 text-sm font-bold text-white shadow-md shadow-[#0d55c8]/20 transition hover:bg-[#072b58] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Explore Projects
          </a>

          <button
            onClick={openCalculator}
            className="flex items-center gap-2 rounded-full border-2 border-[#072b58] bg-white px-6 py-2.5 text-sm font-bold text-[#072b58] transition hover:bg-[#edf5fd] hover:scale-[1.02]"
          >
            <Calculator className="h-4 w-4 text-[#0d55c8]" />
            <span>Interactive Cost Calculator</span>
          </button>
        </div>
      </div>
    </section>
  )
}
