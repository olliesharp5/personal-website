import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            {skill.name}: {skill.proficiency}/10
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;