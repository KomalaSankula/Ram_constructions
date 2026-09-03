import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { companyDetails } from '../../data/contact'
import constructionExcavator from '../../assets/images/construction-wireframe-excavator.png'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')

      setTimeout(() => {
        setIsSuccess(false)
      }, 6000)
    }, 800)
  }

  return (
    <section id="contact" className="site-section bg-white overflow-hidden">
      {/* Groundwork Excavator & Building Wireframe Background Layer */}
      <div className="pointer-events-none absolute bottom-8 sm:bottom-12 left-0 sm:left-6 lg:left-12 max-w-lg lg:max-w-xl w-full z-0 select-none opacity-20 md:opacity-25 mix-blend-multiply">
        <img
          src={constructionExcavator}
          alt=""
          className="w-full h-auto object-contain object-bottom-left"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1ea6dc]">
              Get In Touch
            </span>

            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#072b58] leading-tight">
              Let's Build Something<br />Great Together
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Have questions about your project scope, structural design, or municipal approvals?
              Our team of architectural consultants and civil engineers is ready to assist you.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-200/80 text-[#072b58]">
                  <Phone className="h-5 w-5 text-[#1ea6dc]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Phone</div>
                  <a
                    href={`tel:${companyDetails.phone}`}
                    className="text-sm sm:text-base font-bold text-[#072b58] hover:text-[#1ea6dc]"
                  >
                    {companyDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-200/80 text-[#072b58]">
                  <Mail className="h-5 w-5 text-[#1ea6dc]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email</div>
                  <a
                    href={`mailto:${companyDetails.email}`}
                    className="text-sm sm:text-base font-bold text-[#072b58] hover:text-[#1ea6dc]"
                  >
                    {companyDetails.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-200/80 text-[#072b58]">
                  <MapPin className="h-5 w-5 text-[#1ea6dc]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Address</div>
                  <div className="text-sm sm:text-base font-bold text-[#072b58]">
                    {companyDetails.address}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-slate-50/80 p-8 sm:p-10 shadow-card ring-1 ring-slate-200/80 backdrop-blur-sm">
            {isSuccess ? (
              <div className="text-center py-10 animate-fadeIn">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f9ff] text-[#1ea6dc]">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="mt-4 text-2xl font-black text-[#072b58]">Message Sent Successfully!</h3>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out. An engineer from our Hyderabad office will review your message and contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 rounded-full bg-[#1ea6dc] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#072b58]"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition focus:border-[#1ea6dc] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition focus:border-[#1ea6dc] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Your Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition focus:border-[#1ea6dc] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your requirements, project location, or questions..."
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-800 transition focus:border-[#1ea6dc] focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#1ea6dc] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#1ea6dc]/25 transition hover:bg-[#072b58] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
