import { useState } from 'react'
import PageBanner from '../../components/common/PageBanner'
import { projectsData } from '../../data/projects'
import type { ProjectCategory } from '../../types/project.types'
import { useModal } from '../../hooks/useModal'
import { MapPin, Maximize, Eye } from 'lucide-react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')
  const { openProjectDetails } = useModal()

  const categories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Interior']

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter)

  return (
    <div>
      <PageBanner
        title="Our Architectural Portfolio"
        subtitle="Explore our completed residential luxury villas, commercial tech parks, and bespoke interior spaces across Hyderabad."
        breadcrumbLabel="Projects"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Pills matching Panel 13 */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-6 py-2 text-sm font-bold transition ${
                activeFilter === cat
                  ? 'bg-[#1a6db2] text-white shadow-md shadow-[#1a6db2]/25 scale-105'
                  : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Projects Grid matching Panel 13 */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectDetails(project)}
              className="group cursor-pointer overflow-hidden rounded-[26px] bg-white shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#123d66] backdrop-blur-sm shadow-sm">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#1a6db2] backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 shadow-md">
                  <Eye className="h-4 w-4" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                  <MapPin className="h-3.5 w-3.5 text-[#1a6db2]" />
                  <span>{project.location.split(',')[0]}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-3 w-3" /> {project.area}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-bold text-[#123d66] group-hover:text-[#1a6db2] transition">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Status: Completed</span>
                <span className="text-xs font-bold text-[#1a6db2] group-hover:underline">
                  View Case Study →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
