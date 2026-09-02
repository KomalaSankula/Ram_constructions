import { createContext, useState, type ReactNode } from 'react'
import type { ProjectItem } from '../types/project.types'
import type { BlogPost } from '../types/blog.types'
import type { LightboxImage, GalleryPhoto } from '../types/gallery.types'
import CostCalculatorModal from '../components/ui/CostCalculatorModal'
import ProjectDetailsModal from '../components/ui/ProjectDetailsModal'
import BlogDetailsModal from '../components/ui/BlogDetailsModal'
import QuoteModal from '../components/ui/QuoteModal'
import LightboxModal from '../components/ui/LightboxModal'

interface QuoteInitialData {
  type?: string
  area?: number
  estimate?: string
}

interface ModalContextType {
  openQuote: (data?: QuoteInitialData) => void
  closeQuote: () => void
  openCalculator: () => void
  closeCalculator: () => void
  openProjectDetails: (project: ProjectItem) => void
  closeProjectDetails: () => void
  openBlogDetails: (post: BlogPost) => void
  closeBlogDetails: () => void
  openLightbox: (photos: (GalleryPhoto | LightboxImage)[], initialIndex?: number) => void
  closeLightbox: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [quoteData, setQuoteData] = useState<QuoteInitialData>({})

  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false)

  const [lightboxImages, setLightboxImages] = useState<LightboxImage[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const openQuote = (data?: QuoteInitialData) => {
    setQuoteData(data || {})
    setIsQuoteOpen(true)
  }

  const closeQuote = () => {
    setIsQuoteOpen(false)
    setQuoteData({})
  }

  const openCalculator = () => setIsCalculatorOpen(true)
  const closeCalculator = () => setIsCalculatorOpen(false)

  const openProjectDetails = (project: ProjectItem) => {
    setSelectedProject(project)
    setIsProjectModalOpen(true)
  }

  const closeProjectDetails = () => {
    setIsProjectModalOpen(false)
    setSelectedProject(null)
  }

  const openBlogDetails = (post: BlogPost) => {
    setSelectedPost(post)
    setIsBlogModalOpen(true)
  }

  const closeBlogDetails = () => {
    setIsBlogModalOpen(false)
    setSelectedPost(null)
  }

  const openLightbox = (photos: (GalleryPhoto | LightboxImage)[], initialIndex = 0) => {
    const formatted: LightboxImage[] = photos.map((p) => ({
      imageUrl: p.imageUrl,
      title: p.title,
      category: p.category,
      description: p.description,
    }))
    setLightboxImages(formatted)
    setLightboxIndex(initialIndex)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setLightboxImages([])
  }

  return (
    <ModalContext.Provider
      value={{
        openQuote,
        closeQuote,
        openCalculator,
        closeCalculator,
        openProjectDetails,
        closeProjectDetails,
        openBlogDetails,
        closeBlogDetails,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}

      {/* Global Modals rendered at root */}
      <CostCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={closeCalculator}
        onOpenQuote={(data) => {
          closeCalculator()
          openQuote(data)
        }}
      />

      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={closeProjectDetails}
        onOpenQuote={(projectName) => {
          closeProjectDetails()
          openQuote({ type: projectName })
        }}
      />

      <BlogDetailsModal
        post={selectedPost}
        isOpen={isBlogModalOpen}
        onClose={closeBlogDetails}
      />

      <QuoteModal
        key={isQuoteOpen ? `${quoteData.type || 'quote'}-${quoteData.area || 0}` : 'closed'}
        isOpen={isQuoteOpen}
        onClose={closeQuote}
        initialData={quoteData}
      />

      <LightboxModal
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </ModalContext.Provider>
  )
}

export { ModalContext }
