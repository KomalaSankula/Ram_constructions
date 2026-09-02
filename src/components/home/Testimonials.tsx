import { useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight, ArrowRight, Star, CheckCircle2 } from 'lucide-react'
import { testimonialsData } from '../../data/testimonials'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const updateVisible = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setVisibleCount(1)
        } else if (window.innerWidth < 1024) {
          setVisibleCount(2)
        } else {
          setVisibleCount(3)
        }
      }
    }
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  const maxIndex = Math.max(0, testimonialsData.length - visibleCount)

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5500)
    return () => clearInterval(timer)
  }, [maxIndex, isPaused])

  const minSwipeDistance = 40

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) {
      handleNext()
    } else if (distance < -minSwipeDistance) {
      handlePrev()
    }
  }

  return (
    <section id="testimonials" className="site-section-soft relative overflow-hidden">
      {/* Decorative Subtle Background Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full bg-[#edf5fd]/60 blur-3xl select-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">
          {/* Left Column: Badge, Heading, Description & Controls */}
          <div className="flex flex-col justify-start">
            {/* Prominent Circular Quote Icon Badge - Properly Contained */}
            <div className="mb-4 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#edf5fd] text-[#0d55c8] ring-1 ring-[#0d55c8]/20 shadow-sm transition-transform hover:scale-105">
              <Quote className="h-7 w-7 sm:h-8 sm:w-8 text-[#0d55c8] fill-[#0d55c8]/25" />
            </div>

            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#0d55c8]">
              Client Testimonials
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#072b58] leading-[1.15]">
              Connect with<br />Our Happy Clients
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Discover why homeowners, commercial developers, and property investors in Telangana trust RAM Construction for landmark projects delivered with excellence.
            </p>

            {/* Social Proof Trust Rating */}
            <div className="mt-5 flex items-center gap-2.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#0d55c8] text-[#0d55c8]" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700">
                <span className="font-black text-[#072b58]">5.0 / 5.0</span> (120+ Reviews)
              </span>
            </div>

            {/* Action Link: CONNECT NOW -> */}
            <div className="mt-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#0d55c8] hover:text-[#072b58] transition cursor-pointer"
              >
                <span>CONNECT NOW</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#edf5fd] text-[#0d55c8] transition-transform group-hover:translate-x-1 group-hover:bg-[#0d55c8] group-hover:text-white shadow-sm">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            </div>

            {/* Carousel Navigation Arrows & Slide Indicators */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#edf5fd] text-[#072b58] ring-1 ring-slate-200/80 transition-all hover:bg-[#0d55c8] hover:text-white hover:scale-105 active:scale-95 shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#edf5fd] text-[#072b58] ring-1 ring-slate-200/80 transition-all hover:bg-[#0d55c8] hover:text-white hover:scale-105 active:scale-95 shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5 ml-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === i ? 'w-6 bg-[#0d55c8] shadow-sm shadow-[rgb(26_109_178/0.5)]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Multi-Card Carousel Track */}
          <div
            className="overflow-hidden py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="-mx-2 sm:-mx-2.5 flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
              }}
            >
              {testimonialsData.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-2.5"
                >
                  <div className="flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated hover:ring-[rgb(26_109_178/0.5)]">
                    {/* Top Half of Card: Client Photo */}
                    <div className="relative h-48 sm:h-52 lg:h-56 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                    </div>

                    {/* Overlapping Circular Blue Quote Badge & Verified Badge */}
                    <div className="relative -mt-5 ml-4 sm:ml-5 z-10 flex items-center justify-between pr-4 sm:pr-5">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#0d55c8] text-white shadow-md ring-4 ring-white">
                        <Quote className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white text-white" />
                      </div>

                      <span className="inline-flex items-center gap-1 rounded-full bg-[#edf5fd] px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-[#0d55c8] shadow-sm ring-1 ring-[#0d55c8]/20 backdrop-blur-sm">
                        <CheckCircle2 className="h-3 w-3 text-[#0d55c8]" />
                        Verified Client
                      </span>
                    </div>

                    {/* Card Body: Quote Text & Person Details */}
                    <div className="flex flex-1 flex-col justify-between p-5 pt-2.5">
                      <div>
                        {/* 5-Star Rating */}
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: item.rating || 5 }).map((_, s) => (
                            <Star key={s} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-[#0d55c8] text-[#0d55c8]" />
                          ))}
                          <span className="ml-1 text-xs font-bold text-slate-500">5.0</span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic line-clamp-4">
                          "{item.quote}"
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <h3 className="text-sm sm:text-base font-black text-[#072b58] leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#0d55c8] mt-0.5">
                          {item.role}
                        </p>
                        {item.company && (
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {item.company}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
