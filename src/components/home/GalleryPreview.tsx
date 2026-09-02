import { useState } from 'react'
import { Maximize2, ArrowRight } from 'lucide-react'
import { galleryPhotos } from '../../data/gallery'
import type { GalleryCategory } from '../../types/gallery.types'
import { useModal } from '../../hooks/useModal'

export default function GalleryPreview() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All')
  const { openLightbox } = useModal()

  const filterTabs: GalleryCategory[] = ['All', 'Construction', 'Interiors', 'Events']

  const filteredPhotos =
    activeFilter === 'All'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeFilter)

  return (
    <section id="gallery" className="site-section bg-white overflow-hidden">
      <div className="blueprint-dots absolute top-4 left-8 h-48 w-48 pointer-events-none opacity-40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#0d55c8]">
            Our Gallery
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072b58]">
            Moments of Our Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A visual retrospective of our structural milestones, groundbreaking ceremonies, and bespoke finishes.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`rounded-full px-6 py-2 text-sm font-bold transition-all duration-200 ${
                activeFilter === tab
                  ? 'bg-[#0d55c8] text-white shadow-md shadow-[#0d55c8]/25 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(filteredPhotos, index)}
              className="group relative cursor-pointer overflow-hidden rounded-[24px] bg-slate-200 shadow-card ring-1 ring-slate-200/80 transition-all duration-500 hover:-translate-1.5 hover:shadow-elevated hover:ring-[#0d55c8]/30"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#072b58]/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex justify-end">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0d55c8] shadow-md backdrop-blur-sm">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#39a1d6]">
                      {photo.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">{photo.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0d55c8] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#0d55c8]/25 transition hover:bg-[#072b58] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Discuss Your Project With Us</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
