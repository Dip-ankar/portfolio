import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaJava, FaPython, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiC, SiTensorflow, SiPytorch, SiOpencv } from "react-icons/si";
import projectImg1 from '../assets/images/portofolio.png';
import projectImg3 from '../assets/images/fitness.png';
import projectImg4 from '../assets/images/dashboard.png';
import projectImg5 from '../assets/images/github.png';

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'education', title: 'Education' },
  { id: 'contact', title: 'Contact' },
];

export const skills = [
  { name: 'Java', icon: FaJava, color: '#f89820', link: 'https://dev.java/' },
  { name: 'C', icon: SiC, color: '#A8B9CC', link: 'https://www.iso.org/standard/74528.html' },
  { name: 'Python', icon: FaPython, color: '#3776AB', link: 'https://www.python.org/' },
  { name: 'Machine Learning', icon: FaBrain, color: '#F53982', link: 'https://en.wikipedia.org/wiki/Machine_learning' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', link: 'https://www.tensorflow.org/' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', link: 'https://pytorch.org/' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8', link: 'https://opencv.org/' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', icon: FaReact, color: '#61DAFB', link: 'https://react.dev/' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', link: 'https://nodejs.org/' },
  { name: 'Express.js', icon: SiExpress, color: '#000000', link: 'https://expressjs.com/' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', link: 'https://www.mongodb.com/' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC', link: 'https://tailwindcss.com/' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', link: 'https://git-scm.com/' },
];

export const education = [
  {
    year: '2022 - 2026',
    degree: 'Bachelor of Technology in Computer Science & Artificial Intelligence',
    institution: 'Brainware University, Kolkata',
    description: 'Focused on algorithms, data structures, and web development. Currently working on a final year project on machine learning applications.'
  },
  {
    year: '2020 - 2022',
    degree: 'Higher Secondary Education',
    institution: 'Dhuliapur Pallishree Bani Mandir, Panskura, Purba Medinipur',
    description: 'Specialized in Physics, Chemistry, Mathematics and Biology.'
  },
  {
    year: '2015 - 2020',
    degree: 'Secondary Education',
    institution: 'Dhuliapur Pallishree Bani Mandir, Panskura, Purba Medinipur',
    description: 'Specialized in Physics, Chemistry, Mathematics and Biology.'
  }
];

export const projects = [
{
  _id: '1',
  title: 'Personal Portfolio', // Corrected typo
  description: 'A dynamic single-page portfolio application built with the MERN stack. It features animated sections for skills, projects, education, and a functional contact form.',
  imageUrl: projectImg1, // Replace with your actual image URL
  tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'], // Updated tags
  githubUrl: 'https://github.com/yourusername/portfolio-project',
  liveUrl: 'https://your-live-portfolio.com'
},
{
  _id: '2',
  title: 'ChatGPT Clone',
  description: 'A full-stack real-time chat application inspired by ChatGPT. Built with React for the frontend and styled with CSS, it uses Express.js with MongoDB as the backend, Socket.IO for live communication, and Vector Database integration for storing and retrieving embeddings to provide intelligent conversational responses.',
  imageUrl: 'https://user-images.githubusercontent.com/10207753/220455546-5948d56c-adec-49a3-aee0-05cf64e60e13.png', // Replace with your actual image URL
  tags: ['React', 'CSS', 'JavaScript', 'Express.js', 'MongoDB', 'Socket.IO', 'Vector DB'],
  githubUrl: 'https://github.com/yourusername/chatgpt-clone',
  liveUrl: 'https://your-live-project-4.com'
},

  {
  _id: '3',
  title: 'Mood-Based Song Detection',
  description: 'A full-stack web application that detects a user’s mood and recommends songs accordingly. Built with React for the frontend, styled using Tailwind CSS, and powered by an Express.js backend with MongoDB for storing and managing song data.',
  imageUrl: 'https://i.imgur.com/your-image-3.png', // Replace with your actual image URL
  tags: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
  githubUrl: 'https://github.com/yourusername/mood-based-song-detection',
  liveUrl: 'https://your-live-project-3.com'
},

{
  _id: '4',
  title: 'fit ness website',
  description: 'A simple and responsive to-do list application built with React.js and styled using Tailwind CSS. It allows users to add, edit, delete, and mark tasks as complete. Integrated with React-Toastify for smooth and interactive notifications to enhance user experience.',
  imageUrl: projectImg3, // Replace with your actual image URL
  tags: ['React.js', 'Tailwind CSS', 'React-Toastify'],
  githubUrl: 'https://github.com/Dip-ankar/FittClub.git',
  liveUrl: 'https://fittnes-gym.netlify.app/'
}
,{
  _id: '5',
  title: 'Productivity Dashboard',
  description: 'A productivity-focused web application built with HTML, CSS, SCSS, and JavaScript. It includes a daily planner, to-do list, Pomodoro timer, motivational quotes, and daily goals tracking to help users stay organized and motivated.',
  imageUrl: projectImg4, // Replace with your actual image URL
  tags: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
  githubUrl: 'https://github.com/Dip-ankar/pro-ductivity-dashboard.git',
  liveUrl: 'https://dip-ankar.github.io/pro-ductivity-dashboard/'
}
,
  {
  _id: '6',
  title: 'GitHub Profile Finder',
  description: 'A simple web application built with HTML, CSS, and JavaScript that allows users to search for GitHub profiles by username. It fetches user details such as profile picture, bio, repositories, and followers using the GitHub API.',
  imageUrl: projectImg5, // Replace with your actual image URL
  tags: ['HTML', 'CSS', 'JavaScript'],
  githubUrl: 'https://github.com/Dip-ankar/github-user-finder.git',
  liveUrl: 'https://dip-ankar.github.io/github-user-finder/'
}

];