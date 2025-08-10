import React from 'react';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      title: "Book Tracking Application",
      image: "bookworm.png",
      description: "Developed a full-stack web application using Node.js, Express, PostgreSQL, and EJS templates to track reading history and book ratings. Implemented CRUD operations. Reduced book entry time by 40% through API integration that auto-fetches cover art. Deployed and managed canisters using dfx CLI; implemented robust update and query methods to maintain persistent, secure ledger functionality.",
      technologies: ["Node.js", "JavaScript", "PostgreSQL", "REST APIs", "EJS"],
      link: ""
    },
    {
      title: "Decentralized Banking Application (DeFi DApp)",
      image: "DApp.jpeg",
      description: `Built a secure decentralized banking app using Motoko and the Internet Computer Protocol,
        allowing users to deposit, withdraw, and view their balances.
        Connected frontend UI (HTML/CSS/JS) with backend canisters via @dfinity/agent, ensuring real-time
        synchronization between the user interface and on-chain state.
        Deployed and managed canisters using dfx CLI; implemented robust update and query methods to
        maintain persistent, secure ledger functionality.`,
      technologies: ["Motoko", "JavaScript", "DFINITY SDK"],
      link: ""
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${index % 2 === 1 ? 'reverse-layout' : ''}`}>
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
              />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              {project.link && (
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    View Project →
                </a>
                )}
            </div>
          </div>
        ))}
        <p>Building new projects, coming soon (✿◡‿◡)</p>
        <p>Meanwhile, check out my <a href='https://github.com/davebhakti' target='_blank' className='project-link'>GitHub</a>!</p>
      </div>
    </section>
  );
};

export default Projects;