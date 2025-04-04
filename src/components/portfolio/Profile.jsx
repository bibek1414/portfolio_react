// src/components/portfolio/Profile.jsx
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSection = searchParams.get('section') || 'education';

  const setActiveSection = (section) => {
    setSearchParams({ section });
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900">
      {/* Simple Sidebar Navigation */}
      <div className="w-64 bg-white dark:bg-gray-900 p-6 space-y-4">
        <button 
          onClick={() => setActiveSection('education')}
          className={`block px-4 py-2 rounded-lg transition-all w-full text-left ${
            activeSection === 'education' 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Education
        </button>
        
        <button 
          onClick={() => setActiveSection('skills')}
          className={`block px-4 py-2 rounded-lg transition-all w-full text-left ${
            activeSection === 'skills' 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Skills
        </button>
        
        <button 
          onClick={() => setActiveSection('about')}
          className={`block px-4 py-2 rounded-lg transition-all w-full text-left ${
            activeSection === 'about' 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          About Me
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {activeSection === 'education' && (
          <div className="space-y-6" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Education</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor's in Computer Science and Information Technology (BSc CSIT)</h3>
              <p className="text-gray-600 dark:text-gray-400">Hetauda City College</p>
              <p className="text-gray-500 dark:text-gray-500">2019-2024</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">+2 in Science</h3>
              <p className="text-gray-600 dark:text-gray-400">Makwanpur Multiple Campus</p>
              <p className="text-gray-500 dark:text-gray-500">2017-2019</p>
            </div>
          </div>
        )}

        {activeSection === 'skills' && (
          <>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" data-aos="fade-up">
              {[
                { icon: 'fab fa-html5', color: 'text-orange-500', name: 'HTML' },
                { icon: 'fab fa-css3-alt', color: 'text-blue-500', name: 'CSS' },
                { icon: 'fab fa-css3', color: 'text-blue-400', name: 'Tailwind CSS' },
                { icon: 'fab fa-js', color: 'text-yellow-500', name: 'JavaScript' },
                { icon: 'fab fa-react', color: 'text-blue-400', name: 'React.js' },
                { icon: 'fab fa-node', color: 'text-green-600', name: 'Next.js' },
                { icon: 'fab fa-python', color: 'text-blue-500', name: 'Python' },
                { icon: 'fab fa-python', color: 'text-green-600', name: 'Django' },
                { icon: 'fab fa-node-js', color: 'text-green-500', name: 'Node.js' },
                { icon: 'fas fa-database', color: 'text-green-400', name: 'MongoDB' },
                { icon: 'fab fa-git-alt', color: 'text-red-500', name: 'Git' },
                { icon: 'fab fa-github', color: 'text-gray-700 dark:text-gray-300', name: 'GitHub' }
              ].map((skill, index) => (
                <div key={index} className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center">
                  <i className={`${skill.icon} ${skill.color} text-4xl group-hover:opacity-20 transition-opacity`}></i>
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {activeSection === 'about' && (
          <div className="space-y-6" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Name:</p>
                  <p className="text-gray-900 dark:text-white font-medium">Bibek Bhattarai</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Phone:</p>
                  <p className="text-gray-900 dark:text-white font-medium">+977 9860425440</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Email:</p>
                  <p className="text-gray-900 dark:text-white font-medium">bbhattarai770@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Nationality:</p>
                  <p className="text-gray-900 dark:text-white font-medium">Nepali</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-600 dark:text-gray-400">Languages:</p>
                  <p className="text-gray-900 dark:text-white font-medium">English, Nepali</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;