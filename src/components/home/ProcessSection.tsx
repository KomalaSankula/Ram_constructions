
// Step 1 Icon: Two people with speech bubble (Consultation)
function ConsultationIcon({ className = "h-14 w-14 text-[#1ea6dc]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Speech bubble */}
      <path d="M26 14h12a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6h-3l-5 4v-4h-4a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6z" fill="#f0f9ff" />
      <circle cx="28" cy="22" r="1.5" fill="currentColor" />
      <circle cx="32" cy="22" r="1.5" fill="currentColor" />
      <circle cx="36" cy="22" r="1.5" fill="currentColor" />
      {/* Person 1 (Left) */}
      <circle cx="22" cy="36" r="5" />
      <path d="M14 50c0-4.5 3.5-8 8-8s8 3.5 8 8" />
      {/* Person 2 (Right) */}
      <circle cx="42" cy="36" r="5" />
      <path d="M34 50c0-4.5 3.5-8 8-8s8 3.5 8 8" />
    </svg>
  )
}

// Step 2 Icon: Blueprint with house & drafting pencil (Planning)
function PlanningIcon({ className = "h-14 w-14 text-[#1ea6dc]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Blueprint Sheet */}
      <rect x="14" y="16" width="36" height="36" rx="3" fill="#f0f9ff" />
      {/* House outline on blueprint */}
      <path d="M24 38v-8l8-6 8 6v8z" />
      <path d="M29 38v-5h6v5" />
      {/* Drafting ruler lines */}
      <path d="M14 22h4M14 28h3M14 34h4M14 40h3M14 46h4" />
      {/* Pencil drafting at top right */}
      <path d="M42 12l8 8-16 16-8-8 16-16z" fill="#1ea6dc" stroke="#072b58" />
      <path d="M26 28l-3 7 7-3" fill="#072b58" />
    </svg>
  )
}

// Step 3 Icon: Construction Tower Crane lifting block (Execution)
function ExecutionIcon({ className = "h-14 w-14 text-[#1ea6dc]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Base */}
      <path d="M22 52h14" />
      {/* Mast / Vertical Tower */}
      <path d="M26 52V20M32 52V20" />
      {/* Bracing */}
      <path d="M26 44l6-6M32 44l-6-6M26 32l6-6M32 32l-6-6M26 20l6-6" />
      {/* Jib / Horizontal Boom */}
      <path d="M14 20h38" />
      {/* Counterweight */}
      <rect x="14" y="20" width="6" height="5" fill="#1ea6dc" />
      {/* Trolley and cable */}
      <path d="M44 20v14" strokeDasharray="2 2" />
      {/* Suspended building block */}
      <rect x="39" y="34" width="10" height="10" rx="1.5" fill="#f0f9ff" />
      <path d="M44 34v10" />
    </svg>
  )
}

// Step 4 Icon: Hand cradling a house (Handover)
function HandoverIcon({ className = "h-14 w-14 text-[#1ea6dc]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* House floating above hand */}
      <path d="M24 30v-8l8-7 8 7v8z" fill="#f0f9ff" />
      <path d="M29 30v-5h6v5" />
      <path d="M37 18h3v4" />
      {/* Open supportive hand */}
      <path d="M16 46c4-2 8-3 12-3h12a6 6 0 0 1 6 6c0 1.5-1 2.5-2.5 2.5H36l-8-2-8 3-4-2.5v-4z" />
      <path d="M16 43l4 8" />
    </svg>
  )
}


export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Consultation',
      tagline: 'Understanding your needs.',
      desc: 'We begin with an in-depth discovery session to assess your vision, lifestyle needs, budget parameters, and site topography.',
      icon: ConsultationIcon,
    },
    {
      step: '02',
      title: 'Planning',
      tagline: 'Designing the perfect plan.',
      desc: 'Our licensed architects create comprehensive 3D visual renders, structural engineering drawings, and obtain all necessary municipal permits.',
      icon: PlanningIcon,
    },
    {
      step: '03',
      title: 'Execution',
      tagline: 'Building with precision.',
      desc: 'Experienced site engineers supervise quality-tested concrete, steel fabrication, electrical networks, and structural masonry on a daily basis.',
      icon: ExecutionIcon,
    },
    {
      step: '04',
      title: 'Handover',
      tagline: 'Delivering beyond your expectations.',
      desc: 'Comprehensive 100-point quality audit, complete deep cleaning, full warranty documentation, and celebratory key handover.',
      icon: HandoverIcon,
    },
  ]

  return (
    <section id="process" className="site-section-soft overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching Website Theme */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1ea6dc]">
            OUR PROCESS
          </span>

          <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#072b58]">
            Our Proven 4-Step Approach
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            From concept to completion, we build with quality and deliver with trust.
          </p>
        </div>

        {/* 4 Process Cards Container with Dotted Transition Arrows */}
        <div className="mt-10 sm:mt-12 relative">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((item, idx) => {
              const StepIcon = item.icon
              return (
                <div key={item.step} className="relative h-full">
                  {/* Card Element */}
                  <div className="group relative flex flex-col items-center text-center rounded-[28px] bg-white p-6 sm:p-7 pt-9 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated hover:ring-[#1ea6dc]/30 h-full">
                    {/* Top-Left Step Number Badge (01, 02, 03, 04) */}
                    <div className="absolute -top-3.5 left-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#1ea6dc] text-white text-sm font-black shadow-md ring-2 ring-white">
                      {item.step}
                    </div>

                    {/* Illustrated Circular Icon */}
                    <div className="mx-auto mb-5 flex h-24 w-24 sm:h-26 sm:w-26 items-center justify-center rounded-full bg-[#f0f9ff] ring-8 ring-[#f0f9ff]/80 transition-transform duration-300 group-hover:scale-105">
                      <StepIcon className="h-14 w-14 text-[#1ea6dc]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#072b58]">
                      {item.title}
                    </h3>

                    {/* Tagline in brand blue */}
                    <p className="mt-1.5 text-xs sm:text-sm font-bold text-[#1ea6dc]">
                      {item.tagline}
                    </p>

                    {/* Detailed Description */}
                    <p className="mt-2.5 text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Dotted Transition Arrow Connector (between cards on Desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-24 -translate-y-1/2 z-20 items-center justify-center text-[#1ea6dc]/60 pointer-events-none w-8">
                      <span className="font-mono text-xs tracking-[0.15em] select-none font-bold">···&gt;</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
