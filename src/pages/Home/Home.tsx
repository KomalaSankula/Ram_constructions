import HeroSection from '../../components/home/HeroSection'
import AboutPreview from '../../components/home/AboutPreview'
import CounterSection from '../../components/home/CounterSection'
import ServicesPreview from '../../components/home/ServicesPreview'
import ProjectsPreview from '../../components/home/ProjectsPreview'
import WhyChooseUs from '../../components/home/WhyChooseUs'
import Testimonials from '../../components/home/Testimonials'
import ProcessSection from '../../components/home/ProcessSection'
import TeamSection from '../../components/home/TeamSection'
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

      {/* 05. Projects */}
      <ProjectsPreview />

      {/* 06. Why Choose Us */}
      <WhyChooseUs />

      {/* 07. Testimonials */}
      <Testimonials />

      {/* 08. Our Process */}
      <ProcessSection />

      {/* 09. Our Team */}
      <TeamSection />

      {/* 10. Contact Us */}
      <ContactSection />
    </>
  )
}
