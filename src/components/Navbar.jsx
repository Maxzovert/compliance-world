import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Startup', to: '/' },
  { label: 'Registrations', to: '/services' },
  { label: 'Trademark', to: '/services' },
  { label: 'GST', to: '/services' },
  { label: 'Income Tax', to: '/services' },
  { label: 'MCA', to: '/services' },
  { label: 'Compliance', to: '/about-us' },
  { label: 'Global', to: '/about-us' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-linear-to-r from-white via-blue-50 to-white shadow-sm">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="shrink-0 text-base font-semibold tracking-tight text-blue-950 transition-colors duration-300 hover:text-blue-700 sm:text-lg"
        >
          Compliance World
        </NavLink>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `group inline-flex items-center gap-1 text-xs font-medium transition-colors duration-300 hover:text-blue-900 ${
                  isActive ? 'text-blue-900' : 'text-slate-600'
                }`
              }
            >
              {item.label}
              <span className="text-[9px] text-blue-500 transition-colors duration-300 group-hover:text-blue-800">▼</span>
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact-us"
          className="rounded-full border border-white/70 bg-white px-4 py-1.5 text-xs font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 sm:px-5 sm:text-sm"
        >
          Login
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar