const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 text-white"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-200 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="max-w-2xl space-y-7">
          <p className="inline-flex rounded-full border border-blue-200/30 bg-blue-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100">
            Trusted Compliance Partner
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Start &amp; Manage Your Business Compliance Seamlessly
          </h1>
          <p className="max-w-xl text-base text-blue-100 sm:text-lg">
            Company registration, GST, tax filing, and more — all in one place
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-lg"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-lg lg:max-w-none">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white/10 p-4 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">
                  Compliance Health
                </p>
                <p className="mt-2 text-2xl font-bold">98%</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">Tasks Automated</p>
                <p className="mt-2 text-2xl font-bold">1,200+</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">Upcoming Deadlines</p>
              <div className="mt-4 space-y-3">
                {['GST Filing - Apr 20', 'TDS Return - Apr 30', 'ROC Update - May 10'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2">
                    <span className="text-sm">{item}</span>
                    <span className="h-2 w-2 rounded-full bg-cyan-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
