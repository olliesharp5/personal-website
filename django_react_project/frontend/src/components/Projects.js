import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './projects/ProjectCard';
import API_BASE_URL from '../config';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/projects/`);
        const sortedProjects = response.data.sort((a, b) => {
          const dateA = a.completed_date ? new Date(a.completed_date) : new Date(0);
          const dateB = b.completed_date ? new Date(b.completed_date) : new Date(0);
          return dateB - dateA;
        });
        setProjects(sortedProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleExpandProject = (projectId) => {
    setSelectedProject(prevSelected => (prevSelected === projectId ? null : projectId));
  };

  return (
    <div className="content">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {loading ? (
          // Show spinner inside projects-grid while loading
          <div className="spinner-container">
            <div className="large-spinner"></div>
          </div>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={selectedProject === project.id}
              onExpand={() => handleExpandProject(project.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
