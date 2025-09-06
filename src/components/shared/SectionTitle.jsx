// src/components/shared/SectionTitle.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation'; // Adjust the import path as needed

const SectionTitle = ({ title, subtitle }) => {
  // 1. Call the custom hook to get animation props
  const animationProps = useScrollAnimation();

  return (
    // 2. Spread the props onto your motion component
    <motion.div
      className="text-center mb-12"
      {...animationProps}
    >
      <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
      <p className="text-lg text-cyan-400">{subtitle}</p>
      <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
    </motion.div>
  );
};

export default SectionTitle;