import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/skills/')
      .then(response => {
        setSkills(response.data);
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
      });
  }, []);

  return (
    <div className="content">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <motion.div 
            key={skill.id}
            className="skill-item"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: skill.id * 0.2 }}
          >
            <div className="skill-header">
              <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
              <h3>{skill.name}</h3>
            </div>
            <motion.div 
              className="skill-bar"
              initial={{ width: 0 }}
              animate={{ width: `${(skill.proficiency / 10) * 100}%` }}
              transition={{ duration: 1 }}
            >
              <span>{skill.proficiency}/10</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
