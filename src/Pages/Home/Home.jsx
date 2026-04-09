import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import PartnersSection from '../../components/PartnersSection'
import ServicesSection from '../../components/ServicesSection'
import FeaturesSection from '../../components/FeaturesSection'
import HowItWorksSection from '../../components/HowItWorksSection'
import TrustSection from '../../components/TrustSection'
import InsightsSection from '../../components/InsightsSection'
import FaqSection from '../../components/FaqSection'
import CtaSection from '../../components/CtaSection'
import Footer from '../../components/Footer'

const SectionDivider = () => (
  <div className="pointer-events-none py-1">
    <div className="mx-auto h-px w-[min(92%,76rem)] bg-linear-to-r from-transparent via-white/15 to-transparent" />
  </div>
)

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider />
        <PartnersSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <FeaturesSection />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <TrustSection />
        <SectionDivider />
        <InsightsSection />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
