import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import ServicesSection from '../../components/ServicesSection'
import HowItWorksSection from '../../components/HowItWorksSection'
import TrustSection from '../../components/TrustSection'
import CtaSection from '../../components/CtaSection'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <TrustSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home