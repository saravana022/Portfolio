import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-up">// Projects</span>
          <h2 className="section-title fade-up">Featured Work</h2>
          <p className="section-subtitle fade-up">Sample projects showcasing my skills and learning</p>
        </div>

        {/* You can add or remove cards here easily */}
        <div className="projects-grid">
          
          {/* Project 1 */}
          <div className="project-card fade-up">
            <div className="project-thumbnail" style={{ }}>
              {/* <i className="fa-solid fa-gears"></i> */}
            </div>
            <div className="project-content">
              <h3 className="project-title">CI/CD Pipeline Automation</h3>
              <p className="project-desc">
                Automated build, test, and deployment pipeline using Jenkins, Docker, and AWS EC2. 
                Reduced deployment time by 60% with multi-stage Docker builds.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Jenkins</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Git</span>
              </div>
              <div className="project-actions">
                <a href="#" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
                <a href="https://github.com/saravana022" className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card fade-up">
            <div className="project-thumbnail" style={{ background: 'linear-gradient(135deg, #FF9900, #ffb84d)' }}>
              <i className="fa-solid fa-cloud"></i>
            </div>
            <div className="project-content">
              <h3 className="project-title">Cloud Infrastructure Setup</h3>
              <p className="project-desc">
                Designed and deployed scalable cloud infrastructure on AWS with EC2, S3, VPC, and IAM. 
                Implemented security best practices.
              </p>
              <div className="project-tech">
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Linux</span>
                <span className="tech-tag">Networking</span>
                <span className="tech-tag">Python</span>
              </div>
              <div className="project-actions">
                <a href="#" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
                <a href="https://github.com/saravana022" className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card fade-up">
            <div className="project-thumbnail" style={{ background: 'linear-gradient(135deg, #2496ED, #5bb5f5)' }}>
              <i className="fa-brands fa-docker"></i>
            </div>
            <div className="project-content">
              <h3 className="project-title">Docker Containerization</h3>
              <p className="project-desc">
                Containerized multiple microservices with Docker and Docker Compose. 
                Created optimized Dockerfiles with multi-stage builds.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Linux</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Git</span>
              </div>
              <div className="project-actions">
                <a href="#" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
                <a href="https://github.com/saravana022" className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card fade-up">
            <div className="project-thumbnail" style={{ background: 'linear-gradient(135deg, #FCC624, #ffe066)' }}>
              <i className="fa-brands fa-linux"></i>
            </div>
            <div className="project-content">
              <h3 className="project-title">Linux Server Administration</h3>
              <p className="project-desc">
                Set up and managed Linux servers for web hosting. Configured Nginx, firewall rules, 
                and SSH hardening.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Linux</span>
                <span className="tech-tag">Networking</span>
                <span className="tech-tag">Python</span>
              </div>
              <div className="project-actions">
                <a href="#" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
                <a href="https://github.com/saravana022" className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card fade-up">
            <div className="project-thumbnail" style={{ background: 'linear-gradient(135deg, #FF0000, #ff4444)' }}>
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="project-content">
              <h3 className="project-title">Portfolio Website</h3>
              <p className="project-desc">
                This very portfolio! Built with React and Vite, featuring smooth animations and 
                a YouTube-inspired design.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">Git</span>
              </div>
              <div className="project-actions">
                <a href="#" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
                <a href="https://github.com/saravana022" className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card fade-up">
            <div className="project-thumbnail" style={{ background: 'linear-gradient(135deg, #3776AB, #6ba3d6)' }}>
              <i className="fa-brands fa-python"></i>
            </div>
            <div className="project-content">
              <h3 className="project-title">Python Automation Scripts</h3>
              <p className="project-desc">
                Collection of Python scripts for automating repetitive tasks including file organization 
                and system monitoring.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Linux</span>
                <span className="tech-tag">Git</span>
              </div>
              <div className="project-actions">
                <a href="#" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
                <a href="https://github.com/saravana022" className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
