import { Leaf, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/detect', label: 'Disease Detection' },
  { to: '/advisor', label: 'AI Advisor' },
  { to: '/about', label: 'About' },
]

export default function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="PlantCare AI home">
          <span className="brand-mark"><Leaf size={19} strokeWidth={2.5} /></span>
          <span>PlantCare<span className="brand-ai"> AI</span></span>
        </Link>
        <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {label}
            </NavLink>
          ))}
          <NavLink to="/detect" onClick={closeMenu} className="nav-cta">Try it free <span aria-hidden="true">↗</span></NavLink>
        </nav>
      </div>
    </header>
  )
}
