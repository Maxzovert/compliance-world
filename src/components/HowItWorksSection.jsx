const steps = [
  {
    number: '01',
    title: 'Choose Service',
    description: 'Select the exact compliance service your business needs.',
  },
  {
    number: '02',
    title: 'Submit Details',
    description: 'Share your documents and details through a secure process.',
  },
  {
    number: '03',
    title: 'We Handle Everything',
    description: 'Our experts execute filings and keep you updated at every step.',
  },
]

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, Transparent, and Reliable
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
