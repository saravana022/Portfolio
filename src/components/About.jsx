import profileImg from '../assets/profile.png'
import './About.css'

const stats = [
  { number: '5+', label: 'Projects Built', icon: 'fa-diagram-project' },
  { number: '8+', label: 'Technologies', icon: 'fa-microchip' },
  { number: '1', label: 'Hackathon', icon: 'fa-trophy' },
  { number: '∞', label: 'Curiosity', icon: 'fa-lightbulb' },
]

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-up">// About Me</span>
          <h2 className="section-title fade-up">Who I Am</h2>
          <p className="section-subtitle fade-up">Get to know the person behind the code</p>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper fade-left">
            <div className="about-image-card">
              <img src={profileImg} alt="Saravanakumar R" className="about-avatar-img" />
              <div className="about-image-decoration"></div>
            </div>
          </div>

          <div className="about-text fade-right">
            <h3 className="about-headline">
              A passionate <span className="highlight">DevOps enthusiast</span> on a mission to automate everything
            </h3>
            <p className="about-description">
              I am a tech enthusiast traveling on the journey of becoming a DevOps Engineer,
              constantly upgrading and improving every day with a better thirst for knowledge.
              Currently pursuing my pre-final year BE CSE at CIET, I'm deeply fascinated by
              cloud infrastructure, CI/CD pipelines, and containerization.
            </p>
            <p className="about-description">
              My approach combines continuous learning with hands-on practice — from setting
              up Docker containers to automating deployments with Jenkins. I believe in the
              DevOps culture of collaboration, automation, and continuous improvement.
            </p>

            <div className="about-tags">
              <span className="about-tag"><i className="fa-solid fa-location-dot"></i> India</span>
              <span className="about-tag"><i className="fa-solid fa-graduation-cap"></i> BE CSE</span>
              <span className="about-tag"><i className="fa-solid fa-heart"></i> Open Source</span>
              <span className="about-tag"><i className="fa-solid fa-terminal"></i> Linux Daily Driver</span>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <div className="stat-card scale-in" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-icon">
                <i className={`fa-solid ${stat.icon}`}></i>
              </div>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
