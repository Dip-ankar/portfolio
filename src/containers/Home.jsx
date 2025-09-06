import React from 'react';
import { motion } from 'framer-motion';
// 1. Import the social media icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import profilePicture from '../assets/images/profile-picture.jpg';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row mt-30 items-center justify-between w-full max-w-6xl mx-auto">
        
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left md:w-1/2">
           <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 2. Updated headline structure */}
            <h1 className="text-xl md:text-3xl font-bold text-white mb-4">
              Hello, I'm
              <p className='text-2xl md:text-xl  text-gray-400 mb-4'>Dipankar</p>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              I am a{' '}
              <span className="text-cyan-400">
                {/* 3. This is the typewriter component */}
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    1500, // wait 1.5s
                    'Java Developer',
                    1500, // wait 1.5s
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h2>
          </motion.div>
          <motion.p
            className="text-l md:text-xl text-cyan-600 mb-8 mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          A Full-Stack Developer passionate about creating interactive applications.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Get In Touch
          </motion.a>
          
          {/* 2. Add the social icons container */}
          <motion.div 
            className="flex items-center justify-center md:justify-start gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/Dip-ankar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
              <FaGithub size={32} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          className="w-64 h-64 md:w-96 md:h-96 mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={profilePicture} 
            alt="Dipankar Mandal"
            className="rounded-full w-full h-full object-cover border-4 border-cyan-500 shadow-lg"
          />
           
        </motion.div>

      </div>
    </section>
  );
};

export default Home;