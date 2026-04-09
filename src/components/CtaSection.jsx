import { useLayoutEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from '../lib/gsap'

const CtaSection = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      gsap.from('.cta-inner > *', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-inner', start: 'top 82%' },
      })

      gsap.to('.cta-glow', {
        opacity: 0.55,
        scale: 1.05,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
      <div className="cta-glow pointer-events-none absolute left-1/2 top-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/25 blur-[100px] opacity-40" />

      <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="cta-inner rounded-3xl border border-white/10 bg-white/5 px-6 py-14 shadow-xl shadow-slate-950/40 sm:px-10 sm:py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready for a calmer compliance year?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Tell us what you are filing next — we will return a clear plan, timeline, and single owner for delivery.
          </p>
          <NavLink
            to="/contact-us"
            className="mt-8 inline-flex rounded-xl bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition hover:bg-indigo-700"
          >
            Talk to us
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
