import './Footer.css'

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="footer-logo" onClick={() => scrollTo('home')}>
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Saravanakumar</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">Aspiring DevOps Engineer | Building the future, one pipeline at a time.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'].map(id => (
                <li key={id}>
                  <a onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-socials-section">
            <h4>Connect</h4>
            <div className="footer-socials">
              <a href="https://github.com/saravana022" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/saravanakumar022/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="mailto:saravan6702@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
              <a href="https://leetcode.com/saravanakumar022" target="_blank" rel="noreferrer" aria-label="LeetCode"><i className="fa-solid fa-code"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Saravanakumar R. All rights reserved.</p>
          <p className="footer-built">
            Built with <span className="heart">❤️</span> using React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
