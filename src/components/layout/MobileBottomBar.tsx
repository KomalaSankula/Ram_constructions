import { Phone, MessageCircle, Calculator, FileText, Home } from 'lucide-react'
import { companyDetails } from '../../data/contact'
import { useModal } from '../../hooks/useModal'
import { useLocation, useNavigate } from 'react-router-dom'

interface MobileBottomBarProps {
  onOpenMobileMenu?: () => void
}

export default function MobileBottomBar({ onOpenMobileMenu: _onOpenMobileMenu }: MobileBottomBarProps) {
  const { openQuote, openCalculator } = useModal()
  const location = useLocation()
  const navigate = useNavigate()

  // Clean phone number for tel: link
  const phoneHref = `tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`

  // WhatsApp link with friendly pre-filled message
  const whatsappNumber = companyDetails.phone.replace(/[^0-9]/g, '')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello RAM Construction! I would like to inquire about your residential/commercial construction services.'
  )}`

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <nav
      aria-label="Mobile Quick Actions"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_24px_rgba(7,43,88,0.09)] pb-safe"
    >
      <div className="grid grid-cols-5 items-center h-16 px-1 max-w-md mx-auto">
        {/* Home Button */}
        <button
          onClick={handleHomeClick}
          className="flex flex-col items-center justify-center gap-1 py-1 text-slate-600 hover:text-[#1ea6dc] active:scale-95 transition cursor-pointer"
          aria-label="Home"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100/80 text-slate-700">
            <Home className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">Home</span>
        </button>

        {/* Call Now */}
        <a
          href={phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-1 text-slate-600 hover:text-[#072b58] active:scale-95 transition cursor-pointer"
          aria-label="Call RAM Construction"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f0f9ff] text-[#072b58] ring-1 ring-[#1ea6dc]/30">
            <Phone className="h-4 w-4 text-[#1ea6dc]" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-1 text-emerald-600 hover:text-emerald-700 active:scale-95 transition cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/30">
            <MessageCircle className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-emerald-700">WhatsApp</span>
        </a>

        {/* Cost Estimator */}
        <button
          onClick={openCalculator}
          className="flex flex-col items-center justify-center gap-1 py-1 text-slate-600 hover:text-[#1ea6dc] active:scale-95 transition cursor-pointer"
          aria-label="Cost Estimator"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100/80 text-slate-700">
            <Calculator className="h-4 w-4 text-[#1ea6dc]" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">Estimator</span>
        </button>

        {/* Get Quote - Prominent Button */}
        <button
          onClick={() => openQuote({ type: 'Residential Construction' })}
          className="flex flex-col items-center justify-center gap-1 py-1 active:scale-95 transition cursor-pointer"
          aria-label="Get Quote"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#1ea6dc] to-[#072b58] text-white shadow-sm shadow-[#1ea6dc]/40 ring-2 ring-white">
            <FileText className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-black text-[#072b58] tracking-tight">Quote</span>
        </button>
      </div>
    </nav>
  )
}
