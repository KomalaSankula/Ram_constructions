import PageBanner from '../../components/common/PageBanner'
import ContactSection from '../../components/home/ContactSection'
import { companyDetails } from '../../data/contact'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      <PageBanner
        title="Let's Build Something Great Together"
        subtitle="Schedule a consultation with our architects, request a site survey, or visit our headquarters in Jubilee Hills, Hyderabad."
        breadcrumbLabel="Contact Us"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edfaff] text-[#1a6db2] mb-4">
              <Phone className="h-6 w-6 text-[#1a6db2]" />
            </div>
            <h3 className="font-bold text-[#123d66]">Call Us Directly</h3>
            <a href={`tel:${companyDetails.phone}`} className="mt-2 block text-sm font-bold text-slate-700 hover:text-[#1a6db2]">
              {companyDetails.phone}
            </a>
            <p className="mt-1 text-xs text-slate-500">Mon - Sat: 9am - 7pm</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edfaff] text-[#1a6db2] mb-4">
              <Mail className="h-6 w-6 text-[#1a6db2]" />
            </div>
            <h3 className="font-bold text-[#123d66]">Email Inquiry</h3>
            <a href={`mailto:${companyDetails.email}`} className="mt-2 block text-sm font-bold text-slate-700 hover:text-[#1a6db2]">
              {companyDetails.email}
            </a>
            <p className="mt-1 text-xs text-slate-500">2-hour typical reply</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edfaff] text-[#1a6db2] mb-4">
              <MapPin className="h-6 w-6 text-[#1a6db2]" />
            </div>
            <h3 className="font-bold text-[#123d66]">Office Location</h3>
            <p className="mt-2 text-xs font-semibold text-slate-700 leading-snug">
              {companyDetails.address}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edfaff] text-[#1a6db2] mb-4">
              <Clock className="h-6 w-6 text-[#1a6db2]" />
            </div>
            <h3 className="font-bold text-[#123d66]">Working Hours</h3>
            <p className="mt-2 text-sm font-bold text-slate-700">{companyDetails.hours}</p>
            <p className="mt-1 text-xs text-slate-500">Sunday by appointment</p>
          </div>
        </div>

        <ContactSection />
      </div>
    </div>
  )
}
