import React, { useState } from 'react';
import { FaSearch, FaComments, FaPhoneAlt, FaEnvelope, FaRobot, FaTimes, FaChevronRight } from 'react-icons/fa';
import FAQSection from '../components/FAQSection';

const HelpSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);

  const helpCategories = [
    { name: 'Booking', icon: '🎫', color: 'bg-blue-100 text-blue-600' },
    { name: 'Cancellation', icon: '❌', color: 'bg-red-100 text-red-600' },
    { name: 'Refunds', icon: '💰', color: 'bg-green-100 text-green-600' },
    { name: 'Travel Info', icon: '🚌', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Account', icon: '👤', color: 'bg-purple-100 text-purple-600' },
  ];

 

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-900 mb-12">How can we help you?</h1>

        {/* Search Bar */}
        <div className="mb-16">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-6 py-4 text-lg rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-500 hover:text-indigo-600">
              <FaSearch className="text-2xl" />
            </button>
          </form>
        </div>

        {/* Help Categories */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category) => (
            <button key={category.name} className={`${category.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-4`}>
              <span className="text-4xl">{category.icon}</span>
              <span className="font-semibold text-lg">{category.name}</span>
              <FaChevronRight className="ml-auto" />
            </button>
          ))}
        </div>

        {/* Popular Questions */}
        {/* <div className="mb-16">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {popularQuestions.map((question, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-medium text-lg text-indigo-700 hover:text-indigo-500 cursor-pointer flex justify-between items-center">
                  {question}
                  <FaChevronRight className="text-indigo-400" />
                </h3>
              </div>
            ))}
          </div>
        </div> */}
        <FAQSection />

        {/* Contact Options */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 bg-indigo-600 text-white">
            <h2 className="text-3xl font-bold mb-2">Still need help?</h2>
            <p className="text-indigo-100">We're here to assist you in any way we can.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-indigo-100">
            <ContactOption icon={FaComments} title="Live Chat" description="Chat with our support team" action="Start Chat" />
            <ContactOption icon={FaPhoneAlt} title="Call Us" description="Speak with a representative" action="Call Now" />
            <ContactOption icon={FaEnvelope} title="Email Support" description="Get help via email" action="Send Email" />
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <FaRobot className="text-2xl" />
      </button>
    </div>
  );
};

const ContactOption = ({ icon: Icon, title, description, action }) => (
  <div className="p-6 text-center">
    <Icon className="text-4xl text-indigo-500 mb-4 mx-auto" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full font-medium hover:bg-indigo-200 transition-colors">
      {action}
    </button>
  </div>
);

export default HelpSupport;