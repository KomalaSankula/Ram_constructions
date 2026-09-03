import { useState } from 'react'
import { MapPin, Maximize, ArrowRight, Eye } from 'lucide-react'
import { projectsData } from '../../data/projects'
import type { ProjectCategory } from '../../types/project.types'
import { useModal } from '../../hooks/useModal'
import ConstructionBgPattern from '../common/ConstructionBgPattern'

export default function ProjectsPreview() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const { openProjectDetails } = useModal()

  const categories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Interior']

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="site-section-soft overflow-hidden">
      <ConstructionBgPattern variant="skyline" opacity="opacity-[0.045]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1ea6dc]">
            Our Portfolio
          </span>
          <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#072b58]">
            Our Prestigious Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Explore our benchmark residential villas, commercial hubs, and bespoke living spaces built across Telangana.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1ea6dc] text-white shadow-md shadow-[#1ea6dc]/30 scale-105'
                  : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-[#f0f9ff] hover:text-[#1ea6dc]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectDetails(project)}
              className="group relative cursor-pointer overflow-hidden rounded-[26px] bg-slate-50 shadow-card ring-1 ring-slate-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated hover:ring-[#1ea6dc]/40"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-200">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#072b58]/85 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#072b58] backdrop-blur-md shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#1ea6dc] backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 shadow-md">
                  <Eye className="h-4 w-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#38bdf8]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{project.location.split(',')[0]}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Maximize className="h-3 w-3" /> {project.area}
                    </span>
                  </div>

                  <h3 className="mt-1 text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#38bdf8] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#1ea6dc] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#1ea6dc]/25 transition hover:bg-[#072b58] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>View Site Gallery</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
