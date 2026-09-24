import './Projects.css'

const projectsData = [
  {
    id: 'skillsphere',
    title: 'SkillSphere',
    desc: 'Domain-centric college e-learning platform transforming traditional student clubs into structured learning ecosystems with hands-on projects, skill paths, and senior mentorship.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveDemo: 'https://github.com/saravana022/SkillSphere',
    github: 'https://github.com/saravana022/SkillSphere.git',
    icon: 'fa-solid fa-graduation-cap',
    bg: 'linear-gradient(135deg, #4F46E5, #7C3AED)'
  },
  {
    id: 'steadyvox',
    title: 'SteadyVox',
    desc: 'Audio processing and voice stabilization platform built to filter ambient noise in real time, delivering high-clarity voice streams for communications applications.',
    tech: ['Python', 'WebRTC', 'FastAPI', 'Docker', 'React'],
    liveDemo: 'https://github.com/saravana022/SteadyVox',
    github: 'https://github.com/saravana022/SteadyVox.git',
    icon: 'fa-solid fa-microphone-lines',
    bg: 'linear-gradient(135deg, #059669, #10B981)'
  },
  {
    id: 'cicd-monitored-microservice',
    title: 'CI/CD Monitored Microservice',
    desc: 'Containerized REST API automated via GitHub Actions pipelines, exporting Prometheus metrics (/metrics) and monitored via a live Grafana dashboard for request rates, latency, and uptime.',
    tech: ['GitHub Actions', 'Docker', 'Prometheus', 'Grafana', 'Node.js'],
    liveDemo: 'https://github.com/saravana022',
    github: 'https://github.com/saravana022',
    icon: 'fa-solid fa-chart-line',
    bg: 'linear-gradient(135deg, #FF9900, #FF5722)'
  },
  {
    id: 'self-healing-docker-app',
    title: 'Self-Healing Dockerized App',
    desc: 'Multi-container web app orchestrated with Docker Compose, cAdvisor, and Prometheus, triggering automated Alertmanager notifications when system CPU, memory, or error thresholds breach.',
    tech: ['GitHub Actions', 'Docker Compose', 'Prometheus', 'Grafana', 'Alertmanager', 'cAdvisor'],
    liveDemo: 'https://github.com/saravana022',
    github: 'https://github.com/saravana022',
    icon: 'fa-solid fa-shield-halved',
    bg: 'linear-gradient(135deg, #2496ED, #00C853)'
  },
  {
    id: 'mindsnap',
    title: 'MindSnap',
    status: 'In Building',
    desc: 'Smart productivity and note-capturing platform engineered for seamless idea organization and rapid workflow mental snapshots. Currently under active development.',
    tech: ['React', 'Python', 'FastAPI', 'Tailwind CSS', 'Docker'],
    liveDemo: 'https://github.com/saravana022',
    github: 'https://github.com/saravana022',
    icon: 'fa-solid fa-brain',
    bg: 'linear-gradient(135deg, #EC4899, #8B5CF6)'
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    desc: 'Developer portfolio built with React and Vite, featuring smooth scroll animations, interactive particle background, light/dark theme toggle, and YouTube-inspired UI.',
    tech: ['React', 'Vite', 'CSS3', 'Netlify', 'Git'],
    liveDemo: 'https://saravana022.netlify.app/',
    github: 'https://github.com/saravana022/Portfolio.git',
    icon: 'fa-solid fa-globe',
    bg: 'linear-gradient(135deg, #FF0000, #ff4444)'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-up">// Projects</span>
          <h2 className="section-title fade-up">Featured Work</h2>
          <p className="section-subtitle fade-up">Projects showcasing software engineering, DevOps automation, and monitoring</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card fade-up">
              <div className="project-thumbnail" style={{ background: project.bg }}>
                {project.status && <span className="status-badge">{project.status}</span>}
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.liveDemo} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                  </a>
                  <a href={project.github} className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

