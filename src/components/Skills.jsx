import './Skills.css'

const technicalSkills = [
  { name: 'HTML/CSS', icon: 'fa-brands fa-html5', level: 85, color: '#E44D26' },
  { name: 'Python', icon: 'fa-brands fa-python', level: 75, color: '#3776AB' },
  { name: 'Linux', icon: 'fa-brands fa-linux', level: 80, color: '#FCC624' },
  { name: 'Git', icon: 'fa-brands fa-git-alt', level: 78, color: '#F05032' },
  { name: 'Docker', icon: 'fa-brands fa-docker', level: 70, color: '#2496ED' },
  { name: 'AWS', icon: 'fa-brands fa-aws', level: 65, color: '#FF9900' },
  { name: 'Jenkins', icon: 'fa-solid fa-gear', level: 60, color: '#D24939' },
  { name: 'Networking', icon: 'fa-solid fa-network-wired', level: 72, color: '#00D4AA' },
]

const softSkills = [
  { name: 'Team Management', icon: 'fa-solid fa-people-group' },
  { name: 'Collaboration', icon: 'fa-solid fa-handshake' },
  { name: 'Resilience', icon: 'fa-solid fa-shield-halved' },
  { name: 'Communication', icon: 'fa-solid fa-comments' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-up">// Skills</span>
          <h2 className="section-title fade-up">My Tech Arsenal</h2>
          <p className="section-subtitle fade-up">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {technicalSkills.map((skill, i) => (
            <div className="skill-card fade-up" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="skill-icon-wrapper" style={{ background: `${skill.color}15`, color: skill.color }}>
                <i className={skill.icon}></i>
              </div>
              <h4 className="skill-name">{skill.name}</h4>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ '--fill-width': `${skill.level}%`, '--fill-color': skill.color }}></div>
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>

        <div className="soft-skills-section fade-up">
          <h3 className="soft-skills-title">
            <i className="fa-solid fa-brain"></i> Soft Skills
          </h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, i) => (
              <div className="soft-skill-chip" key={i}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
