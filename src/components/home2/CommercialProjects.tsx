import { useState } from 'react'
import { Building2, ArrowUpRight, MapPin, Layers } from 'lucide-react'
import { useModal } from '../../hooks/useModal'

export default function CommercialProjects() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const { openQuote } = useModal()

  const categories = [
    { id: 'all', label: 'All Developments' },
    { id: 'high-rise', label: 'High-Rise & Towers' },
    { id: 'corporate', label: 'Corporate Tech Parks' },
    { id: 'industrial', label: 'Logistics & Warehouses' },
  ]

  const projects = [
    {
      id: 'apex-horizon-tower',
      category: 'high-rise',
      title: 'Apex Horizon Corporate Tower',
      location: 'HITEC City, Hyderabad',
      area: '480,000 Sq. Ft',
      floors: 'G + 28 Floors',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80',
      description:
        'Iconic glass facade skyscraper engineered with reinforced seismic cores, LEED Platinum specifications, and smart automated building management systems.',
      tags: ['Commercial Tower', 'LEED Platinum', 'Glass Curtain Facade'],
    },
    {
      id: 'cyber-vault-tech-park',
      category: 'corporate',
      title: 'CyberVault IT Innovation Hub',
      location: 'Financial District, Gachibowli',
      area: '620,000 Sq. Ft',
      floors: 'G + 16 Floors',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      description:
        'Enterprise technology hub designed with post-tensioned wide-span floors, centralized chilled water HVAC, and 100% DG power backup infrastructure.',
      tags: ['IT Campus', 'Post-Tensioned Slabs', 'Grade-A Offices'],
    },
    {
      id: 'vertex-logistics-hub',
      category: 'industrial',
      title: 'Vertex Mega Logistics & PEB Park',
      location: 'ORR Industrial Corridor, Shamshabad',
      area: '350,000 Sq. Ft',
      floors: 'High-Bay PEB Steel',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
      description:
        'Pre-engineered steel structural distribution center with FM2 grade high-tolerance industrial laser-screed flooring and 24-bay automated dock levelers.',
      tags: ['PEB Steel', 'Industrial Logistics', 'Laser Screed'],
    },
    {
      id: 'solaris-biomed-complex',
      category: 'corporate',
      title: 'Solaris Bio-Innovation Centre',
      location: 'Genome Valley, Telangana',
      area: '290,000 Sq. Ft',
      floors: 'G + 8 Floors',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      description:
        'Specialized biomedical research and pharmaceutical manufacturing laboratory built with anti-vibration structural isolated foundations and cleanroom HVAC.',
      tags: ['Cleanroom Facility', 'Seismic Isolated', 'Healthcare'],
    },
    {
      id: 'regent-sky-residences',
      category: 'high-rise',
      title: 'The Regent Twin Skyline Towers',
      location: 'Jubilee Hills Extension, Hyderabad',
      area: '540,000 Sq. Ft',
      floors: 'Twin G + 32 Floors',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
      description:
        'Ultra-luxury high-rise residential towers with panoramic skyline views, rooftop helipad, infinity cantilevered pool, and private vehicle elevators.',
      tags: ['Luxury High-Rise', 'Cantilever Pools', 'Twin Towers'],
    },
    {
      id: 'apex-fulfillment-center',
      category: 'industrial',
      title: 'OmniChain Automated Cold Storage & PEB',
      location: 'Medchal Industrial Zone, Hyderabad',
      area: '210,000 Sq. Ft',
      floors: 'Cold Storage High-Bay',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
      description:
        'Multi-temperature refrigerated warehouse built with PIR insulated panels, sub-floor heating prevention systems, and high-density racking capability.',
      tags: ['Cold Chain', 'Industrial PEB', 'Thermal Envelope'],
    },
  ]

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="commercial-projects" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#edf5fd] px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#0d55c8] mb-3">
              <Building2 className="h-3.5 w-3.5" />
              <span>Commercial Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072b58] tracking-tight">
              Landmark Developments <span className="text-[#0d55c8]">Engineered for Decades</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl">
              Explore our landmark commercial developments across Telangana and Southern India—delivered with zero time overruns.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-full w-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0d55c8] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#072b58] hover:bg-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-3xl bg-[#f8fafc] border border-slate-200/90 overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/20">
                      <MapPin className="h-3 w-3 text-[#39a1d6]" />
                      <span>{proj.location}</span>
                    </span>
                    <span className="rounded-full bg-[#0d55c8] px-2.5 py-0.5 text-[10px] font-black uppercase text-white shadow-sm">
                      {proj.year}
                    </span>
                  </div>

                  {/* Bottom Stats Overlay on Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-bold text-white">
                    <span className="flex items-center gap-1">
                      <Layers className="h-3.5 w-3.5 text-[#39a1d6]" />
                      <span>{proj.floors}</span>
                    </span>
                    <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md text-white font-mono">
                      {proj.area}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Tag strip */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-black text-[#072b58] group-hover:text-[#0d55c8] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => openQuote({ type: proj.title })}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 py-3 text-xs sm:text-sm font-bold text-[#072b58] group-hover:bg-[#0d55c8] group-hover:text-white group-hover:border-[#0d55c8] transition-all cursor-pointer shadow-sm"
                >
                  <span>Request Project Technical Specs</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
