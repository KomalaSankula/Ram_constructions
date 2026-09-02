import HeroSection2 from '../../components/home2/HeroSection2'
import CommercialCapabilities from '../../components/home2/CommercialCapabilities'
import CommercialMetrics from '../../components/home2/CommercialMetrics'
import CommercialProjects from '../../components/home2/CommercialProjects'
import EngineeringStandards from '../../components/home2/EngineeringStandards'
import WhyChooseUs from '../../components/home/WhyChooseUs'
import Testimonials from '../../components/home/Testimonials'
import ContactSection from '../../components/home/ContactSection'

export default function Home2() {
  return (
    <>
      {/* 01. Hero Section 2 (Built Together Skyline Hero matching reference) */}
      <HeroSection2 />

      {/* 02. Commercial & Industrial Capabilities */}
      <CommercialCapabilities />

      {/* 03. High-Impact Commercial Metrics ($85M+ Delivered Value) */}
      <CommercialMetrics />

      {/* 04. Commercial & Landmark Portfolio */}
      <CommercialProjects />

      {/* 05. Civil Engineering & Structural Rigor */}
      <EngineeringStandards />

      {/* 06. Why Choose RAM Construction */}
      <WhyChooseUs />

      {/* 07. Corporate & Client Testimonials */}
      <Testimonials />

      {/* 08. Enterprise Consultation & Contact Form */}
      <ContactSection />
    </>
  )
}
