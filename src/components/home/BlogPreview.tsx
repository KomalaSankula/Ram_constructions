import { Calendar, ArrowRight } from 'lucide-react'
import { blogPosts } from '../../data/blog'
import { useModal } from '../../hooks/useModal'

export default function BlogPreview() {
  const { openBlogDetails } = useModal()

  return (
    <section id="blog" className="site-section-soft overflow-hidden">
      <div className="blueprint-grid absolute inset-0 pointer-events-none opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#0d55c8]">
            Latest Insights
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072b58]">
            News & Articles
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Trends, construction guides, and engineering updates from our senior project management team.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => openBlogDetails(post)}
              className="group cursor-pointer overflow-hidden rounded-[26px] bg-white shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated hover:ring-[#0d55c8]/25 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#072b58] backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Calendar className="h-3.5 w-3.5 text-[#0d55c8]" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-[#072b58] leading-snug group-hover:text-[#0d55c8] transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#072b58] group-hover:text-[#0d55c8]">
                  <span>Read More</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0d55c8] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#0d55c8]/25 transition hover:bg-[#072b58] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Consult With Our Civil Engineers</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
