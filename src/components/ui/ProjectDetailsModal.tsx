import { useState } from 'react'
import { X, MapPin, Maximize, Calendar, Home, CheckCircle2, ArrowRight } from 'lucide-react'
import type { ProjectItem } from '../../types/project.types'

interface ProjectDetailsModalProps {
  project: ProjectItem | null
  isOpen: boolean
  onClose: () => void
  onOpenQuote: (projectName: string) => void
}

export default function ProjectDetailsModal({ project, isOpen, onClose, onOpenQuote }: ProjectDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'gallery'>('overview')
  const [selectedImage, setSelectedImage] = useState<string>('')

  if (!isOpen || !project) return null

  const displayImage = selectedImage || project.mainImage

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 md:p-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <span className="rounded-full bg-[#f0f9ff] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1ea6dc]">
              {project.category}
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#072b58] md:text-3xl">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl bg-slate-100">
          <div className="relative h-72 w-full md:h-96">
            <img
              src={displayImage}
              alt={project.title}
              className="h-full w-full object-cover transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#072b58]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-white">
              <MapPin className="h-4 w-4 text-[#8fe3ff]" />
              <span>{project.location}</span>
            </div>
          </div>

          <div className="flex gap-2 p-3 bg-slate-50 border-t border-slate-200/80 overflow-x-auto">
            <button
              onClick={() => setSelectedImage(project.mainImage)}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                displayImage === project.mainImage ? 'border-[#1ea6dc] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={project.mainImage} alt="Main" className="h-full w-full object-cover" />
            </button>
            {project.galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  displayImage === img ? 'border-[#1ea6dc] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Gallery ${i}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="flex gap-6 border-b border-slate-200 pb-2 text-sm font-semibold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2 transition border-b-2 ${
                  activeTab === 'overview'
                    ? 'border-[#1ea6dc] text-[#1ea6dc]'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-2 transition border-b-2 ${
                  activeTab === 'features'
                    ? 'border-[#1ea6dc] text-[#1ea6dc]'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                Key Features
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`pb-2 transition border-b-2 ${
                  activeTab === 'gallery'
                    ? 'border-[#1ea6dc] text-[#1ea6dc]'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                Project Gallery
              </button>
            </div>

            <div className="mt-4">
              {activeTab === 'overview' && (
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>{project.description}</p>
                  <p>
                    Executed under strict ISO standards with turnkey responsibility from soil testing and seismic pile foundation to ultra-refined interior finishing.
                  </p>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200/70"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#1ea6dc] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="grid grid-cols-2 gap-3">
                  {[project.mainImage, ...project.galleryImages].map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className="group relative h-32 cursor-pointer overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200"
                    >
                      <img
                        src={img}
                        alt="Project viewpoint"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl bg-[#f7f9fc] p-6 ring-1 ring-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1ea6dc]">
              Project Specifications
            </h4>

            <div className="mt-4 divide-y divide-slate-200/80 text-sm">
              <div className="flex items-center justify-between py-2.5">
                <span className="flex items-center gap-2 text-slate-500">
                  <MapPin className="h-4 w-4 text-[#072b58]" /> Location
                </span>
                <span className="font-semibold text-slate-800">{project.location.split(',')[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="flex items-center gap-2 text-slate-500">
                  <Maximize className="h-4 w-4 text-[#072b58]" /> Built Area
                </span>
                <span className="font-semibold text-slate-800">{project.area}</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="flex items-center gap-2 text-slate-500">
                  <Calendar className="h-4 w-4 text-[#072b58]" /> Year Completed
                </span>
                <span className="font-semibold text-slate-800">{project.year}</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="flex items-center gap-2 text-slate-500">
                  <Home className="h-4 w-4 text-[#072b58]" /> Classification
                </span>
                <span className="font-semibold text-slate-800">{project.type}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose()
                onOpenQuote(project.title)
              }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#1ea6dc] py-3 text-sm font-bold text-white shadow-md shadow-[#1ea6dc]/20 transition hover:bg-[#072b58]"
            >
              <span>Inquire About Similar Project</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
