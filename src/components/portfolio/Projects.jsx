import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';



const Projects = () => {
  const projects = [
    {
      title: "Hamro Pasal",
      description: "A simple e-commerce web application built with Next.js, Tailwind CSS, MongoDB, AWS, Google Console, and Stripe.",
      technologies: "HTML, CSS, Tailwind, JavaScript, Nextjs, MongoDB, AWS, Google Console, Stripe",
      liveLink: "https://ecommerce-front-nine-mu.vercel.app/",
      githubLink: "https://github.com/bibek1414/ecommerce-frontend-backend",
      image: "/images/hamro-pasal2.png" 
    },
    {
      title: "Tweeter Bar",
      description: "A social media app where users can register, log in, log out, post tweets, and edit their posts. Built with Django and offers a full set of user management features.",
      technologies: "Django, Tailwind CSS, JavaScript",
      liveLink: "https://tweet-django-xxrw.onrender.com",
      githubLink: "https://github.com/bibek1414/tweet-django",
      image: "/images/tweeter-bar.png" 
    },
    {
      title: "Quiz Application",
      description: "A quiz application built with Django, Tailwind CSS, and JavaScript. It allows users to take quizzes and view their results.",
      technologies: "Django, Tailwind CSS, JavaScript",
      liveLink: "https://quiz-django.onrender.com/",
      githubLink: "https://github.com/bibek1414/quiz_django",
      image: "/images/image.png" 
    },
    {
      title: "Task Manager",
      description: "A task management application built with React, FastAPI, MongoDB, and Tailwind CSS. It allows users to organize their tasks efficiently.",
      technologies: "React, FastAPI, MongoDB, Tailwind CSS",
      liveLink: "https://taskmanagerfront-sandy.vercel.app/",
      githubLink: "https://github.com/bibek1414/taskmanagerfront",
      image: "/images/task-manager.png" 
    },
    {
      title: "Expense Tracker",
      description: "A financial dashboard built with Django and PostgreSQL. It allows users to track their income, expenses, and net balance over different time periods.",
      technologies: "Django, PostgreSQL, Google Auth",
      liveLink: "https://expense-tracker-example.herokuapp.com/",
      githubLink: "https://github.com/bibek1414/expense_tracker",
      image: "/images/expense-tracker.png" 
    },
    {
      title: "Weather App",
      description: "A weather forecasting app that provides real-time weather data, built using React and the OpenWeatherMap API.",
      technologies: "Django, OpenWeatherMap API, Tailwind CSS, JavaScript, Gsap",
      liveLink: "https://weatherapp-example.vercel.app/",
      githubLink: "https://github.com/bibek1414/weatherapp",
      image: "/images/weather-app.png" 
    },
    {
      title: "ChatApp",
      description: "A real-time chat application with support for text messaging, audio calls, and video calls, built using Django Channels and WebRTC.",
      technologies: "Django, Channels, WebRTC, Redis, Tailwind CSS, JavaScript",
      liveLink: "https://chatapp-cuvv.onrender.com/",
      githubLink: "https://github.com/bibek1414/chatapp",
      image: "/images/chat-app.png" 
    },
    {
      title: "BookMyProblem",
      description: "A platform built with Next.js for both frontend and backend, enabling users to book a wide range of problem-solving services—including tech support, legal help, repairs, and more—to be resolved within 24 hours. The platform supports real-time updates and notifications for both users and service providers.",
      technologies: "Next.js, React, Tailwind CSS, JavaScript, Node.js",
      liveLink: "", 
      githubLink: "https://github.com/bibek1414/bookmyproblems",
      image: "/images/bookmyproblem.png"
    },
    {
      title: "FaceAuth System",
      description: "A facial recognition-based authentication system built using Python and Django. It uses OpenCV for face detection and recognition, providing a secure and user-friendly login system. The project also includes utilities for cryptographic operations and face data handling.",
      technologies: "Django, OpenCV, Python, Tailwind CSS, SQLite, Docker",
      liveLink: "", 
      githubLink: "https://github.com/bibek1414/face-auth-system",
      image: "/images/faceauth.png"
    }
    
    
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const projectTitleRef = useRef(null);
  const projectDescriptionRef = useRef(null);
  const projectTechnologiesRef = useRef(null);
  const projectImageRef = useRef(null);

  const currentProject = projects[currentProjectIndex];

  // Function to animate project transition
  const animateProjectTransition = (direction) => {
    const elements = [
      projectTitleRef.current, 
      projectDescriptionRef.current, 
      projectTechnologiesRef.current, 
      projectImageRef.current
    ];
    
    // Fade out
    gsap.to(elements, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        // Update project index
        if (direction === 'next') {
          setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
        } else {
          setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
        }
        
        // Fade in (update will happen automatically via React)
        setTimeout(() => {
          gsap.to(elements, {
            opacity: 1,
            duration: 0.3,
          });
        }, 50); // Small delay to ensure state has updated
      }
    });
  };

  // Function to handle modal opening
  const openImageModal = () => {
    setShowModal(true);
    setIsZoomed(false);
    
    // Animate modal opening
    gsap.fromTo(
      "#imageModal",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );
    
    // Animate image appearance
    gsap.fromTo(
      "#modalImage",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 0.1, ease: "back.out(1.7)" }
    );
  };

  // Function to handle modal closing
  const closeImageModal = () => {
    // Animate the image
    gsap.to("#modalImage", {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
    });
    
    // Animate the modal
    gsap.to("#imageModal", {
      opacity: 0,
      duration: 0.4,
      delay: 0.1,
      onComplete: () => {
        setShowModal(false);
        setIsZoomed(false);
      }
    });
  };

  // Function to toggle zoom
  const toggleZoom = (e) => {
    e.stopPropagation(); // Prevent closing the modal when clicking on the image
    
    if (!isZoomed) {
      // Zoom in to 150%
      gsap.to("#modalImage", {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      });
      setIsZoomed(true);
    } else {
      // Zoom out back to normal
      gsap.to("#modalImage", {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      setIsZoomed(false);
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showModal) {
        closeImageModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Image Fullscreen Modal */}
      {showModal && (
        <div 
          id="imageModal" 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget || e.target.parentNode === e.currentTarget) {
              closeImageModal();
            }
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button 
              id="closeModal" 
              className="absolute top-6 right-6 text-white text-3xl bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-all z-20"
              onClick={closeImageModal}
            >
              <span>&times;</span>
            </button>
            {/* Back button */}
            <button 
              id="backButton" 
              className="absolute top-6 left-6 text-white px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-all z-20"
              onClick={closeImageModal}
            >
              Back
            </button>
            {/* Fullscreen image with zoom capabilities */}
            <div className="w-[90%] h-[90%] flex items-center justify-center">
              <img 
                id="modalImage"
                src={currentProject.image} 
                alt={`${currentProject.title} Project`} 
                className="max-w-full max-h-full object-contain transition-transform duration-300"
                onClick={toggleZoom}
              />
            </div>
          </div>
        </div>
      )}

      {/* Project Showcase Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Project Details */}
        <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
          {/* Project Number */}
          <h2 className="text-8xl font-bold text-black dark:text-gray-600 mb-4">
            {`0${currentProjectIndex + 1}`}
          </h2>
          {/* Project Title */}
          <h3 
            ref={projectTitleRef} 
            className="text-3xl font-semibold text-gray-800 dark:text-white mb-4"
          >
            {currentProject.title}
          </h3>
          {/* Project Description */}
          <p 
            ref={projectDescriptionRef}
            className="text-gray-600 dark:text-gray-300 mb-6"
          >
            {currentProject.description}
          </p>
          
          {/* Technologies in a Single Line */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span 
              ref={projectTechnologiesRef} 
              className="text-blue-500 dark:text-blue-400"
            >
              {currentProject.technologies}
            </span>
          </div>
          {/* Horizontal Line */}
          <hr className="border-gray-300 dark:border-gray-600 mb-6" />
          {/* Live Server and GitHub Logos */}
          <div className="flex gap-4">
            <a 
              href={currentProject.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-blue-500 dark:text-blue-400 hover:underline relative"
            >
              <i className="fas fa-external-link-alt text-3xl"></i>
              <span className="absolute left-0 bottom-full mb-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Live Server
              </span>
            </a>
            <a 
              href={currentProject.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-blue-500 dark:text-blue-400 hover:underline relative"
            >
              <i className="fab fa-github text-3xl"></i>
              <span className="absolute left-0 bottom-full mb-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </span>
            </a>
          </div>
        </div>

        {/* Right Side: Project Image and Navigation */}
        <div className="w-full md:w-1/2">
          {/* Project Image Container with Zoom Effect */}
          <div 
            className="relative overflow-hidden rounded-lg mb-4 group cursor-pointer"
            onClick={openImageModal}
          >
            {/* Zoom indicator overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
              <span className="text-white text-lg bg-blue-600 px-4 py-2 rounded-md">
                <i className="fas fa-search-plus mr-2"></i>View Fullscreen
              </span>
            </div>
            {/* Actual project image with zoom effect */}
            <img 
              ref={projectImageRef} 
              src={currentProject.image} 
              alt={`${currentProject.title} Project`} 
              className="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-5">
            <button 
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 py-2 px-6 rounded-full text-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              onClick={() => animateProjectTransition('prev')}
            >
              &lt;
            </button>
            <button 
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 py-2 px-6 rounded-full text-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              onClick={() => animateProjectTransition('next')}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;