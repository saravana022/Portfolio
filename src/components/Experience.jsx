import './Experience.css'

const timeline = [
  {
    type: 'education',
    title: 'BE Computer Science & Engineering',
    org: 'CIET (Coimbatore Institute of Engineering & Technology)',
    period: '2023 — Present (Pre-Final Year)',
    desc: 'Currently pursuing Bachelor of Engineering in CSE. Actively participating in hackathons and building projects around DevOps and cloud technologies.',
    icon: 'fa-graduation-cap',
  },
  {
    type: 'achievement',
    title: 'Niral Thiruvizha 3.0 — Hackathon',
    org: 'State-Level Hackathon',
    period: '2024',
    desc: 'Participated in Niral Thiruvizha 3.0, a state-level hackathon. Collaborated with a team to build innovative solutions under time constraints, showcasing problem-solving and teamwork.',
    icon: 'fa-trophy',
  },
  {
    type: 'education',
    title: 'HSLC — 85.3%',
    org: 'Government Higher Secondary School',
    period: '2021 — 2023',
    desc: 'Completed Higher Secondary School Leaving Certificate with 85.3%, building a strong foundation in science and mathematics.',
    icon: 'fa-school',
  },
  {
    type: 'education',
    title: 'SSLC — 96%',
    org: 'Government Higher Secondary School',
    period: '2021',
    desc: 'Secured an outstanding 96% in SSLC, demonstrating academic excellence and dedication from an early stage.',
    icon: 'fa-award',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-up">// Journey</span>
          <h2 className="section-title fade-up">Education & Achievements</h2>
          <p className="section-subtitle fade-up">My academic journey and milestones</p>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} fade-up`} key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="timeline-dot">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div className="timeline-card">
                <span className={`timeline-type ${item.type}`}>
                  {item.type === 'education' ? 'Education' : 'Achievement'}
                </span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">
                  <i className="fa-solid fa-building-columns"></i> {item.org}
                </p>
                <p className="timeline-period">
                  <i className="fa-regular fa-calendar"></i> {item.period}
                </p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  )
}
