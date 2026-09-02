import BrandLogo from '../ui/BrandLogo'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { companyDetails } from '../../data/contact'
import { navItems } from '../../data/navigation'
import { servicesData } from '../../data/services'
import { FacebookIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '../ui/SocialIcons'
import ConstructionBgPattern from '../common/ConstructionBgPattern'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <footer className="relative bg-[#051833] text-slate-300 pt-12 pb-10 overflow-hidden">
      <ConstructionBgPattern variant="skyline" inverted opacity="opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 pb-14 border-b border-white/10">
          {/* Column 1: Brand Info & Socials */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="cursor-pointer inline-block"
              aria-label="RAM Construction Home"
            >
              <BrandLogo inverted imgClassName="h-20 sm:h-24 md:h-28 w-auto" />
            </a>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Building dreams and delivering excellence since {companyDetails.establishedYear}.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0d55c8] hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0d55c8] hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0d55c8] hover:scale-110"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0d55c8] hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="transition hover:text-white hover:translate-x-1 inline-block cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-left transition hover:text-white hover:translate-x-1 inline-block cursor-pointer"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <a href={`tel:${companyDetails.phone}`} className="hover:text-white">
                  {companyDetails.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white">
                  {companyDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{companyDetails.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-white cursor-pointer">Privacy Policy</a>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-white cursor-pointer">Terms & Conditions</a>
            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0d55c8]"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
