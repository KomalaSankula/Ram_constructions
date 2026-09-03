import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import BrandLogo from '../ui/BrandLogo'
import { navItems } from '../../data/navigation'
import { Menu, X, Calculator, ArrowRight } from 'lucide-react'
import { useModal } from '../../hooks/useModal'
import { useScrollSpy } from '../../hooks/useScrollSpy'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()
  const { openQuote, openCalculator } = useModal()

  const isTransparent = false

  const sectionIds = ['home', 'about', 'services', 'projects', 'contact']
  const activeSection = useScrollSpy(sectionIds, 160)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/${href}`)
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
          ? 'bg-transparent py-4 sm:py-5 text-white shadow-none'
          : isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 text-slate-800'
          : 'bg-white/90 backdrop-blur-sm py-3 sm:py-4 text-slate-800'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
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
            {navItems.map((item) => {
              const targetId = item.href.replace('#', '')
              const isActive =
                activeSection === targetId ||
                (targetId === 'home' && location.pathname === '/' && !activeSection)

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
                        isTransparent ? 'bg-[#38bdf8]' : 'bg-[#1ea6dc]'
                      }`}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Cost Estimator */}
            <button
              onClick={openCalculator}
              title="Construction Cost Estimator"
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${
                isTransparent
                  ? 'border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-[#f0f9ff] hover:text-[#072b58] hover:border-[#1ea6dc]/30'
              }`}
            >
              <Calculator className={`h-4 w-4 ${isTransparent ? 'text-[#8fe3ff]' : 'text-[#1ea6dc]'}`} />
              <span>Cost Estimator</span>
            </button>

            {/* Get a Quote */}
            <button
              onClick={() => openQuote({ type: 'Residential Construction' })}
              className="flex items-center gap-2 px-6 py-2.5 sm:py-3 text-sm font-black uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md bg-[#1ea6dc] hover:bg-[#072b58] text-white rounded-full shadow-[#1ea6dc]/30"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openQuote()}
              className="px-4 py-1.5 text-xs font-black uppercase tracking-wider shadow-sm cursor-pointer bg-[#1ea6dc] text-white rounded-full"
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
          <div className="flex flex-col space-y-3 text-base font-semibold">
            {navItems.map((item) => {
              const targetId = item.href.replace('#', '')
              const isActive =
                activeSection === targetId ||
                (targetId === 'home' && location.pathname === '/' && !activeSection)

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleMobileNavClick(e, item.href)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-left transition cursor-pointer ${
                    isActive
                      ? 'bg-[#f0f9ff] text-[#1ea6dc] font-bold'
                      : 'text-slate-700 hover:bg-[#f0f9ff] hover:text-[#1ea6dc]'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-[#1ea6dc]">→</span>
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
                <Calculator className="h-4 w-4 text-[#1ea6dc]" />
                <span>Construction Cost Estimator</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openQuote({ type: 'Residential Construction' })
                }}
                className="w-full rounded-xl bg-[#1ea6dc] py-3 text-center text-sm font-bold text-white shadow-md hover:bg-[#072b58] cursor-pointer"
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
