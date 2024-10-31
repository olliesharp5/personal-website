import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import SkillItem from './skills/SkillItem';
import API_BASE_URL from '../config';

const Skills = () => {
  const [skillsByCategory, setSkillsByCategory] = useState({});

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/skills/`)
      .then((response) => {
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
      .catch((error) => console.error('Error fetching skills:', error));
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
      <h1>My Skills</h1>
      <div className="skills-columns">
        {categoryOrder.map((categoryKey, catIndex) =>
          skillsByCategory[categoryKey] ? (
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
                  <SkillItem skill={skill} index={index} key={skill.id} />
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Skills;
