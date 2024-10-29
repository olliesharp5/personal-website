import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Utility function to interpolate colors
const getColorByProficiency = (proficiency) => {
    const red = [255, 0, 0];
    const yellow = [255, 255, 0];
    const green = [0, 255, 0];

    if (proficiency <= 5) {
        const ratio = proficiency / 5;
        return `rgb(${Math.round(red[0] + ratio * (yellow[0] - red[0]))}, 
                   ${Math.round(red[1] + ratio * (yellow[1] - red[1]))}, 
                   ${Math.round(red[2] + ratio * (yellow[2] - red[2]))})`;
    } else {
        const ratio = (proficiency - 5) / 5;
        return `rgb(${Math.round(yellow[0] + ratio * (green[0] - yellow[0]))}, 
                   ${Math.round(yellow[1] + ratio * (green[1] - yellow[1]))}, 
                   ${Math.round(yellow[2] + ratio * (green[2] - yellow[2]))})`;
    }
};

const SkillItem = ({ skill, index }) => (
    <motion.div
        className="skill-item"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <div className="skill-chart-container">
            <CircularProgressbar
                value={skill.proficiency * 10}
                styles={buildStyles({
                    pathColor: getColorByProficiency(skill.proficiency),
                    trailColor: '#d6d6d6',
                })}
            />
            <img
                src={
                    skill.icon.startsWith('http')
                        ? skill.icon
                        : `http://127.0.0.1:8000${skill.icon}`
                }
                alt={`${skill.name} icon`}
                className="skill-icon-overlay"
            />
        </div>
        <div className="skill-name">{skill.name}</div>
    </motion.div>
);

export default SkillItem;
