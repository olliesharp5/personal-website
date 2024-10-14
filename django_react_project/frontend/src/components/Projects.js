import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // State to track which project is expanded

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  // Handle clicking a project to expand it
  const handleExpandProject = (projectId) => {
    setSelectedProject(projectId === selectedProject ? null : projectId); // Toggle expanded view
  };

  return (
    <div className="content">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="project-card"
            layout // Enable Framer Motion layout animations
            onClick={() => handleExpandProject(project.id)} // Click to toggle expanded view
            whileHover={{ scale: 1.05 }} // Add hover effect
          >
            <motion.h3 layout>{project.title}</motion.h3>
            <motion.p layout>{project.description.slice(0, 100)}...</motion.p> {/* Short description */}

            {/* Conditionally render the expanded content */}
            {selectedProject === project.id && (
              <motion.div
                className="expanded-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p>{project.description}</p>
                <p>Status: {project.status}</p>
                <p>Technologies:</p>
                <ul>
                  {project.technology.map(skill => (
                    <li key={skill.name}>{skill.name}</li>
                  ))}
                </ul>
                {project.project_images.length > 0 && (
                  <div className="project-images">
                    {project.project_images.map(image => (
                      <img key={image.images} src={image.images} alt={project.title} />
                    ))}
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
