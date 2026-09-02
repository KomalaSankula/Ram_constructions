export type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Interior'

export interface ProjectItem {
  id: string
  title: string
  category: 'Residential' | 'Commercial' | 'Interior'
  location: string
  area: string
  year: string
  type: string
  client: string
  duration: string
  description: string
  features: string[]
  mainImage: string
  galleryImages: string[]
}
