import React, { useState } from 'react';
import '../App.css';

// Import images
import techBlogImg from '../assets/techblog.png';
import sqlEmployeeTrackerImg from '../assets/sqlemployeetracker.png';
import reactPortfolioImg from '../assets/reactportfolio.png';
import ecomBackendImg from '../assets/ecommercebackend.png';
import weatherForecastImg from '../assets/weatherforecast.png';

const myProjects = [
  {
    projImg: techBlogImg,
    title: 'Blogging Application',
    deployLink: 'https://shrouded-beach-06198-280fa194f5a4.herokuapp.com/',
    githubLink: 'https://github.com/Cocho011/blogginbloggyco',
  },
  {
    projImg: sqlEmployeeTrackerImg,
    title: 'SQL Employee Tracker',
    deployLink: 'https://drive.google.com/file/d/16DQcPOkEDb00lCNTFJnYeXU2uc_QFd3p/view?usp=sharing',
    githubLink: 'https://github.com/Cocho011/SQLemployeetrackerCO?tab=readme-ov-file#walkthrough',
  },
  {
    projImg: reactPortfolioImg,
    title: 'React Portfolio',
    deployLink: 'https://github.com/Cocho011/REACTOfolio',
    githubLink: 'https://github.com/Cocho011/REACTOfolio',
  },
  {
    projImg: ecomBackendImg,
    title: 'E-Commerce Backend',
    deployLink: 'https://github.com/Cocho011/EComBkndCO',
    githubLink: 'https://github.com/Cocho011/EComBkndCO',
  },
  {
    projImg: weatherForecastImg,
    title: 'Weather Dashboard',
    deployLink: 'https://github.com/Cocho011/weather-forecast',
    githubLink: 'https://github.com/Cocho011/weather-forecast',
  },
];

function Portfolio() {
  const [projects] = useState(myProjects);

  return (
    <section className="section">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.projImg} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
              Deployed Site
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
