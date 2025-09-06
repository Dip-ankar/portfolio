import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/shared/SectionTitle";
import SkillIcon from "../components/shared/SkillIcon";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="My Skills" subtitle="Technologies I work with" />
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <SkillIcon
              key={index}
              icon={skill.icon}
              name={skill.name}
              color={skill.color}
              link={skill.link} // <-- ADD THIS LINE
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
