import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import BrandLogo from '../ui/BrandLogo'
import { navItems, homeVariations } from '../../data/navigation'
import { Menu, X, Calculator, ArrowRight, ChevronDown } from 'lucide-react'
import { useModal } from '../../hooks/useModal'
import { useScrollSpy } from '../../hooks/useScrollSpy'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const location = useLocation()
  const navigate = useNavigate()
  const { openQuote, openCalculator } = useModal()

  const isHome2 = location.pathname === '/home-2'
  const isTransparent = isHome2 && !isScrolled
  const isAnyHome = location.pathname === '/' || location.pathname === '/home-2'

  const sectionIds = ['home', 'about', 'services', 'projects', 'commercial-projects', 'gallery', 'blog', 'contact']
  const activeSection = useScrollSpy(sectionIds, 160)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setHomeDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(isHome2 ? `/home-2${href}` : `/${href}`)
    }
  }

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    scrollToSection(href)
  }

  const handleMobileNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    setTimeout(() => {
      scrollToSection(href)
    }, 120)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5 text-white shadow-none'
          : isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 text-slate-800'
          : 'bg-white/90 backdrop-blur-sm py-3 sm:py-4 text-slate-800'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with previous prominent proportions */}
          <Link
            to={isHome2 ? '/home-2' : '/'}
            className="cursor-pointer select-none"
            aria-label="RAM Construction Home"
          >
            <BrandLogo
              inverted={isTransparent}
              imgClassName={
                isScrolled
                  ? 'h-16 sm:h-18 md:h-20 w-auto transition-all duration-300'
                  : 'h-18 sm:h-22 md:h-24 w-auto transition-all duration-300'
              }
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-bold">
            {/* Home Dropdown with Home 01, Home 02, Home 03 */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                className={`relative flex items-center gap-1.5 py-1 transition cursor-pointer ${
                  isTransparent
                    ? isAnyHome || homeDropdownOpen
                      ? 'text-white font-bold'
                      : 'text-white/85 hover:text-white'
                    : isAnyHome || homeDropdownOpen
                    ? 'text-[#072b58] font-bold'
                    : 'text-slate-600 hover:text-[#072b58]'
                }`}
                aria-expanded={homeDropdownOpen}
              >
                <span>Home</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    homeDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                {(isAnyHome || homeDropdownOpen) && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full animate-fadeIn ${
                      isTransparent ? 'bg-[#39a1d6]' : 'bg-[#0d55c8]'
                    }`}
                  />
                )}
              </button>

              {/* Home Dropdown Menu matching user reference */}
              {homeDropdownOpen && (
                <div className="absolute top-full -left-2 pt-2 z-50 animate-fadeIn">
                  <div className="min-w-[170px] rounded-xl bg-white py-3 shadow-[0_12px_35px_rgba(0,0,0,0.12)] ring-1 ring-slate-100 border border-slate-100/80">
                    {homeVariations.map((v) => {
                      const isActive =
                        (v.id === 'home-01' && location.pathname === '/') ||
                        (v.id === 'home-02' && location.pathname === '/home-2')

                      return (
                        <Link
                          key={v.id}
                          to={v.path}
                          onClick={() => setHomeDropdownOpen(false)}
                          className={`block px-6 py-2.5 text-[15px] font-semibold transition-colors ${
                            isActive
                              ? 'text-[#0d55c8] font-bold bg-slate-50/70'
                              : 'text-slate-700 hover:text-[#0d55c8] hover:bg-slate-50'
                          }`}
                        >
                          {v.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {navItems.slice(1).map((item) => {
              const targetId = item.href.replace('#', '')
              const isActive = activeSection === targetId
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 transition cursor-pointer ${
                    isTransparent
                      ? isActive
                        ? 'text-white font-bold'
                        : 'text-white/85 hover:text-white'
                      : isActive
                      ? 'text-[#072b58] font-bold'
                      : 'text-slate-600 hover:text-[#072b58]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full animate-fadeIn ${
                        isTransparent ? 'bg-[#39a1d6]' : 'bg-[#0d55c8]'
                      }`}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA Buttons with previous generous size */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Cost Estimator */}
            <button
              onClick={openCalculator}
              title="Construction Cost Estimator"
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${
                isTransparent
                  ? 'border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-[#edf5fd] hover:text-[#072b58] hover:border-[#0d55c8]/30'
              }`}
            >
              <Calculator className={`h-4 w-4 ${isTransparent ? 'text-[#8fe3ff]' : 'text-[#0d55c8]'}`} />
              <span>Cost Estimator</span>
            </button>

            {/* Get a Quote */}
            <button
              onClick={() => openQuote({ type: isHome2 ? 'Commercial & Infrastructure' : 'Residential Construction' })}
              className="flex items-center gap-2 rounded-full bg-[#0d55c8] px-6 py-2.5 sm:py-3 text-sm font-bold text-white shadow-md shadow-[rgb(26_109_178/0.5)] transition hover:bg-[#072b58] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openQuote()}
              className="rounded-full bg-[#0d55c8] px-4 py-1.5 text-xs font-bold text-white shadow-sm cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`rounded-xl p-2 transition cursor-pointer ${
                isTransparent
                  ? 'text-white hover:bg-white/15'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/80 bg-white/95 px-4 pt-4 pb-6 shadow-xl backdrop-blur-lg animate-fadeIn text-slate-800">
          {/* Home Dropdown sections on mobile */}
          <div className="mb-4 p-2.5 bg-slate-50 border border-slate-100 rounded-2xl">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-2 mb-2">
              Select Homepage
            </div>
            <div className="grid grid-cols-3 gap-2">
              {homeVariations.map((v) => {
                const isActive =
                  (v.id === 'home-01' && location.pathname === '/') ||
                  (v.id === 'home-02' && location.pathname === '/home-2')

                return (
                  <Link
                    key={v.id}
                    to={v.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-center py-2.5 px-2 rounded-xl text-xs transition font-bold ${
                      isActive
                        ? 'bg-[#0d55c8] text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                    }`}
                  >
                    {v.name}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col space-y-3 text-base font-semibold">
            {navItems.slice(1).map((item) => {
              const targetId = item.href.replace('#', '')
              const isActive = activeSection === targetId
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleMobileNavClick(e, item.href)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-left transition cursor-pointer ${
                    isActive
                      ? 'bg-[#edf5fd] text-[#072b58] font-bold'
                      : 'text-slate-700 hover:bg-[#edf5fd] hover:text-[#072b58]'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-[#0d55c8]">→</span>
                </a>
              )
            })}

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openCalculator()
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-800 cursor-pointer"
              >
                <Calculator className="h-4 w-4 text-[#0d55c8]" />
                <span>Construction Cost Estimator</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openQuote({ type: isHome2 ? 'Commercial & Infrastructure' : 'Residential Construction' })
                }}
                className="w-full rounded-xl bg-[#0d55c8] py-3 text-center text-sm font-bold text-white shadow-md hover:bg-[#072b58] cursor-pointer"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
