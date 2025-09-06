// src/containers/Projects.jsx

import React from 'react'; // Removed useState and useEffect
import { motion } from 'framer-motion';
// 1. Import projects directly from your constants file
import { projects } from '../constants';
import SectionTitle from '../components/shared/SectionTitle';
import ProjectCard from '../components/shared/ProjectCard';
// No need for Loader or getProjects from api

const Projects = () => {
  // 2. No more useState, useEffect, or isLoading. Just use the imported array.
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="My Projects" subtitle="A selection of my recent work" />
        <motion.div
           className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {/* 3. This will now work perfectly because 'projects' is guaranteed to be an array */}
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;