import { useState } from 'react'
import PageBanner from '../../components/common/PageBanner'
import { galleryPhotos } from '../../data/gallery'
import type { GalleryCategory } from '../../types/gallery.types'
import { useModal } from '../../hooks/useModal'
import { Maximize2 } from 'lucide-react'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All')
  const { openLightbox } = useModal()

  const categories: GalleryCategory[] = ['All', 'Construction', 'Interiors', 'Events']

  const filteredPhotos =
    activeFilter === 'All'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeFilter)

  return (
    <div>
      <PageBanner
        title="Moments of Our Work"
        subtitle="A visual retrospective of our structural milestones, groundbreaking ceremonies, and luxury interior finishing."
        breadcrumbLabel="Gallery"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(filteredPhotos, index)}
              className="group relative cursor-pointer overflow-hidden rounded-[24px] bg-slate-200 shadow-card ring-1 ring-slate-200/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevated"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2c4a]/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex justify-end">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1a6db2] shadow-md backdrop-blur-sm">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8fe3ff]">
                      {photo.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">{photo.title}</h3>
                    <p className="text-xs text-slate-300 mt-1">{photo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
