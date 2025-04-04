import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaCode, FaDatabase, FaMobileAlt, FaGlobe } from 'react-icons/fa';

// CSS for the orbiting effect
const orbitingStyles = `
  .profile-container {
    position: relative;
    width: 280px;
    height: 280px;
  }
  
  .profile-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 2;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }
  
  .orbit-path {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px dashed rgba(59, 130, 246, 0.2);
    animation: pulse 3s infinite alternate;
  }
  
  @keyframes pulse {
    0% { opacity: 0.2; }
    100% { opacity: 0.6; }
  }
  
  .orbit-item {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
    z-index: 1;
  }
  
  .orbit-item:nth-child(1) {
    animation: orbit1 12s linear infinite, colorChange 8s linear infinite;
  }
  
  .orbit-item:nth-child(2) {
    animation: orbit2 12s linear infinite, colorChange 8s linear infinite;
  }
  
  .orbit-item:nth-child(3) {
    animation: orbit3 12s linear infinite, colorChange 8s linear infinite;
  }
  
  .orbit-item:nth-child(4) {
    animation: orbit4 12s linear infinite, colorChange 8s linear infinite;
  }
  
  @keyframes orbit1 {
    0% { transform: rotate(0deg) translateX(140px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
  }
  
  @keyframes orbit2 {
    0% { transform: rotate(90deg) translateX(140px) rotate(-90deg); }
    100% { transform: rotate(450deg) translateX(140px) rotate(-450deg); }
  }
  
  @keyframes orbit3 {
    0% { transform: rotate(180deg) translateX(140px) rotate(-180deg); }
    100% { transform: rotate(540deg) translateX(140px) rotate(-540deg); }
  }
  
  @keyframes orbit4 {
    0% { transform: rotate(270deg) translateX(140px) rotate(-270deg); }
    100% { transform: rotate(630deg) translateX(140px) rotate(-630deg); }
  }
  
  @keyframes colorChange {
    0% { background: linear-gradient(45deg, #3b82f6, #8b5cf6); }
    25% { background: linear-gradient(45deg, #8b5cf6, #ec4899); }
    50% { background: linear-gradient(45deg, #ec4899, #f97316); }
    75% { background: linear-gradient(45deg, #f97316, #3b82f6); }
    100% { background: linear-gradient(45deg, #3b82f6, #8b5cf6); }
  }
`;

// Profile Component with Orbiting Elements
const ProfileOrbit = () => {
  return (
    <div className="profile-container">
      <style>{orbitingStyles}</style>
      <div className="orbit-path"></div>
      
      <div className="orbit-item"><FaCode /></div>
      <div className="orbit-item"><FaDatabase /></div>
      <div className="orbit-item"><FaMobileAlt /></div>
      <div className="orbit-item"><FaGlobe /></div>
      
      <div className="profile-circle">
        <img src="/images/profile.jpg" alt="Bibek Bhattarai" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

// Stats Section Component
const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-16" data-aos="fade-up">
      <div>
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">10+</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Projects Completed</p>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">10+</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Technologies Mastered</p>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">25+</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Git Repositories</p>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between py-20">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
            Hello, I'm <span className="text-blue-600 dark:text-blue-400">Bibek Bhattarai</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A passionate software developer building cool projects!
          </p>
          <div className="flex space-x-4">
            <a 
              href="/files/cv.pdf" 
              download
              className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-800 transition"
            >
              <FaDownload className="inline mr-2" /> Download CV
            </a>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 py-2 px-6 rounded-full text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition"
            >
              <FaEnvelope className="inline mr-2" /> Contact Me
            </Link>
          </div>
          <div className="flex space-x-6 mt-4">
            <a 
              href="https://github.com/bibek1414" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/bibek-bhattarai-292b90342/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a 
              href="https://www.facebook.com/bibek.bhattarai.3133719" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaFacebook className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Right Section: Image with Orbiting Elements Animation */}
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <ProfileOrbit />
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
};

export default HomePage;