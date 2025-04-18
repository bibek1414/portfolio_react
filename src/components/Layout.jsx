import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check for saved theme in localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      
      return newMode;
    });
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation links
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/profile', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <header className={`fixed w-full z-10 transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-md`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
         
          <div className="flex items-center space-x-3">
          <div
            className={`w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r ${
              darkMode ? 'from-blue-500 to-purple-600' : 'from-blue-600 to-indigo-700'
            } flex items-center justify-center`}
          >
            <img
              src="images/logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <Link
            to="/"
            className={`text-2xl font-bold ${
              darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            } transition-colors duration-300`}
          >
            Bibek .
          </Link>
        </div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors duration-300 ${
                    location.pathname === link.path
                      ? darkMode
                        ? 'text-blue-400 font-medium'
                        : 'text-blue-600 font-medium'
                      : darkMode
                        ? 'text-gray-300 hover:text-blue-400'
                        : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Dark Mode Toggle with Text */}
              <button
                onClick={toggleDarkMode}
                className={`flex items-center p-2 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <>
                    <i className="fas fa-sun mr-2"></i>
                    <span className="text-sm">Light Mode</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-moon mr-2"></i>
                    <span className="text-sm">Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDarkMode}
                className={`flex items-center p-2 rounded-full mr-3 transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <>
                    <i className="fas fa-sun mr-2"></i>
                    <span className="text-sm">Light</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-moon mr-2"></i>
                    <span className="text-sm">Dark</span>
                  </>
                )}
              </button>

              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                aria-label="Toggle mobile menu"
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className={`md:hidden transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'} py-4 px-4 shadow-inner`}>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block transition-colors duration-300 ${
                      location.pathname === link.path
                        ? darkMode
                          ? 'text-blue-400 font-medium'
                          : 'text-blue-600 font-medium'
                        : darkMode
                          ? 'text-gray-300 hover:text-blue-400'
                          : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="pt-24 pb-16 max-w-6xl mx-auto px-4 min-h-[calc(100vh-150px)]">{children}</main>

      <footer className={`transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'} py-6`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Bibek Bhattarai. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/bibek1414"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bibek-bhattarai-292b90342/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="bbhattarai770@gmail.com"
              className={`transition-colors duration-300 ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;