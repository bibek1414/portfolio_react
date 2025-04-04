// src/components/portfolio/Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call, etc.)
    console.log('Form submitted:', formData);
    // Redirect to thank you page or show success message
  };

  return (
    <div className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1" data-aos="fade-right">
          <form onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
            
            <h3 className="text-2xl font-semibold mb-6 text-purple-600 dark:text-purple-400">Let's Work Together</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-300 text-lg mb-2">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 
                  text-gray-900 dark:text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 
                  focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300" 
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-300 text-lg mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 
                  text-gray-900 dark:text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 
                  focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300" 
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-lg mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 
                  text-gray-900 dark:text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 
                  focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300" 
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 text-lg mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 
                  text-gray-900 dark:text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 
                  focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300" 
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-lg mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 
                text-gray-900 dark:text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 
                focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300" 
                placeholder="Type your message here..." 
                required
              ></textarea>
            </div>
            <button type="submit"
              className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg text-xl hover:bg-blue-700 
              dark:hover:bg-blue-400 transition">
              Send Message
            </button>
          </form>
        </div>

        <div className="lg:w-1/3 py-8 px-6" data-aos="fade-left">
          <div className="space-y-6 pt-20"> 
            <div className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center"> 
                <i className="fas fa-phone text-blue-600 dark:text-blue-400 text-xl"></i> 
              </div>
              <div className="ml-4 mt-1">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Phone</p>
                <p className="text-blue-600 dark:text-blue-400">+977 9860425440</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="fas fa-envelope text-blue-600 dark:text-blue-400 text-xl"></i>
              </div>
              <div className="ml-4 mt-1">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Email</p>
                <p className="text-blue-600 dark:text-blue-400">bbhattarai770@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400 text-xl"></i>
              </div>
              <div className="ml-4 mt-1">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Address</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Naya Baneshwor<br />
                  Kathmandu<br />
                  Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;