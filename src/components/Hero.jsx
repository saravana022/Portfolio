import { useState, useEffect } from 'react'
import './Hero.css'

const roles = ['DevOps Engineer', 'Cloud Enthusiast', 'Linux Lover', 'CI/CD Builder', 'Tech Explorer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1))
      }, isDeleting ? 40 : 80)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content container">
        <div className="hero-badge fade-up">
          <span className="badge-dot"></span>
          Open to Opportunities
        </div>

        <h1 className="hero-greeting fade-up">
          Hi, I'm <span className="hero-name">Saravanakumar</span>
        </h1>

        <div className="hero-role fade-up">
          <span className="role-prefix">Aspiring </span>
          <span className="role-typed">{text}</span>
          <span className="role-cursor">|</span>
        </div>

        <p className="hero-desc fade-up">
          A tech enthusiast traveling on the journey of becoming a DevOps Engineer,
          constantly upgrading and improving every day with a better thirst for knowledge.
        </p>

        <div className="hero-cta fade-up">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            <i className="fa-solid fa-rocket"></i> View My Work
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
            <i className="fa-solid fa-comments"></i> Let's Connect
          </button>
        </div>

        <div className="hero-socials fade-up">
          <a href="https://github.com/saravana022" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkdin.com/in/saravanakumar022" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:saravan6702@gmail.com" className="social-icon" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://leetcode.com/saravanakumar022" target="_blank" rel="noreferrer" className="social-icon" aria-label="LeetCode">
            <i className="fa-solid fa-code"></i>
          </a>
        </div>

        <div className="hero-scroll-indicator">
          <div className="mouse">
            <div className="mouse-wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  )
}
