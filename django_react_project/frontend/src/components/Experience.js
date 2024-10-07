import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/experiences/')
      .then(response => {
        setExperiences(response.data);
      })
      .catch(error => {
        console.error('Error fetching experiences:', error);
      });
  }, []);

  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {experiences.map(exp => (
          <li key={exp.id}>
            <h3>{exp.role} at {exp.company}</h3>
            <p>{exp.description}</p>
            <p>{exp.start_date} - {exp.end_date || 'Present'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
