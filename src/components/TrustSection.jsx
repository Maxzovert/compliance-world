const stats = [
  { label: 'Businesses Served', value: '1000+' },
  { label: 'GST Filings', value: '500+' },
  { label: 'Registrations', value: '300+' },
]

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Founder, FinEdge Labs',
    quote:
      'Compliance World made our company registration and GST process completely stress-free and fast.',
  },
  {
    name: 'Naina Gupta',
    role: 'Director, Bloom Retail',
    quote: 'Their proactive reminders and expert handling helped us never miss a filing deadline.',
  },
  {
    name: 'Rahul Verma',
    role: 'Co-founder, PixelMint',
    quote: 'Excellent support team and clean process. We now manage all compliance through one partner.',
  },
]

const TrustSection = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <p className="text-4xl font-bold text-blue-900">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">What Our Clients Say</h3>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm leading-7 text-slate-600">"{item.quote}"</p>
                <p className="mt-5 text-base font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
