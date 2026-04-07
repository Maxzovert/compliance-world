const footerLinks = {
  Services: ['Company Registration', 'GST Filing', 'Income Tax', 'Trademark Registration'],
  Company: ['About Us', 'Careers', 'Blog', 'Contact'],
  Legal: ['Privacy Policy', 'Terms & Conditions', 'Refund Policy', 'Disclaimer'],
}

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 py-14 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-xl font-bold text-white">Compliance World</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Modern compliance platform to help startups and enterprises stay fully compliant with confidence.
          </p>
          <div className="mt-5 space-y-1 text-sm text-slate-300">
            <p>Email: support@complianceworld.com</p>
            <p>Phone: +91 90000 00000</p>
            <p>Address: Mumbai, India</p>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">{title}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {links.map((link) => (
                <li key={link} className="transition-colors duration-300 hover:text-white">
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-slate-700 px-4 pt-6 text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
          <p>© 2026 Compliance World. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/" className="transition-colors duration-300 hover:text-white">
              LinkedIn
            </a>
            <a href="/" className="transition-colors duration-300 hover:text-white">
              X
            </a>
            <a href="/" className="transition-colors duration-300 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
