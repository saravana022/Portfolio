import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { id: 'home', label: 'Home', icon: 'fa-house' },
  { id: 'about', label: 'About', icon: 'fa-user' },
  { id: 'skills', label: 'Skills', icon: 'fa-code' },
  { id: 'projects', label: 'Projects', icon: 'fa-diagram-project' },
  { id: 'experience', label: 'Journey', icon: 'fa-road' },
  { id: 'certificates', label: 'Certificates', icon: 'fa-medal' },
  { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => document.getElementById(l.id))
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a className="navbar-logo" onClick={() => scrollTo('home')}>
        
          <span className="logo-text">Saravanakumar</span>
          
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                <i className={`fa-solid ${link.icon}`}></i>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          <a className="btn btn-primary btn-sm nav-resume" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>
            <i className="fa-solid fa-paper-plane"></i> Hire Me
          </a>

          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
