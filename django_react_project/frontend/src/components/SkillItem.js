import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

const SkillItem = ({ skill, index }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped((prev) => !prev);
    };

    return (
        <motion.div
            className={`skill-item ${flipped ? 'flipped' : ''}`}
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: flipped ? 1 : 1.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <motion.div
                className="skill-flip-card"
                animate={{
                    rotateY: flipped ? 180 : 0,
                    scale: flipped ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
                style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center',
                }}
            >
                {/* Front Side */}
                <div className="skill-front">
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
                </div>
                {/* Back Side */}
                <div className="skill-back">
                    <div className="skill-chart-container back">
                        <CircularProgressbar
                            value={100}
                            styles={buildStyles({
                                pathColor: '#000',
                                trailColor: '#000',
                            })}
                        />
                        <motion.div
                            className="skill-description"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {skill.description}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SkillItem;