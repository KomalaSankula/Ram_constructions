import HeroSection from '../../components/home/HeroSection'
import AboutPreview from '../../components/home/AboutPreview'
import CounterSection from '../../components/home/CounterSection'
import ServicesPreview from '../../components/home/ServicesPreview'
import ProjectsPreview from '../../components/home/ProjectsPreview'
import WhyChooseUs from '../../components/home/WhyChooseUs'
import Testimonials from '../../components/home/Testimonials'
import GalleryPreview from '../../components/home/GalleryPreview'
import ProcessSection from '../../components/home/ProcessSection'
import TeamSection from '../../components/home/TeamSection'
import BlogPreview from '../../components/home/BlogPreview'
import ContactSection from '../../components/home/ContactSection'

export default function Home() {
  return (
    <>
      {/* 01. Hero / Homepage */}
      <HeroSection />

      {/* 02. About Us */}
      <AboutPreview />

      {/* 03. Animated Impact Counter */}
      <CounterSection />

      {/* 04. Our Services */}
      <ServicesPreview />

      {/* 04. Projects */}
      <ProjectsPreview />

      {/* 05. Why Choose Us */}
      <WhyChooseUs />

      {/* 06. Testimonials */}
      <Testimonials />

      {/* 07. Gallery */}
      <GalleryPreview />

      {/* 08. Our Process */}
      <ProcessSection />

      {/* 09. Our Team */}
      <TeamSection />

      {/* 10. Blog / News */}
      <BlogPreview />

      {/* 11. Contact Us */}
      <ContactSection />
    </>
  )
}
