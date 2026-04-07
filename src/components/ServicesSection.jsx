const services = [
  {
    title: 'Company Registration',
    description: 'Fast and reliable company incorporation with expert guidance at every step.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6" />
      </svg>
    ),
  },
  {
    title: 'GST Filing',
    description: 'Accurate monthly and quarterly GST filing to keep your business always compliant.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 3h10v18H7zM9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: 'Income Tax',
    description: 'Smart tax planning and return filing support for startups, SMEs, and professionals.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M5 8h14M5 16h14" />
      </svg>
    ),
  },
  {
    title: 'Trademark Registration',
    description: 'Protect your brand name and identity with smooth trademark registration services.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16M12 6v12M8 18h8" />
      </svg>
    ),
  },
  {
    title: 'ROC Compliance',
    description: 'Stay up to date with ROC filings, annual returns, and statutory compliance needs.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16v16H4zM8 9h8M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: 'Payroll & Accounting',
    description: 'Simplify payroll processing, bookkeeping, and financial reporting in one flow.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 4h12v16H6zM9 8h6M9 12h6M9 16h3" />
      </svg>
    ),
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            End-to-End Compliance Solutions
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Built for modern businesses that need speed, accuracy, and complete peace of mind.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="inline-flex rounded-lg bg-blue-50 p-3 text-blue-800 transition-colors duration-300 group-hover:bg-blue-100">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
