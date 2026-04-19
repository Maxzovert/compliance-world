import { useLayoutEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from '../lib/gsap'

const mainServices = [
  {
    title: 'Company Registration',
    description: 'Incorporation and statutory setup with clear milestones and expert guidance.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6" />
      </svg>
    ),
  },
  {
    title: 'GST Filing',
    description: 'Monthly and quarterly GST cycles kept accurate so you stay audit-ready.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 3h10v18H7zM9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: 'Income Tax',
    description: 'Planning and return filing for businesses and professionals — without the noise.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M5 8h14M5 16h14" />
      </svg>
    ),
  },
  {
    title: 'ROC Compliance',
    description: 'Annual returns, board filings, and statutory updates on schedule.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16v16H4zM8 9h8M8 13h8M8 17h5" />
      </svg>
    ),
  },
]

const ServicesSection = () => {
  const rootRef = useRef(null)
  const headRef = useRef(null)
  const gridRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    const head = headRef.current
    const grid = gridRef.current
    if (!root || !head || !grid) return

    const ctx = gsap.context(() => {
      const headEls = head.querySelectorAll(':scope > *')
      const cards = grid.querySelectorAll('.svc-card')

      gsap.fromTo(
        headEls,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: root,
            start: 'top 88%',
            once: true,
          },
        },
      )

      gsap.fromTo(
        cards,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: grid,
            start: 'top 90%',
            once: true,
          },
        },
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={rootRef} className="relative bg-slate-950 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Services</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            Core compliance services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            The main filings most businesses need — executed in one place with a single accountable team.
          </p>
          <NavLink
            to="/services"
            className="mt-6 inline-flex text-sm font-semibold text-cyan-300 underline-offset-4 transition hover:text-cyan-200 hover:underline"
          >
            Browse all services
          </NavLink>
        </div>

        <div ref={gridRef} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mainServices.map((service) => (
            <article
              key={service.title}
              className="svc-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl" />
              </div>
              <div className="relative inline-flex rounded-xl bg-indigo-500/20 p-3 text-indigo-200 ring-1 ring-indigo-400/30 transition-transform duration-300 group-hover:scale-105">
                {service.icon}
              </div>
              <h3 className="relative mt-4 text-lg font-semibold text-white">{service.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
