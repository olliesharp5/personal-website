import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; // Import react-slick for the carousel
import { motion } from 'framer-motion';

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={(e) => { e.stopPropagation(); onClick(); }}>
      › {/* You can replace this with an icon if needed */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={(e) => { e.stopPropagation(); onClick(); }}>
      ‹ {/* You can replace this with an icon if needed */}
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const handleExpandProject = (projectId) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  // Settings for react-slick carousel with custom arrows
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  return (
    <div className="content">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <motion.div
            key={project.id}
            className={`project-card ${selectedProject === project.id ? 'expanded' : ''}`}
            whileHover={selectedProject !== project.id ? { scale: 1.03 } : undefined}
            whileTap={selectedProject !== project.id ? { scale: 0.8 } : undefined}
            layout
            onClick={() => handleExpandProject(project.id)}
          >
            {/* Minimized View: Only title and image */}
            {selectedProject !== project.id && (
              <div className="project-preview">
                <div className="project-info">
                  <motion.h3 layout>{project.title}</motion.h3> {/* Only animate layout for the whole card, not each element */}
                  <motion.h5 layout className="completed-date">Completed on: {project.completed_date}</motion.h5>
                </div>
                {project.project_images.length > 0 && (
                  <motion.img
                    className="preview-image"
                    src={project.project_images[0].images} // Display first image as preview
                    alt={project.title}
                    layout="position" // Only animate the position of the image, not size
                  />
                )}
              </div>
            )}

            {/* Downward Arrow for hover indication */}
            <div className="expand-arrow">
              &#x25BC; {/* Unicode for a downward triangle/arrow */}
            </div>

            {/* Expanded View */}
            {selectedProject === project.id && (
              <motion.div
                className="expanded-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }} // Faster transition to avoid long text stretches
              >
                {/* Title */}
                <div className='title-container'>
                  <h3>{project.title}</h3>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub Repo
                  </a>
                </div>

                {/* Description */}
                <p className='project-description'>{project.description}</p>

                {/* Technology Icons */}
                <div className="technologies-container">
                  <div className="technologies-row">
                    {project.technology.map(skill => (
                      <div key={skill.name} className="tech-icon-wrapper">
                        <img src={skill.icon} alt={skill.name} className="tech-icon" />
                        <span className="tooltip">{skill.name}</span> {/* Tooltip on hover */}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Slideshow using react-slick */}
                {project.project_images.length > 1 && (
                  <div className="image-carousel">
                    <Slider {...settings}>
                      {project.project_images.map((image, index) => (
                        <div key={index}>
                          <img
                            src={image.images}
                            alt={`${project.title} image ${index + 1}`}
                            className="carousel-image"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}

                <div className='completed-expanded'>
                  Completed on: {project.completed_date}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
