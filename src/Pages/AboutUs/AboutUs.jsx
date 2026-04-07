import Navbar from '../../components/Navbar'
import CtaSection from '../../components/CtaSection'
import Footer from '../../components/Footer'

const AboutUs = () => {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <section className="bg-linear-to-br from-blue-950 to-blue-800 py-20 text-white sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">About Compliance World</h1>
            <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
              We are building a modern compliance experience that combines expert support with simple digital
              workflows for growing businesses.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-slate-600">
                To make business compliance transparent, reliable, and easy for founders, startups, and enterprises.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Why teams trust us</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>• Professional experts across tax, GST, and corporate compliance</li>
                <li>• Structured process with clear timelines and updates</li>
                <li>• Modern and secure document-first approach</li>
              </ul>
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
