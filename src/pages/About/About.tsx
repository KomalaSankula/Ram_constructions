import PageBanner from '../../components/common/PageBanner'
import TeamSection from '../../components/home/TeamSection'
import WhyChooseUs from '../../components/home/WhyChooseUs'
import { companyDetails } from '../../data/contact'
import { useModal } from '../../hooks/useModal'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const { openQuote } = useModal()

  const keyStrengths = [
    'Over a decade of continuous excellence in Telangana construction',
    'ISO 9001 certified civil engineering and structural safety workflows',
    'Turnkey accountability from soil testing to bespoke interior handover',
    'Transparent milestone-based escrow billing with zero hidden costs',
  ]

  return (
    <div>
      <PageBanner
        title="Building with Passion, Delivering with Pride"
        subtitle="Learn more about our heritage, engineering standards, and vision for contemporary construction."
        breadcrumbLabel="About Us"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-[32px] bg-white p-8 sm:p-14 shadow-card ring-1 ring-slate-200/80">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center relative z-10">
            {/* Left Column: Text Content */}
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#1ea6dc]">
                About RAM Construction
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#072b58] leading-tight">
                About RAM Construction
              </h2>
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                {companyDetails.aboutSummary}
              </p>

              {/* 3 Metric counters */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-y border-slate-100 py-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#072b58]">10+</div>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#072b58]">100+</div>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#072b58]">50+</div>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Expert Team</div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {keyStrengths.map((point, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#1ea6dc] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => openQuote()}
                  className="rounded-full bg-[#1ea6dc] px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-[#072b58] transition hover:scale-105"
                >
                  Partner With Us
                </button>
              </div>
            </div>

            {/* Right Column: Architectural Visual */}
            <div className="relative overflow-hidden rounded-[28px] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="RAM Construction Headquarters"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <TeamSection />
    </div>
  )
}
