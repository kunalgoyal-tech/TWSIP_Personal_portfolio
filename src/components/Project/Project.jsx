import React from 'react';
import landing_page from '../../assets/images/hike_landing_page.jpeg';
import bakeryWebsiteImage from '../../assets/images/bakery_website.jpeg';
import blog from '../../assets/images/blog.jpg';
import portfolio from '../../assets/images/portfolio_image.jpeg';
import './Project.css'

function Projects() {
  const projects = [
    { 
      title: 'travel & tourism Landing page', 
      image: landing_page,
      description: 'A responsive portfolio website showcasing my work and skills.' 
    },
    { 
      title: 'Bakery Website', 
      image: bakeryWebsiteImage, 
      description: 'A website for a bakery, featuring products and contact information.' 
    },
    { 
      title: 'Responsive Portfolio', 
      image: portfolio, 
      description: 'A simple to-do list application to manage tasks.' 
    },
    { 
        title: 'Blog Generator', 
        image: blog,
        description: 'A responsive portfolio website showcasing my work and skills.' 
      },
      // { 
      //   title: 'bakery Website', 
      //   image: bakeryWebsiteImage,
      //   description: 'A responsive portfolio website showcasing my work and skills.' 
      // },
    // Add more projects as needed
  ];

  return (
    <div className="project" id="project">
      <div className="project-content section-content">
        <p className="section-subtitle">My Projects</p>
        <h2 className="h3 section-title">Explore My Work</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {/* <a href="#" className="project-link">View Project</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
