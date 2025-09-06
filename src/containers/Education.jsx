import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/shared/SectionTitle';
import { education } from '../constants';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Education" subtitle="My academic journey" />
        <div className="mt-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-cyan-500"></div>
          
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 flex justify-between items-center w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Left side */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3'}`}>
                <p className="text-cyan-400 font-semibold">{item.year}</p>
              </div>
              
              {/* Center Circle */}
              <div className="z-10 order-2 flex items-center">
                <div className="w-4 h-4 bg-white rounded-full border-2 border-cyan-500"></div>
              </div>

              {/* Right side */}
              <div className={`w-5/12 px-4 py-3 bg-gray-700 rounded-lg shadow-lg ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                <h3 className="font-bold text-lg text-white">{item.degree}</h3>
                <h4 className="font-semibold text-sm text-cyan-300 mb-2">{item.institution}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;