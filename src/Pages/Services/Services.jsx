import Navbar from '../../components/Navbar'
import CtaSection from '../../components/CtaSection'
import Footer from '../../components/Footer'
import ServicesSection from '../../components/ServicesSection'

const Services = () => {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <section className="bg-linear-to-br from-blue-950 to-blue-800 py-20 text-white sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Compliance Services for Every Stage of Business</h1>
            <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
              From company setup to tax and ROC filings, our team helps you stay compliant with confidence.
            </p>
          </div>
        </section>

        <ServicesSection />

        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                'Dedicated compliance experts',
                'Paperless documentation process',
                'Deadline reminders and status tracking',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default Services
