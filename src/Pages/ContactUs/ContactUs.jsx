import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const ContactUs = () => {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <section className="bg-linear-to-br from-blue-950 to-blue-800 py-20 text-white sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Contact Our Compliance Experts</h1>
            <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
              Tell us your requirement and we will guide you with the right compliance solution.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />
                <input
                  type="email"
                  placeholder="Business email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />
                <textarea
                  rows="4"
                  placeholder="Tell us what you need"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />
                <button
                  type="button"
                  className="w-full rounded-lg bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-800"
                >
                  Submit Request
                </button>
              </div>
            </form>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Contact Information</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>Email: support@complianceworld.com</p>
                <p>Phone: +91 90000 00000</p>
                <p>Office: Mumbai, India</p>
                <p>Working Hours: Mon - Sat, 9:00 AM to 7:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ContactUs
