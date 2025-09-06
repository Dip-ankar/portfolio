// src/components/shared/SkillIcon.jsx

import React from 'react';
import { motion } from 'framer-motion';

// 1. Make sure 'link' is received as a prop
const SkillIcon = ({ icon: Icon, name, color, link }) => {
  return (
    // 2. The whole component should be wrapped in an <a> tag
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      title={name}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-700 rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-2"
        whileHover={{ scale: 1.1 }}
      >
        <Icon style={{ color: color }} size={48} />
        <p className="text-white font-medium text-center">{name}</p>
      </motion.div>
    </a>
  );
};

export default SkillIcon;