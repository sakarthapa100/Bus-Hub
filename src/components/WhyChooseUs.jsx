import React from 'react';
import { FaCheckCircle, FaMobile, FaHeadset, FaCreditCard } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-green-500" />,
      title: "Verified Buses",
      description: "All buses on our platform are verified for quality and safety to ensure a comfortable journey."
    },
    {
      icon: <FaMobile className="text-blue-500" />,
      title: "Easy Booking",
      description: "Book your tickets in minutes with our simple and intuitive mobile-friendly interface."
    },
    {
      icon: <FaHeadset className="text-purple-500" />,
      title: "24x7 Support",
      description: "Our customer support team is available round the clock to assist you with any queries."
    },
    {
      icon: <FaCreditCard className="text-yellow-500" />,
      title: "Secure Payment",
      description: "Multiple payment options with advanced security measures to protect your transactions."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience the best bus booking service with features designed to make your journey hassle-free.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;