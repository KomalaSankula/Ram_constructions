import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative flex min-h-[75vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="blueprint-dots pointer-events-none absolute inset-0 -z-10" />
      <div className="blueprint-grid pointer-events-none absolute inset-0 -z-10 opacity-30" />

      <div className="relative">
        <h1 className="text-8xl font-black tracking-tight text-[#123d66] md:text-9xl">
          404
        </h1>
        <div className="absolute -bottom-2 right-4 rounded-full bg-[#1a6db2] px-3 py-1 text-xs font-bold text-white shadow-md">
          Zone Missing
        </div>
      </div>

      <h2 className="mt-6 text-2xl font-black text-[#123d66] md:text-3xl">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-sm text-slate-600 md:text-base">
        Oops! The page you're looking for doesn't exist, has been moved, or is currently under construction.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-full bg-[#1a6db2] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#1a6db2]/25 transition hover:bg-[#145290] hover:scale-105"
        >
          <Home className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}
