import React, { useState, useEffect , useRef} from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaCode, FaDatabase, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';

// Enhanced ProfileOrbit component
const ProfileOrbit = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="relative w-72 h-72 mx-auto"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Orbit path with enhanced hover effect */}
      <div className={`absolute inset-0 rounded-full border-2 border-dashed ${isHovering ? 'border-blue-400' : 'border-blue-200'} opacity-50 transition-colors duration-500`}></div>
      
      {/* Center profile circle with hover effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full overflow-hidden z-10 shadow-lg bg-gradient-to-r from-blue-200 to-purple-200 p-1">
        <img 
          src="/images/profile.png" 
          alt="Profile Image"
          width={192} 
          height={192}
          className={`w-full h-full object-cover rounded-full transition-transform duration-700 ${isHovering ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Glow effect behind profile */}
        <div className={`absolute inset-0 -z-10 rounded-full blur-md bg-blue-400 opacity-0 transition-opacity duration-700 ${isHovering ? 'opacity-30' : ''}`}></div>
      </div>
      
      {/* Orbit items */}
      <div className="orbit-container absolute inset-0">
        {/* Frontend Dev icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-125 transition-transform duration-300"
               style={{
                 animation: "orbit 12s linear infinite, colorChange 8s linear infinite",
                 top: "0%",
                 left: "50%",
                 transform: "translate(-50%, -50%) rotate(0deg) translateY(-140px) rotate(0deg)"
               }}>
            <FaReact className="text-xl" />
          </div>
        </div>
        
        {/* Mobile Dev icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-125 transition-transform duration-300"
               style={{
                 animation: "orbit 12s linear infinite 3s, colorChange 8s linear infinite 2s",
                 top: "50%",
                 left: "100%",
                 transform: "translate(-50%, -50%) rotate(0deg) translateY(0) translateX(140px) rotate(0deg)"
               }}>
            <FaMobileAlt className="text-xl" />
          </div>
        </div>
        
        {/* Backend Dev icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-125 transition-transform duration-300"
               style={{
                 animation: "orbit 12s linear infinite 6s, colorChange 8s linear infinite 4s",
                 top: "100%",
                 left: "50%",
                 transform: "translate(-50%, -50%) rotate(0deg) translateY(140px) rotate(0deg)"
               }}>
            <FaNodeJs className="text-xl" />
          </div>
        </div>
        
        {/* Database icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-125 transition-transform duration-300"
               style={{
                 animation: "orbit 12s linear infinite 9s, colorChange 8s linear infinite 6s",
                 top: "50%",
                 left: "0%",
                 transform: "translate(-50%, -50%) rotate(0deg) translateY(0) translateX(-140px) rotate(0deg)"
               }}>
            <FaDatabase className="text-xl" />
          </div>
        </div>

        {/* DevOps icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-125 transition-transform duration-300"
               style={{
                 animation: "orbit 15s linear infinite 4.5s, colorChange 8s linear infinite 3s",
                 top: "85%",
                 left: "15%",
                 transform: "translate(-50%, -50%) rotate(0deg) translateY(120px) translateX(-120px) rotate(0deg)"
               }}>
            <FaDocker className="text-xl" />
          </div>
        </div>
        
        {/* Web Dev icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-125 transition-transform duration-300"
               style={{
                 animation: "orbit 15s linear infinite 1.5s, colorChange 8s linear infinite 5s",
                 top: "15%",
                 left: "85%",
                 transform: "translate(-50%, -50%) rotate(0deg) translateY(-120px) translateX(120px) rotate(0deg)"
               }}>
            <FaGlobe className="text-xl" />
          </div>
        </div>

        {/* Code icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-125 transition-transform duration-300"
               style={{
                 animation: "orbit 15s linear infinite 7.5s, colorChange 8s linear infinite 1s",
                 top: "15%",
                 left: "15%",
                 transform: "translate(-50%, -50%) rotate(0deg) translateY(-120px) translateX(-120px) rotate(0deg)"
               }}>
            <FaCode className="text-xl" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(140px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }
        
        @keyframes colorChange {
          0% { background: linear-gradient(45deg, #3b82f6, #8b5cf6); }
          25% { background: linear-gradient(45deg, #8b5cf6, #ec4899); }
          50% { background: linear-gradient(45deg, #ec4899, #f97316); }
          75% { background: linear-gradient(45deg, #f97316, #3b82f6); }
          100% { background: linear-gradient(45deg, #3b82f6, #8b5cf6); }
        }
      `}</style>
    </div>
  );
};

// Improved animated counter with IntersectionObserver
const AnimatedCounter = ({ end, label, isDarkMode }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime;
          const duration = 2000;
          
          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };
          
          requestAnimationFrame(animateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, [end]);
  
  return (
    <div ref={counterRef} className="transform hover:scale-105 transition-transform duration-300">
      <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{count}+</h2>
      <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{label}</p>
    </div>
  );
};

// TypedIntroduction component with typing effect
const TypedIntroduction = ({ isDarkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Versatile Full Stack Developer blending frontend creativity with backend efficiency and DevOps practices!";
  const typingSpeed = 50;
  const startDelay = 500;
  
  useEffect(() => {
    let timer;
    
    setTimeout(() => {
      let currentIndex = 0;
      
      timer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
        }
      }, typingSpeed);
    }, startDelay);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} h-16`}>
      {displayText}
      <span className="inline-block w-1 h-5 ml-1 bg-blue-500 animate-blink"></span>
    </p>
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
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between py-20 gap-8">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} leading-tight`}>
            Hello, I'm <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} relative`}>
              Bibek Bhattarai
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 origin-bottom-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </span>
          </h1>
          
          <TypedIntroduction isDarkMode={isDarkMode} />
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="/files/cv.pdf" 
              download
              className={`${isDarkMode ? 'bg-blue-700 hover:bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition hover:-translate-y-1 flex items-center`}
            >
              <FaDownload className="mr-2" /> Download CV
            </a>
            <Link 
              to="/contact"
              className={`bg-transparent border-2 ${isDarkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-500' : 'border-blue-600 text-blue-600 hover:bg-blue-600'} hover:text-white py-2 px-6 rounded-full text-lg transition hover:-translate-y-1 flex items-center`}
            >
              <FaEnvelope className="mr-2" /> Contact Me
            </Link>
          </div>
          
          <div className="flex space-x-6 mt-4">
            <a 
              href="https://github.com/bibek1414" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition hover:scale-125`}
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/bibek-bhattarai-292b90342/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition hover:scale-125`}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a 
              href="https://www.facebook.com/bibek.bhattarai.3133719" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition hover:scale-125`}
              aria-label="Facebook"
            >
              <FaFacebook className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Right Section: Image with Orbiting Elements Animation */}
        <div className="md:w-1/2 flex justify-center pt-8 md:pt-0" data-aos="fade-left">
          <ProfileOrbit />
        </div>
      </div>

      {/* Stats Section with animated counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-16" data-aos="fade-up">
        <AnimatedCounter end={20} label="Projects Completed" isDarkMode={isDarkMode} />
        <AnimatedCounter end={10} label="Technologies Mastered" isDarkMode={isDarkMode} />
        <AnimatedCounter end={40} label="Git Repositories" isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default HomePage;