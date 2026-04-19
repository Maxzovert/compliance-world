import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

const steps = [
  {
    number: '01',
    title: 'Choose your service',
    description: 'Map the exact filings, registrations, or advisory scope you need right now.',
  },
  {
    number: '02',
    title: 'Share details securely',
    description: 'Upload documents through encrypted channels with guided checklists.',
  },
  {
    number: '03',
    title: 'We execute & update you',
    description: 'Experts file, reconcile, and report back with plain-language status notes.',
  },
]

const HowItWorksSection = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      gsap.from('.hiw-head > *', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.hiw-head', start: 'top 82%' },
      })

      gsap.from('.hiw-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '.hiw-track', start: 'top 75%' },
      })

      gsap.from('.hiw-step', {
        y: 40,
        opacity: 0,
        duration: 0.65,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.hiw-steps', start: 'top 78%' },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hiw-head mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Three calm steps. Full ownership.</h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            A simple front door — rigorous execution behind it.
          </p>
        </div>

        <div className="hiw-track relative mt-16 hidden px-8 md:block">
          <div className="hiw-line absolute left-8 right-8 top-7 h-px bg-linear-to-r from-indigo-500/40 via-cyan-400/50 to-indigo-500/40" />
        </div>

        <div className="hiw-steps mt-10 grid gap-8 md:mt-6 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className="hiw-step relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:pt-10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-indigo-950/50">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
