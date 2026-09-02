import { teamMembers } from '../../data/team'

export default function TeamSection() {
  return (
    <section id="team" className="site-section bg-white overflow-hidden">
      <div className="blueprint-dots absolute top-8 right-8 h-48 w-48 pointer-events-none opacity-40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#0d55c8]">
            Meet the Experts
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072b58]">
            Our Team of Professionals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Experienced civil engineers, architects, and site supervisors dedicated to structural integrity and safety.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden rounded-[28px] bg-slate-50 p-6 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-elevated hover:ring-[#0d55c8]/25 text-center"
            >
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl bg-slate-100 ring-2 ring-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#072b58]">{member.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0d55c8] mt-0.5">
                {member.role}
              </p>

              <p className="mt-3 text-xs text-slate-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
