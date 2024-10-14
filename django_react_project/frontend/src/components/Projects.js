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
            className="project-card"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.8 }}
            layout
            onClick={() => handleExpandProject(project.id)}
          >
            {/* Minimized View: Only title and image */}
            {selectedProject !== project.id && (
              <div className="project-preview">
                <motion.h3 layout>{project.title}</motion.h3> {/* Only animate layout for the whole card, not each element */}
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
                <h3>{project.title}</h3>

                {/* Description */}
                <p>{project.description}</p>

                {/* Status */}
                <p>Status: {project.status}</p>

                {/* Technology Icons */}
                <div className="technologies-row">
                  {project.technology.map(skill => (
                    <div key={skill.name} className="tech-icon-wrapper">
                      <img src={skill.icon} alt={skill.name} className="tech-icon" />
                      <span className="tooltip">{skill.name}</span> {/* Tooltip on hover */}
                    </div>
                  ))}
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
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
