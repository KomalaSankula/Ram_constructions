import { useState } from 'react'
import { X, Calculator, CheckCircle2, ArrowRight, Building2, Home, Palette } from 'lucide-react'
import { formatCurrency } from '../../utils/currency'

interface CostCalculatorModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenQuote: (data: { type: string; area: number; estimate: string }) => void
}

export default function CostCalculatorModal({ isOpen, onClose, onOpenQuote }: CostCalculatorModalProps) {
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'interior'>('residential')
  const [areaSqFt, setAreaSqFt] = useState<number>(2400)
  const [floors, setFloors] = useState<number>(2)
  const [tier, setTier] = useState<'standard' | 'premium' | 'luxury'>('premium')

  if (!isOpen) return null

  const baseRates = {
    residential: { standard: 1850, premium: 2450, luxury: 3600 },
    commercial: { standard: 2200, premium: 2950, luxury: 4200 },
    interior: { standard: 850, premium: 1450, luxury: 2250 },
  }

  const rate = baseRates[projectType][tier]
  const totalBuiltUpArea = projectType === 'interior' ? areaSqFt : areaSqFt * (floors > 1 ? 1 + (floors - 1) * 0.9 : 1)
  const rawTotal = Math.round(totalBuiltUpArea * rate)

  const civilStructure = Math.round(rawTotal * 0.48)
  const mepSystems = Math.round(rawTotal * 0.18)
  const finishes = Math.round(rawTotal * 0.24)
  const permitsAndDesign = Math.round(rawTotal * 0.10)

  const estimatedMonths = Math.max(
    4,
    Math.round(totalBuiltUpArea / 500) + (floors > 1 ? floors * 2 : 0)
  )

  const handleApplyToQuote = () => {
    onClose()
    onOpenQuote({
      type: projectType === 'residential' ? 'Residential Construction' : projectType === 'commercial' ? 'Commercial Construction' : 'Interior Design',
      area: totalBuiltUpArea,
      estimate: formatCurrency(rawTotal),
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 md:p-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123d66] text-white">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#123d66]">Construction Cost Estimator</h3>
              <p className="text-xs text-slate-500">Instant accurate estimate based on Telangana market rates</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              1. Select Project Type
            </label>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setProjectType('residential')}
                className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-3 text-sm font-semibold transition border ${
                  projectType === 'residential'
                    ? 'border-[#1a6db2] bg-[#edfaff] text-[#1a6db2] ring-2 ring-[#1a6db2]/20'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Home className="h-5 w-5" />
                <span>Residential</span>
              </button>

              <button
                type="button"
                onClick={() => setProjectType('commercial')}
                className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-3 text-sm font-semibold transition border ${
                  projectType === 'commercial'
                    ? 'border-[#1a6db2] bg-[#edfaff] text-[#1a6db2] ring-2 ring-[#1a6db2]/20'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Building2 className="h-5 w-5" />
                <span>Commercial</span>
              </button>

              <button
                type="button"
                onClick={() => setProjectType('interior')}
                className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-3 text-sm font-semibold transition border ${
                  projectType === 'interior'
                    ? 'border-[#1a6db2] bg-[#edfaff] text-[#1a6db2] ring-2 ring-[#1a6db2]/20'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Palette className="h-5 w-5" />
                <span>Interior</span>
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Built-up Area
              </label>
              <div className="flex items-center gap-1 rounded-xl bg-slate-100 px-3 py-1 text-sm font-bold text-[#123d66]">
                <span>{areaSqFt.toLocaleString()}</span>
                <span className="text-xs text-slate-500">sq.ft</span>
              </div>
            </div>
            <input
              type="range"
              min="500"
              max="15000"
              step="100"
              value={areaSqFt}
              onChange={(e) => setAreaSqFt(Number(e.target.value))}
              className="mt-3 w-full accent-[#1a6db2] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>500 sq.ft</span>
              <span>7,500 sq.ft</span>
              <span>15,000 sq.ft</span>
            </div>
          </div>

          {projectType !== 'interior' && (
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                3. Number of Floors
              </label>
              <div className="mt-2 flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFloors(num)}
                    className={`flex-1 rounded-xl py-2 text-sm font-bold transition border ${
                      floors === num
                        ? 'border-[#1a6db2] bg-[#1a6db2] text-white shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    G+{num - 1} ({num} {num === 1 ? 'Floor' : 'Floors'})
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {projectType === 'interior' ? '3.' : '4.'} Construction / Finish Grade
            </label>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {[
                { id: 'standard', name: 'Standard', desc: 'Quality brand cement, vitrified tiles, basic teakwood' },
                { id: 'premium', name: 'Premium', desc: 'TMT 550D steel, granite/marble, premium sanitaryware' },
                { id: 'luxury', name: 'Ultra Luxury', desc: 'Italian marble, high-end automation, custom facade' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTier(t.id as 'standard' | 'premium' | 'luxury')}
                  className={`rounded-2xl p-3 text-left transition border ${
                    tier === t.id
                      ? 'border-[#1a6db2] bg-[#edfaff] ring-2 ring-[#1a6db2]/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#123d66]">{t.name}</span>
                    {tier === t.id && <CheckCircle2 className="h-4 w-4 text-[#1a6db2]" />}
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 leading-snug">{t.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#123d66] to-[#1a6db2] p-6 text-white shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8fe3ff]">
                  Estimated Total Budget
                </p>
                <div className="text-3xl font-black tracking-tight text-white md:text-4xl">
                  {formatCurrency(rawTotal)}
                </div>
                <p className="text-xs text-[#edfaff] mt-1">
                  ≈ ₹{rate.toLocaleString()} / sq.ft across {Math.round(totalBuiltUpArea).toLocaleString()} sq.ft
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-3 text-right">
                <span className="text-[11px] uppercase tracking-wider text-[#8fe3ff] block">Est. Timeline</span>
                <span className="text-xl font-bold text-white">{estimatedMonths} Months</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
              <div className="rounded-xl bg-white/5 p-2.5">
                <span className="text-[#8fe3ff] block">Structure & Core</span>
                <span className="font-bold text-white">{formatCurrency(civilStructure)}</span>
              </div>
              <div className="rounded-xl bg-white/5 p-2.5">
                <span className="text-[#8fe3ff] block">MEP Services</span>
                <span className="font-bold text-white">{formatCurrency(mepSystems)}</span>
              </div>
              <div className="rounded-xl bg-white/5 p-2.5">
                <span className="text-[#8fe3ff] block">Finishes & Paint</span>
                <span className="font-bold text-white">{formatCurrency(finishes)}</span>
              </div>
              <div className="rounded-xl bg-white/5 p-2.5">
                <span className="text-[#8fe3ff] block">Design & Approvals</span>
                <span className="font-bold text-white">{formatCurrency(permitsAndDesign)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleApplyToQuote}
            className="flex items-center justify-center gap-2 rounded-full bg-[#1a6db2] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#1a6db2]/20 hover:bg-[#145290]"
          >
            <span>Lock Estimate & Request Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
