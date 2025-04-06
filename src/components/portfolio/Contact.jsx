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
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      // Replace with your actual backend URL
      const response = await fetch('https://email-backend-ikbph3edm-bibek-bhattarais-projects.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        submitting: false,
        success: false,
        error: error.message
      });
    }
  };

  return (
    <div className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1" data-aos="fade-right">
          {status.success ? (
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
              <div className="text-center py-8">
                <i className="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
                <h3 className="text-2xl font-semibold mb-2 text-purple-600 dark:text-purple-400">Message Sent!</h3>
                <p className="text-gray-700 dark:text-gray-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus({ submitting: false, success: false, error: null })}
                  className="mt-6 bg-blue-600 dark:bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
              
              <h3 className="text-2xl font-semibold mb-6 text-purple-600 dark:text-purple-400">Let's Work Together</h3>
              
              {status.error && (
                <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 dark:bg-red-900 dark:text-red-300">
                  <p>Error: {status.error}</p>
                </div>
              )}
              
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
              <button 
                type="submit"
                disabled={status.submitting}
                className={`w-full text-white py-3 rounded-lg text-xl transition ${
                  status.submitting 
                    ? 'bg-blue-400 dark:bg-blue-300 cursor-not-allowed' 
                    : 'bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400'
                }`}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
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