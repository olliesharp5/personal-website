import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles
import SkillItem from './skills/SkillItem';
import API_BASE_URL from '../config';

const Skills = () => {
  const [skillsByCategory, setSkillsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

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

        // Sort skills within each category by proficiency (highest first)
        Object.keys(groupedSkills).forEach((category) => {
          groupedSkills[category].sort((a, b) => b.proficiency - a.proficiency);
        });

        setSkillsByCategory(groupedSkills);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching skills:', error);
        setLoading(false); // Ensure loading state is false even if there's an error
      });
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
        {categoryOrder.map((categoryKey, catIndex) => {
          // Check if there are skills in the category or if it's still loading
          const skills = skillsByCategory[categoryKey];
          if (!loading && (!skills || skills.length === 0)) {
            return null; // Do not render empty categories
          }

          return (
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
                {loading ? (
                  // Show skeletons when loading
                  <>
                    <Skeleton height={30} style={{ marginBottom: '10px' }} />
                    <Skeleton height={30} style={{ marginBottom: '10px' }} />
                    <Skeleton height={30} style={{ marginBottom: '10px' }} />
                    <Skeleton height={30} style={{ marginBottom: '10px' }} />
                    <Skeleton height={30} style={{ marginBottom: '10px' }} />
                  </>
                ) : (
                  skills.map((skill, index) => (
                    <SkillItem skill={skill} index={index} key={skill.id} />
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
