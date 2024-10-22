import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

// Utility function to interpolate colors
const getColorByProficiency = (proficiency) => {
  const red = [255, 0, 0];    // Full red
  const yellow = [255, 255, 0]; // Full yellow
  const green = [0, 255, 0];   // Full green

  if (proficiency <= 5) {
    // Interpolate between red and yellow (1-5)
    const ratio = proficiency / 5;
    return `rgb(${Math.round(red[0] + ratio * (yellow[0] - red[0]))}, 
                 ${Math.round(red[1] + ratio * (yellow[1] - red[1]))}, 
                 ${Math.round(red[2] + ratio * (yellow[2] - red[2]))})`;
  } else {
    // Interpolate between yellow and green (6-10)
    const ratio = (proficiency - 5) / 5;
    return `rgb(${Math.round(yellow[0] + ratio * (green[0] - yellow[0]))}, 
                 ${Math.round(yellow[1] + ratio * (green[1] - yellow[1]))}, 
                 ${Math.round(yellow[2] + ratio * (green[2] - yellow[2]))})`;
  }
};

const Skills = () => {
  const [skillsByCategory, setSkillsByCategory] = useState({});

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/skills/')
      .then(response => {
        const skills = response.data;
        // Group skills by category
        const groupedSkills = skills.reduce((acc, skill) => {
          if (!acc[skill.category]) {
            acc[skill.category] = [];
          }
          acc[skill.category].push(skill);
          return acc;
        }, {});
        setSkillsByCategory(groupedSkills);
      })
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

  // Map category keys to display names
  const categoryTitles = {
    code: 'Coding Skills',
    toolbox: 'Toolbox Skills',
    soft: 'Soft Skills',
  };

  // Define the order of categories
  const categoryOrder = ['code', 'toolbox', 'soft'];

  return (
    <div className="content skills-page">
      <h2>Skills</h2>
      <div className="skills-columns">
        {categoryOrder.map((categoryKey, catIndex) => (
          skillsByCategory[categoryKey] && (
            <div className="skills-column" key={categoryKey}>
              <motion.h3
                className="category-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              >
                {categoryTitles[categoryKey]}
              </motion.h3>
              <div className="skills-grid">
                {skillsByCategory[categoryKey].map((skill, index) => (
                  <motion.div 
                    key={skill.id}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="skill-chart-container">
                      <CircularProgressbar
                        value={skill.proficiency * 10} // Convert to percentage
                        styles={buildStyles({
                          pathColor: getColorByProficiency(skill.proficiency),
                          trailColor: '#d6d6d6',
                          textColor: '#fff',
                        })}
                      />
                      <img 
                        src={skill.icon.startsWith('http') ? skill.icon : `http://127.0.0.1:8000${skill.icon}`} 
                        alt={`${skill.name} icon`} 
                        className="skill-icon-overlay"
                      />
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Skills;
