import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  const contactMethods = [
    { icon: FaPhone, title: 'Call Us', info: '+1 (555) 123-4567', action: 'tel:+15551234567' },
    { icon: FaEnvelope, title: 'Email Us', info: 'support@redbus.com', action: 'mailto:support@redbus.com' },
    { icon: FaMapMarkerAlt, title: 'Visit Us', info: '123 Bus Street, Travel City, TC 12345', action: 'https://maps.google.com' },
  ];

  const socialMedia = [
    { icon: FaFacebook, url: 'https://facebook.com/redbus' },
    { icon: FaTwitter, url: 'https://twitter.com/redbus' },
    { icon: FaInstagram, url: 'https://instagram.com/redbus' },
    { icon: FaLinkedin, url: 'https://linkedin.com/company/redbus' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-900 mb-12">Contact Us</h1>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="p-8 bg-indigo-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-indigo-100">We're here to help and answer any question you might have. We look forward to hearing from you!</p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {contactMethods.map((method, index) => (
              <a key={index} href={method.action} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-indigo-50 transition-colors">
                <method.icon className="text-4xl text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{method.title}</h3>
                <p className="text-gray-600">{method.info}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-indigo-900">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" name="subject" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={handleChange}></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-indigo-900">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            {socialMedia.map((platform, index) => (
              <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transition-colors">
                <platform.icon className="text-3xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;