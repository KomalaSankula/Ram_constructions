import { useState } from 'react'
import PageBanner from '../../components/common/PageBanner'
import { blogPosts } from '../../data/blog'
import { useModal } from '../../hooks/useModal'
import { Calendar, ArrowRight, Search } from 'lucide-react'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const { openBlogDetails } = useModal()

  const filteredPosts = blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <PageBanner
        title="Construction News & Insights"
        subtitle="Expert analysis, design inspiration, material selection guides, and real estate updates from our engineering desk."
        breadcrumbLabel="Blog"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="mx-auto max-w-md mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles by keyword or trend..."
              className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-800 shadow-sm focus:border-[#1a6db2] focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => openBlogDetails(post)}
              className="group cursor-pointer overflow-hidden rounded-[26px] bg-white shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#123d66]">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Calendar className="h-3.5 w-3.5 text-[#1a6db2]" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-[#123d66] group-hover:text-[#1a6db2] transition">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{post.readTime}</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#123d66] group-hover:text-[#1a6db2]">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
