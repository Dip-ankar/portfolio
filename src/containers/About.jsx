import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/shared/SectionTitle';
// Remember to add your image and resume to the assets folder
import profilePicture from '../assets/images/photo.jpg';
import resumePDF from '../assets/resume/Dipankar.pdf';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 w-full max-w-5xl mx-auto">
      <SectionTitle title="About Me" subtitle="My background and journey" />
      <div className="mt-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 bg-gray-700 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Add your image here */}
          <img src={profilePicture} alt="Profile Portrait" className="rounded-full w-full h-full contain border-4 border-cyan-500 shadow-lg" />
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            I am a Java developer and backend enthusiast based in India, passionate about designing efficient and scalable systems. As a fresher, I am eager to learn from experienced team members, contribute my project experience, and grow as a developer. I enjoy minimal and brutalist design, love nature, and have a strong interest in traveling.
          </p>
          <a
             href={resumePDF}
            download="YourName_Resume.pdf"
            className="inline-block bg-cyan-500 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-600 transition duration-300"
          >
            Download My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;