// src/components/shared/ProjectCard.jsx

import React, { useState } from 'react'; // 1. Import useState
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  // 2. Add state to manage the expanded/collapsed view
  const [isExpanded, setIsExpanded] = useState(false);

  // 3. Set a character limit for the description
  const charLimit = 100;
  const isLongDescription = project.description.length > charLimit;

  // 4. Create the truncated description
  const truncatedDescription = isLongDescription
    ? `${project.description.substring(0, charLimit)}...`
    : project.description;

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      layout // Add layout prop for smooth animation on size change
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-cyan-900 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        {/* 5. Conditionally render the description */}
        <p className="text-gray-400 mb-4 flex-grow">
          {isExpanded ? project.description : truncatedDescription}
        </p>

        {/* 6. Show the button only if the description is long */}
        {isLongDescription && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-cyan-400 hover:text-cyan-300 self-start mb-4 font-semibold"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}

        <div className="mt-auto flex items-center space-x-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
            <FaExternalLinkAlt size={22} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;