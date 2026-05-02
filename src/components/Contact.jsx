import { useState } from 'react'
import './Contact.css'

const contactInfo = [
  { icon: 'fa-solid fa-envelope', label: 'Email', value: 'saravan6702@gmail.com', href: 'mailto:saravan6702@gmail.com' },
  { icon: 'fa-brands fa-github', label: 'GitHub', value: 'saravana022', href: 'https://github.com/saravana022' },
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', value: 'saravanakumar022', href: 'https://linkdin.com/in/saravanakumar022' },
  { icon: 'fa-solid fa-code', label: 'LeetCode', value: 'saravanakumar022', href: 'https://leetcode.com/saravanakumar022' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/xjglkjya', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('sent')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 3000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-up">// Contact</span>
          <h2 className="section-title fade-up">Get In Touch</h2>
          <p className="section-subtitle fade-up">Have a question or want to work together? Drop me a message!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-left">
            <h3 className="contact-info-title">Let's connect</h3>
            <p className="contact-info-desc">
              I'm always open to discussing new opportunities, interesting projects, or just having a tech conversation.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, i) => (
                <a href={info.href} target="_blank" rel="noreferrer" className="contact-card" key={i}>
                  <div className="contact-card-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div>
                    <span className="contact-card-label">{info.label}</span>
                    <span className="contact-card-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form fade-right" action="https://formspree.io/f/xjglkjya" method="post" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What's this about?" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'sending'}>
              <i className={`fa-solid ${status === 'sent' ? 'fa-check' : status === 'sending' ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : status === 'error' ? 'Error! Try again' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
