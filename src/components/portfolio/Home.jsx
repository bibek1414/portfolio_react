import React, { useState, useEffect } from 'react';
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
      <div className="orbit-item"><FaMobileAlt /></div>
      <div className="orbit-item"><FaDatabase /></div>
      <div className="orbit-item"><FaGlobe /></div>
      
      <div className="profile-circle">
        <img src="/images/profile.jpg" alt="Bibek Bhattarai" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

// Home Page Component with dynamic dark mode detection
const HomePage = () => {
  // State to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Effect to check dark mode initially and add a MutationObserver to track changes
  useEffect(() => {
    // Initial check
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Set up an observer to watch for class changes on the HTML element
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between py-20">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Hello, I'm <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>Bibek Bhattarai</span>
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A passionate software developer building cool projects!
          </p>
          <div className="flex space-x-4">
            <a 
              href="/files/cv.pdf" 
              download
              className={`${isDarkMode ? 'bg-blue-700 hover:bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition`}
            >
              <FaDownload className="inline mr-2" /> Download CV
            </a>
            <Link 
              to="/contact"
              className={`bg-transparent border-2 ${isDarkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-500' : 'border-blue-600 text-blue-600 hover:bg-blue-600'} hover:text-white py-2 px-6 rounded-full text-lg transition`}
            >
              <FaEnvelope className="inline mr-2" /> Contact Me
            </Link>
          </div>
          <div className="flex space-x-6 mt-4">
            <a 
              href="https://github.com/bibek1414" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}
            >
              <FaGithub className="text-3xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/bibek-bhattarai-292b90342/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a 
              href="https://www.facebook.com/bibek.bhattarai.3133719" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-16" data-aos="fade-up">
        <div>
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>10+</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects Completed</p>
        </div>
        <div>
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>10+</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Technologies Mastered</p>
        </div>
        <div>
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>25+</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Git Repositories</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;