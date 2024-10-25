import React from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';

const ProjectCard = ({ project, isExpanded, onExpand }) => (
  <motion.div
    className={`project-card ${isExpanded ? 'expanded' : ''}`}
    onClick={onExpand}
    whileHover={!isExpanded ? { scale: 1.03 } : undefined}
    whileTap={!isExpanded ? { scale: 0.8 } : undefined}
    layout
  >
    {/* Minimized View */}
    {!isExpanded && (
      <div className="project-preview">
        <div className="project-info">
          <motion.h3 layout>{project.title}</motion.h3>
          <motion.h5 layout className="completed-date">Completed on: {project.completed_date}</motion.h5>
        </div>
        {project.project_images.length > 0 && (
          <motion.img
            className="preview-image"
            src={project.project_images[0].images}
            alt={project.title}
            layout="position"
          />
        )}
      </div>
    )}

    <div className="expand-arrow">&#x25BC;</div>

    {/* Expanded View */}
    {isExpanded && (
      <motion.div
        className="expanded-content"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className='title-container'>
          <h3>{project.title}</h3>
          <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="repo-link" onClick={(e) => e.stopPropagation()}>
            GitHub Repo
          </a>
        </div>

        <p className='project-description'>{project.description}</p>

        <div className="technologies-container">
          {project.technology.map(skill => (
            <div key={skill.name} className="tech-icon-wrapper">
              <img src={skill.icon} alt={skill.name} className="tech-icon" />
              <span className="tooltip">{skill.name}</span>
            </div>
          ))}
        </div>

        {project.project_images.length > 1 && <Carousel images={project.project_images} title={project.title} />}

        <div className='completed-expanded'>Completed on: {project.completed_date}</div>
      </motion.div>
    )}
  </motion.div>
);

export default ProjectCard;
