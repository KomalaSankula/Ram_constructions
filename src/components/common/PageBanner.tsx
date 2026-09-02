import Breadcrumb from './Breadcrumb'
import ConstructionBgPattern from './ConstructionBgPattern'

interface PageBannerProps {
  title: string
  subtitle?: string
  breadcrumbLabel: string
}

export default function PageBanner({ title, subtitle, breadcrumbLabel }: PageBannerProps) {
  return (
    <div className="relative bg-gradient-to-b from-[#edf5fd] via-[#f8fafc] to-[#f8fafc] pt-32 pb-12 sm:pt-36 lg:pt-40 overflow-hidden border-b border-slate-200/60">
      <ConstructionBgPattern variant="blueprint" opacity="opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: breadcrumbLabel }]} />

        <div className="mt-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072b58]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
