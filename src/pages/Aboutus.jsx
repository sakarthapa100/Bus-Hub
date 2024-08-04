import React from 'react';
import { FaBus, FaUsers, FaGlobe, FaAward, FaLeaf, FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
  const companyStats = [
    { icon: FaBus, value: '10,000+', label: 'Daily Trips' },
    { icon: FaUsers, value: '5 Million+', label: 'Happy Customers' },
    { icon: FaGlobe, value: '100+', label: 'Cities Covered' },
  ];

  const coreValues = [
    { icon: FaAward, title: 'Excellence', description: 'We strive for the highest quality in everything we do.' },
    { icon: FaLeaf, title: 'Sustainability', description: 'Committed to eco-friendly practices and reducing our carbon footprint.' },
    { icon: FaHandshake, title: 'Customer First', description: 'Our customers are at the heart of every decision we make.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-900 mb-12">About redBus</h1>

        {/* Company Introduction */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 bg-indigo-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Revolutionizing Bus Travel</h2>
            <p className="text-indigo-100 text-lg">
              redBus is India's largest online bus ticketing platform that has transformed bus travel in the country by bringing ease and convenience to millions of Indians who travel using buses.
            </p>
          </div>
          <div className="p-8">
            <p className="text-gray-600 mb-4">
              Founded in 2006, redBus has since grown to become the most trusted bus ticketing platform in India and Southeast Asia. We're on a mission to make bus travel simple, accessible, and enjoyable for everyone.
            </p>
            <p className="text-gray-600">
              With a network spanning thousands of bus operators and routes, we connect people to their destinations, one journey at a time.
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <stat.icon className="text-5xl text-indigo-500 mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <value.icon className="text-4xl text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-indigo-600 rounded-3xl shadow-xl overflow-hidden text-white text-center py-12 px-6">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-indigo-100 mb-8">
            Experience the convenience of modern bus travel with redBus. Book your next trip today and see the difference for yourself.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;