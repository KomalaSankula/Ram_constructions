import { useEffect } from 'react'
import { X, Volume2, ShieldCheck, Building2 } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoTitle?: string
  videoSubtitle?: string
}

export default function VideoModal({
  isOpen,
  onClose,
  videoTitle = 'RAM Horizon Tower - Architectural & Structural Engineering Showcase',
  videoSubtitle = 'Commercial EPC development with seismic grade-5 reinforced concrete and LEED Gold certification.',
}: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl bg-slate-900 shadow-2xl ring-1 ring-white/20">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Architectural Walkthrough & 3D BIM Model
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube-nocookie.com/embed/S_8qM8-t2l4?autoplay=1&mute=0&controls=1&rel=0"
            title="RAM Construction Video Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Subtle watermarked brand info */}
          <div className="pointer-events-none absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 text-xs text-white/90 backdrop-blur-md">
            <Building2 className="h-3.5 w-3.5 text-[#39a1d6]" />
            <span>RAM Construction Commercial Division</span>
          </div>
        </div>

        {/* Video Information footer */}
        <div className="p-6 bg-slate-900 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white leading-snug">
                {videoTitle}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                {videoSubtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Verified Spec</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                <Volume2 className="h-3.5 w-3.5 text-[#39a1d6]" />
                <span>HD 4K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
