import { X, Calendar, User, Clock, Share2, Tag } from 'lucide-react'
import type { BlogPost } from '../../types/blog.types'

interface BlogDetailsModalProps {
  post: BlogPost | null
  isOpen: boolean
  onClose: () => void
}

export default function BlogDetailsModal({ post, isOpen, onClose }: BlogDetailsModalProps) {
  if (!isOpen || !post) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 md:p-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1a6db2]">
            <Tag className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">{post.category}</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">
          <h1 className="text-2xl font-black leading-tight text-[#123d66] md:text-3xl">
            {post.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#1a6db2]" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-[#1a6db2]" />
              {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#1a6db2]" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={post.image}
            alt={post.title}
            className="h-64 w-full object-cover md:h-80"
          />
        </div>

        <div className="mt-6 rounded-2xl bg-[#edfaff] p-4 text-sm font-medium text-[#123d66] ring-1 ring-[#1a6db2]/20">
          <span className="font-bold">Executive Summary: </span>
          {post.summary}
        </div>

        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Share article:</span>
            <button
              onClick={() => alert('Article link copied to clipboard!')}
              className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Copy Link</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-[#1a6db2] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#1a6db2]/20 hover:bg-[#145290]"
          >
            Back to Articles
          </button>
        </div>
      </div>
    </div>
  )
}
