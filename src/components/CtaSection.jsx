import { NavLink } from 'react-router-dom'

const CtaSection = () => {
  return (
    <section className="bg-blue-950 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Start Your Business Journey Today</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Get expert compliance support for registration, tax, GST, and ongoing regulatory filings.
        </p>
        <NavLink
          to="/contact-us"
          className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
        >
          Get Started
        </NavLink>
      </div>
    </section>
  )
}

export default CtaSection
