import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './projects/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/projects/');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const handleExpandProject = (projectId) => {
    setSelectedProject(prevSelected => (prevSelected === projectId ? null : projectId));
  };

  return (
    <div className="content">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={selectedProject === project.id}
            onExpand={() => handleExpandProject(project.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
