import type { NavItem } from '../types/navigation.types'

export const navItems: NavItem[] = [
  { name: 'Home', href: '#home', path: '/' },
  { name: 'About', href: '#about', path: '/about' },
  { name: 'Services', href: '#services', path: '/services' },
  { name: 'Projects', href: '#projects', path: '/projects' },
  { name: 'Gallery', href: '#gallery', path: '/gallery' },
  { name: 'Blog', href: '#blog', path: '/blog' },
  { name: 'Contact', href: '#contact', path: '/contact' },
]

export const homeVariations = [
  {
    id: 'home-01',
    name: 'Home 01',
    path: '/',
    label: 'Residential Villa',
  },
  {
    id: 'home-02',
    name: 'Home 02',
    path: '/home-2',
    label: 'Commercial Skyline',
  },
  {
    id: 'home-03',
    name: 'Home 03',
    path: '/home-2#commercial-projects',
    label: 'Landmark Portfolio',
  },
]
