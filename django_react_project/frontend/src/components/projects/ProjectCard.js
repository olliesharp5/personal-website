import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from './Carousel';

const ProjectCard = ({ project, isExpanded, onExpand }) => (
    <motion.div
        className={`project-card ${isExpanded ? 'expanded' : ''}`}
        onClick={onExpand}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        whileHover={!isExpanded ? { scale: 1.05, transition: { duration: 0.1 } } : {}}
    >
        {/* Minimized View */}
        {!isExpanded && (
            <div className="project-preview">
                <div className="project-info">
                    <h3>{project.title}</h3>
                    <h5 className="completed-date">Completed on: {project.completed_date}</h5>
                </div>
                {project.project_images.length > 0 && (
                    <img
                        className="preview-image"
                        src={project.project_images[0].images}
                        alt={project.title}
                    />
                )}
            </div>
        )}

        {/* Expanded Content */}
        <AnimatePresence>
            {isExpanded && (
                <motion.div
                    className="expanded-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                >
                    <div className="title-container">
                        <h2>{project.title}</h2>
                    </div>
                    <div className='repo-container'>
                        <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="coloured-button repo-link"
                            onClick={(e) => e.stopPropagation()}
                        >
                            GitHub Repo
                        </a>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="technologies-container">
                        {project.technology.map((skill) => (
                            <div key={skill.name} className="tech-icon-wrapper">
                                <img src={skill.icon} alt={skill.name} className="tech-icon" />
                                <span className="tooltip">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {project.project_images.length > 1 && (
                        <Carousel images={project.project_images} title={project.title} />
                    )}

                    <div className="completed-expanded">
                        Completed on: {project.completed_date}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);

export default ProjectCard;
