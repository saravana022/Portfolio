import { useState } from 'react'
import './Certificates.css'
import BigData from "../assets/Certificates/BigData.jpg"
import CloudTechnology from "../assets/Certificates/CloudTechnology.jpg"
import DevOps from "../assets/Certificates/DevOps.jpg"
import Routing from "../assets/Certificates/Routing.jpg"

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { id: 1, img: BigData, name: "Big Data Foundation", info: "Professional Certification | 2024" },
    { id: 2, img: CloudTechnology, name: "Cloud Technology", info: "Cloud Infrastructure | 2023" },
    { id: 3, img: DevOps, name: "DevOps Engineering", info: "CIET Academics | 2024" },
    { id: 4, img: Routing, name: "Routing and Switching", info: "Networking Essentials | 2023" }
  ];

  return (
    <section id="certificates" className="certificates section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-up">// Credentials</span>
          <h2 className="section-title fade-up">Certifications</h2>
          <p className="section-subtitle fade-up">Official recognitions and technical validations</p>
        </div>

        <div className="certificates-gallery">
          {certificates.map((cert) => (
            <div key={cert.id} className="cert-item fade-up">
              <div className="cert-img-container">
                <img src={cert.img} alt={cert.name} className="cert-img" />
                <div className="cert-overlay">
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fa-solid fa-eye"></i> View Large
                  </button>
                </div>
              </div>
              <div className="cert-details">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-info">{cert.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="lightbox-overlay" onClick={() => setSelectedCert(null)}>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedCert(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="lightbox-image-box">
              <img src={selectedCert.img} alt={selectedCert.name} />
            </div>
            <div className="lightbox-details">
              <h3 className="lightbox-title">{selectedCert.name}</h3>
              <p className="lightbox-text">{selectedCert.info}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
