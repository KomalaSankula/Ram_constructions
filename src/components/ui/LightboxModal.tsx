import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { LightboxImage } from '../../types/gallery.types'

interface LightboxModalProps {
  images: LightboxImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length)
      }
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, images.length, onClose, onNavigate])

  if (!isOpen || images.length === 0) return null

  const currentImage = images[currentIndex] || images[0]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md">
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 md:p-6 text-white bg-gradient-to-b from-black/70 to-transparent">
        <div>
          {currentImage.category && (
            <span className="text-xs font-bold uppercase tracking-wider text-[#39a1d6]">
              {currentImage.category}
            </span>
          )}
          <h4 className="text-lg font-bold text-white drop-shadow-sm">{currentImage.title}</h4>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-slate-300">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full items-center justify-center p-4 md:p-16">
        <img
          src={currentImage.imageUrl}
          alt={currentImage.title}
          className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl transition-all duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/70 md:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/70 md:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {currentImage.description && (
        <div className="absolute bottom-0 inset-x-0 z-20 p-4 text-center text-xs text-slate-300 bg-gradient-to-t from-black/80 to-transparent md:text-sm">
          {currentImage.description}
        </div>
      )}
    </div>
  )
}
