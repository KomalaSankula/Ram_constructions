import { useState } from 'react'
import { X, CheckCircle2, Building, Home, Palette, Send, ArrowRight, ArrowLeft } from 'lucide-react'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  initialData?: {
    type?: string
    area?: number
    estimate?: string
  }
}

export default function QuoteModal({ isOpen, onClose, initialData }: QuoteModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [projectType, setProjectType] = useState(() => initialData?.type || 'Residential Construction')
  const [location, setLocation] = useState('Hyderabad')
  const [area, setArea] = useState(() => (initialData?.area ? initialData.area.toString() : '3000'))
  const [budget, setBudget] = useState(() => initialData?.estimate || '₹50 Lakhs - ₹1 Crore')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [inquiryId, setInquiryId] = useState('')

  if (!isOpen) return null

  const handleReset = () => {
    setStep(1)
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
    setIsSubmitting(false)
    onClose()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setInquiryId(`RAM-${Math.floor(100000 + Math.random() * 900000)}`)
      setStep(4)
    }, 900)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      <div className="relative z-10 w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 md:p-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a6db2]">
              Inquiry & Estimation
            </span>
            <h3 className="text-2xl font-black text-[#123d66]">
              {step === 4 ? 'Quote Request Received!' : 'Request a Project Quote'}
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {step < 4 && (
          <div className="mt-4 flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-1 items-center gap-2">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                    step === num
                      ? 'bg-[#1a6db2] text-white ring-4 ring-[#1a6db2]/20'
                      : step > num
                      ? 'bg-[#123d66] text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {step > num ? '✓' : num}
                </div>
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline">
                  {num === 1 ? 'Category' : num === 2 ? 'Project Scale' : 'Contact'}
                </span>
                {num < 3 && <div className="h-0.5 flex-1 bg-slate-200" />}
              </div>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="mt-6 space-y-4">
            <p className="text-sm font-semibold text-slate-700">What kind of construction project are you planning?</p>
            <div className="grid gap-3">
              {[
                { name: 'Residential Construction', icon: Home, desc: 'Luxury villas, independent houses, modern apartments' },
                { name: 'Commercial Construction', icon: Building, desc: 'Corporate tech centers, retail spaces, commercial towers' },
                { name: 'Interior Design & Architecture', icon: Palette, desc: 'Turnkey interior redesign, modular cabinetry, smart living' },
              ].map((item) => {
                const Icon = item.icon
                const isSelected = projectType === item.name
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setProjectType(item.name)}
                    className={`flex items-start gap-4 rounded-2xl p-4 text-left transition border ${
                      isSelected
                        ? 'border-[#1a6db2] bg-[#edfaff] ring-2 ring-[#1a6db2]/20'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        isSelected ? 'bg-[#1a6db2] text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">{item.name}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-2 rounded-full bg-[#1a6db2] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#1a6db2]/20 hover:bg-[#145290]"
              >
                <span>Continue to Specifications</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Site Location / City
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Jubilee Hills, Hyderabad"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1a6db2] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Approximate Built-up Area (Sq. Ft)
              </label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="3000"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1a6db2] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Estimated Investment Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1a6db2] focus:outline-none"
              >
                <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                <option value="₹1 Crore - ₹2.5 Crores">₹1 Crore - ₹2.5 Crores</option>
                <option value="₹2.5 Crores - ₹5 Crores">₹2.5 Crores - ₹5 Crores</option>
                <option value="₹5 Crores+">₹5 Crores+</option>
              </select>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-800"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex items-center gap-2 rounded-full bg-[#1a6db2] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#1a6db2]/20 hover:bg-[#145290]"
              >
                <span>Continue to Details</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Varma"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1a6db2] focus:outline-none"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1a6db2] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1a6db2] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Special Requests or Site Notes
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your timeline, architectural style preference, or plot status..."
                className="mt-1.5 w-full rounded-xl border border-slate-200 p-3 text-sm font-medium text-slate-800 focus:border-[#1a6db2] focus:outline-none"
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-800"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-full bg-[#1a6db2] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#1a6db2]/20 hover:bg-[#145290] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="mt-6 text-center py-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#edfaff] text-[#1a6db2]">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h4 className="mt-4 text-xl font-bold text-[#123d66]">
              Thank You, {name || 'Valued Client'}!
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              Your inquiry has been registered under reference ticket:
            </p>
            <div className="mt-2 inline-block rounded-xl bg-slate-100 px-4 py-2 text-base font-mono font-bold text-[#123d66]">
              {inquiryId}
            </div>
            <p className="mt-4 text-xs text-slate-500 max-w-sm mx-auto">
              Our lead architectural engineer will evaluate your specs and call you at <strong className="text-slate-800">{phone}</strong> within 2 business hours with a formal proposal.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 rounded-full bg-[#1a6db2] px-8 py-2.5 text-sm font-bold text-white hover:bg-[#145290]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
