export interface ServiceItem {
  id: string
  title: string
  shortDesc: string
  longDesc: string
  iconName: 'home' | 'building' | 'palette' | 'key'
  priceRange: string
  features: string[]
  image: string
}
