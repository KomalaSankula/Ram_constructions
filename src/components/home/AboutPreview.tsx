import { CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react'
import { companyDetails } from '../../data/contact'

export default function AboutPreview() {
  const checklist = [
    'Quality Materials',
    'Expert Engineering',
    'On-Time Delivery',
    'Transparent Process',
  ]

  return (
    <section id="about" className="site-section-soft overflow-hidden">
      {/* Background Decorative Angled Bands Matching Reference Design */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#edf5fd]/60 blur-3xl" />
        <div className="absolute top-1/4 -left-10 h-72 w-[600px] -rotate-12 bg-gradient-to-r from-slate-100/50 via-slate-50/30 to-transparent" />
        <div className="absolute top-1/3 left-1/4 h-56 w-[500px] -rotate-12 bg-gradient-to-r from-[#edf5fd]/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left Column: 3-Image Architectural Composition */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none pt-2 pb-6 pr-4 sm:pr-8 lg:pr-10">
            {/* Grid of 3 complementary architectural photos */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-end">
              {/* Image 1: Main Tall Image (Civil Engineer with Blueprints on Site) */}
              <div className="relative col-span-7 aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl ring-1 ring-slate-200/80 group">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="RAM Construction Civil Engineer on Site"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072b58]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Stack: 2 images stacked vertically */}
              <div className="col-span-5 flex flex-col gap-3 sm:gap-4">
                {/* Image 2: Modern Completed Architecture */}
                <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg ring-1 ring-slate-200/80 group">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                    alt="RAM Construction Completed Architecture"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Image 3: Structural Site Supervision & Engineering Team */}
                <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg ring-1 ring-slate-200/80 group">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    alt="RAM Construction Structural Site Supervision"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-2 left-6 sm:left-10 z-20 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-[rgb(26_109_178/0.5)] backdrop-blur-sm">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#edf5fd] text-[#0d55c8] ring-1 ring-[#0d55c8]/20 font-black text-lg">
                12+
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-[#072b58]">Years Experience</div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500">Excellence In Construction</div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Action Matching Screenshot */}
          <div className="flex flex-col justify-center">
            {/* Pill Badge at the top */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#edf5fd] border border-[rgb(26_109_178/0.5)] px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#0d55c8]">
                <span className="h-2 w-2 rounded-full bg-[#0d55c8] animate-pulse" />
                ABOUT COMPANY
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072b58] leading-[1.15]">
              Bringing Innovation &<br />New Ideas In Construction
            </h2>

            {/* Narrative Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              We are RAM Construction, as a premier construction company we are serving over a decade with our tremendous skill and excellence in residential, commercial, and structural engineering.
            </p>

            {/* 2-Column Checklist */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[#0d55c8] shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Row: Button + Phone Call side-by-side */}
            <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
              <a
                href="#why-us"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#072b58] to-[#0d55c8] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0d55c8]/25 transition-all hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>More About Us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`tel:${companyDetails.phone}`}
                className="inline-flex items-center gap-3 text-slate-700 transition hover:text-[#0d55c8] group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 shadow-sm text-[#0d55c8] transition group-hover:bg-[#0d55c8] group-hover:text-white group-hover:scale-105">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <span className="text-base sm:text-lg font-black text-[#072b58] group-hover:text-[#0d55c8]">
                  {companyDetails.phone}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
