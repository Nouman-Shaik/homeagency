import React, { useState } from 'react';
import Navbar from '../Navbar';
import homelogo from '../../assets/landing/homelogo.svg';
import { motion } from 'framer-motion';

const Home = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    area: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
      <Navbar />

      <div className="relative w-full h-screen overflow-hidden">
       
        <div className="absolute inset-0">
          <img 
            src={homelogo} 
            alt="home" 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
            
           
            <div className="text-white ">
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
                Consultation,
              </motion.h1>
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.11 }}>
                Design,
              </motion.h1>
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.12 }}>
                & Marketing
              </motion.h1>
            </div>

            
            <div className="flex justify-end">
              <motion.div className="bg-gradient-to-br from-indigo-900 to-indigo-800 opacity-80 border border-white rounded-2xl p-8 shadow-2xl w-full max-w-md" initial={{ y:30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <h2 className="text-white text-2xl font-bold text-center mb-6">
                  Get a Free
                  <br />
                  Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                      required
                    />
                  </div>

                <div>
                    <input
                      type="area"
                      name="area"
                      placeholder="Area"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    SEND YOUR QUERY
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;