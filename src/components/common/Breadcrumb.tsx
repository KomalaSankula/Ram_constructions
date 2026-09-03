import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
      <Link to="/" className="flex items-center gap-1 hover:text-[#1ea6dc] transition">
        <Home className="h-3.5 w-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          {item.path ? (
            <Link to={item.path} className="hover:text-[#1ea6dc] transition">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#072b58] font-bold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
