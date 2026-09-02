import type { ServiceItem } from '../types/service.types'

export const servicesData: ServiceItem[] = [
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    shortDesc: 'Building beautiful and functional homes.',
    longDesc: 'From custom luxury villas to modern duplexes and multistory residential towers, we build secure, durable, and architecturally inspiring residences tailored to your lifestyle.',
    iconName: 'home',
    priceRange: 'From ₹1,850 / sq.ft',
    features: ['Custom Villa Architecture', 'Turnkey Construction', 'Seismic-Safe Foundations', 'Premium Tile & Wood Finishes'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    shortDesc: 'Creating spaces for businesses to grow.',
    longDesc: 'State-of-the-art office buildings, shopping malls, retail hubs, and industrial structures built with modern engineering, energy efficiency, and scalable infrastructure.',
    iconName: 'building',
    priceRange: 'From ₹2,400 / sq.ft',
    features: ['Corporate Tech Parks', 'Retail Complexes & Showrooms', 'LEED Green Building Practices', 'Structural Fire Safety'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    shortDesc: 'Designing interiors that reflect your style.',
    longDesc: 'Bespoke interior architecture blending ergonomic functionality with aesthetic elegance. We handle layout optimization, ambient lighting, modular kitchens, and custom woodwork.',
    iconName: 'palette',
    priceRange: 'From ₹850 / sq.ft',
    features: ['Modular Italian Kitchens', 'Acoustic & False Ceilings', 'Custom Veneer Wardrobes', 'Smart Home Integration'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'real-estate-solutions',
    title: 'Real Estate Solutions',
    shortDesc: 'Helping you find the right property.',
    longDesc: 'Comprehensive advisory services connecting homebuyers and investors with prime residential plots, commercial spaces, legal land due-diligence, and project valuation.',
    iconName: 'key',
    priceRange: 'Custom Advisory',
    features: ['Prime Land Acquisition', 'Clear Title Verification', 'Project Feasibility Studies', 'High-ROI Investment Consultation'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
  },
]
