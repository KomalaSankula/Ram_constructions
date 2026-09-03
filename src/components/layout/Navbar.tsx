import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import BrandLogo from '../ui/BrandLogo'
import { navItems } from '../../data/navigation'
import { companyDetails } from '../../data/contact'
import { Menu, X, Calculator, ArrowRight, Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { useModal } from '../../hooks/useModal'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { FacebookIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '../ui/SocialIcons'

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

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
    }, 150)
  }

  const phoneClean = companyDetails.phone.replace(/[^0-9+]/g, '')
  const whatsappNumber = companyDetails.phone.replace(/[^0-9]/g, '')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello RAM Construction! I would like to inquire about your construction services.'
  )}`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent py-3 sm:py-5 text-white shadow-none'
          : isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-3 text-slate-800'
          : 'bg-white/90 backdrop-blur-sm py-2.5 sm:py-4 text-slate-800'
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="cursor-pointer select-none"
            aria-label="RAM Construction Home"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <BrandLogo
              inverted={isTransparent}
              imgClassName={
                isScrolled
                  ? 'h-14 sm:h-18 md:h-20 w-auto transition-all duration-300'
                  : 'h-16 sm:h-20 md:h-24 w-auto transition-all duration-300'
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

          {/* Mobile Quick Action Buttons & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openQuote()}
              className="px-3.5 py-1.5 text-xs font-black uppercase tracking-wider shadow-sm cursor-pointer bg-gradient-to-r from-[#1ea6dc] to-[#072b58] text-white rounded-full active:scale-95 transition"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-xl p-2 transition cursor-pointer text-slate-700 hover:bg-slate-100 active:scale-95"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Slide-in Drawer with Backdrop Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content Panel */}
          <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-fadeIn text-slate-800">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/80 sticky top-0 z-20 backdrop-blur-md">
              <div onClick={() => setMobileMenuOpen(false)}>
                <BrandLogo inverted={false} imgClassName="h-14 w-auto" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200/80 text-slate-700 hover:bg-slate-300 transition cursor-pointer active:scale-95"
                aria-label="Close navigation drawer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="p-5 flex-1 space-y-6">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1ea6dc] block mb-3 px-1">
                  Menu Navigation
                </span>
                <nav className="flex flex-col space-y-1.5">
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
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-bold transition cursor-pointer ${
                          isActive
                            ? 'bg-[#f0f9ff] text-[#1ea6dc] shadow-sm'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-[#072b58]'
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className={`text-sm ${isActive ? 'text-[#1ea6dc]' : 'text-slate-400'}`}>
                          →
                        </span>
                      </a>
                    )
                  })}
                </nav>
              </div>

              {/* Quick Actions in Drawer */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openCalculator()
                  }}
                  className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#f0f9ff] border border-[#1ea6dc]/30 py-3 text-sm font-bold text-[#072b58] hover:bg-[#e0f2fe] transition cursor-pointer active:scale-98"
                >
                  <Calculator className="h-4 w-4 text-[#1ea6dc]" />
                  <span>Cost Estimator</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openQuote({ type: 'Residential Construction' })
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1ea6dc] to-[#072b58] py-3.5 text-sm font-bold text-white shadow-md shadow-[#1ea6dc]/25 hover:shadow-lg transition cursor-pointer active:scale-98"
                >
                  <span>Get Instant Project Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Direct Contact & Hours Cards */}
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 block">
                  Quick Contact
                </span>

                <div className="flex items-center justify-between">
                  <a
                    href={`tel:${phoneClean}`}
                    className="flex items-center gap-2.5 text-sm font-bold text-[#072b58] hover:text-[#1ea6dc]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#1ea6dc] shadow-sm">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>{companyDetails.phone}</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-500/30 hover:bg-emerald-100"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Chat</span>
                  </a>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-600 pt-2 border-t border-slate-200/60">
                  <Mail className="h-3.5 w-3.5 text-[#1ea6dc] shrink-0 mt-0.5" />
                  <a href={`mailto:${companyDetails.email}`} className="hover:text-[#072b58] truncate">
                    {companyDetails.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <MapPin className="h-3.5 w-3.5 text-[#1ea6dc] shrink-0 mt-0.5" />
                  <span className="leading-snug">{companyDetails.address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-500">
                  <Clock className="h-3.5 w-3.5 text-[#1ea6dc] shrink-0" />
                  <span>{companyDetails.hours}</span>
                </div>
              </div>
            </div>

            {/* Drawer Footer Socials */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/60">
              <div className="flex items-center justify-center gap-4">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 shadow-sm hover:text-[#1ea6dc] hover:bg-[#f0f9ff]"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 shadow-sm hover:text-[#1ea6dc] hover:bg-[#f0f9ff]"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 shadow-sm hover:text-[#1ea6dc] hover:bg-[#f0f9ff]"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 shadow-sm hover:text-[#1ea6dc] hover:bg-[#f0f9ff]"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 text-center text-[11px] text-slate-400">
                © {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
