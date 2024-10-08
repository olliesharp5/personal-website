import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div className="content">
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.project_url && (
              <a href={project.project_url} target="_blank" rel="noopener noreferrer">View Project</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
