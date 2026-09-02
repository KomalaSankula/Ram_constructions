export type GalleryCategory = 'All' | 'Construction' | 'Interiors' | 'Events'

export interface GalleryPhoto {
  id: string
  title: string
  category: 'Construction' | 'Interiors' | 'Events'
  imageUrl: string
  description: string
}

export interface LightboxImage {
  imageUrl: string
  title: string
  category?: string
  description?: string
}
